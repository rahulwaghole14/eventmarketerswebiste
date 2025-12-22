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
  
  // Immediately prevent Next.js from intercepting link clicks
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href]');
    if (target && target.href) {
      const href = target.getAttribute('href');
      // Only intercept internal links (not external URLs, mailto, tel, etc.)
      if (href && !href.match(/^(https?:|mailto:|tel:|#)/)) {
        // Prevent Next.js from handling this
        e.stopImmediatePropagation();
        // Use full page navigation
        window.location.href = href;
        e.preventDefault();
        return false;
      }
    }
  }, true); // Use capture phase to run before Next.js handlers
  
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
    
    // Disable Next.js router (fall back to full page loads)
    if (window.next) {
      window.next.router = {
        push: function (url) { window.location.href = url; },
        replace: function (url) { window.location.href = url; },
        back: function () { window.history.back(); },
        reload: function () { window.location.reload(); }
      };
    }
    
    // Also disable Next.js Link component navigation
    if (window.__next && window.__next.router) {
      const originalPush = window.__next.router.push;
      const originalReplace = window.__next.router.replace;
      window.__next.router.push = function(url) { window.location.href = url; };
      window.__next.router.replace = function(url) { window.location.href = url; };
    }
  }
  
  // Run immediately and also after load
  init();
  if (document.readyState === 'complete') {
    setTimeout(init, 100);
  } else {
    window.addEventListener('load', function() {
      setTimeout(init, 100);
    });
  }
})();
</script>`;
  
  // Inject in <head> for early execution, and also at the END of <body> as fallback
  if (content.includes('</head>')) {
    modified = true;
    // Inject early script in head to intercept clicks before React loads
    const earlyScript = `<script>
(function() {
  'use strict';
  // Immediately prevent Next.js from intercepting link clicks
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a[href]');
    if (target && target.href) {
      const href = target.getAttribute('href');
      // Only intercept internal links (not external URLs, mailto, tel, etc.)
      if (href && !href.match(/^(https?:|mailto:|tel:|#)/) && !href.startsWith('//')) {
        // Prevent Next.js from handling this
        e.stopImmediatePropagation();
        // Use full page navigation
        window.location.href = href;
        e.preventDefault();
        return false;
      }
    }
  }, true); // Use capture phase to run before Next.js handlers
})();
</script>`;
    content = content.replace('</head>', earlyScript + '\n</head>');
  }
  
  // Also inject at the END of <body> to run AFTER React loads
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
