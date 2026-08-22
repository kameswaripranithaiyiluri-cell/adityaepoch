const XLSX = require('xlsx');

const wb = XLSX.readFile('./public/files/teaching-staff.xlsx');
const sheet = wb.Sheets[wb.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet);

console.log('FIRST 5 DATA ROWS WITH ALL COLUMNS:');
rows.slice(2, 7).forEach((row, idx) => {
  console.log(`\nRow ${idx + 3}:`);
  Object.keys(row).forEach(key => {
    if (row[key]) {
      console.log(`  ${key}: ${row[key]}`);
    }
  });
});

console.log('\n\nAll unique column keys in all rows:');
const allKeys = new Set();
rows.forEach(row => {
  Object.keys(row).forEach(k => allKeys.add(k));
});
console.log(Array.from(allKeys).sort());
