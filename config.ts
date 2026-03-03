// Backblaze B2 Configuration
export const B2_BUCKET_URL = 'https://f003.backblazeb2.com/file/JackTabery';

// Helper function to get B2 image URL
export const getImageUrl = (filename: string): string => {
  return `${B2_BUCKET_URL}/${filename}`;
};
