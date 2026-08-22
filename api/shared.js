import Database from 'better-sqlite3';
import nodemailer from 'nodemailer';
import os from 'os';
import path from 'path';

const dbPath = process.env.VERCEL
  ? path.join(os.tmpdir(), 'data.db')
  : path.join(process.cwd(), 'data.db');
console.log('SQLite DB path:', dbPath, 'VERCEL=', process.env.VERCEL);
const db = new Database(dbPath);

try {
  db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    data TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);
} catch (error) {
  console.error('SQLite init error:', error);
}

const adminUser = (process.env.ADMIN_USER || 'AdityaEpoch').trim();
const adminPass = process.env.ADMIN_PASSWORD || '123456@';
const recipientEmails = (process.env.RECIPIENT_EMAILS || 'adcrjy@aditya.adc.in, pranithaiyiluri@gmail.com')
  .split(',')
  .map(email => email.trim())
  .filter(Boolean);
const recipientList = recipientEmails.join(', ');

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const hasValidEmailConfig = Boolean(emailUser && emailPass && emailUser !== 'info@adityacollege.edu.in' && emailPass !== 'your-app-password');
const transporter = hasValidEmailConfig
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: { user: emailUser, pass: emailPass },
    })
  : null;

function createToken(user, role) {
  const payload = { user, role, iat: Date.now() };
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

function parseToken(token) {
  try {
    return JSON.parse(Buffer.from(token, 'base64').toString('utf8'));
  } catch {
    return null;
  }
}

function verifyAdminAuth(req) {
  const authHeader = req.headers?.authorization || req.headers?.Authorization || '';
  if (authHeader.startsWith('Bearer ')) {
    const token = authHeader.slice(7);
    const payload = parseToken(token);
    return payload && payload.role === 'admin';
  }

  if (authHeader.startsWith('Basic ')) {
    const credentials = Buffer.from(authHeader.slice(6), 'base64').toString('utf8');
    const [user, pass] = credentials.split(':');
    return user === adminUser && pass === adminPass;
  }

  return false;
}

async function sendMail(options) {
  if (!transporter) return;
  try {
    await transporter.sendMail(options);
  } catch (err) {
    console.error('Email send error:', err.message);
  }
}

function handleSubmission(type, payload) {
  const stmt = db.prepare('INSERT INTO submissions (type, data) VALUES (?, ?)');
  const result = stmt.run(type, JSON.stringify(payload));
  console.log(`Saved submission type=${type} id=${result.lastInsertRowid}`);
  return {
    id: result.lastInsertRowid,
    type,
    data: payload,
    created_at: new Date().toISOString(),
  };
}

function getAllSubmissions() {
  const rows = db.prepare('SELECT * FROM submissions ORDER BY created_at DESC').all();
  console.log(`Fetched ${rows.length} submissions from DB`);
  return rows.map(row => ({
    id: row.id,
    type: row.type,
    data: JSON.parse(row.data),
    created_at: row.created_at,
  }));
}

export {
  adminUser,
  adminPass,
  createToken,
  parseToken,
  verifyAdminAuth,
  handleSubmission,
  getAllSubmissions,
  recipientEmails,
  recipientList,
  sendMail,
};
