/**
 * Converts absolute image paths to relative paths based on current page location
 * This is needed for static exports with relative paths (assetPrefix: './')
 * 
 * @param imagePath - The image path to convert (e.g., "/Banquat Hall/1.png")
 * @param currentRoute - Optional: The current route path (e.g., "/category/banquet-hall")
 *                       If not provided, will use window.location.pathname (client-side only)
 */
export function getRelativeImagePath(imagePath: string, currentRoute?: string): string {
  console.log('[getRelativeImagePath] Input:', { imagePath, currentRoute });
  
  // Return empty string if input is invalid
  if (!imagePath || typeof imagePath !== 'string' || imagePath.trim() === '') {
    console.log('[getRelativeImagePath] Invalid input, returning empty string');
    return '';
  }

  // If already relative, return as is
  if (imagePath.startsWith('./') || imagePath.startsWith('../')) {
    console.log('[getRelativeImagePath] Already relative, returning as-is:', imagePath);
    return imagePath;
  }

  // If it's an external URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('//')) {
    console.log('[getRelativeImagePath] External URL, returning as-is:', imagePath);
    return imagePath;
  }

  // Remove leading slash from image path
  const cleanImagePath = imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
  
  // Validate clean path
  if (!cleanImagePath || cleanImagePath.trim() === '') {
    return '';
  }
  
  // Get current pathname - use provided route or window.location (client-side only)
  let currentPath: string;
  if (currentRoute) {
    currentPath = currentRoute;
    console.log('[getRelativeImagePath] Using provided route:', currentPath);
  } else if (typeof window !== 'undefined') {
    currentPath = window.location.pathname;
    console.log('[getRelativeImagePath] Using window.location.pathname:', currentPath);
    console.log('[getRelativeImagePath] Full window.location:', window.location.href);
  } else {
    // During SSR without route info, return as is (shouldn't happen if route is provided)
    console.log('[getRelativeImagePath] SSR without route, returning original:', imagePath);
    return imagePath;
  }
  
  // Remove .html extension if present for depth calculation
  const pathWithoutExt = currentPath.replace(/\.html$/, '').replace(/\/$/, '');
  console.log('[getRelativeImagePath] Path without extension:', pathWithoutExt);
  
  // Calculate depth (how many directories deep we are)
  // e.g., /category/event-planner -> depth 2
  // e.g., / -> depth 0
  const pathParts = pathWithoutExt.split('/').filter(part => part && part !== 'index');
  const pathDepth = pathParts.length;
  console.log('[getRelativeImagePath] Path depth:', pathDepth, 'from parts:', pathParts);
  
  // If we're at root, images are in the same directory
  if (pathDepth === 0) {
    const result = `./${cleanImagePath}`;
    console.log('[getRelativeImagePath] Root level, returning:', result);
    return result;
  }
  
  // For nested paths, go up to root then to image
  // e.g., from /category/event-planner to Event Planner/Mandap/1.png
  // Need to go up 2 levels: ../../
  const upLevels = '../'.repeat(pathDepth);
  const result = `${upLevels}${cleanImagePath}`;
  console.log('[getRelativeImagePath] Nested path, returning:', result);
  return result;
}

/**
 * Batch convert multiple image paths
 * 
 * @param imagePaths - Array of image paths to convert
 * @param currentRoute - Optional: The current route path for SSR compatibility
 */
export function getRelativeImagePaths(imagePaths: string[], currentRoute?: string): string[] {
  return imagePaths.map(path => getRelativeImagePath(path, currentRoute));
}

