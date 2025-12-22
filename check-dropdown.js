const fs = require('fs');
const path = require('path');

const files = {
  index: 'out/index.html',
  category: 'out/category/event-planner.html',
  template: 'out/templates/greetings.html'
};

Object.keys(files).forEach(key => {
  const filePath = files[key];
  if (fs.existsSync(filePath)) {
    console.log(`\n=== ${key.toUpperCase()} ===`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for React
    const hasNextData = content.includes('__NEXT_DATA__');
    console.log('Has __NEXT_DATA__:', hasNextData);
    
    // Check JavaScript files
    const scripts = content.match(/<script[^>]+src=['"]([^'"]+)['"][^>]*>/gi) || [];
    console.log('JavaScript files:', scripts.length);
    scripts.slice(0, 3).forEach(s => {
      const m = s.match(/src=['"]([^'"]+)['"]/i);
      if (m && m[1].includes('_next')) {
        console.log('  ', m[1]);
      }
    });
    
    // Check for Business Category link
    const hasBusinessCategory = content.includes('Business Category');
    console.log('Has Business Category:', hasBusinessCategory);
    
    // Check for router disable script
    const hasRouterScript = content.includes('disable-router') || content.includes('waitForReact');
    console.log('Has router disable script:', hasRouterScript);
  } else {
    console.log(`\n${key}: FILE NOT FOUND`);
  }
});
