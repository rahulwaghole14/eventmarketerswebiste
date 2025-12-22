const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('=== Build Verification Script ===\n');

// Check if out directory exists
const outDir = path.join(process.cwd(), 'out');
const nextDir = path.join(process.cwd(), '.next');

console.log('1. Checking directories...');
console.log(`   out directory exists: ${fs.existsSync(outDir)}`);
console.log(`   .next directory exists: ${fs.existsSync(nextDir)}`);

if (fs.existsSync(outDir)) {
  const files = fs.readdirSync(outDir);
  console.log(`   ✅ out directory has ${files.length} items`);
  console.log(`   Sample items: ${files.slice(0, 5).join(', ')}`);
} else {
  console.log('   ❌ out directory does NOT exist');
}

if (fs.existsSync(nextDir)) {
  console.log('   ⚠️  .next directory exists - build may have run but export failed');
}

// Check next.config.js
console.log('\n2. Checking next.config.js...');
const configPath = path.join(process.cwd(), 'next.config.js');
if (fs.existsSync(configPath)) {
  const configContent = fs.readFileSync(configPath, 'utf8');
  if (configContent.includes("output: 'export'")) {
    console.log('   ✅ output: export is configured');
  } else {
    console.log('   ❌ output: export is NOT configured');
  }
  if (configContent.includes('unoptimized: true')) {
    console.log('   ✅ images.unoptimized is configured');
  } else {
    console.log('   ⚠️  images.unoptimized may not be configured');
  }
} else {
  console.log('   ❌ next.config.js not found');
}

// Try to run build and capture output
console.log('\n3. Attempting build...');
try {
  console.log('   Running: npm run build');
  const output = execSync('npm run build', {
    encoding: 'utf8',
    stdio: 'pipe',
    cwd: process.cwd(),
    env: { ...process.env, NODE_ENV: 'production' },
    timeout: 300000 // 5 minutes timeout
  });
  
  console.log('\n   === BUILD OUTPUT ===');
  const lines = output.split('\n');
  // Show last 50 lines
  lines.slice(-50).forEach(line => console.log(`   ${line}`));
  console.log('   === END BUILD OUTPUT ===\n');
  
  // Check again after build
  if (fs.existsSync(outDir)) {
    const files = fs.readdirSync(outDir);
    console.log(`   ✅ SUCCESS: out directory created with ${files.length} items`);
  } else {
    console.log('   ❌ FAILED: out directory still not created after build');
  }
  
} catch (error) {
  console.log('\n   === BUILD ERROR ===');
  console.log(`   Error: ${error.message}`);
  if (error.stdout) {
    console.log('\n   STDOUT:');
    error.stdout.split('\n').slice(-30).forEach(line => console.log(`   ${line}`));
  }
  if (error.stderr) {
    console.log('\n   STDERR:');
    error.stderr.split('\n').slice(-30).forEach(line => console.log(`   ${line}`));
  }
  console.log('   === END BUILD ERROR ===\n');
}

console.log('\n=== Verification Complete ===');
