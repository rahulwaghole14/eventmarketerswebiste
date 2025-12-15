const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting build process...');
console.log('Current directory:', process.cwd());

try {
  // Clean previous builds
  const outDir = path.join(process.cwd(), 'out');
  const nextDir = path.join(process.cwd(), '.next');
  
  if (fs.existsSync(outDir)) {
    fs.rmSync(outDir, { recursive: true, force: true });
    console.log('Cleaned out directory');
  }
  
  if (fs.existsSync(nextDir)) {
    fs.rmSync(nextDir, { recursive: true, force: true });
    console.log('Cleaned .next directory');
  }
  
  // Run build
  console.log('Running npm run build...');
  const output = execSync('npm run build', { 
    encoding: 'utf8',
    stdio: 'pipe',
    cwd: process.cwd(),
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  console.log('\n=== BUILD OUTPUT ===');
  console.log(output);
  console.log('=== END BUILD OUTPUT ===\n');
  
  // Check if out directory was created
  if (fs.existsSync(outDir)) {
    const files = fs.readdirSync(outDir);
    console.log('✅ SUCCESS: out directory created!');
    console.log('Files in out directory:', files.length);
    console.log('Sample files:', files.slice(0, 10));
  } else {
    console.log('❌ ERROR: out directory was NOT created');
  }
  
} catch (error) {
  console.error('\n=== BUILD ERROR ===');
  console.error('Error message:', error.message);
  if (error.stdout) {
    console.error('Stdout:', error.stdout);
  }
  if (error.stderr) {
    console.error('Stderr:', error.stderr);
  }
  console.error('=== END BUILD ERROR ===\n');
  process.exit(1);
}
