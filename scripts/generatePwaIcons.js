import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceLogo = path.resolve(__dirname, '../public/logo.png');
const publicDir = path.resolve(__dirname, '../public');

async function generateIcons() {
  console.log('Generating PWA icons from', sourceLogo);

  // 1. 192x192 icon with brand background #0E3824 and centered logo with padding
  const logo192 = await sharp(sourceLogo)
    .resize(120, 150, { fit: 'inside' })
    .toBuffer();

  await sharp({
    create: {
      width: 192,
      height: 192,
      channels: 4,
      background: { r: 14, g: 56, b: 36, alpha: 1 } // #0E3824
    }
  })
    .composite([{ input: logo192, gravity: 'center' }])
    .png()
    .toFile(path.join(publicDir, 'pwa-192x192.png'));

  // 2. 512x512 icon
  const logo512 = await sharp(sourceLogo)
    .resize(320, 400, { fit: 'inside' })
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 14, g: 56, b: 36, alpha: 1 } // #0E3824
    }
  })
    .composite([{ input: logo512, gravity: 'center' }])
    .png()
    .toFile(path.join(publicDir, 'pwa-512x512.png'));

  // 3. Apple Touch Icon 180x180
  const logo180 = await sharp(sourceLogo)
    .resize(110, 140, { fit: 'inside' })
    .toBuffer();

  await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: { r: 14, g: 56, b: 36, alpha: 1 } // #0E3824
    }
  })
    .composite([{ input: logo180, gravity: 'center' }])
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // 4. Maskable 512x512 (with safe zone 60% of canvas)
  const logoMaskable = await sharp(sourceLogo)
    .resize(250, 300, { fit: 'inside' })
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 14, g: 56, b: 36, alpha: 1 } // #0E3824
    }
  })
    .composite([{ input: logoMaskable, gravity: 'center' }])
    .png()
    .toFile(path.join(publicDir, 'maskable-icon-512x512.png'));

  console.log('✓ All PWA icons generated successfully in public/ !');
}

generateIcons().catch(console.error);
