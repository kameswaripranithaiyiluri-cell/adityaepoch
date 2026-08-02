import { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const apiBase = import.meta.env.VITE_BACKEND_URL || '';
      const res = await fetch(`${apiBase}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        // Store token and user info
        localStorage.setItem('auth_token', data.token);
        localStorage.setItem('auth_user', JSON.stringify(data.user));
        onLogin(data.token, data.user);
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Cannot connect to the server. Please make sure the backend is running and reachable from this device.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-6 pt-32">
      <div className="w-full max-w-md bg-slate-100 dark:bg-gray-900 p-10 rounded-3xl border border-slate-200/60 dark:border-cyan-500/20">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">Admin Login</h2>

        {error && (
          <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-500 rounded-xl p-4 mb-6 text-center">
            <p className="text-red-700 dark:text-red-300 font-semibold">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full bg-white dark:bg-black border border-slate-300/50 dark:border-cyan-500/40 text-slate-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-white dark:bg-black border border-slate-300/50 dark:border-cyan-500/40 text-slate-900 dark:text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-400"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-bold transition ${
              loading
                ? 'bg-gray-400 cursor-not-allowed text-black'
                : 'bg-cyan-400 text-black hover:scale-105'
            }`}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}