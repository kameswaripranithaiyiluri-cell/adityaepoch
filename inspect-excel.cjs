const XLSX = require('xlsx');

try {
  const wb = XLSX.readFile('./public/files/teaching-staff.xlsx');
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet);
  
  console.log('=== EXCEL FILE INSPECTION ===');
  console.log('Sheet name:', wb.SheetNames[0]);
  console.log('Column Headers:', Object.keys(rows[0] || {}));
  console.log('Total rows:', rows.length);
  console.log('\n=== FIRST 3 ROWS ===');
  rows.slice(0, 3).forEach((row, idx) => {
    console.log(`Row ${idx + 1}:`, JSON.stringify(row, null, 2));
  });
} catch (err) {
  console.error('Error:', err.message);
}
