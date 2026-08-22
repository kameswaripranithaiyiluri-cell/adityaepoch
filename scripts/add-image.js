#!/usr/bin/env node
// Copy an image from an absolute source path into public/images with the given filename.
import fs from 'fs';
import path from 'path';

const [,, src, destName] = process.argv;
if (!src || !destName) {
  console.error('Usage: node scripts/add-image.js <source-absolute-path> <dest-filename>');
  process.exit(2);
}

const workspaceRoot = path.resolve(new URL(import.meta.url).pathname).split('/').slice(1, -2).join(path.sep);
// Fallback to process.cwd() if resolution above is awkward
const publicImagesDir = path.join(process.cwd(), 'public', 'images');

try {
  if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
  }

  const destPath = path.join(publicImagesDir, destName);
  fs.copyFileSync(src, destPath);
  console.log(`Copied ${src} → ${destPath}`);
} catch (err) {
  console.error('Failed to copy image:', err.message);
  process.exit(1);
}
