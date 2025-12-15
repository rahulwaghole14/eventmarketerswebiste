const fs = require('fs');
const path = require('path');

console.log('=== Build Status Check ===\n');

// Check directories
const outDir = path.join(process.cwd(), 'out');
const nextDir = path.join(process.cwd(), '.next');

console.log('Directory Status:');
console.log(`  out: ${fs.existsSync(outDir) ? 'EXISTS ✅' : 'DOES NOT EXIST ❌'}`);
console.log(`  .next: ${fs.existsSync(nextDir) ? 'EXISTS ⚠️' : 'DOES NOT EXIST'}`);

if (fs.existsSync(outDir)) {
  try {
    const items = fs.readdirSync(outDir);
    console.log(`\n  out directory contains ${items.length} items`);
    console.log(`  Sample: ${items.slice(0, 5).join(', ')}`);
  } catch (e) {
    console.log(`  Error reading out directory: ${e.message}`);
  }
}

// Check config
console.log('\nConfiguration Check:');
const configPath = path.join(process.cwd(), 'next.config.js');
if (fs.existsSync(configPath)) {
  const config = fs.readFileSync(configPath, 'utf8');
  if (config.includes("output: 'export'")) {
    console.log('  ✅ output: export configured');
  } else {
    console.log('  ❌ output: export NOT configured');
  }
} else {
  console.log('  ❌ next.config.js not found');
}

// Check for missing hero images
console.log('\nHero Background Images Check:');
const heroBgDir = path.join(process.cwd(), 'public', 'hero-bg');
const requiredImages = [
  'Event-Planner.png',
  'Catering.png',
  'Photographer.png',
  'Light-Supplier.png',
  'Sound.png',
  'Generator.png',
  'Decorator.png',
  'Banquat-Hall.png',
  'Mandap.png'
];

if (fs.existsSync(heroBgDir)) {
  const existingImages = fs.readdirSync(heroBgDir);
  console.log(`  Found ${existingImages.length} images in hero-bg folder`);
  
  const missing = requiredImages.filter(img => !existingImages.includes(img));
  if (missing.length > 0) {
    console.log(`  ⚠️  Missing images: ${missing.join(', ')}`);
  } else {
    console.log('  ✅ All required images exist');
  }
} else {
  console.log('  ❌ hero-bg directory does not exist');
}

console.log('\n=== Check Complete ===');
