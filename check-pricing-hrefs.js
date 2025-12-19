const fs = require('fs');
const pages = [
  'out/templates/greetings.html',
  'out/templates/greetings/business-mindset/success-mindset.html'
];

pages.forEach(f => {
  if (!fs.existsSync(f)) return;
  const html = fs.readFileSync(f, 'utf8');
  const hrefs = (html.match(/href=["']([^"']+)["']/gi) || []).filter(h => h.includes('pricing'));
  console.log(`\n${f} pricing hrefs:`);
  hrefs.slice(0, 5).forEach(h => {
    const m = h.match(/href=["']([^"']+)["']/i);
    if (m) console.log('  ' + m[1]);
  });
});

