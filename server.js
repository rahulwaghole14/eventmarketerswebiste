const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'test.html' : req.url);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, 'test.html');
  }
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.svg': 'image/svg+xml'
  };
  
  const contentType = mimeTypes[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end('404 - Page Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, HOST, () => {
  console.log('🚀 MarketBrand.ai Server is running!');
  console.log('📍 Local: http://localhost:' + PORT);
  console.log('🌐 Network: http://192.168.0.100:' + PORT);
  console.log('✨ Your website is ready!');
});


