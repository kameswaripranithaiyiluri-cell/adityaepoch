const XLSX = require('xlsx');
const fs = require('fs');

const wb = XLSX.readFile('./public/files/teaching-staff.xlsx');
const sheet = wb.Sheets[wb.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet);

console.log('DETAILED EXCEL DATA:\n');
console.log('Total rows:', rows.length);
console.log('\n=== HEADER ROW (Row 2) ===');
const headerRow = rows[1];
console.log('All keys:', Object.keys(headerRow));
console.log('Values:', headerRow);

console.log('\n=== ALL DATA ROWS (starting from Row 3) ===');
rows.slice(2, 15).forEach((row, idx) => {
  console.log(`\n--- Row ${idx + 3} ---`);
  Object.entries(row).forEach(([key, val]) => {
    if (val !== undefined && val !== null && val !== '') {
      console.log(`${key}: ${val}`);
    }
  });
});

console.log('\n\n=== IMAGE FILES AVAILABLE ===');
const images = fs.readdirSync('./public/images/');
console.log(images);
