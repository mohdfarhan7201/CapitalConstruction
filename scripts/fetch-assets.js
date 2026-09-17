const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  // Hero
  { dir: 'public/images/hero', file: 'hero-main.jpg', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85' },
  { dir: 'public/images/hero', file: 'hero-secondary.jpg', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85' },

  // Projects
  { dir: 'public/images/projects', file: 'project-1.jpg', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85' },
  { dir: 'public/images/projects', file: 'project-2.jpg', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85' },
  { dir: 'public/images/projects', file: 'project-3.jpg', url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85' },
  { dir: 'public/images/projects', file: 'project-4.jpg', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85' },
  { dir: 'public/images/projects', file: 'project-5.jpg', url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85' },

  // Services
  { dir: 'public/images/services', file: 'service-1.jpg', url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85' },
  { dir: 'public/images/services', file: 'service-2.jpg', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85' },
  { dir: 'public/images/services', file: 'service-3.jpg', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85' },
  { dir: 'public/images/services', file: 'service-4.jpg', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=85' },
  { dir: 'public/images/services', file: 'service-5.jpg', url: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=85' },
  { dir: 'public/images/services', file: 'service-6.jpg', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85' },

  // Before / After
  { dir: 'public/images/before-after', file: 'before.jpg', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85' },
  { dir: 'public/images/before-after', file: 'after.jpg', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85' },

  // Instagram Grid
  { dir: 'public/images/instagram', file: 'insta-1.jpg', url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=85' },
  { dir: 'public/images/instagram', file: 'insta-2.jpg', url: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=800&q=85' },
  { dir: 'public/images/instagram', file: 'insta-3.jpg', url: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=85' },
  { dir: 'public/images/instagram', file: 'insta-4.jpg', url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=85' },
  { dir: 'public/images/instagram', file: 'insta-5.jpg', url: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=85' },
  { dir: 'public/images/instagram', file: 'insta-6.jpg', url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=85' },
];

async function downloadAll() {
  console.log('Starting download of curated architectural assets...');
  let count = 0;

  for (const item of images) {
    fs.mkdirSync(item.dir, { recursive: true });
    const dest = path.join(item.dir, item.file);

    await new Promise((resolve) => {
      function getWithRedirect(url) {
        https.get(url, (res) => {
          if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            return getWithRedirect(res.headers.location);
          }
          const fileStream = fs.createWriteStream(dest);
          res.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close(() => {
              count++;
              console.log(`[${count}/${images.length}] Saved ${dest} (${fs.statSync(dest).size} bytes)`);
              resolve();
            });
          });
        }).on('error', (err) => {
          console.error(`Failed to download ${dest}:`, err.message);
          resolve();
        });
      }
      getWithRedirect(item.url);
    });
  }

  console.log('All image assets successfully downloaded into local directories!');
}

downloadAll();
