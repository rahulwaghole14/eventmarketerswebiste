const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, 'out');

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
    return './';
  }
  return relativePath;
}

// Test paths
const testFiles = [
  'out/index.html',
  'out/category/event-planner.html',
  'out/templates/greetings.html'
];

const cssPath = '/_next/static/css/app.css';

console.log('Testing CSS path conversion:\n');
testFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const relative = getRelativePath(file, cssPath.substring(1));
    console.log(`${file}:`);
    console.log(`  Original: ${cssPath}`);
    console.log(`  Converted: ${relative}`);
    console.log('');
  } else {
    console.log(`${file}: NOT FOUND\n`);
  }
});

// Check actual files
console.log('\nChecking actual HTML files:\n');
testFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const cssLinks = content.match(/<link[^>]+href=['"]([^'"]*\.css[^'"]*)['"][^>]*>/gi) || [];
    console.log(`${file}:`);
    cssLinks.forEach(link => {
      const hrefMatch = link.match(/href=['"]([^'"]+)['"]/i);
      if (hrefMatch) {
        console.log(`  ${hrefMatch[1]}`);
      }
    });
    console.log('');
  }
});
