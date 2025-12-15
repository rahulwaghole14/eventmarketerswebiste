const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, 'out');

function disableRouterInHTML(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Inject script at the END of <body> to run AFTER React loads
  // This ensures React can initialize and attach event handlers first
  const disableRouterScript = `<script>
(function() {
  'use strict';
  // Wait for page to fully load including React
  function init() {
    // Override fetch to prevent Next.js from fetching route data
    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
      // If Next.js is trying to fetch route data, block it
      if (typeof url === 'string' && (url.includes('/_next/data') || url.includes('.json'))) {
        console.warn('Blocked Next.js route data fetch:', url);
        return Promise.reject(new Error('Route data fetch blocked for file:// protocol'));
      }
      return originalFetch.apply(this, arguments);
    };
    
    // Disable Next.js router
    if (window.next) {
      window.next.router = {
        push: function(url) { window.location.href = url; },
        replace: function(url) { window.location.href = url; },
        back: function() { window.history.back(); },
        reload: function() { window.location.reload(); }
      };
    }
    
    // Wait much longer for React to fully hydrate and attach all event handlers
    // Use a longer delay to ensure React is completely ready
    setTimeout(function() {
      // Intercept link clicks - but ONLY for navigation, not for interactive elements
      // Mouse events (mouseenter/mouseleave) are completely separate and won't be affected
      document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href]');
        if (link) {
          const href = link.getAttribute('href');
          // Skip external links, anchors, and special protocols
          if (!href || href.match(/^(http|https|mailto|tel|#|javascript):/i)) {
            return;
          }
          
          // Check if link is inside the dropdown menu (fixed positioned div with z-50)
          // This is the mega dropdown menu that appears on hover
          const isInDropdownMenu = link.closest('div[style*="fixed"]') && 
                                  (link.closest('div[style*="z-50"]') || 
                                   link.closest('div[style*="z-index: 50"]') ||
                                   link.closest('[class*="z-50"]'));
          
          // Only skip links inside the dropdown menu (category links in the dropdown)
          // The dropdown trigger link itself should navigate normally to /categories page
          // Note: We don't skip target="_blank" links because file:// protocol doesn't support new tabs
          // So we intercept them and navigate normally
          if (!isInDropdownMenu) {
            // fix-relative-paths.js already converted all paths to correct relative paths
            // Use the href attribute directly - it's already correct for the current page depth
            // The browser will resolve relative paths correctly when setting window.location.href
            const targetUrl = href;
            
            // Prevent Next.js router and navigate
            e.stopPropagation();
            e.preventDefault();
            e.stopImmediatePropagation();
            
            // Navigate using the href attribute (already correctly converted by fix-relative-paths.js)
            // This ensures paths work correctly from any page depth
            window.location.href = targetUrl;
            return false;
          }
        }
      }, true); // Capture phase to intercept before Next.js router
    }, 1000); // Wait 1 second for React to fully hydrate
  }
  
  // Wait for everything to load
  if (document.readyState === 'complete') {
    setTimeout(init, 100);
  } else {
    window.addEventListener('load', function() {
      setTimeout(init, 100);
    });
  }
})();
</script>`;
  
  // Inject at the END of <body> to run AFTER React loads
  if (content.includes('</body>')) {
    modified = true;
    content = content.replace('</body>', disableRouterScript + '\n</body>');
  } else if (content.includes('</html>')) {
    modified = true;
    content = content.replace('</html>', disableRouterScript + '\n</html>');
  }
  
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
      if (disableRouterInHTML(filePath)) {
        console.log(`Disabled router in: ${filePath}`);
      }
    }
  });
}

console.log('Disabling Next.js router in all HTML files...');
processDirectory(OUT_DIR);
console.log('✅ Router disabled!');
