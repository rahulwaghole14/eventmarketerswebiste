const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, 'out');

// Calculate relative path from current file to target path
function getRelativePath(fromFile, toPath) {
  const normalizedTo = toPath.replace(/^\//, '').replace(/\/$/, '');
  const fromDir = path.dirname(path.relative(OUT_DIR, fromFile));
  const fromDirFull = fromDir === '.' ? OUT_DIR : path.join(OUT_DIR, fromDir);
  const toFileFull = path.join(OUT_DIR, normalizedTo);
  
  let relativePath = path.relative(fromDirFull, toFileFull);
  relativePath = relativePath.replace(/\\/g, '/');
  
  if (!relativePath.startsWith('../') && !relativePath.startsWith('./') && relativePath !== '.') {
    relativePath = './' + relativePath;
  }
  
  if (relativePath === '.') {
    return normalizedTo === 'index.html' ? './index.html' : './';
  }
  
  return relativePath;
}

function routeToFilePath(route) {
  const cleanRoute = route.replace(/^\/+|\/+$/g, '');
  if (!cleanRoute) return 'index.html';
  
  const assetExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp', '.webmanifest', '.xml', '.css', '.js', '.json'];
  if (assetExtensions.some(ext => cleanRoute.toLowerCase().endsWith(ext))) {
    return cleanRoute;
  }
  
  if (cleanRoute.match(/\.(html|js|css|json|webmanifest|xml)$/)) {
    return cleanRoute;
  }
  
  // Next.js with trailingSlash: true creates directories with index.html
  // So /features becomes features/index.html, not features.html
  return `${cleanRoute}/index.html`;
}

function fixFile(filePath) {
  if (!filePath.endsWith('.html')) return false;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Repair previously-injected malformed regex snippets (older runs left these bad patterns)
  // Use safe string replaces (avoid literal regex literals in the script)
  if (content.indexOf("currentPath = currentPath.replace(/\\/g, '/')") === -1 && content.indexOf("currentPath = currentPath.replace(/\/g, '/')") !== -1) {
    content = content.split("currentPath = currentPath.replace(/\/g, '/');").join("currentPath = currentPath.replace(/\\\\/g, '/');");
    modified = true;
  }

  // Replace broken .html/index cleanup variants
  if (content.indexOf("replace(/.html$/, '').replace(//index$/, '')") !== -1) {
    content = content.split("replace(/.html$/, '').replace(//index$/, '')").join("replace(/\\.html$/, '').replace(/\\/index$/, '')");
    modified = true;
  }
  // Also correct another common variant
  if (content.indexOf("replace(/.html$/, '').replace(/\"/index\", '')") !== -1) {
    content = content.split("replace(/.html$/, '').replace(/\"/index\", '')").join("replace(/\\.html$/, '').replace(/\\/index$/, '')");
    modified = true;
  }

  // Replace broken cleanPath pattern
  if (content.indexOf("path.replace(/^//, '').replace(//$/, '')") !== -1) {
    content = content.split("path.replace(/^//, '').replace(//$/, '')").join("path.replace(/^\\//, '').replace(/\\/$/, '')");
    modified = true;
  }

  // Fix all href and src attributes in HTML
  content = content.replace(/(href|src)=["']([^"']+)["']/g, (match, attr, route) => {
    // Skip external URLs, mailto, tel, anchors, data URIs
    if (route.startsWith('http') || route.startsWith('//') || 
        route.startsWith('mailto:') || route.startsWith('tel:') || 
        route.startsWith('#') || route.startsWith('data:')) {
      return match;
    }

    // Normalize references to site.webmanifest if present (avoid site.webmanifest/index.html)
    if (route.match(/(^|\/)site\.webmanifest(\/index\.html)?$/)) {
      modified = true;
      const relativePath = getRelativePath(filePath, 'site.webmanifest');
      return `${attr}="${relativePath}"`;
    }

    // If already relative but pointing to _next assets, rewrite to correct depth
    if ((route.startsWith('./') || route.startsWith('../')) && (route.includes('/_next/') || route.startsWith('./_next') || route.startsWith('../_next'))) {
      modified = true;
      const targetFile = route.replace(/^\.\/?|^\.\.+\//, '').replace(/^\//, '');
      const relativePath = getRelativePath(filePath, targetFile);
      return `${attr}="${relativePath}"`;
    }

    // Skip other already-relative paths
    if (route.startsWith('./') || route.startsWith('../')) {
      return match;
    }

    // Convert absolute paths to relative (handles /_next/, /site.webmanifest, and regular routes)
    if (route.startsWith('/')) {
      modified = true;
      const targetFile = routeToFilePath(route);
      const relativePath = getRelativePath(filePath, targetFile);
      return `${attr}="${relativePath}"`;
    }

    // Handle rootless _next references like "_next/static/..." or "./_next/..." or "./_next"
    if (route.startsWith('_next') || route.startsWith('./_next') || route.startsWith('../_next') || route.includes('/_next/')) {
      modified = true;
      const targetFile = route.replace(/^\.\/?|^\.\.+\//, '').replace(/^\//, '');
      const relativePath = getRelativePath(filePath, targetFile);
      return `${attr}="${relativePath}"`;
    }

    return match;
  });
  
  // Fix routes in JavaScript payloads (self.__next_f.push format)
  // Pattern: \"href\":\"/path\" (escaped quotes in JS strings)
  // This handles the serialized React components in Next.js 15
  content = content.replace(/\\"href\\":\\"(\/[^"\\]+)\\"?/g, (match, route) => {    // Normalize site.webmanifest inside JS payloads
    if (route.match(/(^|\/)site\.webmanifest(\/index\.html)?$/)) {
      modified = true;
      const relativePath = getRelativePath(filePath, 'site.webmanifest');
      return `\\"href\\\":\\\"${relativePath}\\\"`;
    }
    if (route.startsWith('http') || route.startsWith('//') || 
        route.startsWith('mailto:') || route.startsWith('tel:') || 
        route.startsWith('#') || route.startsWith('./') || route.startsWith('../')) {
      return match;
    }
    if (route.startsWith('/')) {
      modified = true;
      const targetFile = routeToFilePath(route);
      const relativePath = getRelativePath(filePath, targetFile);
      return `\\"href\\":\\"${relativePath}\\"`;
    }
    return match;
  });
  
  // Also handle unescaped patterns in regular script content
  content = content.replace(/"href":\s*"(\/[^"]+)"/g, (match, route) => {    // Normalize site.webmanifest in script content
    if (route.match(/(^|\/)site\.webmanifest(\/index\.html)?$/)) {
      modified = true;
      const relativePath = getRelativePath(filePath, 'site.webmanifest');
      return `"href":"${relativePath}"`;
    }
    // Skip if already processed or external
    if (route.startsWith('http') || route.startsWith('//') || 
        route.startsWith('mailto:') || route.startsWith('tel:') || 
        route.startsWith('#') || route.startsWith('./') || route.startsWith('../')) {
      return match;
    }
    if (route.startsWith('/')) {
      modified = true;
      const targetFile = routeToFilePath(route);
      const relativePath = getRelativePath(filePath, targetFile);
      return `"href":"${relativePath}"`;
    }
    return match;
  });
  
  // Inject router disabling script - ultra aggressive version
  // This MUST run synchronously before any Next.js scripts
  const routerScript = `<script>
(function() {
  'use strict';
  
  // Helper to convert absolute paths to relative - MUST be defined first
  function toRelativePath(path) {
    if (!path || path.startsWith('http') || path.startsWith('//') || 
        path.startsWith('mailto:') || path.startsWith('tel:') || 
        path.startsWith('#') || path.startsWith('./') || path.startsWith('../')) {
      return path;
    }
    if (path.startsWith('/')) {
      // Get current file path from window.location
      let currentPath = window.location.pathname;
      
      // Handle file:// protocol - extract just the file path relative to 'out' directory
      // For file:///D:/path/to/out/index.html, we want 'index.html'
      // For file:///D:/path/to/out/features/index.html, we want 'features/index.html'
      
      // Normalize path separators
      currentPath = currentPath.replace(/\\/g, '/');
      
      // Find the 'out' directory in the path
      const outIndex = currentPath.toLowerCase().indexOf('/out/');
      if (outIndex !== -1) {
        // Extract everything after '/out/'
        currentPath = currentPath.substring(outIndex + 5);
      } else {
        // If 'out' not found, try to extract from the end
        // Assume we're in the out directory
        const parts = currentPath.split('/').filter(p => p);
        const outPos = parts.findIndex(p => p.toLowerCase() === 'out');
        if (outPos !== -1 && outPos < parts.length - 1) {
          currentPath = parts.slice(outPos + 1).join('/');
        } else {
          // Fallback: use the last part as filename
          const parts2 = currentPath.split('/').filter(p => p);
          currentPath = parts2[parts2.length - 1] || 'index.html';
        }
      }
      
      // Remove .html extension and 'index' if present to get directory path
      let currentDir = currentPath.replace(/\.html$/, '').replace(/\/index$/, '').replace(/^index$/, '');
      
      // Calculate depth: how many directories deep are we?
      // '' (root/index.html) -> depth 0
      // 'features' (features/index.html) -> depth 0 (same level)
      // 'templates/greetings' (templates/greetings/index.html) -> depth 1
      const pathParts = currentDir ? currentDir.split('/').filter(p => p) : [];
      const pathDepth = pathParts.length;
      
      // Clean target path
      const cleanPath = path.replace(/^\//, '').replace(/\/$/, '');
      
      // Next.js with trailingSlash creates directories with index.html
      // So /features becomes features/index.html
      const targetPath = cleanPath ? cleanPath + '/index.html' : 'index.html';
      
      // If we're at root (index.html), use ./
      if (pathDepth === 0) {
        return './' + targetPath;
      }
      
      // Otherwise, go up pathDepth levels
      return '../'.repeat(pathDepth) + targetPath;
    }
    return path;
  }
  
  // CRITICAL: Prevent Next.js router from initializing at all
  // Create router stubs immediately before Next.js can create them
  if (!window.next) window.next = {};
  if (!window.__next) window.__next = {};
  
  // Create router objects with overridden methods
  window.next.router = {
    push: function(url) { window.location.href = toRelativePath(url); },
    replace: function(url) { window.location.href = toRelativePath(url); },
    back: function() { window.history.back(); },
    reload: function() { window.location.reload(); }
  };
  
  window.__next.router = {
    push: function(url) { window.location.href = toRelativePath(url); },
    replace: function(url) { window.location.href = toRelativePath(url); }
  };
  
  // Prevent Next.js from overwriting these
  try {
    Object.defineProperty(window.next, 'router', {
      value: window.next.router,
      writable: false,
      configurable: false
    });
    Object.defineProperty(window.__next, 'router', {
      value: window.__next.router,
      writable: false,
      configurable: false
    });
  } catch (e) {
    // If defineProperty fails, at least the router is set
  }
  
  // Fix href attributes on all links immediately
  function fixAllLinks() {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('/') && !href.startsWith('//')) {
        const relativeHref = toRelativePath(href);
        if (relativeHref !== href) {
          link.setAttribute('href', relativeHref);
        }
      }
    });
  }
  
  // CRITICAL: Remove Next.js data attributes that it uses to identify links
  function removeNextJsLinkAttributes() {
    const links = document.querySelectorAll('a[data-nextjs-link]');
    links.forEach(link => {
      link.removeAttribute('data-nextjs-link');
    });
  }
  
  // Immediately intercept all link clicks - ULTRA AGGRESSIVE
  // This must run BEFORE Next.js can attach any handlers
  function handleClick(e) {
    // Find the anchor tag
    let target = e.target;
    while (target && target.nodeName !== 'A') {
      target = target.parentElement;
    }
    
    if (target && target.tagName === 'A') {
      const hrefAttr = target.getAttribute('href');
      if (!hrefAttr) return;
      
      // Skip external URLs, mailto, tel, anchors
      if (hrefAttr.match(/^(https?:|mailto:|tel:|#)/) || hrefAttr.startsWith('//')) {
        return; // Let these work normally
      }
      
      // For ALL internal links (both absolute and relative), ensure full page navigation
      // This prevents Next.js from intercepting
      e.stopImmediatePropagation();
      e.stopPropagation();
      e.preventDefault();
      
      let finalHref = hrefAttr;
      
      // If it's an absolute path, convert to relative
      if (hrefAttr.startsWith('/') && !hrefAttr.startsWith('//')) {
        finalHref = toRelativePath(hrefAttr);
      }
      
      // Use window.location for full page navigation
      window.location.href = finalHref;
      return false;
    }
  }
  
  // Add event listeners at the EARLIEST possible phase
  // Use capture phase with highest priority to run before everything else
  if (document.addEventListener) {
    document.addEventListener('click', handleClick, true); // Capture phase - runs first
  }
  
  // Also add to window for maximum coverage
  if (window.addEventListener) {
    window.addEventListener('click', handleClick, true);
  }
  
  // Remove Next.js link attributes immediately
  removeNextJsLinkAttributes();
  
  // Override Next.js router methods immediately - these are already set above
  function disableRouter() {
    // Ensure router methods are always overridden
    window.next.router.push = function(url) { 
      window.location.href = toRelativePath(url); 
    };
    window.next.router.replace = function(url) { 
      window.location.href = toRelativePath(url); 
    };
    window.next.router.back = function() { window.history.back(); };
    window.next.router.reload = function() { window.location.reload(); };
    
    window.__next.router.push = function(url) { 
      window.location.href = toRelativePath(url); 
    };
    window.__next.router.replace = function(url) { 
      window.location.href = toRelativePath(url); 
    };
    
    // Override fetch to prevent Next.js from fetching route data
    if (typeof window.fetch !== 'undefined') {
      const originalFetch = window.fetch;
      window.fetch = function(url, options) {
        if (typeof url === 'string' && (url.includes('/_next/data') || url.includes('.json'))) {
          return Promise.reject(new Error('Route data fetch blocked for static export'));
        }
        return originalFetch.apply(this, arguments);
      };
    }
    
    // Fix all links on the page
    fixAllLinks();
  }
  
  // Run immediately
  disableRouter();
  fixAllLinks();
  
  // Also run after page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      disableRouter();
      fixAllLinks();
    });
  } else {
    disableRouter();
    fixAllLinks();
  }
  
  window.addEventListener('load', function() {
    setTimeout(function() {
      disableRouter();
      fixAllLinks();
    }, 100);
  });
  
  // Also fix links when DOM changes (for dynamically added content)
  const observer = new MutationObserver(function() {
    fixAllLinks();
    removeNextJsLinkAttributes();
  });
  
  // Start observing as soon as body exists
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  } else {
    // Wait for body to be created
    const bodyObserver = new MutationObserver(function(mutations, obs) {
      if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
        obs.disconnect();
      }
    });
    bodyObserver.observe(document.documentElement, { childList: true });
  }
})();
</script>`;
  
  // Inject in head as early as possible (before any Next.js scripts)
  // Try to inject right after <head> tag, or before </head>
  if (content.includes('</head>')) {
    // Check if already injected
    if (!content.includes('toRelativePath')) {
      modified = true;
      // Try to inject right after <head> for earliest execution
      if (content.includes('<head>')) {
        content = content.replace('<head>', '<head>' + routerScript);
      } else {
        content = content.replace('</head>', routerScript + '\n</head>');
      }
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function fixJsFile(filePath) {
  if (!filePath.endsWith('.js')) return false;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix routes in JavaScript files (common patterns)
  // Pattern: "/path" in strings
  content = content.replace(/"\/[^"]+"/g, (match) => {
    const route = match.slice(1, -1); // Remove quotes
    // Skip if it's an external URL, asset path, or already relative
    if (route.startsWith('http') || route.startsWith('//') || 
        route.includes('_next/') || route.includes('.') && 
        (route.endsWith('.js') || route.endsWith('.css') || route.endsWith('.json') ||
         route.endsWith('.png') || route.endsWith('.jpg') || route.endsWith('.svg'))) {
      return match;
    }
    // Only fix if it looks like a route (no file extension)
    if (route.startsWith('/') && !route.includes('.')) {
      modified = true;
      // For JS files, we need to calculate relative path from the JS file location
      // But since JS files are in _next/static, we'll use a simpler approach
      // Convert /path to ./path.html or ../path.html based on depth
      const depth = filePath.split(path.sep).filter(p => p && p !== 'out').length - 1;
      const upLevels = depth > 0 ? '../'.repeat(depth) : './';
      const targetFile = routeToFilePath(route);
      return `"${upLevels}${targetFile}"`;
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
      if (fixFile(filePath)) {
        console.log(`Fixed HTML: ${path.relative(OUT_DIR, filePath)}`);
      }
    } else if (file.endsWith('.js') && !filePath.includes('node_modules')) {
      // Only fix JS files in _next directory, and be careful not to break things
      if (filePath.includes('_next')) {
        // Skip for now - JS files are complex and might break functionality
        // The HTML fixes should be sufficient
      }
    }
  });
}

console.log('Fixing static export navigation...');
processDirectory(OUT_DIR);
console.log('✅ Done!');

