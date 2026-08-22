import { URL } from 'url';
import {
  handleSubmission,
  recipientEmails,
  recipientList,
  sendMail,
  verifyAdminAuth,
  createToken,
  adminUser,
  adminPass,
  getAllSubmissions,
} from './shared.js';

async function parseJsonBody(req) {
  if (req.body) return req.body;
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let pathname = url.pathname.replace(/^\/api\/?/, '');
  pathname = pathname.replace(/\/$/, '');

  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', 'GET,POST,OPTIONS');
    return res.status(204).end();
  }

  if ((pathname === 'auth' || pathname === 'auth/login') && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const providedUser = (body.username || '').trim();
      const normalizedProvided = providedUser.toLowerCase();
      const normalizedAdmin = adminUser.toLowerCase();

      if (normalizedProvided === normalizedAdmin && body.password === adminPass) {
        const token = createToken(providedUser, 'admin');
        return res.status(200).json({ success: true, token, user: { username: providedUser, role: 'admin' } });
      }
    } catch (err) {
      return res.status(400).json({ success: false, message: 'Invalid JSON payload' });
    }

    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  if (pathname === 'admissions' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      handleSubmission('admission', body);

      if (recipientEmails.length > 0 && body.email) {
        await sendMail({
          from: body.email,
          to: recipientList,
          subject: `New Admission Application - ${body.fullName}`,
          html: `
            <h2>New Admission Application</h2>
            <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse; width:100%; max-width:600px;">
              <tr><td><strong>Full Name</strong></td><td>${body.fullName}</td></tr>
              <tr><td><strong>Email</strong></td><td>${body.email}</td></tr>
              <tr><td><strong>Phone</strong></td><td>${body.phone}</td></tr>
              <tr><td><strong>Date of Birth</strong></td><td>${body.dob}</td></tr>
              <tr><td><strong>Course</strong></td><td>${body.course}</td></tr>
              <tr><td><strong>Qualification</strong></td><td>${body.qualification}</td></tr>
              <tr><td><strong>10th Class Marks</strong></td><td>${body.tenthMarks || 'N/A'}</td></tr>
              <tr><td><strong>Inter Marks</strong></td><td>${body.interMarks || 'N/A'}</td></tr>
              <tr><td><strong>Address</strong></td><td>${body.address}</td></tr>
              <tr><td><strong>City</strong></td><td>${body.city}</td></tr>
              <tr><td><strong>State</strong></td><td>${body.state}</td></tr>
            </table>
            <p><em>Submitted via Aditya Epoch Admission Portal</em></p>
          `,
        });
      }

      return res.status(200).json({ success: true, message: 'Application submitted successfully! We\'ll review your details shortly.' });
    } catch (error) {
      console.error('Admission error:', error);
      return res.status(500).json({ success: false, message: 'Failed to process application. Please try again later.' });
    }
  }

  if (pathname === 'contact' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      handleSubmission('contact', body);

      if (recipientEmails.length > 0 && body.email) {
        await sendMail({
          from: body.email,
          to: recipientList,
          subject: `Contact Request from ${body.name}`,
          html: `
            <h2>New Contact Request</h2>
            <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse; width:100%; max-width:600px;">
              <tr><td><strong>Name</strong></td><td>${body.name}</td></tr>
              <tr><td><strong>Email</strong></td><td>${body.email}</td></tr>
              <tr><td><strong>Phone</strong></td><td>${body.phone}</td></tr>
              <tr><td><strong>Message</strong></td><td>${body.message}</td></tr>
            </table>
            <p><em>Submitted via Aditya Epoch Contact Form</em></p>
          `,
        });
      }

      return res.status(200).json({ success: true, message: 'Your message has been sent successfully! We will get back to you shortly.' });
    } catch (error) {
      console.error('Contact error:', error);
      return res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
    }
  }

  if (pathname === 'admin/submissions' && req.method === 'GET') {
    if (!verifyAdminAuth(req)) {
      return res.status(401).json({ success: false, message: 'Authentication required' });
    }

    const submissions = getAllSubmissions();
    return res.status(200).json({ success: true, submissions });
  }

  return res.status(404).json({ success: false, message: 'Not found' });
}
