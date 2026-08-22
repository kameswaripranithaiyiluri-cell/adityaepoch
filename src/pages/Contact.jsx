import { useState } from 'react';
import { getApiUrl } from '../lib/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(getApiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to server. Please make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        </div>
        
        <div className="relative text-center max-w-4xl z-10">
          <div className="inline-block mb-6">
            <span className="text-sm font-bold uppercase tracking-widest bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full border border-cyan-400/30">
              Get in Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Contact</span>{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us for admissions, courses, or any queries.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-cyan-50/30 dark:from-gray-950 dark:to-cyan-950/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-cyan-400/20 shadow-lg hover:scale-105 transition transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-2xl">
                  📍
                </div>
                <h3 className="text-2xl font-bold text-cyan-400">Address</h3>
              </div>
              <p className="text-slate-700 dark:text-gray-300 pl-20">
                Aditya Degree College<br />
                Rajahmundry, Andhra Pradesh<br />
                India
              </p>

              <div className="mt-6 ml-20 overflow-hidden rounded-2xl border border-cyan-400/20 shadow-inner">
                <iframe
                  title="Aditya Degree College Location"
                  src="https://www.google.com/maps?q=Aditya+Degree+College%2C+Rajahmundry%2C+Andhra+Pradesh&output=embed"
                  className="w-full h-64 border-0"
                  loading="eager"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Aditya+Degree+College+Rajahmundry+Andhra+Pradesh"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 pl-20 text-sm font-semibold text-cyan-500 hover:text-cyan-400"
              >
                Open in Google Maps ↗
              </a>
            </div>

            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-amber-400/20 shadow-lg hover:scale-105 transition transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl">
                  📞
                </div>
                <h3 className="text-2xl font-bold text-amber-400">Phone</h3>
              </div>
              <p className="text-slate-700 dark:text-gray-300 pl-20">
                <a href="tel:+917036888530" className="hover:text-cyan-400 block">+91 70368 88530</a>
                <a href="tel:+917331186662" className="hover:text-cyan-400 block">+91 73311 86662</a>
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-purple-400/20 shadow-lg hover:scale-105 transition transform">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
                  ✉️
                </div>
                <h3 className="text-2xl font-bold text-purple-400">Email</h3>
              </div>
              <p className="text-slate-700 dark:text-gray-300 pl-20">
                <a href="mailto:adcrjy@aditya.adc.in" className="hover:text-cyan-400 block">adcrjy@aditya.adc.in</a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-10 rounded-3xl border border-cyan-400/20 shadow-xl">
            <h3 className="text-3xl font-bold text-cyan-400 mb-6">Send Message</h3>
            
            {submitted ? (
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 border border-green-400/50 rounded-3xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-3">Message Sent Successfully!</h3>
                <p className="text-slate-700 dark:text-gray-300">
                  Thank you for contacting Aditya Epoch. Your message has been sent to our team. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition transform"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                {error && (
                  <div className="bg-red-100/80 dark:bg-red-900/30 border border-red-400/50 rounded-2xl p-4 text-center mb-6">
                    <p className="text-red-700 dark:text-red-300 font-bold">{error}</p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full p-4 pl-12 rounded-xl border border-cyan-400/30 bg-white/80 dark:bg-gray-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition"
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">👤</span>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full p-4 pl-12 rounded-xl border border-cyan-400/30 bg-white/80 dark:bg-gray-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition"
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">✉️</span>
                  </div>
                  
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      required
                      className="w-full p-4 pl-12 rounded-xl border border-cyan-400/30 bg-white/80 dark:bg-gray-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition"
                    />
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">📱</span>
                  </div>
                  
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="5"
                      required
                      className="w-full p-4 pl-12 rounded-xl border border-cyan-400/30 bg-white/80 dark:bg-gray-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition resize-none"
                    ></textarea>
                    <span className="absolute left-4 top-6 text-cyan-400">💬</span>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full px-6 py-4 rounded-full font-bold transition transform hover:scale-105 shadow-lg ${
                      loading
                        ? 'bg-gray-400 cursor-not-allowed text-black'
                        : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:shadow-cyan-400/30'
                    }`}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
