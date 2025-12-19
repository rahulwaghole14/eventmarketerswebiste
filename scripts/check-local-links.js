const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');

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
  return `${cleanRoute}/index.html`;
}

function resolveFrom(filePath, target) {
  // target may be absolute (/templates) or relative (./templates/index.html)
  if (target.startsWith('http') || target.startsWith('//') || target.startsWith('mailto:') || target.startsWith('tel:') || target.startsWith('#') || target.startsWith('data:')) {
    return null; // external or skip
  }
  if (target.startsWith('/')) {
    const targetFile = routeToFilePath(target);
    return path.join(OUT_DIR, targetFile.replace(/\//g, path.sep));
  }
  // relative to filePath
  return path.resolve(path.dirname(filePath), target.replace(/\//g, path.sep));
}

function scan() {
  const htmlFiles = [];
  const walk = dir => {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fp = path.join(dir, item);
      const stat = fs.statSync(fp);
      if (stat.isDirectory()) walk(fp);
      else if (fp.endsWith('.html')) htmlFiles.push(fp);
    });
  };
  walk(OUT_DIR);

  let problems = 0;
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const re = /(href|src)=(?:"|')([^"']+)(?:"|')/g;
    let m;
    while ((m = re.exec(content))) {
      const attr = m[1];
      const target = m[2];
      const resolved = resolveFrom(file, target);
      if (!resolved) continue;
      if (!fs.existsSync(resolved)) {
        problems++;
        console.log(`Missing: ${path.relative(OUT_DIR, file)} -> ${target} (resolved: ${path.relative(OUT_DIR, resolved)})`);
      }
    }
  });

  if (problems === 0) console.log('✅ No missing local references found.');
  else console.log(`⚠️ ${problems} missing local references found.`);
}

scan();
