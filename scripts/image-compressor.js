import fs from 'fs';
import path from 'path';
import tinify from 'tinify';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

tinify.key = process.env.TINIFY_API_KEY;

const publicDir = path.join(__dirname, '../public');

// Recursively get all PNG and JPG files
function getImageFiles(dir, extensions = ['.png', '.jpg', '.jpeg']) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  items.forEach((item) => {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...getImageFiles(fullPath, extensions));
    } else if (extensions.includes(path.extname(item.name).toLowerCase())) {
      files.push(fullPath);
    }
  });

  return files;
}

const imageFiles = getImageFiles(publicDir);

console.log(`Found ${imageFiles.length} image files:`);

for (const file of imageFiles) {
  const relativePath = path.relative(publicDir, file);

  const source = tinify.fromFile(file);
  await source.toFile(file);

  console.log(`Compressed ${relativePath}`);
}
