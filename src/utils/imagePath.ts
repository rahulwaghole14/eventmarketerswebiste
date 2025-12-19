/**
 * Converts absolute image paths to relative paths based on current page location
 * This is needed for static exports with relative paths (assetPrefix: './')
 */
export function getRelativeImagePath(imagePath: string): string {
  // Return empty string if input is invalid
  if (!imagePath || typeof imagePath !== 'string' || imagePath.trim() === '') {
    return '';
  }

  // If already relative, return as is
  if (imagePath.startsWith('./') || imagePath.startsWith('../')) {
    return imagePath;
  }

  // If it's an external URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('//')) {
    return imagePath;
  }

  // For static export with relative paths, we need to convert absolute paths
  // In production build, we're using relative paths, so we need to calculate
  // the relative path from the current page to the image in the public folder
  
  // Only convert in browser environment (client-side)
  if (typeof window === 'undefined') {
    // During SSR, return as is - Next.js will handle it
    return imagePath;
  }

  // Remove leading slash from image path
  const cleanImagePath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
  
  // Validate clean path
  if (!cleanImagePath || cleanImagePath.trim() === '') {
    return '';
  }
  
  // Get current pathname (e.g., /category/event-planner or /category/event-planner.html)
  const currentPath = window.location.pathname;
  
  // Remove .html extension if present for depth calculation
  const pathWithoutExt = currentPath.replace(/\.html$/, '');
  
  // Calculate depth (how many directories deep we are)
  // e.g., /category/event-planner -> depth 2
  // e.g., / -> depth 0
  const pathParts = pathWithoutExt.split('/').filter(part => part && part !== 'index');
  const pathDepth = pathParts.length;
  
  // If we're at root, images are in the same directory
  if (pathDepth === 0) {
    return `./${cleanImagePath}`;
  }
  
  // For nested paths, go up to root then to image
  // e.g., from /category/event-planner to Event Planner/Mandap/1.png
  // Need to go up 2 levels: ../../
  const upLevels = '../'.repeat(pathDepth);
  return `${upLevels}${cleanImagePath}`;
}

/**
 * Batch convert multiple image paths
 */
export function getRelativeImagePaths(imagePaths: string[]): string[] {
  return imagePaths.map(path => getRelativeImagePath(path));
}

