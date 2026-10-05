// Generate portable, orientation-correct thumbnails; validate their actual pixels.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const root = path.join(__dirname, '../public/images/gallery');
const checkOnly = process.argv.includes('--check');

async function validate(file, width) {
  const image = sharp(file);
  const metadata = await image.metadata();
  const stats = await image.stats();
  if (metadata.width !== width || stats.channels.every(channel => channel.stdev < 0.5)) {
    throw new Error(`Invalid or blank thumbnail: ${file}`);
  }
}

async function main() {
  const data = fs.readFileSync(path.join(__dirname, '../src/data/gallery.js'), 'utf8');
  const { galleryData } = await import(`data:text/javascript;base64,${Buffer.from(data).toString('base64')}`);
  let count = 0;
  for (const section of galleryData) {
    const directory = path.join(root, section.id);
    const names = fs.readdirSync(directory);
    const output = path.join(root, 'thumbnails', section.id);
    if (!checkOnly) fs.mkdirSync(output, { recursive: true });
    for (const { file } of section.images) {
      // macOS accepts wrong capitalization; GitHub Pages does not.
      if (!names.includes(file)) throw new Error(`Gallery filename must match exactly: ${section.id}/${file}`);
      const source = path.join(directory, file);
      for (const width of [480, 960]) {
        const target = path.join(output, `${file}-${width}-v2.jpg`);
        if (!checkOnly) {
          await sharp(source).rotate().resize({ width }).toColourspace('srgb')
            .jpeg({ quality: 78, mozjpeg: true }).toFile(target);
        }
        if (!fs.existsSync(target)) throw new Error(`Missing thumbnail: ${target}. Run npm run gallery:thumbnails.`);
        await validate(target, width);
        count++;
      }
    }
  }
  console.log(`${checkOnly ? 'Validated' : 'Generated and validated'} ${count} gallery thumbnails.`);
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
