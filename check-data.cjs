const XLSX = require('xlsx');

const wb = XLSX.readFile('./public/files/teaching-staff.xlsx');
const sheet = wb.Sheets[wb.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet);

console.log('DATA ROWS (from row 3 onwards):\n');
rows.slice(2, 10).forEach((row, idx) => {
  console.log(`Row ${idx + 3}:`);
  console.log('  NAME:', row['__EMPTY']);
  console.log('  DESIGNATION:', row['__EMPTY_1']);
  console.log('  PHOTO:', row['__EMPTY_4']);
  console.log('');
});
