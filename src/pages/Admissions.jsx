import React, { useState } from "react";
import enrollImage from '../assets/enroll-image.jpg';
import { getApiUrl } from '../lib/api';

export default function Admissions() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    course: "",
    qualification: "",
    tenthMarks: "",
    interMarks: "",
    address: "",
    city: "",
    state: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitized = name === 'phone' ? value.replace(/\D/g, '') : value;
    setFormData({
      ...formData,
      [name]: sanitized,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(getApiUrl('/api/admissions'), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setShowPopup(true);
        setTimeout(() => {
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            dob: "",
            course: "",
            qualification: "",
            tenthMarks: "",
            interMarks: "",
            address: "",
            city: "",
            state: "",
          });
        }, 1000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to server. Please make sure the backend is running.");
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
              Admissions 2026
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Aditya Epoch</span>
            <span className="block text-3xl md:text-4xl font-normal mt-2 text-slate-600 dark:text-gray-400">Admissions Open 2026</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-gray-300 max-w-2xl mx-auto">
            Join Aditya Epoch and begin your journey towards excellence.
          </p>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-cyan-50/30 dark:from-gray-950 dark:to-cyan-950/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Online Admissions",
              icon: "🌐",
              desc: "Apply from anywhere using our online admission portal.",
              color: "cyan",
            },
            {
              title: "Quick Registration",
              icon: "📝",
              desc: "Simple registration process with instant confirmation.",
              color: "amber",
            },
            {
              title: "Instant Verification",
              icon: "✅",
              desc: "Fast document verification and approval process.",
              color: "purple",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl text-center border border-cyan-400/20 dark:border-cyan-500/30 hover:scale-105 transition transform shadow-lg"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-400 to-amber-400 rounded-2xl flex items-center justify-center text-4xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 px-6 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Student Registration Form
            </h2>
            <p className="text-slate-600 dark:text-gray-400">Fill in your details to apply for admission</p>
          </div>

          {submitted && (
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 border border-green-400/50 rounded-3xl p-8 text-center mb-8 shadow-lg">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-3">
                Application Submitted Successfully!
              </h3>
              <p className="text-green-600 dark:text-green-400">
                Your details have been sent to the admissions office. We will contact you shortly.
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-100/80 dark:bg-red-900/30 border border-red-400/50 rounded-3xl p-6 text-center mb-8">
              <p className="text-red-700 dark:text-red-300 font-bold">{error}</p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-slate-50 to-cyan-50/30 dark:from-gray-900 dark:to-cyan-950/20 p-10 rounded-3xl border border-cyan-400/20 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pl-12 rounded-xl border border-cyan-400/30 bg-white/80 dark:bg-gray-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">👤</span>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pl-12 rounded-xl border border-cyan-400/30 bg-white/80 dark:bg-gray-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">✉️</span>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pl-12 rounded-xl border border-cyan-400/30 bg-white/80 dark:bg-gray-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">📱</span>
              </div>

              <div className="relative">
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pl-12 rounded-xl border border-cyan-400/30 bg-white/80 dark:bg-gray-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">🎂</span>
              </div>

              <div className="relative">
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pl-12 rounded-xl border border-cyan-400/30 bg-white/80 dark:bg-gray-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition appearance-none"
                >
                  <option value="">Select Course</option>
                  <option value="BCA">BCA - Computer Applications (Software Applications)</option>
                  <option value="BSc">B.Sc - Science</option>
                  <option value="BCom">B.Com - Commerce</option>
                  <option value="BBA">BBA - Business Administration</option>
                </select>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">📚</span>
              </div>

              <div className="relative">
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pl-12 rounded-xl border border-cyan-400/30 bg-white/80 dark:bg-gray-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition appearance-none"
                >
                  <option value="">Qualification</option>
                  <option value="Intermediate">Intermediate (MPC/MEC/CEC)</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Other">Other</option>
                </select>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">🎓</span>
              </div>

              <div className="relative">
                <input
                  type="number"
                  name="tenthMarks"
                  placeholder="10th Class Marks (%)"
                  value={formData.tenthMarks}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pl-12 rounded-xl border border-cyan-400/30 bg-white/80 dark:bg-gray-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">📘</span>
              </div>

              <div className="relative">
                <input
                  type="number"
                  name="interMarks"
                  placeholder="Inter Marks (%)"
                  value={formData.interMarks}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pl-12 rounded-xl border border-cyan-400/30 bg-white/80 dark:bg-gray-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">📗</span>
              </div>

              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="md:col-span-2 p-4 rounded-xl border border-cyan-400/30 bg-white/80 dark:bg-gray-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition"
              />

              <div className="relative">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pl-12 rounded-xl border border-cyan-400/30 bg-white/80 dark:bg-gray-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">🏙️</span>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full p-4 pl-12 rounded-xl border border-cyan-400/30 bg-white/80 dark:bg-gray-800/80 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-400 transition"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400">🗺️</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full mt-8 font-bold py-4 rounded-full transition transform hover:scale-105 shadow-lg ${
                loading
                  ? "bg-gray-400 cursor-not-allowed text-black"
                  : "bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:shadow-cyan-400/30"
              }`}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white dark:bg-gray-950 p-8 rounded-3xl max-w-md w-full text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">
              Application Submitted!
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Thank you for applying to Aditya Epoch. Your registration details have been sent successfully. The admissions team will contact you soon.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-cyan-400 px-6 py-3 rounded-full font-bold text-black"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* WHY CAMPUSX */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-cyan-50/30 dark:from-gray-950 dark:to-cyan-950/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Why Enroll at Aditya Epoch?
            </h2>
            <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover the advantages that make us the preferred choice for aspiring students
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { icon: "📊", title: "98% Placement Rate", desc: "High placement record with top companies" },
                { icon: "👨‍🏫", title: "Expert Faculty", desc: "Experienced professors with industry knowledge" },
                { icon: "🏫", title: "Modern Infrastructure", desc: "State-of-the-art facilities and labs" },
                { icon: "🤝", title: "Industry Partnerships", desc: "Strong connections with leading organizations" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-cyan-400/20 hover:scale-105 transition transform">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">{item.title}</h3>
                    <p className="text-slate-600 dark:text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

             <div className="relative group">
               <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-amber-400 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
               <img
                 src={enrollImage}
                 alt="Campus"
                 className="rounded-3xl shadow-2xl w-full h-96 object-cover relative z-10"
                 onError={(e) => {
                   e.target.src = enrollImage;
                 }}
               />
             </div>
          </div>
        </div>
      </section>
    </>
  );
}
