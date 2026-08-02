// server/middleware/auth.js - Extends existing auth system with role-based access
// Uses the existing Basic Auth credentials stored in .env (ADMIN_USER, ADMIN_PASSWORD)

// Simple token utility — uses base64 encoding with the existing credential pattern
// This is NOT a new auth system; it's a stateless session wrapper around the existing .env credentials

function createToken(user, role) {
  const payload = { user, role, iat: Date.now() };
  // Encode as base64 (this is a simple token, not JWT — keep existing auth approach)
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

function parseToken(token) {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf8');
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}

// Middleware: verify the request has a valid admin token (from login) OR valid Basic Auth header
// This preserves backward compatibility with the existing adminAuth approach
function requireRole(requiredRole) {
  return (req, res, next) => {
    // Strategy 1: Check for token in Authorization: Bearer <token>
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      const payload = parseToken(token);
      if (payload && payload.role === requiredRole) {
        req.user = payload;
        return next();
      }
      return res.status(403).json({ success: false, message: 'Access denied. Admin role required.' });
    }

    // Strategy 2: Fallback to existing Basic Auth (for backward compatibility)
    if (authHeader && authHeader.startsWith('Basic ')) {
      const base64Credentials = authHeader.split(' ')[1];
      const credentials = Buffer.from(base64Credentials, 'base64').toString('utf8');
      const [user, pass] = credentials.split(':');
      const adminUser = process.env.ADMIN_USER || 'admin';
      const adminPass = process.env.ADMIN_PASSWORD || 'password';
      if (user === adminUser && pass === adminPass) {
        req.user = { user, role: 'admin' };
        return next();
      }
      return res.status(403).json({ success: false, message: 'Invalid admin credentials' });
    }

    return res.status(401).json({ success: false, message: 'Authentication required' });
  };
}

module.exports = { createToken, parseToken, requireRole };