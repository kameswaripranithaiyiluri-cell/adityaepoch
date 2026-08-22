#!/usr/bin/env node
import path from 'path';
import fs from 'fs';
import xlsx from 'xlsx';

const file = path.join(process.cwd(), 'public', 'files', 'teaching-staff.xlsx');
if (!fs.existsSync(file)) {
  console.error('Spreadsheet not found at', file);
  process.exit(2);
}
const wb = xlsx.readFile(file);
const sheet = wb.Sheets[wb.SheetNames[0]];
const rows = xlsx.utils.sheet_to_json(sheet, { defval: '' });
console.log(JSON.stringify({ headers: Object.keys(rows[0] || {}), sample: rows.slice(0, 200) }, null, 2));
