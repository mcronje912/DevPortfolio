// convert-thumbnails.js
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';

(async () => {
  try {
    // Specifically target the thumbnails directory
    const thumbsDir = 'public/images/projects/thumbnails';
    
    console.log(`Converting images in: ${thumbsDir}`);
    
    // Check if directory exists
    if (!fs.existsSync(thumbsDir)) {
      console.error(`Directory does not exist: ${thumbsDir}`);
      return;
    }
    
    // List files before conversion
    console.log('Files before conversion:');
    fs.readdirSync(thumbsDir).forEach(file => {
      console.log(file);
    });
    
    // Convert all PNG and JPG files in the thumbnails directory
    const files = await imagemin([`${thumbsDir}/*.{png,jpg,jpeg}`], {
      destination: thumbsDir,
      plugins: [
        imageminWebp({
          quality: 85,
          method: 6
        })
      ]
    });
    
    console.log(`Processed ${files.length} files:`);
    files.forEach(file => {
      console.log(`- ${path.basename(file.destinationPath)}`);
    });
    
    // List files after conversion
    console.log('Files after conversion:');
    fs.readdirSync(thumbsDir).forEach(file => {
      console.log(file);
    });
    
  } catch (error) {
    console.error('Error during conversion:', error);
  }
})();