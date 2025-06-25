export function getImagePath(src: string): string {
  // Remove leading slash if present
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src
  
  // In production, prepend the base path
  if (process.env.NODE_ENV === 'production') {
    return `/bornviral/${cleanSrc}`
  }
  
  // In development, use the original path
  return `/${cleanSrc}`
}