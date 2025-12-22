const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, 'out');

// Calculate relative path from current file to target path
function getRelativePath(fromFile, toPath) {
  // Remove leading slash and normalize the target path
  const normalizedTo = toPath.replace(/^\//, '').replace(/\/$/, '');
  
  // Get the directory of the current file (relative to OUT_DIR)
  const fromDir = path.dirname(path.relative(OUT_DIR, fromFile));
  
  // Build full paths for both source and target
  const fromDirFull = fromDir === '.' ? OUT_DIR : path.join(OUT_DIR, fromDir);
  const toFileFull = path.join(OUT_DIR, normalizedTo);
  
  // Use path.relative to calculate the relative path
  let relativePath = path.relative(fromDirFull, toFileFull);
  
  // Normalize path separators for web (use forward slashes)
  relativePath = relativePath.replace(/\\/g, '/');
  
  // Ensure relative paths start with ./ for same-directory files
  if (!relativePath.startsWith('../') && !relativePath.startsWith('./') && relativePath !== '.') {
    relativePath = './' + relativePath;
  }
  
  // Handle root case - if both files are in same directory
  if (relativePath === '.') {
    // If target is index.html, return './index.html', otherwise './'
    if (normalizedTo === 'index.html') {
      return './index.html';
    }
    return './';
  }
  
  // Ensure relative paths have proper prefix
  if (relativePath && !relativePath.startsWith('../') && !relativePath.startsWith('./')) {
    relativePath = './' + relativePath;
  }
  
  return relativePath;
}

// Check if a path is an asset file (image, font, etc.) that shouldn't get .html added
function isAssetFile(path) {
  const assetExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp', '.avif', 
                          '.woff', '.woff2', '.ttf', '.eot', '.otf', '.mp4', '.mp3', '.wav',
                          '.pdf', '.zip', '.json', '.xml', '.txt'];
  return assetExtensions.some(ext => path.toLowerCase().endsWith(ext));
}

// Convert Next.js route to static file path
function routeToFilePath(route) {
  // Remove leading/trailing slashes
  const cleanRoute = route.replace(/^\/+|\/+$/g, '');
  
  // Root route
  if (!cleanRoute) {
    return 'index.html';
  }
  
  // If it's an asset file, return as-is (don't add .html)
  if (isAssetFile(cleanRoute)) {
    return cleanRoute;
  }
  
  // Check if route already ends with .html or other known extensions
  if (cleanRoute.match(/\.(html|js|css|json)$/)) {
    return cleanRoute;
  }
  
  // Convert route to file path
  // /category/event-planner -> category/event-planner.html
  // /about -> about.html
  return `${cleanRoute}.html`;
}

function fixPathsInFile(filePath) {
  // Only process HTML files - don't modify .js or .css files
  if (!filePath.endsWith('.html')) {
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Split content into parts: outside script tags and inside script tags
  // We'll only modify paths outside script tags to avoid breaking JavaScript
  const parts = [];
  let lastIndex = 0;
  const scriptTagRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  
  // Find all script tags and preserve their content
  // But we need to fix src attributes IN script tags (for JavaScript files)
  const scriptRanges = [];
  while ((match = scriptTagRegex.exec(content)) !== null) {
    scriptRanges.push({
      start: match.index,
      end: match.index + match[0].length,
      content: match[0]
    });
  }
  
  // Process content
  function isInScriptTagContent(pos) {
    // Check if position is inside script tag CONTENT (between > and </script>)
    // But NOT in the tag attributes (between <script and >)
    return scriptRanges.some(range => {
      const tagStart = range.start;
      const tagEnd = range.start + range.content.indexOf('>') + 1;
      // Only skip if in the content area, not in attributes
      return pos >= tagEnd && pos < range.end;
    });
  }
  
  // Fix href and src attributes (for links and images) - including in script tags for JS files
  // Also handle href attributes that might already be relative but missing .html
  content = content.replace(/(href|src)=["']([^"']+)["']/g, (match, attr, route, offset) => {
    // Skip if inside script tag CONTENT (JavaScript code), but allow script tag ATTRIBUTES
    if (isInScriptTagContent(offset)) {
      return match;
    }
    
    // Skip external URLs
    if (route.startsWith('http') || route.startsWith('//') || route.startsWith('mailto:') || route.startsWith('tel:')) {
      return match;
    }
    
    // Skip anchor links
    if (route.startsWith('#')) {
      return match;
    }
    
    // Handle ALL _next paths - these are critical for CSS and JS files
    // Must be fixed for nested directories to work correctly
    if (route.includes('_next/')) {
      // If path is already relative (starts with ../), check if it's correct
      if (route.startsWith('../')) {
        // Extract the _next path part
        const nextPathMatch = route.match(/_next\/.*$/);
        if (nextPathMatch) {
          const nextPath = nextPathMatch[0];
          // Calculate correct relative path
          const correctRelativePath = getRelativePath(filePath, nextPath);
          // Only update if the path is different (to avoid unnecessary modifications)
          if (correctRelativePath !== route) {
            modified = true;
            return `${attr}="${correctRelativePath}"`;
          }
          return match;
        }
      }
      // Handle absolute paths or paths without leading ../
      modified = true;
      // Remove leading / or ./
      const cleanRoute = route.replace(/^\/+/, '').replace(/^\.\//, '');
      const relativePath = getRelativePath(filePath, cleanRoute);
      return `${attr}="${relativePath}"`;
    }
    
    // Handle other absolute paths starting with / (like /favicon.svg, etc.)
    if (route.startsWith('/')) {
      modified = true;
      // For asset files, don't add .html
      const targetFile = isAssetFile(route) ? route.substring(1) : routeToFilePath(route);
      const relativePath = getRelativePath(filePath, targetFile);
      // The relativePath should already have the correct format from getRelativePath
      // But ensure it has .html extension if targetFile has it and relativePath doesn't
      let finalPath = relativePath;
      if (targetFile.endsWith('.html') && !relativePath.endsWith('.html') && !isAssetFile(relativePath)) {
        // Only add .html if the relative path doesn't already have an extension
        finalPath = relativePath + '.html';
      }
      // Ensure the path has proper prefix (./ or ../)
      if (finalPath && !finalPath.startsWith('../') && !finalPath.startsWith('./') && finalPath !== '.') {
        finalPath = './' + finalPath;
      }
      return `${attr}="${finalPath}"`;
    }
    
    // Skip if already relative and is an asset file (CSS, JS, images, etc.)
    // But NOT _next paths (handled above)
    if ((route.startsWith('./') || route.startsWith('../')) && isAssetFile(route) && !route.includes('_next/')) {
      // Already relative asset - keep as is
      return match;
    }
    
    // If it's a relative path but missing .html extension (and not an asset), add it
    if ((route.startsWith('./') || route.startsWith('../')) && 
        !isAssetFile(route) && 
        !route.endsWith('.html') && 
        !route.endsWith('/') &&
        route !== '' &&
        route !== '.') {
      // Check if this looks like a route that needs .html
      const routeWithoutPrefix = route.replace(/^\.\.?\//, '');
      if (routeWithoutPrefix && !routeWithoutPrefix.includes('.') && routeWithoutPrefix !== 'index') {
        modified = true;
        const newRoute = route.endsWith('/') ? route.slice(0, -1) + '.html' : route + '.html';
        return `${attr}="${newRoute}"`;
      }
    }
    
    return match;
  });
  
  // Fix CSS url() paths in style attributes and <style> tags (but not in script tags)
  content = content.replace(/url\(["']?([^"')]+)["']?\)/g, (match, urlPath, offset) => {
    // Skip if inside a script tag content
    if (isInScriptTagContent(offset)) {
      return match;
    }
    
    // Skip external URLs and data URIs
    if (urlPath.startsWith('http') || urlPath.startsWith('//') || urlPath.startsWith('data:')) {
      return match;
    }
    
    // Handle absolute paths starting with /
    if (urlPath.startsWith('/')) {
      // Handle _next paths
      if (urlPath.startsWith('/_next/')) {
        modified = true;
        const relativePath = getRelativePath(filePath, urlPath.substring(1));
        return `url("${relativePath}")`;
      }
      
      // Handle other absolute paths
      modified = true;
      const targetFile = isAssetFile(urlPath) ? urlPath.substring(1) : routeToFilePath(urlPath);
      const relativePath = getRelativePath(filePath, targetFile);
      return `url("${relativePath}")`;
    }
    
    // Already relative paths - keep as is (they're already correct)
    return match;
  });
  
  // Fix data attributes that might contain paths (e.g., data-href="/path")
  content = content.replace(/(data-[^=]*=["'])\/([^"']+)(["'])/g, (match, prefix, route, suffix, offset) => {
    // Skip if inside a script tag content
    if (isInScriptTagContent(offset)) {
      return match;
    }
    
    if (route.startsWith('http') || route.startsWith('//') || route.startsWith('#') || route.startsWith('_next/')) {
      return match;
    }
    modified = true;
    const targetFile = routeToFilePath(route);
    const relativePath = getRelativePath(filePath, targetFile);
    return `${prefix}${relativePath}${suffix}`;
  });
  
  // Remove Next.js router event handlers from links to ensure they work without JavaScript
  // Remove onclick handlers that might prevent default navigation
  content = content.replace(/<a([^>]*)\s+onclick="[^"]*"[^>]*>/gi, (match, attrs) => {
    modified = true;
    // Remove onclick but keep other attributes
    return `<a${attrs}>`;
  });
  
  // Remove data-nextjs-router attributes that might interfere
  content = content.replace(/\s+data-nextjs-router="[^"]*"/gi, '');
  
  // Ensure all internal links have proper href and remove any JavaScript navigation
  // This regex finds <a> tags and ensures they have proper href attributes
  content = content.replace(/<a\s+([^>]*)>/gi, (match, attrs, offset) => {
    // Skip if inside a script tag content
    if (isInScriptTagContent(offset)) {
      return match;
    }
    
    // Check if href exists
    if (!attrs.match(/href\s*=/i)) {
      // If no href, try to get it from data-href or other attributes
      const dataHrefMatch = attrs.match(/data-href\s*=\s*["']([^"']+)["']/i);
      if (dataHrefMatch) {
        modified = true;
        const hrefValue = dataHrefMatch[1];
        // Convert data-href to href
        attrs = attrs.replace(/data-href\s*=\s*["'][^"']+["']/i, '');
        attrs = `href="${hrefValue}" ${attrs}`;
      }
    }
    
    // Remove any router-related attributes that might prevent normal navigation
    attrs = attrs.replace(/\s+data-nextjs-[^=]*="[^"]*"/gi, '');
    
    return `<a ${attrs}>`;
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function disableNextRouterInJS(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Disable Next.js router link interception
  // Replace router.push calls with window.location
  content = content.replace(/router\.push\(([^)]+)\)/g, (match, route) => {
    modified = true;
    return `window.location.href = ${route}`;
  });
  
  // Disable preventDefault on link clicks
  content = content.replace(/\.preventDefault\(\)/g, '');
  
  // Remove Next.js router event listeners
  content = content.replace(/addEventListener\(['"]click['"][^)]*\)/g, (match) => {
    // Check if it's a link click handler
    if (match.includes('a[href') || match.includes('router') || match.includes('push')) {
      modified = true;
      return '// Disabled: ' + match;
    }
    return match;
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      // Only process HTML files - don't modify .js or .css files
      if (fixPathsInFile(filePath)) {
        console.log(`Fixed paths in: ${filePath}`);
      }
    } else if (file.endsWith('.js') && filePath.includes('_next')) {
      // Also process Next.js JavaScript files to disable router
      if (disableNextRouterInJS(filePath)) {
        console.log(`Disabled router in: ${filePath}`);
      }
    }
  });
}

console.log('Fixing absolute paths to relative paths...');
let totalFiles = 0;
let modifiedFiles = 0;

function countAndProcessDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      countAndProcessDirectory(filePath);
    } else if (file.endsWith('.html')) {
      totalFiles++;
      if (fixPathsInFile(filePath)) {
        modifiedFiles++;
      }
    }
  });
}

countAndProcessDirectory(OUT_DIR);
console.log(`✅ Path fixing complete! Processed ${totalFiles} files, modified ${modifiedFiles} files.`);
