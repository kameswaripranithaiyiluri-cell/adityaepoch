const XLSX = require('xlsx');

const wb = XLSX.readFile('./public/files/teaching-staff.xlsx');
const sheet = wb.Sheets[wb.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet);

console.log('ALL COLUMNS IN ROW 2 (HEADER ROW):');
console.log(JSON.stringify(rows[1], null, 2));

console.log('\n\nALL COLUMNS IN ROW 3 (FIRST DATA ROW):');
console.log(JSON.stringify(rows[2], null, 2));
