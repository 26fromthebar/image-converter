import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

// (async () => {
//   await imagemin(['assets/images/*.{jpg,png}'], {
//     destination: 'assets/webp-images',
//     plugins: [imageminWebp({ quality: 75 })],
//   });

//   console.log('Images optimized');
// })();

async function convertImage() {
  await imagemin(['assets/images/*.{jpg,png,jpeg,JPG}'], {
    destination: 'assets/webp-images',
    plugins: [imageminWebp({ quality: 75 })],
  });
}

convertImage();
