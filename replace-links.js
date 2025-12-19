const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, 'out');

// Convert Next.js route to static file path
function routeToFilePath(route, currentFile) {
  // External URLs, mailto, tel, anchors - keep as is
  if (route.startsWith('http') || route.startsWith('//') || 
      route.startsWith('mailto:') || route.startsWith('tel:') || 
      route.startsWith('#')) {
    return route;
  }
  
  // Remove leading slash
  const cleanRoute = route.replace(/^\/+/, '');
  
  // Root path
  if (!cleanRoute || cleanRoute === 'index') {
    return './index.html';
  }
  
  // If already has .html, return as is
  if (cleanRoute.endsWith('.html')) {
    return `./${cleanRoute}`;
  }
  
  // Calculate relative path from current file
  const currentDir = path.dirname(path.relative(OUT_DIR, currentFile));
  const currentDepth = currentDir === '.' ? 0 : currentDir.split(path.sep).filter(p => p).length;
  
  // Build relative path
  const upLevels = currentDepth > 0 ? '../'.repeat(currentDepth) : './';
  return `${upLevels}${cleanRoute}.html`;
}

function replaceLinksInFile(filePath) {
  if (!filePath.endsWith('.html')) {
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Replace Next.js Link components with regular anchor tags
  // Pattern: <a href="/path"> -> <a href="./path.html">
  content = content.replace(/<a\s+([^>]*href=["'])([^"']+)(["'][^>]*)>/gi, (match, before, href, after) => {
    // Skip external URLs, mailto, tel, anchors
    if (href.startsWith('http') || href.startsWith('//') || 
        href.startsWith('mailto:') || href.startsWith('tel:') || 
        href.startsWith('#') || href.startsWith('./') || href.startsWith('../')) {
      return match;
    }
    
    // Convert to relative path
    const newHref = routeToFilePath(href, filePath);
    if (newHref !== href) {
      modified = true;
      return `<a ${before}${newHref}${after}>`;
    }
    return match;
  });
  
  // Also handle href attributes that might be in different positions
  content = content.replace(/href=["']([^"']+)["']/g, (match, href) => {
    // Skip external URLs, mailto, tel, anchors, already relative
    if (href.startsWith('http') || href.startsWith('//') || 
        href.startsWith('mailto:') || href.startsWith('tel:') || 
        href.startsWith('#') || href.startsWith('./') || href.startsWith('../')) {
      return match;
    }
    
    // Convert to relative path
    const newHref = routeToFilePath(href, filePath);
    if (newHref !== href) {
      modified = true;
      return `href="${newHref}"`;
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
      if (replaceLinksInFile(filePath)) {
        console.log(`Fixed links in: ${filePath}`);
      }
    }
  });
}

console.log('Replacing Next.js Links with regular anchor tags...');
processDirectory(OUT_DIR);
console.log('✅ Links replaced!');

