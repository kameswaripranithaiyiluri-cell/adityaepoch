const teamMembers = [
  {
    name: 'Kameswari Pranitha Iyiluri',
    role: 'Project Lead & Full-Stack Developer',
    image: '/images/kameswari-pranitha.jpeg',
    description: 'Led project direction, architecture, and delivery for the Aditya Epoch campus platform.',
    email: 'kameswaripranithaiyiluri@gmail.com',
    phone: '+91 92901 13909',
    accent: 'cyan'
  },
  {
    name: 'Renee Yashmitha Muppidi',
    role: 'Frontend Developer',
    image: '/images/renee-yashmitha.jpeg',
    description: 'Focused on responsive interface design and polished user experience for admissions and campus pages.',
    email: 'reneeyashmitha@gmail.com',
    phone: '+91 93905 39384',
    accent: 'amber'
  },
  {
    name: 'Lakshmi Harshitha Pasala',
    role: 'Frontend Developer',
    image: '/images/lakshmi-harshitha.jpeg',
    description: 'Designed interactive UI elements and helped shape the visual identity of the portal.',
    email: 'lakshmi.pasala@example.com',
    phone: '+91 90123 45678',
    accent: 'purple'
  },
  {
    name: 'Gagananjali Malladi',
    role: 'Backend Developer',
    image: '/images/gagananjali.jpeg',
    description: 'Built data handling and server-side support for the admissions and admin workflows.',
    email: 'gagananjali7@gmail.com',
    phone: '+91 76808 77531',
    accent: 'cyan'
  },
  {
    name: 'Asmitha Munamala',
    role: 'Backend Developer',
    image: '/images/asmitha.jpeg',
    description: 'Worked on API integrations, form processing, and secure campus system logic.',
    email: 'asmithamunamala@gmail.com',
    phone: '+91 90105 15812',
    accent: 'amber'
  }
];

export default function Team() {
  return (
    <section className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-500 mb-4">Our Team</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Aditya Epoch Team</h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A dedicated project team that designed and built the Aditya Epoch admissions and campus information platform with clarity, usability, and reliability.
          </p>
        </div>

        <div className="grid gap-8">
          <article className="rounded-3xl bg-white dark:bg-gray-900 border border-slate-200/70 dark:border-cyan-500/20 p-8 shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="md:flex md:items-center md:gap-8">
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <img src={teamMembers[0].image} alt={teamMembers[0].name} className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-cyan-200 dark:border-cyan-500" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-cyan-500 mb-2">{teamMembers[0].name}</h2>
                <p className="text-lg font-medium text-slate-700 dark:text-gray-300">{teamMembers[0].role}</p>
                <p className="mt-4 text-slate-700 dark:text-gray-300 leading-relaxed">{teamMembers[0].description}</p>
                <div className="mt-4 text-sm text-slate-700 dark:text-gray-300 space-y-1">
                  <p><strong>Phone:</strong> {teamMembers[0].phone}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${teamMembers[0].email}`} className="text-cyan-500 hover:underline">{teamMembers[0].email}</a></p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Team Profiles</h2>
            <p className="text-slate-600 dark:text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed">
              The development team combines frontend design, backend engineering, and project coordination to create an efficient student-first campus portal.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.slice(1).map((member) => (
              <article
                key={member.name}
                className="rounded-3xl bg-white dark:bg-gray-900 border border-slate-200/70 dark:border-cyan-500/20 p-6 shadow-xl transform transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover shadow-md mb-5 border-4 border-slate-200 dark:border-cyan-500 mx-auto"
                />
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-500 font-semibold">{member.role}</p>
                <h3 className="text-2xl font-bold mt-2">{member.name}</h3>
                <p className="mt-3 text-slate-700 dark:text-gray-300 leading-7">{member.description}</p>
                <div className="mt-4 space-y-2 text-sm text-slate-700 dark:text-gray-300">
                  <p><strong>Phone:</strong> {member.phone}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${member.email}`} className="text-cyan-500 hover:underline">{member.email}</a></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
