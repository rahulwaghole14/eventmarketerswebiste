const fs = require('fs');
const path = require('path');

const htmlFile = path.join(__dirname, 'out', 'index.html');

if (!fs.existsSync(htmlFile)) {
  console.log('index.html not found');
  process.exit(1);
}

const content = fs.readFileSync(htmlFile, 'utf8');

// Find all href attributes
const hrefRegex = /href="([^"]+)"/g;
const matches = [];
let match;

while ((match = hrefRegex.exec(content)) !== null) {
  const href = match[1];
  if (href.includes('category') || href.includes('about') || href.includes('pricing')) {
    matches.push({
      href: href,
      position: match.index,
      context: content.substring(Math.max(0, match.index - 50), Math.min(content.length, match.index + 200))
    });
  }
}
console.log(`Found ${matches.length} relevant links:\n`);
matches.slice(0, 10).forEach((m, i) => {
  console.log(`${i + 1}. href="${m.href}"`);
  console.log(`   Context: ${m.context.replace(/\n/g, ' ').substring(0, 150)}...\n`);
});

