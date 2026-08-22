import { Link } from 'react-router-dom';
import heroImg from '../assets/campus-image.jpg';
import principalVisionaryImg from '../assets/principal-visionary.jpeg';
import vicePrincipalVisionaryImg from '../assets/vice-principal-visionary.jpeg';

export default function Home() {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            className="w-full h-full object-cover opacity-70"
            alt="Campus background"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/45 to-cyan-950/70"></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-amber-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-500"></div>

        <div className="relative text-center max-w-4xl z-10">
<h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 dark:text-white mb-6">
            <span className="block font-aditya-epoch text-4xl md:text-5xl">
              Welcome to
            </span>
            <span className="block mt-4 font-aditya-epoch">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient text-6xl md:text-8xl" style={{ letterSpacing: '6px', textShadow: '0 0 40px rgba(6,182,212,0.5)', fontWeight: '800' }}>Aditya</span>{' '}
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent animate-gradient text-6xl md:text-8xl" style={{ letterSpacing: '8px', textShadow: '0 0 40px rgba(251,191,36,0.5)', fontWeight: '800' }}>Epoch</span>
            </span>
          </h1>

          <p className="mt-4 text-lg md:text-xl font-semibold text-slate-700 dark:text-gray-300 italic tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
            Learn. Lead. Leave a Legacy.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/admissions" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-full hover:scale-105 transition transform shadow-lg shadow-cyan-400/30"
            >
              Apply Now
            </Link>
            <button 
              onClick={handleScroll}
              className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-slate-900 dark:text-white font-bold rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 transition transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 px-6 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { number: '23+', label: 'Years Excellence' },
            { number: '10K+', label: 'Students' },
            { number: '120+', label: 'Recruiters' },
            { number: '98%', label: 'Placements' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-100 dark:bg-gray-950 border border-slate-200/60 dark:border-cyan-500/20 rounded-3xl p-10 text-center hover:scale-105 transition duration-500"
            >
              <h2 className="text-5xl font-bold text-cyan-400">{item.number}</h2>
              <p className="text-slate-500 dark:text-gray-400 mt-4">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACCREDITATION HIGHLIGHTS */}
      <section className="py-12 px-6 bg-cyan-50 dark:bg-cyan-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-950 rounded-3xl p-10 border border-slate-200/60 dark:border-cyan-500/20 shadow-sm">
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">NAAC Accredited</h3>
            <p className="text-slate-700 dark:text-gray-300 leading-7">Our college is accredited by NAAC with a B++ grade, reflecting excellence in academics, research and student success.</p>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-3xl p-10 border border-slate-200/60 dark:border-cyan-500/20 shadow-sm">
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">Autonomous Institution</h3>
              <p className="text-slate-700 dark:text-gray-300 leading-7">Aditya Epoch is an autonomous college platform, offering flexible curriculum design, strong industry links and higher academic independence.</p>
          </div>
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section className="py-24 px-6 bg-slate-100 dark:bg-gray-950">
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">Our Courses</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'BSC',
              desc: 'Scientific degree with core subjects, practical labs, and AI-focused electives.',
            },
            {
              name: 'BCA',
              desc: 'Computer applications degree focused on software development, programming, and IT career skills.',
            },
            {
              name: 'B.Com',
              desc: 'Commerce degree emphasizing accounting, finance, business law, and corporate skills.',
            },
          ].map((course, i) => (
            <div
              key={i}
              className="bg-white dark:bg-black p-8 rounded-3xl hover:-translate-y-3 transition duration-500 border border-slate-200/60 dark:border-cyan-500/20"
            >
              <div className="w-16 h-16 bg-cyan-400 text-black rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
                {i + 1}
              </div>
              <h3 className="text-3xl font-bold mb-4">{course.name}</h3>
              <p className="text-slate-500 dark:text-gray-400">{course.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
          >
            Other Courses
          </Link>
        </div>
      </section>

      {/* PLACEMENTS PREVIEW */}
      <section className="py-24 px-6 bg-slate-100 dark:bg-gray-950">
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">Placements</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { value: '98%', label: 'Placement Rate' },
            { value: '16,210', label: '2025-26 Campus Placements' },
            { value: '120+', label: 'Companies' },
            { value: '1K', label: 'Students Placed Every Year' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-black border border-slate-200/60 dark:border-cyan-500/20 rounded-3xl p-10 text-center hover:scale-105 transition duration-500"
            >
              <h3 className="text-4xl font-bold text-cyan-400">{item.value}</h3>
              <p className="text-slate-500 dark:text-gray-400 mt-4">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VISIONARIES SECTION */}
      <section className="py-24 px-6 bg-white dark:bg-black text-slate-900 dark:text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-500 mb-4">Our Visionaries</p>
            <h2 className="text-5xl font-bold">Guiding the Future of Aditya Epoch</h2>
            <p className="text-slate-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
              Meet the visionary leaders who are shaping our campus culture, academic excellence, and student success.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/70 dark:border-cyan-500/20 bg-slate-50 dark:bg-gray-950 p-10 shadow-xl">
              <div className="overflow-hidden rounded-3xl mb-8 h-80 bg-slate-200 dark:bg-gray-900 flex items-center justify-center">
                <img src={principalVisionaryImg} alt="Principal Smt. P. Lakshmi Saroja" className="w-full max-h-full object-contain object-center" />
              </div>
              <h3 className="text-3xl font-semibold text-cyan-400 mb-4">Smt. P. Lakshmi Saroja</h3>
              <p className="text-slate-700 dark:text-gray-300 leading-8">
                As Principal, Smt. P. Lakshmi Saroja leads with compassion and clarity, nurturing a strong campus culture, academic excellence, and student-centered programs. Her vision ensures every student receives the guidance and support needed to thrive in a modern educational environment.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/70 dark:border-cyan-500/20 bg-slate-50 dark:bg-gray-950 p-10 shadow-xl">
              <div className="overflow-hidden rounded-3xl mb-8 h-80 bg-slate-200 dark:bg-gray-900 flex items-center justify-center">
                <img src={vicePrincipalVisionaryImg} alt="Vice Principal Sri G. Hemasundar Rao" className="w-full max-h-full object-contain object-center" />
              </div>
              <h3 className="text-3xl font-semibold text-cyan-400 mb-4">Sri G. Hemasundar Rao</h3>
              <p className="text-slate-700 dark:text-gray-300 leading-8">
                As Vice Principal, Sri G. Hemasundar Rao supports strategic management and student engagement with an emphasis on operational excellence. His leadership builds strong systems, mentor-led growth, and a campus environment that empowers every student to achieve their potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="py-24 px-6 bg-white dark:bg-black text-slate-900 dark:text-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-cyan-400 mb-6">Get in Touch</h2>
            <p className="text-slate-700 dark:text-gray-300 leading-8 mb-8">
              Reach out for admissions, course details, placement support or campus visits. Our team is ready to help you join the right program.
            </p>
            <div className="grid gap-6">
              <div className="bg-slate-100 dark:bg-gray-950 p-8 rounded-3xl border border-slate-200/60 dark:border-cyan-500/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">Address</h3>
                <p className="text-slate-600 dark:text-gray-400">Aditya Degree College<br />Rajahmundry, Andhra Pradesh<br />India</p>
              </div>
              <div className="bg-slate-100 dark:bg-gray-950 p-8 rounded-3xl border border-slate-200/60 dark:border-cyan-500/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">Phone</h3>
                <p className="text-slate-600 dark:text-gray-400">+91 70368 88530<br />+91 73311 86662</p>
              </div>
              <div className="bg-slate-100 dark:bg-gray-950 p-8 rounded-3xl border border-slate-200/60 dark:border-cyan-500/20">
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">Email</h3>
                <p className="text-slate-600 dark:text-gray-400">adcrjy@aditya.adc.in</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 dark:bg-gray-950 p-12 rounded-3xl border border-slate-200/60 dark:border-cyan-500/20 shadow-lg shadow-slate-500/5">
            <h3 className="text-4xl font-bold text-cyan-400 mb-6">Contact Aditya Epoch</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-8">
              Want more detail? Visit the contact page for a message form and full campus information.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-4 text-black font-bold hover:bg-cyan-300 transition"
            >
              Open Contact Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}