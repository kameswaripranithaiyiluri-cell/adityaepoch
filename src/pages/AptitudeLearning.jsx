import { FaRocket, FaCode, FaBookOpen, FaHeadphones, FaStar, FaInfinity, FaGraduationCap, FaGlobe } from 'react-icons/fa';

export default function AptitudeLearning() {
  return (
    <>
      {/* HERO SECTION */}
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
              Learning Platform
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Aptitude</span>{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">Learning</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive training programs designed to make students industry-ready from day one
          </p>
        </div>
      </section>

      {/* BRAHMASTRA SECTION - ADITYA ABHYAS ONLINE PORTAL */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-400/3 to-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
          {/* Floating particles */}
          <div className="absolute top-10 right-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-1/3 left-10 w-3 h-3 bg-purple-500/30 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
          <div className="absolute top-1/3 right-10 w-2 h-2 bg-cyan-400/30 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
              <FaRocket className="text-cyan-400 animate-bounce" />
              <span className="text-cyan-300 font-semibold tracking-wider text-sm">DEGREE STUDENTS BRAHMASTRA</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Aditya Abhyas
              </span>
              <br />
              <span className="text-white">Online Portal</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              India's most comprehensive online learning platform — your ultimate weapon for placement success
            </p>
          </div>

          {/* Three Main Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Abhyas Aptitude Portal */}
            <div className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/50 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/20 overflow-hidden text-center">
              {/* Glow overlay */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 p-3 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 border border-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                  <FaBookOpen className="w-full h-full text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  Abhyas Aptitude
                </h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <FaInfinity className="text-cyan-400 text-sm" />
                  <span className="text-cyan-400 font-bold text-3xl">3,00,000+</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Access a massive repository of <span className="text-cyan-300 font-semibold">3 lakh+ aptitude practice questions</span> covering quantitative aptitude, logical reasoning, verbal ability, and data interpretation. Smart analytics track your progress and identify weak areas for targeted improvement.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Quantitative', 'Logical', 'Verbal', 'Data Interpretation'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Abhyas Coding */}
            <div className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/20 hover:border-purple-400/50 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-400/20 overflow-hidden text-center">
              {/* Glow overlay */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl group-hover:bg-purple-400/20 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 p-3 rounded-2xl bg-gradient-to-br from-purple-400/20 to-purple-600/20 border border-purple-400/30 group-hover:scale-110 transition-transform duration-300">
                  <FaCode className="w-full h-full text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  Abhyas Coding
                </h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <FaStar className="text-purple-400 text-sm" />
                  <span className="text-purple-400 font-bold text-3xl">6,000+</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Master programming with <span className="text-purple-300 font-semibold">6,000+ coding practice tests</span> across multiple languages including C, C++, Java, Python, and more. From basic syntax to advanced DSA — build coding confidence one problem at a time.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['C', 'C++', 'Java', 'Python', 'DSA'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-purple-400/10 border border-purple-400/20 text-purple-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Abhyas Vani */}
            <div className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-pink-500/20 hover:border-pink-400/50 hover:-translate-y-3 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-400/20 overflow-hidden text-center">
              {/* Glow overlay */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-400/10 rounded-full blur-2xl group-hover:bg-pink-400/20 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 p-3 rounded-2xl bg-gradient-to-br from-pink-400/20 to-pink-600/20 border border-pink-400/30 group-hover:scale-110 transition-transform duration-300">
                  <FaHeadphones className="w-full h-full text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
                  Abhyas Vani
                </h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <FaGlobe className="text-pink-400 text-sm" />
                  <span className="text-pink-400 font-bold text-2xl">LSRW Skills</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Comprehensive <span className="text-pink-300 font-semibold">LSRW (Listening, Speaking, Reading, Writing)</span> skill development program. Enhance your communication prowess with interactive exercises, pronunciation guides, group discussions, and writing assessments — all in one integrated platform.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Listening', 'Speaking', 'Reading', 'Writing'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-pink-400/10 border border-pink-400/20 text-pink-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner - Summary */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-2xl blur opacity-30 animate-pulse" />
            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <FaGraduationCap className="text-cyan-400 text-4xl flex-shrink-0" />
                  <div className="text-left">
                    <h4 className="text-white text-xl font-bold mb-1">The Ultimate Brahmastra for Degree Students</h4>
                    <p className="text-gray-400 text-sm">
                      One platform. Infinite possibilities. Your placement journey starts here.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="text-center">
                    <p className="text-cyan-400 font-bold text-2xl">3,06,000+</p>
                    <p className="text-gray-500 text-xs">Total Questions & Tests</p>
                  </div>
                  <div className="w-px h-12 bg-gray-700" />
                  <div className="text-center">
                    <p className="text-purple-400 font-bold text-2xl">4 Skills</p>
                    <p className="text-gray-500 text-xs">LSRW Mastery</p>
                  </div>
                  <div className="w-px h-12 bg-gray-700" />
                  <div className="text-center">
                    <p className="text-pink-400 font-bold text-2xl">100%</p>
                    <p className="text-gray-500 text-xs">Placement Prep</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-24 px-6 bg-slate-100 dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-cyan-400">What We</span> Offer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'CRT Training From Day One', icon: '📚', desc: 'Campus Recruitment Training integrated from the very first year of college, ensuring students are prepared for placements right from the start.' },
              { title: 'Abhyas Aptitude Portal', icon: '💻', desc: 'Dedicated online portal for aptitude practice, mock tests, and performance assessments available 24/7.' },
              { title: 'Communication Development Skills', icon: '🗣️', desc: 'Focused training on verbal, written & interpersonal communication to build confidence and professional presence.' },
              { title: 'Industry Ready Students', icon: '🎯', desc: 'Curriculum and training aligned with current industry requirements to make students job-ready from day one.' },
              { title: 'Library', icon: '📖', desc: 'Well-stocked library with academic resources, competitive exam materials, and digital learning resources.' },
              { title: 'Mandatory Certificate Courses', icon: '📜', desc: 'Essential certification programs to enhance student credentials and boost employability.' },
              { title: 'Group Decisions Training', icon: '🤝', desc: 'Team-based problem solving, group discussion practice, and collaborative decision-making sessions.' },
              { title: 'Mock Interviews', icon: '🎤', desc: 'Simulated interview sessions with expert feedback, evaluation, and personalized improvement plans.' },
              { title: 'Internship Opportunities', icon: '💼', desc: 'Paid and unpaid internship placements with partner organizations for real-world experience.' },
              { title: 'Global Industry Partnerships', icon: '🌍', desc: 'Collaborations with leading global companies for training, workshops, and campus hiring drives.' },
              { title: 'Placement Offices in Major Cities', icon: '🏢', desc: 'Dedicated placement offices in key cities providing local support and job opportunities for students.' },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-gray-950 p-8 rounded-3xl border border-slate-200/60 dark:border-cyan-500/20 text-center hover:-translate-y-3 hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 p-3 rounded-2xl bg-cyan-50 dark:bg-gray-900 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                <p className="text-slate-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY APTITUDE LEARNING */}
      <section className="py-24 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400">Why</span> Aptitude Learning?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-16" />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: '98%', label: 'Placement Rate', desc: 'Our training methodology delivers exceptional placement results year after year.' },
              { number: '500+', label: 'Companies Tie-ups', desc: 'Strong industry connections ensuring diverse placement opportunities.' },
              { number: '10K+', label: 'Students Trained', desc: 'Thousands of successful students trained and placed every academic year.' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-100 dark:bg-black p-8 rounded-3xl border border-slate-200/60 dark:border-cyan-500/20 hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-5xl font-bold text-cyan-400 mb-3">{item.number}</h3>
                <h4 className="text-xl font-bold mb-3">{item.label}</h4>
                <p className="text-slate-500 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}