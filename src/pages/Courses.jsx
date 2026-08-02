import { FaBriefcase, FaChartLine, FaLaptopCode, FaCalculator, FaFileInvoiceDollar, FaBullhorn, FaUserTie, FaChartBar, FaUsers, FaLightbulb, FaShoppingCart, FaRocket, FaDatabase, FaShieldAlt, FaLaptopHouse, FaArrowRight } from 'react-icons/fa';

const careerRoles = [
  { title: 'Financial Analysts', icon: FaChartLine, color: '#06D6A0', desc: 'Analyze financial data to guide business decisions and investment strategies.' },
  { title: 'Management Accountant', icon: FaCalculator, color: '#118AB2', desc: 'Prepare financial reports and manage internal accounting processes.' },
  { title: 'Software Developers', icon: FaLaptopCode, color: '#EF476F', desc: 'Design, build, and maintain software applications across platforms.' },
  { title: 'Auditors & Assurance', icon: FaFileInvoiceDollar, color: '#FFD166', desc: 'Examine financial records to ensure accuracy and regulatory compliance.' },
  { title: 'Tax consultants', icon: FaCalculator, color: '#06D6A0', desc: 'Provide expert guidance on tax planning, compliance, and optimization.' },
  { title: 'Sales and Marketing Managers', icon: FaBullhorn, color: '#EF476F', desc: 'Lead marketing campaigns and drive revenue growth through strategic sales.' },
  { title: 'Financial Managers', icon: FaUserTie, color: '#118AB2', desc: 'Oversee financial health and develop long-term financial strategies.' },
  { title: 'Business Analysts', icon: FaChartBar, color: '#FFD166', desc: 'Bridge the gap between IT and business to optimize processes and systems.' },
  { title: 'Human Resources Manager', icon: FaUsers, color: '#06D6A0', desc: 'Manage talent acquisition, employee relations, and organizational culture.' },
  { title: 'Entrepreneurs', icon: FaLightbulb, color: '#EF476F', desc: 'Launch and scale innovative ventures with strong business acumen.' },
  { title: 'E-Commerce Specialists', icon: FaShoppingCart, color: '#118AB2', desc: 'Drive online sales and optimize digital storefronts for maximum conversion.' },
  { title: 'Digital Marketing Specialists', icon: FaRocket, color: '#FFD166', desc: 'Create and execute data-driven digital marketing strategies across channels.' },
  { title: 'Data Scientist and Data Analysts', icon: FaDatabase, color: '#06D6A0', desc: 'Extract actionable insights from complex datasets using advanced analytics.' },
  { title: 'Cyber Security Specialists', icon: FaShieldAlt, color: '#EF476F', desc: 'Protect organizational assets from cyber threats and security breaches.' },
  { title: 'IT Consultants', icon: FaLaptopHouse, color: '#118AB2', desc: 'Advise organizations on technology strategy and digital transformation.' },
];

export default function Courses() {
  const handleScrollToDetails = () => {
    const detailsSection = document.getElementById('course-details');
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* COURSES HERO */}
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
              Academic Programs
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Our</span>{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">Courses</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our diverse range of undergraduate and specialized programs designed for career success
          </p>
          <button
            onClick={handleScrollToDetails}
            className="mt-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition transform shadow-lg"
          >
            View All Courses
          </button>
        </div>
      </section>

      {/* COURSES DETAILS */}
      <section id="course-details" className="py-24 px-6 bg-slate-100 dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">Available Courses</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'B.Sc',
                desc: 'Bachelor of Science',
                specs: ['Computer Science', 'Mathematics', 'Chemistry', 'Data Science', 'Artificial Intelligence', 'Health Care Management', 'Animation'],
                fullDesc: 'Comprehensive science education combining theoretical knowledge with practical applications in cutting-edge technologies and modern lab work.',
              },
              { 
                name: 'BCA', 
                desc: 'Bachelor of Computer Applications', 
                specs: ['General', 'Data Science'],
                fullDesc: 'Specialized computing program designed to develop expert software developers and IT professionals for the modern digital industry.',
              },
              { 
                name: 'B.Com', 
                desc: 'Bachelor of Commerce',
                specs: ['Computer', 'General', 'BFSI', 'CA'],
                fullDesc: 'Advanced commerce education preparing students for rewarding careers in finance, accounting, and business management sectors.',
              },
              { 
                name: 'BBA', 
                desc: 'Bachelor of Business Administration',
                specs: ['Honours', 'Digital Marketing', 'Business Analytics'],
                fullDesc: 'Comprehensive business program equipping students with leadership and management skills for success in corporate and entrepreneurial ventures.',
              },
            ].map((course, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-950 p-8 rounded-3xl hover:-translate-y-3 transition duration-500 border border-slate-200/60 dark:border-cyan-500/20"
              >
                <div className="w-16 h-16 bg-cyan-400 text-black rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
                  {i + 1}
                </div>

                <h3 className="text-3xl font-bold mb-2 text-cyan-400">{course.name}</h3>
                <p className="text-slate-700 dark:text-gray-300 mb-4">{course.desc}</p>
                {course.specs && (
                  <ul className="text-slate-500 dark:text-gray-400 list-disc list-inside mb-4">
                    {course.specs.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                )}
                <p className="text-slate-500 dark:text-gray-400">
                  {course.fullDesc ? course.fullDesc : 'Industry-focused learning with modern practical education and placement support.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/3 to-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '0.5s' }} />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-6 py-2 mb-6">
              <FaBriefcase className="text-cyan-400 animate-bounce" />
              <span className="text-cyan-300 font-semibold tracking-wider text-sm">ALL COURSES</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Career Opportunities
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-4" />
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Our graduates can pursue a wide range of career opportunities across multiple fields including:
            </p>
          </div>

          {/* Career Roles Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {careerRoles.map((role, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/40 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-400 hover:shadow-xl hover:shadow-cyan-400/10 overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background: `radial-gradient(200px circle at center, ${role.color}15, transparent)`,
                  }}
                />

                {/* Icon + Arrow */}
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-12 h-12 p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      backgroundColor: `${role.color}15`,
                      border: `1px solid ${role.color}30`,
                    }}
                  >
                    <role.icon className="w-full h-full" style={{ color: role.color }} />
                  </div>
                  <FaArrowRight
                    className="text-gray-600 text-sm mt-1 group-hover:translate-x-1 group-hover:opacity-100 opacity-0 transition-all duration-300"
                    style={{ color: role.color }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-white font-bold text-base mb-2 group-hover:translate-x-0.5 transition-transform duration-300"
                >
                  {role.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-16 text-center">
            <div className="inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-2xl blur opacity-30 animate-pulse" />
              <div className="relative px-8 py-5 bg-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700/50">
                <p className="text-gray-300 text-lg">
                  <span className="text-cyan-400 font-bold">Endless possibilities</span> await with our 
                  <span className="text-purple-400 font-bold"> diverse range of courses</span> — 
                  <span className="text-cyan-400"> build your future</span> at Aditya
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSE HIGHLIGHTS */}
      <section className="py-24 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">Why Choose Our Courses?</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Expert Faculty', desc: 'Highly qualified & experienced instructors' },
              { title: 'Industry Ready', desc: 'Curriculum aligned with industry standards' },
              { title: '100% Placements', desc: 'Strong placement record & internships' },
              { title: 'Modern Labs', desc: 'State-of-the-art facilities & resources' },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-100 dark:bg-gray-950 p-8 rounded-3xl border border-slate-200/60 dark:border-cyan-500/20 text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}