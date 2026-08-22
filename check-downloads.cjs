const XLSX = require('xlsx');

const wb = XLSX.readFile('C:\\Users\\kames\\Downloads\\TEACHING STAFF.xlsx');
const sheet = wb.Sheets[wb.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet);

console.log('=== DOWNLOADS FILE - First 5 rows with PHOTO column ===\n');
rows.slice(2, 7).forEach((row, idx) => {
  console.log(`Row ${idx + 3}:`);
  console.log('  NAME:', row['__EMPTY']);
  console.log('  DESIGNATION:', row['__EMPTY_1']);
  console.log('  PHOTO (__EMPTY_4):', row['__EMPTY_4']);
  console.log('');
});
