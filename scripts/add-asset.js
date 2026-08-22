#!/usr/bin/env node
// Copy any file into public/files with a given destination filename.
import fs from 'fs';
import path from 'path';

const [,, src, destName] = process.argv;
if (!src || !destName) {
  console.error('Usage: node scripts/add-asset.js <source-absolute-path> <dest-filename>');
  process.exit(2);
}

const publicFilesDir = path.join(process.cwd(), 'public', 'files');
try {
  if (!fs.existsSync(publicFilesDir)) fs.mkdirSync(publicFilesDir, { recursive: true });
  const destPath = path.join(publicFilesDir, destName);
  fs.copyFileSync(src, destPath);
  console.log(`Copied ${src} → ${destPath}`);
} catch (err) {
  console.error('Failed to copy asset:', err.message);
  process.exit(1);
}
