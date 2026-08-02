import { useState, useEffect } from 'react';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Placements from './pages/Placements';
import Contact from './pages/Contact';
import Admissions from './pages/Admissions';
import Testimonials from './pages/Testimonials';
import AptitudeLearning from './pages/AptitudeLearning';

/* Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authToken, setAuthToken] = useState(localStorage.getItem('auth_token') || null);
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem('auth_user') || 'null')
  );
  const navigate = useNavigate();
  const location = useLocation();

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleLogin = (token, user) => {
    setAuthToken(token);
    setAuthUser(user);
    navigate('/admin');
  };

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
    setAuthToken(null);
    setAuthUser(null);
    navigate('/');
  };

  const isAdmin = authUser && authUser.role === 'admin';

  return (
<div className="min-h-dvh bg-white text-slate-900 dark:bg-black dark:text-white overflow-x-hidden relative fullscreen-app">
      <ScrollToTop />

      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full"></div>
      <div className="absolute top-[40%] right-0 w-[350px] h-[350px] bg-blue-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 left-[30%] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 text-slate-800 dark:bg-black/70 dark:text-white backdrop-blur-md border-b border-slate-200/70 dark:border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap justify-between items-center gap-3">
          <Link to="/" className="text-2xl sm:text-3xl font-bold transition font-aditya-epoch" style={{ letterSpacing: '2px' }}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent hover:from-cyan-300 hover:via-blue-400 hover:to-purple-400" style={{ letterSpacing: '2px' }}>Aditya</span>{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent hover:from-amber-300 hover:via-orange-400 hover:to-pink-400" style={{ letterSpacing: '3px' }}>Epoch</span>
          </Link>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="hidden md:flex gap-6 lg:gap-8">
              <Link to="/" className="text-slate-700 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-300 transition">Home</Link>
              <Link to="/courses" className="text-slate-700 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-300 transition">Courses</Link>
              <Link to="/aptitude-learning" className="text-slate-700 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-300 transition">Aptitude</Link>
              <Link to="/placements" className="text-slate-700 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-300 transition">Placements</Link>
              <Link to="/testimonials" className="text-slate-700 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-300 transition">Stories</Link>
              <Link to="/admissions" className="text-slate-700 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-300 transition">Admissions</Link>
              <Link to="/contact" className="text-slate-700 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-300 transition">Contact</Link>
              {isAdmin && (
                <Link to="/admin" className="text-cyan-400 hover:text-cyan-300 font-semibold transition">Admin</Link>
              )}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {isAdmin ? (
                <button
                  onClick={handleLogout}
                  className="rounded-full border border-red-400/60 bg-red-50 px-3 py-2 text-xs sm:text-sm font-semibold text-red-600 transition hover:bg-red-100 dark:border-red-400/40 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/40"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/admin"
                  className="rounded-full border border-cyan-400/60 bg-cyan-50 px-3 py-2 text-xs sm:text-sm font-semibold text-cyan-700 transition hover:bg-cyan-100 dark:border-cyan-400/40 dark:bg-cyan-900/20 dark:text-cyan-300 dark:hover:bg-cyan-900/40"
                >
                  Admin Login
                </Link>
              )}

              <button
                onClick={toggleTheme}
                className="rounded-full border border-slate-300/70 bg-slate-100 px-3 py-2 text-xs sm:text-sm font-semibold text-slate-900 transition hover:bg-slate-200 dark:border-cyan-500/40 dark:bg-cyan-400 dark:text-black dark:hover:bg-cyan-300"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="rounded-full border border-slate-300/70 bg-white/90 px-3 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-sm dark:border-cyan-500/40 dark:bg-slate-900/80 dark:text-white md:hidden"
              >
                {mobileMenuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200/70 bg-white/95 px-4 py-4 dark:border-cyan-500/20 dark:bg-black/95 md:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium">
              <Link to="/" className="text-slate-700 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-300 transition">Home</Link>
              <Link to="/courses" className="text-slate-700 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-300 transition">Courses</Link>
              <Link to="/aptitude-learning" className="text-slate-700 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-300 transition">Aptitude</Link>
              <Link to="/placements" className="text-slate-700 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-300 transition">Placements</Link>
              <Link to="/testimonials" className="text-slate-700 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-300 transition">Stories</Link>
              <Link to="/admissions" className="text-slate-700 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-300 transition">Admissions</Link>
              <Link to="/contact" className="text-slate-700 hover:text-cyan-500 dark:text-gray-300 dark:hover:text-cyan-300 transition">Contact</Link>
              {isAdmin && (
                <Link to="/admin" className="text-cyan-400 hover:text-cyan-300 font-semibold transition">Admin</Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* TOP ANNOUNCEMENT */}
      <div className="bg-cyan-400 dark:bg-cyan-500 text-black dark:text-slate-100 py-3 overflow-hidden whitespace-nowrap">
        <div className="animate-pulse text-center font-bold tracking-widest">
          ADMISSIONS OPEN 2026 • Bsc • BCA • B.COM • BBA • PLACEMENTS • MODERN CAMPUS • APPLY NOW — ADITYA EPOCH
        </div>
      </div>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/aptitude-learning" element={<AptitudeLearning />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/admin"
          element={
            isAdmin ? (
              <AdminPanel authToken={authToken} onLogout={handleLogout} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
      </Routes>

    </div>
  );
}

export default App;