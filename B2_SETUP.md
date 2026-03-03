# Backblaze B2 Image Storage Setup

## Overview
The JackTabery website now uses Backblaze B2 Cloud Storage for all images, providing:
- **Faster loading times** with compressed, optimized images
- **Reliable CDN delivery** via Backblaze's global network
- **Cost-effective storage** for high-quality racing photos

## Configuration

### B2 Bucket Details
- **Bucket Name**: `JackTabery`
- **Bucket URL**: `https://f003.backblazeb2.com/file/JackTabery`
- **Application Key ID**: `003401df4572d16000000000a`
- **Application Key Name**: `JackTabery`

### Files Modified
1. **`config.ts`** - B2 configuration and helper function
2. **`constants.ts`** - Updated partner logos and gallery images
3. **`App.tsx`** - Updated hero, about, and Instagram images
4. **`.env`** - Environment variables (gitignored)
5. **`.gitignore`** - Added .env files to prevent credential exposure

## Image Mapping

### Partner Logos
- Dedicated: `54fb943f-48f1-4799-a8e0-6bb79471554a.jpg` (276 KB)
- The Little Bakeshop: `0ef63469-ee6b-4b92-b721-fceca47ffa26.jpg` (232 KB)
- W Legal: `2671d456-a376-4485-997d-8f117a5f29b5.jpg` (178 KB)
- WACC: `IMG_2991.jpg` (131 KB)

### Gallery Images
- `IMG_6625.jpg` (1.3 MB)
- `Chester-79.jpg` (2.3 MB)
- `IMG_7553.jpg` (1.5 MB)
- `IMG_1904.jpg` (898 KB)
- `IMG_7574.jpg` (1.3 MB)
- `DO01000115.jpg` (546 KB)

### Hero & About Images
- Hero Background: `C6C2E732-0994-4CD1-9577-86ABB4E2C1AE.jpg` (1.2 MB)
- Hero Portrait: `IMG_7563.jpg` (735 KB)
- About Section: `IMG_7553.jpg` (1.5 MB)

## Usage

All images are accessed via the `getImageUrl()` helper function:

```typescript
import { getImageUrl } from './config';

// Example usage
const imageUrl = getImageUrl('IMG_6625.jpg');
// Returns: https://f003.backblazeb2.com/file/JackTabery/IMG_6625.jpg
```

## Security Notes

⚠️ **Important**: The `.env` file containing B2 credentials is gitignored and should NEVER be committed to version control.

For production deployments, set the `VITE_B2_BUCKET_URL` environment variable in your hosting platform.

## Performance Benefits

- **Before**: Local images (10-18 MB uncompressed)
- **After**: B2 compressed images (79 KB - 3.1 MB)
- **Result**: Significantly faster page load times and better user experience

## Maintenance

To add new images:
1. Upload compressed images to the B2 bucket via the Backblaze web interface
2. Update the relevant constants in `constants.ts` or `App.tsx`
3. Use `getImageUrl('filename.jpg')` to reference the image

---
Last Updated: March 3, 2026
