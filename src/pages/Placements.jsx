import { useState } from 'react';
import { FaGoogle, FaAmazon, FaMicrosoft, FaBuilding, FaGripLines, FaAward, FaHandshake } from 'react-icons/fa';
import {
  SiTcs,
  SiInfosys,
  SiWipro,
  SiAccenture,
  SiRedhat,
  SiCisco,
} from 'react-icons/si';

const companies = [
  {
    name: 'Google',
    icon: FaGoogle,
    color: '#4285F4',
    founded: '1998',
    sector: 'Technology / Cloud & AI',
    work: 'Software engineering, cloud infrastructure, AI solutions, product development',
    roles: 'Software Engineer, Data Analyst, Product Engineer',
    description: 'Google is a global technology leader focused on building products and platforms that help people access information, work faster, and innovate with AI and cloud technologies.'
  },
  {
    name: 'Amazon',
    icon: FaAmazon,
    color: '#FF9900',
    founded: '1994',
    sector: 'E-commerce / Cloud',
    work: 'Cloud services, logistics, application engineering, customer technology',
    roles: 'Operations Engineer, Software Developer, Cloud Support Engineer',
    description: 'Amazon is one of the world’s largest technology and logistics companies, offering global cloud, retail, and digital services across multiple business domains.'
  },
  {
    name: 'Microsoft',
    icon: FaMicrosoft,
    color: '#00A4EF',
    founded: '1975',
    sector: 'Software / Cloud',
    work: 'Enterprise software, cloud platforms, AI, cybersecurity, and business solutions',
    roles: 'Software Engineer, Analyst, Cloud Engineer',
    description: 'Microsoft empowers businesses and individuals with cloud solutions, productivity tools, and AI-driven platforms for digital transformation.'
  },
  { name: 'TCS', icon: SiTcs, color: '#1C3C6A', founded: '1968', sector: 'IT Services', work: 'IT consulting, software delivery, enterprise services', roles: 'Developer, Analyst, Consultant', description: 'TCS is a global IT services and consulting company focused on digital transformation and enterprise technology solutions.' },
  { name: 'Infosys', icon: SiInfosys, color: '#007CC3', founded: '1981', sector: 'IT Services', work: 'Software consulting, digital engineering, automation', roles: 'Systems Engineer, Associate Consultant', description: 'Infosys helps businesses modernize through digital platforms, software engineering, product innovation, and process automation.' },
  { name: 'Wipro', icon: SiWipro, color: '#341C75', founded: '1945', sector: 'IT Services', work: 'Application development, digital transformation, cybersecurity', roles: 'Software Engineer, Analyst, Infrastructure Engineer', description: 'Wipro delivers digital and consulting services, building next-generation technology products and enterprise solutions.' },
  { name: 'IBM', icon: FaBuilding, color: '#052FAD', founded: '1911', sector: 'Technology / Consulting', work: 'Cloud computing, AI, enterprise systems, cybersecurity', roles: 'Application Developer, Data Analyst, Cloud Specialist', description: 'IBM is a technology and consulting company known for enterprise systems, AI services, cybersecurity, and mainframe modernization.' },
  { name: 'Deloitte', icon: FaBuilding, color: '#1A8B4C', founded: '1845', sector: 'Consulting / Audit', work: 'Business consulting, digital transformation, finance and risk advisory', roles: 'Analyst, Consultant, Business Technology Analyst', description: 'Deloitte helps companies improve operations, strategy, technology, and business performance through consulting and advisory services.' },
  { name: 'Accenture', icon: SiAccenture, color: '#A100FF', founded: '1989', sector: 'Consulting / Digital', work: 'Digital transformation, cloud services, automation, AI consulting', roles: 'Consultant, Application Engineer, Cloud Analyst', description: 'Accenture works with businesses across industries to implement digital transformation, cloud strategy, analytics, and emerging technologies.' },
  { name: 'Cognizant', icon: FaBuilding, color: '#004C97', founded: '1994', sector: 'IT Services', work: 'Digital engineering, software delivery, customer experience solutions', roles: 'Engineer, Analyst, Associate Developer', description: 'Cognizant supports businesses with technology consulting, software engineering, and digital transformation services.' },
  { name: 'Capgemini', icon: FaBuilding, color: '#00C7B1', founded: '1967', sector: 'Technology / Consulting', work: 'Enterprise transformation, cloud adoption, digital product development', roles: 'Analyst, Developer, Consultant', description: 'Capgemini helps organizations accelerate transformation with cloud platforms, data, AI, software engineering, and digital services.' },
  { name: 'Tech Mahindra', icon: FaBuilding, color: '#3B0086', founded: '1986', sector: 'IT / Telecom', work: 'Digital transformation, telecom solutions, cloud services', roles: 'Software Engineer, Support Engineer, Technical Analyst', description: 'Tech Mahindra partners with global enterprises to build digital business ecosystems, telecom solutions, and IT modernization programs.' },
];

const mouCompanies = [
  { name: 'AWS', icon: FaBuilding, color: '#FF9900', founded: '2006', sector: 'Cloud Computing', work: 'Cloud infrastructure, data services, machine learning, DevOps', roles: 'Cloud Engineer, Solutions Architect, Developer', description: 'AWS is a global cloud platform that enables companies to build secure, scalable, and high-performance applications using cloud and AI services.' },
  { name: 'Oracle', icon: FaBuilding, color: '#F80000', founded: '1977', sector: 'Database / Enterprise Software', work: 'Database systems, enterprise software, cloud ERP and analytics', roles: 'Database Developer, Analyst, Cloud Consultant', description: 'Oracle provides enterprise data platforms and business software used by organizations across finance, logistics, and technology sectors.' },
  { name: 'Pearson Mepro', icon: FaBuilding, color: '#00A3E0', founded: '2013', sector: 'Learning / Assessment', work: 'Skill development assessments, education technology and learner analytics', roles: 'Learning Analyst, Content Support, EdTech Associate', description: 'Pearson Mepro focuses on learning platforms and assessment tools that improve skill development and academic performance.' },
  { name: 'Red Hat', icon: SiRedhat, color: '#EE0000', founded: '1993', sector: 'Open Source / Enterprise Linux', work: 'Open source platforms, enterprise Linux, automation and cloud tools', roles: 'System Engineer, DevOps Associate, Linux Administrator', description: 'Red Hat helps organizations build enterprise-grade systems using open-source infrastructure, automation, and cloud-native technologies.' },
  { name: 'Cisco', icon: SiCisco, color: '#1BA0D7', founded: '1984', sector: 'Networking / Security', work: 'Networking, cybersecurity, automation, enterprise connectivity', roles: 'Network Engineer, Security Analyst, Systems Engineer', description: 'Cisco develops networking and security solutions that connect businesses, organizations, and digital services securely across the world.' },
  { name: 'Kimo', icon: FaBuilding, color: '#6C2BD9', founded: '2020', sector: 'Digital Services', work: 'Business technology, digital transformation, customer solutions', roles: 'Business Analyst, Digital Associate, Support Engineer', description: 'Kimo supports digital transformation initiatives through business technology services and customer-focused digital solutions.' },
  { name: 'Stratadigm', icon: FaBuilding, color: '#E44D26', founded: '2015', sector: 'Business Consulting', work: 'Strategy consulting, process improvement, digital business growth', roles: 'Business Analyst, Associate Consultant, Strategy Support', description: 'Stratadigm helps organizations improve performance through strategy, business process design, and digital adoption.' },
  { name: 'Babaj Finserv', icon: FaBuilding, color: '#0D9488', founded: '2005', sector: 'Financial Services', work: 'Finance, customer support, digital financial services', roles: 'Financial Analyst, Customer Support, Operations Associate', description: 'Babaji Finserv operates in financial services and supports customers with digital and traditional financial product experiences.' },
  { name: 'Criativo', icon: FaBuilding, color: '#F59E0B', founded: '2018', sector: 'Creative / Digital', work: 'Brand design, digital content, marketing and creative technology', roles: 'Content Designer, Digital Marketing Associate, Creative Analyst', description: 'Criativo helps brands grow through creative strategies, digital storytelling, and customized marketing experiences.' },
  { name: 'WNS', icon: FaBuilding, color: '#3B82F6', founded: '1996', sector: 'Business Process Services', work: 'Customer support, analytics, service operations, process outsourcing', roles: 'Operations Analyst, Customer Support, Process Associate', description: 'WNS helps enterprises improve customer service and business operations through technology and process-driven solutions.' },
];

export default function Placements() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleScrollToRecruiters = () => {
    const recruitersSection = document.getElementById('recruiters-section');
    if (recruitersSection) {
      recruitersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* PLACEMENTS HERO */}
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
              Career Success
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Placements</span>{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">That Inspire</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-gray-300 max-w-2xl mx-auto">
            Strong placement record with top companies across diverse sectors. Our students are shaping the future at the world's leading organizations.
          </p>
          <button
            onClick={handleScrollToRecruiters}
            className="mt-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
          >
            View Recruiters
          </button>
        </div>
      </section>

      {/* SLOGAN BANNER - PLACEMENT IS NOT A CHANCE */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-4 h-4 bg-cyan-400/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute top-20 right-20 w-6 h-6 bg-purple-500/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute bottom-10 left-1/3 w-5 h-5 bg-cyan-400/20 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }} />
          <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-purple-500/30 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-5 w-8 h-8 bg-cyan-400/10 rounded-full animate-pulse" style={{ animationDuration: '2s' }} />
          <div className="absolute top-1/3 right-10 w-10 h-10 bg-purple-500/10 rounded-full animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.8s' }} />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Decorative top line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <FaAward className="text-cyan-400 text-2xl animate-bounce" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>

          {/* Main Slogan */}
          <div className="relative">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                PLACEMENT IS NOT A CHANCE,
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
                IT IS A CHOICE
              </span>
              <br />
              <span className="text-white relative inline-block mt-2">
                FOR ADITYAN'S
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-full animate-pulse" />
              </span>
            </h2>
          </div>

          {/* Sub Slogan */}
          <div className="mt-10 relative">
            <div className="inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-2xl blur opacity-40 animate-pulse" />
              <div className="relative px-8 py-4 bg-black/80 backdrop-blur-sm rounded-2xl border border-cyan-500/30">
                <p className="text-2xl md:text-4xl font-bold tracking-wider">
                  <span className="bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                    ADITYA — A SYNONYM FOR PLACEMENT
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Decorative bottom line */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          </div>
        </div>
      </section>

      {/* PLACEMENT STATS */}
      <section className="relative py-24 px-6 bg-slate-100 dark:bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400">Our</span> Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: '98%', label: 'Placement Rate', icon: '🎯' },
              { stat: '120+', label: 'Registered Companies', icon: '🏢' },
              { stat: '10K+', label: 'Students Placed', icon: '🎓' },
              { stat: '12 LPA', label: 'Highest Package', icon: '💰' },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white dark:bg-gray-950 p-8 rounded-3xl border border-slate-200/60 dark:border-cyan-500/20 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 hover:border-cyan-400/50"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-5xl font-bold text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                  {item.stat}
                </h3>
                <p className="text-slate-700 dark:text-gray-300 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCompany && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 p-3" style={{ boxShadow: `0 0 0 1px ${selectedCompany.color}50` }}>
                  <selectedCompany.icon className="h-full w-full" style={{ color: selectedCompany.color }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedCompany.name}</h3>
                  <p className="text-sm text-cyan-300">{selectedCompany.sector}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCompany(null)}
                className="rounded-full border border-slate-600 px-3 py-1 text-sm text-slate-200 hover:border-cyan-400 hover:text-cyan-300"
              >
                Close
              </button>
            </div>

            <p className="mt-6 text-slate-300 leading-7">{selectedCompany.description}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Founded</p>
                <p className="mt-2 text-lg font-semibold text-white">{selectedCompany.founded}</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Work</p>
                <p className="mt-2 text-sm font-medium text-white">{selectedCompany.work}</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Roles</p>
                <p className="mt-2 text-sm font-medium text-white">{selectedCompany.roles}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOU WITH INDUSTRY LEADERS */}
      <section className="relative py-24 px-6 bg-white dark:bg-gray-950 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaHandshake className="text-cyan-400 text-3xl animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-cyan-400">MOU</span> with Industry Leaders
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
            <p className="text-slate-500 dark:text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
              Strategic academic partnerships with global industry giants to bridge the gap between education and industry
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {mouCompanies.map((company, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedCompany(company)}
                className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-black p-6 rounded-2xl border border-slate-200/60 dark:border-cyan-500/20 text-center hover:-translate-y-3 hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(200px circle at center, ${company.color}15, transparent)`,
                  }}
                />

                {/* MOU Badge */}
                <div className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-cyan-400 to-purple-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                  <span className="text-center leading-tight">
                    MOU
                    <br />
                    ✓
                  </span>
                </div>

                {/* Company icon container */}
                <div className="relative w-16 h-16 mx-auto mb-4 p-3 rounded-2xl bg-slate-100 dark:bg-gray-900 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg"
                  style={{
                    boxShadow: `0 0 0 0px ${company.color}20`,
                  }}
                >
                  <company.icon
                    className="w-full h-full transition-transform duration-300"
                    style={{ color: company.color }}
                  />
                </div>

                {/* Company name */}
                <p className="text-slate-700 dark:text-gray-300 font-semibold text-sm group-hover:text-cyan-400 transition-colors duration-300">
                  {company.name}
                </p>

                {/* Decorative bottom line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: company.color }}
                />
              </button>
            ))}
          </div>

          {/* MOU description */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20 rounded-2xl px-8 py-6 backdrop-blur-sm">
              <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed">
                These <span className="text-cyan-400 font-semibold">Memorandum of Understanding (MOU)</span> partnerships ensure our students get 
                <span className="text-purple-400 font-semibold"> industry-relevant training</span>, 
                <span className="text-cyan-400 font-semibold"> certification opportunities</span>, and 
                <span className="text-purple-400 font-semibold"> direct recruitment pathways</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOP RECRUITERS */}
      <section
        id="recruiters-section"
        className="relative py-24 px-6 bg-slate-100 dark:bg-black"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-cyan-400">Top</span> Recruiters
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
            <p className="text-slate-500 dark:text-gray-400 mt-4 text-lg">
              Our students work at the world's most innovative companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {companies.map((company, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedCompany(company)}
                className="group relative bg-white dark:bg-black p-6 rounded-2xl border border-slate-200/60 dark:border-cyan-500/20 text-center hover:-translate-y-3 hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(200px circle at center, ${company.color}15, transparent)`,
                  }}
                />

                {/* Company icon container */}
                <div className="relative w-16 h-16 mx-auto mb-4 p-3 rounded-2xl bg-slate-100 dark:bg-gray-900 group-hover:scale-110 transition-all duration-300 group-hover:shadow-lg"
                  style={{
                    boxShadow: `0 0 0 0px ${company.color}20`,
                  }}
                >
                  <company.icon
                    className="w-full h-full transition-transform duration-300"
                    style={{ color: company.color }}
                  />
                </div>

                {/* Company name */}
                <p className="text-slate-700 dark:text-gray-300 font-semibold text-sm group-hover:text-cyan-400 transition-colors duration-300">
                  {company.name}
                </p>

                {/* Decorative bottom line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: company.color }}
                />
              </button>
            ))}
          </div>

          {/* Trusted by section */}
          <div className="mt-16 text-center">
            <p className="text-slate-500 dark:text-gray-500 text-sm mb-6">AND MANY MORE...</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Oracle', 'SAP', 'Adobe', 'Cisco', 'HCL', 'Mindtree', 'LTI', 'Zoho', 'Freshworks', 'Paytm'].map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 bg-slate-100 dark:bg-gray-900 text-slate-600 dark:text-gray-400 rounded-full text-sm font-medium border border-slate-200 dark:border-gray-800 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors duration-200"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLACEMENT PROCESS */}
      <section className="relative py-24 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-cyan-400">Placement</span> Process
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 -translate-y-1/2" />

            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                { step: '1', title: 'Registration', desc: 'Students register for campus placements', icon: '📝' },
                { step: '2', title: 'Training', desc: 'Aptitude & interview preparation sessions', icon: '📚' },
                { step: '3', title: 'Recruitment', desc: 'Top companies conduct interviews', icon: '🤝' },
                { step: '4', title: 'Placement', desc: 'Successful job placement & offers', icon: '🎉' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative bg-slate-100 dark:bg-black p-8 rounded-3xl border border-slate-200/60 dark:border-cyan-500/20 text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10 z-10"
                >
                  {/* Step number badge */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                    {item.step}
                  </div>

                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}