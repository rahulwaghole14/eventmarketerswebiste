const fs = require('fs');
const pages = [
  'out/category/event-planner.html',
  'out/category/mandap.html',
  'out/templates/greetings.html',
  'out/templates/greetings/business-mindset/success-mindset.html'
];

for (const file of pages) {
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, 'utf8');
  const bad = [];
  const links = html.match(/href=["']([^"']+)["']/gi) || [];
  links.forEach(h => {
    const m = h.match(/href=["']([^"']+)["']/i);
    if (!m) return;
    const href = m[1];
    if (
      href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') ||
      href.startsWith('#') || href.includes('_next/') || href.match(/\.(html|png|jpg|jpeg|gif|svg|ico|css|js|json|pdf|zip|txt)$/i)
    ) return;
    bad.push(href);
  });
  console.log(`\n${file} => ${bad.length} links without .html/asset:`);
  bad.slice(0,10).forEach(h=>console.log('  '+h));
}

