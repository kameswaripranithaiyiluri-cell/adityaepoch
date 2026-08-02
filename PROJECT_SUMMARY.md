# Aditya Epoch / CampusX Project Summary

## Live Demo
- **Frontend:** https://campus-x-lemon.vercel.app
- **Backend API:** https://campusx-backend-production-c272.up.railway.app

> This site is mobile-friendly and can be shared directly with students, parents, or faculty.

---

## Project Overview
Aditya Epoch is a modern college admissions and information website built with React, Tailwind CSS, and Vite for the frontend, paired with a Node.js + Express backend using SQLite for data persistence.

The web app includes:
- Home page
- Courses page
- Placements page
- Aptitude learning page
- Testimonials/video gallery
- Online admissions form
- Contact form
- Admin login and submission review

---

## Key Features
- Responsive UI for desktop and mobile
- Real-time admin updates via Socket.io
- Admissions submission form stored in SQLite
- Contact form stored in backend and optionally emailed
- Local MP4 testimonial playback from `public/videos`
- Google Maps integration on Contact page
- Dark/light theme toggle

---

## Architecture
### Frontend
- `src/App.jsx` — main routing and navigation
- `src/pages/Admissions.jsx` — admissions form POSTs to `/api/admissions`
- `src/pages/Contact.jsx` — contact form POSTs to `/api/contact`
- `src/pages/Testimonials.jsx` — local video playback + YouTube fallback
- `src/components/AdminPanel.jsx` and `src/components/Login.jsx` — admin auth and review interface

### Backend
- `server/index.js` — Express server and API endpoints
- `server/.env` — configuration for email, admin credentials, and port
- SQLite database file stored in `server/data.db`
- API endpoints:
  - `POST /api/admissions`
  - `POST /api/contact`
  - `POST /api/auth/login`
  - `GET /api/admin/submissions`
  - `GET /health`

---

## Deployment
### Frontend
- Hosted on Vercel
- Production environment variable: `VITE_BACKEND_URL=https://campusx-backend-production-c272.up.railway.app`
- Frontend URL: `https://campus-x-lemon.vercel.app`

### Backend
- Hosted on Railway
- Backend URL: `https://campusx-backend-production-c272.up.railway.app`
- Health check: `https://campusx-backend-production-c272.up.railway.app/health`

---

## Local Setup
### Frontend
1. `cd campusX`
2. `npm install`
3. `npm run dev -- --host 0.0.0.0`

### Backend
1. `cd campusX/server`
2. `npm install`
3. `npm start`

### Environment
Update `server/.env` with real values for:
- `EMAIL_USER`
- `EMAIL_PASS`
- `RECIPIENT_EMAILS`
- `ADMIN_USER`
- `ADMIN_PASSWORD`

---

## Notes for Presentation
- The application is fully deployed and online.
- The frontend and backend are connected through a production environment variable.
- The project is ready for live demonstration on mobile devices.
- The shareable link can be used directly for guest access.

---

## Admin Access
- Default admin user configured in `server/.env`:
  - `ADMIN_USER=admin@adc`
  - `ADMIN_PASSWORD=123456`

Use the `Admin Login` link from the navigation menu to access submissions.
