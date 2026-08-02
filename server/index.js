// server/index.js - Updated with SQLite, Socket.io, and admin features
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');
const Database = require('better-sqlite3');
const path = require('path');
const { createToken, requireRole } = require('./middleware/auth');

const envPath = path.resolve(__dirname, '..', '.env');
dotenv.config({ path: envPath });
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.set('trust proxy', true);

// Initialize SQLite database
const dbPath = path.join(__dirname, 'data.db');
const db = new Database(dbPath);

// Create submissions table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    data TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

console.log('Connected to SQLite database');

// Create HTTP server from Express app
const server = http.createServer(app);
// Initialize Socket.io
const io = new Server(server, { cors: { origin: '*', methods: ['GET', 'POST'] } });
// Admin namespace for real-time admin updates
const adminNamespace = io.of('/admin');
adminNamespace.on('connection', (socket) => {
  console.log('Admin client connected');
});

// Nodemailer Transporter (only enable when real credentials are configured)
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const hasValidEmailConfig = Boolean(emailUser && emailPass && emailUser !== 'info@adityacollege.edu.in' && emailPass !== 'your-app-password');
const transporter = hasValidEmailConfig
  ? nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    })
  : null;

const recipientEmails = process.env.RECIPIENT_EMAILS || 'info@adityacollege.edu.in,admissions@adityacollege.edu.in';

// Admin authentication middleware (uses role-based system from ./middleware/auth)
// requireRole('admin') replaces the old adminAuth function
// It accepts both: Bearer <token> (from login) or Basic <base64> (legacy)

// Helper to store submission and emit real-time update
function handleSubmission(type, payload) {
  return new Promise((resolve, reject) => {
    try {
      const stmt = db.prepare('INSERT INTO submissions (type, data) VALUES (?, ?)');
      const result = stmt.run(type, JSON.stringify(payload));
      const submission = {
        id: result.lastInsertRowid,
        type: type,
        data: payload,
        created_at: new Date().toISOString()
      };
      io.emit('newSubmission', submission);
      resolve(submission);
    } catch (err) {
      console.error('SQLite insert error:', err);
      reject(err);
    }
  });
}

// ---------------------- ADMISSIONS REGISTRATION ----------------------
app.post('/api/admissions', async (req, res) => {
  try {
    const { fullName, email, phone, dob, course, qualification, address, city, state } = req.body;
    
    // Optional email sending if valid credentials are present (non-blocking)
    if (transporter) {
      const collegeMailOptions = {
        from: emailUser,
        to: recipientEmails,
        subject: `New Admission Application - ${fullName}`,
        html: `
          <h2>New Admission Application</h2>
          <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse; width:100%; max-width:600px;">
            <tr><td><strong>Full Name</strong></td><td>${fullName}</td></tr>
            <tr><td><strong>Email</strong></td><td>${email}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
            <tr><td><strong>Date of Birth</strong></td><td>${dob}</td></tr>
            <tr><td><strong>Course</strong></td><td>${course}</td></tr>
            <tr><td><strong>Qualification</strong></td><td>${qualification}</td></tr>
            <tr><td><strong>Address</strong></td><td>${address}</td></tr>
            <tr><td><strong>City</strong></td><td>${city}</td></tr>
            <tr><td><strong>State</strong></td><td>${state}</td></tr>
          </table>
          <p><em>Submitted via Aditya Epoch Admission Portal</em></p>
        `,
      };
      // Send email but don't block submission on email failure
      transporter.sendMail(collegeMailOptions).catch(emailErr => {
        console.error("Email send error (non-blocking):", emailErr.message);
      });
    }
    
    // Store submission in DB and emit realtime update
    const submission = await handleSubmission('admission', req.body);
    res.status(200).json({ success: true, message: "Application submitted successfully! We'll review your details shortly." });
  } catch (error) {
    console.error("Admission error:", error);
    res.status(500).json({ success: false, message: "Failed to process application. Please try again later." });
  }
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Email to college (non-blocking)
    if (transporter) {
      const collegeMailOptions = {
        from: emailUser,
        to: recipientEmails,
        subject: `Contact Request from ${name}`,
        html: `
          <h2>New Contact Request</h2>
          <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse; width:100%; max-width:600px;">
            <tr><td><strong>Name</strong></td><td>${name}</td></tr>
            <tr><td><strong>Email</strong></td><td>${email}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
            <tr><td><strong>Message</strong></td><td>${message}</td></tr>
          </table>
          <p><em>Submitted via Aditya Epoch Contact Form</em></p>
        `,
      };
      // Send email but don't block submission on email failure
      transporter.sendMail(collegeMailOptions).catch(emailErr => {
        console.error("Email send error (non-blocking):", emailErr.message);
      });
    }

    // Store submission in DB and emit realtime update
    await handleSubmission('contact', req.body);
    res.status(200).json({ success: true, message: "Your message has been sent successfully! We will get back to you shortly." });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({ success: false, message: "Failed to send message. Please try again later." });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'aditya-epoch-backend' });
});

// ---------- LOGIN ENDPOINT (uses existing .env credentials) ----------
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  const adminUser = process.env.ADMIN_USER || 'admin';
  const adminPass = process.env.ADMIN_PASSWORD || 'password';
  if (username === adminUser && password === adminPass) {
    const token = createToken(username, 'admin');
    return res.json({ success: true, token, user: { username, role: 'admin' } });
  }
  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// ---------- ADMIN FETCH SUBMISSIONS (admin role required) ----------
app.get('/api/admin/submissions', requireRole('admin'), async (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM submissions ORDER BY created_at DESC').all();
    const submissions = rows.map(row => ({
      id: row.id,
      type: row.type,
      data: JSON.parse(row.data),
      created_at: row.created_at
    }));
    res.json({ success: true, submissions });
  } catch (err) {
    console.error('SQLite fetch error:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch submissions' });
  }
});

// Start listening
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Aditya Epoch Backend Server running on http://0.0.0.0:${PORT}`);
});
