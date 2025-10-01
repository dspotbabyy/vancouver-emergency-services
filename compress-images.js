import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDir = './public/images/professional';

// Process each image
fs.readdirSync(imageDir).forEach(async (file) => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const inputPath = path.join(imageDir, file);
    const outputPath = path.join(imageDir, file);

    try {
      const originalSize = fs.statSync(inputPath).size;

      await sharp(inputPath)
        .resize(1920, 1920, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({
          quality: 85,
          progressive: true
        })
        .toFile(outputPath + '.tmp');

      // Replace original with compressed version
      fs.renameSync(outputPath + '.tmp', outputPath);

      const newSize = fs.statSync(outputPath).size;
      const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

      console.log(`✅ ${file}: ${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(newSize / 1024 / 1024).toFixed(1)}MB (${reduction}% reduction)`);
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err.message);
    }
  }
});