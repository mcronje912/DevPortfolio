// convert-images.js
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {
  // Convert PNG images
  await imagemin(['public/images/**/*.png'], {
    destination: 'public/images',
    plugins: [
      imageminWebp({
        quality: 85,
        method: 6
      })
    ]
  });
  console.log('PNG images converted to WebP');

  // Convert JPG images
  await imagemin(['public/images/**/*.{jpg,jpeg}'], {
    destination: 'public/images',
    plugins: [
      imageminWebp({
        quality: 85,
        method: 6
      })
    ]
  });
  console.log('JPG images converted to WebP');
})();