# Build Troubleshooting Guide

## Issue: `out` folder not being generated

## Configuration Status
✅ `next.config.js` is correctly configured with:
- `output: 'export'` 
- `images.unoptimized: true`

## Manual Steps to Diagnose

1. **Run the build command manually:**
   ```bash
   npm run build
   ```

2. **Check for errors** - Look for any error messages in the terminal output

3. **Verify directories:**
   - Check if `.next` folder is created (indicates build ran)
   - Check if `out` folder is created (indicates export succeeded)

## Common Issues

### Missing Hero Background Images
The following images are referenced but may not exist:
- `/hero-bg/Event-Planner.png`
- `/hero-bg/Catering.png`
- `/hero-bg/Photographer.png`
- `/hero-bg/Light-Supplier.png`
- `/hero-bg/Sound.png`
- `/hero-bg/Generator.png`
- `/hero-bg/Decorator.png`

**Current images that exist:**
- `/hero-bg/Banquat-Hall.png` ✅
- `/hero-bg/Mandap.png` ✅

### Solution Options

**Option 1:** Add missing images to `public/hero-bg/` folder

**Option 2:** Update code to handle missing images gracefully (see below)

## Next Steps

1. Run `node check-build-status.js` to see current status
2. Run `npm run build` and watch for errors
3. Check if `out` folder is created after build completes
4. If build fails, check error messages and address them

## Verification Scripts Created

- `check-build-status.js` - Checks current build status
- `verify-build.js` - Runs build and captures output
- `build-check.js` - Alternative build verification
