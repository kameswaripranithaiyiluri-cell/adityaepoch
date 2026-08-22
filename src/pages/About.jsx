import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import seshareedyImage from '../assets/seshareedy-sir.jpeg';
import sugunaImage from '../assets/suguna-mam.jpeg';
import academicDirectorImage from '../assets/academic-director.jpeg';
import principalVisionaryImage from '../assets/principal-visionary.jpeg';
import vicePrincipalImage from '../assets/vice-principal.jpeg';

export default function About() {
  const [showFaculty, setShowFaculty] = useState(false);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-24 overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-500/10" />
        <div className="relative max-w-5xl text-center z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-500 mb-6">About Us</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Aditya Educational Institutions</h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            What you become depends on what you know, which again depends on what you learn, and is ultimately a function of what you are taught. And who is a bigger teacher than experience? At Aditya Educational Institutions in Rajahmundry, we take pride in our sprawling three-decade pedagogy experience.
          </p>
          <div className="mt-10">
            <button
              onClick={() => setShowFaculty(true)}
              className="rounded-full bg-cyan-400 px-8 py-3 text-black font-semibold hover:bg-cyan-300 transition transform hover:scale-105"
            >
              View Faculty
            </button>
          </div>
        </div>
      </section>

      {showFaculty && <FacultyModal onClose={() => setShowFaculty(false)} />}

      <section className="py-24 px-6 bg-white dark:bg-black text-slate-900 dark:text-white">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-200/70 dark:border-cyan-500/20 bg-slate-50 dark:bg-gray-950 p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-cyan-500 mb-4">Our Story</h2>
            <p className="text-slate-700 dark:text-gray-300 leading-7">
              Aditya Academy began in 1984 as a public school to meet primary and secondary education needs. From there it expanded to CBSE +2 courses and grew into junior colleges, degree colleges, PG colleges, engineering and pharmacy colleges, management, nursing, and teacher training institutions.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/70 dark:border-amber-500/20 bg-slate-50 dark:bg-gray-950 p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-amber-500 mb-4">Our Vision</h2>
            <p className="text-slate-700 dark:text-gray-300 leading-7">
              We believe education is a process that blooms into a beautiful flower, and every stage requires care, sincerity, and dedication. We create an inclusive learning environment where knowledge and wisdom are shared across all streams.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/70 dark:border-purple-500/20 bg-slate-50 dark:bg-gray-950 p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-purple-500 mb-4">Our Reach</h2>
            <p className="text-slate-700 dark:text-gray-300 leading-7">
              Today, Aditya Academy includes more than 50 institutions, a faculty of 5,000 and a student strength of 50,000. Our growth is a tribute to the transformative power of learning and the dream that became a reality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-cyan-50/30 dark:from-gray-950 dark:to-cyan-950/20 text-slate-900 dark:text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-10">Technology Used</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl bg-white dark:bg-gray-900/90 border border-slate-200/70 dark:border-cyan-500/20 p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-cyan-500 mb-4">Frontend</h3>
              <p className="text-slate-700 dark:text-gray-300 leading-7">
                React, Vite, Tailwind CSS, and React Router power the responsive, modern campus website experience.
              </p>
            </div>
            <div className="rounded-3xl bg-white dark:bg-gray-900/90 border border-slate-200/70 dark:border-amber-500/20 p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-amber-500 mb-4">Backend</h3>
              <p className="text-slate-700 dark:text-gray-300 leading-7">
                The backend is built with Node.js and Express and uses SQLite for data persistence, handling admissions and admin workflows.
              </p>
            </div>
            <div className="rounded-3xl bg-white dark:bg-gray-900/90 border border-slate-200/70 dark:border-purple-500/20 p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-500 mb-4">Deployment</h3>
              <p className="text-slate-700 dark:text-gray-300 leading-7">
                Frontend can deploy on Vercel, while the backend is suited for Railway, Render, or any Node.js hosting platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-cyan-500 mb-4">Management</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Our Management Team</h2>
            <p className="text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Meet the management team guiding Aditya Educational Institutions with clear strategy, academic rigor, and student-first values.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-3xl border border-slate-200/70 dark:border-cyan-500/20 bg-slate-50 dark:bg-gray-950 shadow-xl p-8 text-center transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-slate-200 dark:border-cyan-500">
                <img src={seshareedyImage} alt="Dr. N. SESHAREDDY" className="h-full w-full object-cover" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-500 font-semibold mb-3">Founder & Chairman</p>
              <h3 className="text-2xl font-semibold mb-3">Dr. N. SESHAREDDY</h3>
              <p className="text-slate-700 dark:text-gray-300 leading-7">
                Sets the institution's strategic direction and drives long-term growth, innovation, and academic excellence.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200/70 dark:border-amber-500/20 bg-slate-50 dark:bg-gray-950 shadow-xl p-8 text-center transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-slate-200 dark:border-amber-500">
                <img src={sugunaImage} alt="Dr. N. SUGUNA REDDY" className="h-full w-full object-cover" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-500 font-semibold mb-3">Executive Director</p>
              <h3 className="text-2xl font-semibold mb-3">Dr. N. SUGUNA REDDY</h3>
              <p className="text-slate-700 dark:text-gray-300 leading-7">
                Leads academic operations and student success initiatives with practical programs and curricular innovation.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200/70 dark:border-purple-500/20 bg-slate-50 dark:bg-gray-950 shadow-xl p-8 text-center transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-slate-200 dark:border-purple-500">
                <img src={academicDirectorImage} alt="Dr. B. E. V. L. Naidu" className="h-full w-full object-cover" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-purple-500 font-semibold mb-3">Academic Director</p>
              <h3 className="text-2xl font-semibold mb-3">Dr. B. E. V. L. Naidu</h3>
              <p className="text-slate-700 dark:text-gray-300 leading-7">
                Oversees academic quality, mentors faculty, and ensures every student has the support needed to excel.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200/70 dark:border-cyan-500/20 bg-slate-50 dark:bg-gray-950 shadow-xl p-8 text-center transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-slate-200 dark:border-cyan-500">
                <img src={principalVisionaryImage} alt="Principal Smt. P. Lakshmi Saroja" className="h-full w-full object-cover" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-500 font-semibold mb-3">Principal</p>
              <h3 className="text-2xl font-semibold mb-3">Smt. P. Lakshmi Saroja</h3>
              <p className="text-slate-700 dark:text-gray-300 leading-7">
                Leads with compassion and clarity, nurturing a strong campus culture, academic excellence, and student-centered programs.
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200/70 dark:border-amber-500/20 bg-slate-50 dark:bg-gray-950 shadow-xl p-8 text-center transform transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
              <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-slate-200 dark:border-amber-500">
                <img src={vicePrincipalImage} alt="Vice Principal Sri G. Hemasundar Rao" className="h-full w-full object-cover" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-500 font-semibold mb-3">Vice Principal</p>
              <h3 className="text-2xl font-semibold mb-3">Sri G. Hemasundar Rao</h3>
              <p className="text-slate-700 dark:text-gray-300 leading-7">
                Supports campus management and student engagement with a focus on operational excellence and mentorship.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

function FacultyModal({ onClose }) {
  const [staff, setStaff] = useState(null);
  const [showProtectionMessage, setShowProtectionMessage] = useState(false);
  const facultyPhotos = {
    'A.Srinivasa Reddy': 'a-srinivasa-reddy.jpeg',
    'G.HEMASUNDHAR RAO, M.C.A, M.Tech': 'vice-principal-hod.jpeg',
    'K. VEERABABU': 'k-veerababu.jpeg',
    'K VV VEERENDRA SAI': 'k-vv-veerendra-sai.jpeg',
    'P.Manikanta': 'p-manikanta.jpeg',
    'CH Gowri priya': 'ch-gowri-priya.jpeg',
    'M.Anantha Lakhsmi': 'm-anantha-lakshmi.jpeg',
    'M.Anantha Lakshmi': 'm-anantha-lakshmi.jpeg',
    'Dr. Bh.V.Rama Devi': 'dr-bh-v-ramadevi.jpeg',
    'dr.bh.v.ramadevi': 'dr-bh-v-ramadevi.jpeg',
    'V.Ravikanth': 'v-ravikanth.jpeg',
    'V. Soma Raju': 'v-soma-raju.jpeg',
    'G .Anusha': 'g-anusha.jpeg',
    'G. Anusha': 'g-anusha.jpeg',
    'G. RAMAKRISHNA': 'g-rama-krishna.jpeg',
    'G. Rama Krishna': 'g-rama-krishna.jpeg',
    'D. Durga Devi': 'd-durga-devi.jpeg',
    'Durga Devi': 'd-durga-devi.jpeg',
    'K. Gnaneswar': 'k-gnaneswar.jpeg',
    'V. Jayanthi Sai': 'v-jayanthi-sai.jpeg',
    'A. Posisekhar': 'a-posisekhar.jpeg',
    'J .Girish Narasimham': 'j-girish-narasimham.jpeg',
    'J. Girish Narshimham': 'j-girish-narasimham.jpeg',
    'E.S.L .Anand': 'e-s-l-anand.jpeg',
    'e.s.l.anand': 'e-s-l-anand.jpeg',
    'U. Suryanarayana': 'u-suryanarayana.jpeg',
    'N Siva Shankar': 'n-siva-shankar.jpeg',
    'Vadrevu Raja Rajeswari': 'vadrevu-raja-rajeswari.jpeg',
    'K V V SUBRAMANYAM': 'k-v-v-subramanyam.jpeg',
    'P.Lakshmi Saroja': 'p-lakshmi-saroja.jpeg',
    'Sandrani Gopala Krishna': 'sandrani-gopala-krishna.jpeg',
    'K.Gopi Krishna': 'k-gopi-krishna.jpeg',
    'K Gopi Krishna': 'k-gopi-krishna.jpeg',
    'Yalamarthy Krishna Kumari': 'yalamarthy-krishna-kumari-new.jpeg',
    'V V S Anjaneyulu': 'v-v-s-anjaneyulu.jpeg',
    'V V S Anjaneyalu': 'v-v-s-anjaneyulu.jpeg',
    'Ayyanki . Venkateswara Rao': 'ayyanki-venkateswara-rao.jpeg',
    'Ayyanki Venkateswara Rao': 'ayyanki-venkateswara-rao.jpeg',
    'Gannamani Siva Rama Krishna': 'gannamani-siva-ramakrishna.jpeg',
    'Gannamani Siva Ramakrishna': 'gannamani-siva-ramakrishna.jpeg',
    'Bandi Satyanarayana Murthy': 'bandi-satyanarayana.jpeg',
    'Bandi Satyanarayana': 'bandi-satyanarayana.jpeg',
    'Akula. Vani Nirmala': 'akula-vani-nirmala.jpeg',
    'Akula Vani Nirmala': 'akula-vani-nirmala.jpeg',
    'B. Sri Sowmya Devi': 'b-sri-sowmya.jpeg',
    'B. Sri Sowmya': 'b-sri-sowmya.jpeg',
    'T Ramakishore': 't-ramakishore.jpeg',
    'T. Ramakishore': 't-ramakishore.jpeg',
    'Tumula Veerajaneya': 'tumula-veeranjaneya.jpeg',
    'Tumula Veeranjaneya': 'tumula-veeranjaneya.jpeg',
    'Ch.Ramakrishna': 'ch-rama-krishna.jpeg',
    'Ch. Rama Krishna': 'ch-rama-krishna.jpeg',
    'V.Surya kumar': 'v-surya-kumar.jpeg',
    'V. Surya Kumar': 'v-surya-kumar.jpeg',
    'Dr. L. Durga Prasad': 'dr-l-durga-prasad.jpeg',
    'dr.l.durga prasad': 'dr-l-durga-prasad.jpeg',
    'Chakravarthula S Sudhakar': 'chakravarthula-s-sudhakar.jpeg',
    'Chakravarthula S. Sudhakar': 'chakravarthula-s-sudhakar.jpeg',
  };

  useEffect(() => {
    let cancelled = false;

    async function loadSheetJS() {
      if (!window.XLSX) {
        await new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js';
          s.onload = resolve; s.onerror = reject;
          document.head.appendChild(s);
        });
      }
    }

    async function fetchAndParse() {
      try {
        await loadSheetJS();
        const res = await fetch('/files/teaching-staff.xlsx');
        if (!res.ok) throw new Error('Failed to fetch spreadsheet');
        const ab = await res.arrayBuffer();
        const data = new Uint8Array(ab);
        const workbook = window.XLSX.read(data, { type: 'array' });
        const first = workbook.SheetNames[0];
        const sheet = workbook.Sheets[first];
        const rows = window.XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
        const headerIndex = rows.findIndex(row => row.some(cell =>
          String(cell).trim().toUpperCase() === 'NAME OF THE FACULTY'
        ));
        const headers = headerIndex >= 0 ? rows[headerIndex].map(cell => String(cell).trim().toUpperCase()) : [];
        const nameIndex = headers.findIndex(header => header === 'NAME OF THE FACULTY');
        const designationIndex = headers.findIndex(header => header === 'DESIGNATION');
        const photoIndex = headers.findIndex(header => header === 'PHOTO');

        const mapped = (headerIndex >= 0 && nameIndex >= 0 ? rows.slice(headerIndex + 1) : []).map(row => {
          const name = String(row[nameIndex] || '').trim();
          const designation = String(row[designationIndex] || '').trim();
          let photo = String(row[photoIndex] || '').trim();

          if (!name || name.toUpperCase() === 'S.NO' || name.toUpperCase().includes('FACULTY')) return null;

          photo = photo || facultyPhotos[name] || facultyPhotos[name.toUpperCase()] || '';
          
          // If photo path is provided in Excel, resolve it properly
          if (photo && !/^https?:\/\//i.test(photo)) {
            photo = '/images/' + photo.replace(/^\.\//, '').replace(/^\//, '');
          }
          
          return { name, designation, photo };
        }).filter(Boolean).filter((member, index, allMembers) =>
          allMembers.findIndex(candidate => candidate.name.toLowerCase() === member.name.toLowerCase()) === index
        );

        if (!cancelled) setStaff(mapped.length > 0 ? mapped : []);
      } catch (err) {
        console.error('Staff load error', err);
        if (!cancelled) setStaff([]);
      }
    }

    fetchAndParse();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const blockScreenshotShortcuts = (event) => {
      const key = event.key.toLowerCase();
      const screenshotShortcut = event.key === 'PrintScreen' || event.code === 'PrintScreen' ||
        (event.metaKey && event.shiftKey && ['3', '4', '5'].includes(key)) ||
        (event.metaKey && event.shiftKey && key === 's');
      const printShortcut = (event.ctrlKey || event.metaKey) && key === 'p';

      if (screenshotShortcut || printShortcut) {
        event.preventDefault();
        setShowProtectionMessage(true);
      }
    };

    const blockContextMenu = (event) => {
      event.preventDefault();
      setShowProtectionMessage(true);
    };

    const blockCopy = (event) => {
      event.preventDefault();
      setShowProtectionMessage(true);
    };

    document.addEventListener('keydown', blockScreenshotShortcuts);
    document.addEventListener('contextmenu', blockContextMenu);
    document.addEventListener('copy', blockCopy);
    document.addEventListener('cut', blockCopy);

    return () => {
      document.removeEventListener('keydown', blockScreenshotShortcuts);
      document.removeEventListener('contextmenu', blockContextMenu);
      document.removeEventListener('copy', blockCopy);
      document.removeEventListener('cut', blockCopy);
    };
  }, []);

  useEffect(() => {
    if (!showProtectionMessage) return undefined;
    const timeoutId = window.setTimeout(() => setShowProtectionMessage(false), 3000);
    return () => window.clearTimeout(timeoutId);
  }, [showProtectionMessage]);

  function initials(name) {
    if (!name) return '';
    return name.split(' ').slice(0,2).map(s=>s[0]?.toUpperCase()||'').join('');
  }

  function placeholderDataUrl(name, bg = '#e2e8f0', fg = '#0f172a') {
    const text = initials(name) || '';
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect width='100%' height='100%' fill='${bg}'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='${fg}' font-size='64' font-family='Arial,Helvetica,sans-serif'>${text}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-6 py-6 select-none"
      onDragStart={(event) => event.preventDefault()}
      onSelectStart={(event) => event.preventDefault()}
    >
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 dark:from-cyan-900/20 dark:to-purple-900/20 border-b border-slate-200 dark:border-slate-700 p-8 flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold text-cyan-500 mb-2">Teaching Faculty</h2>
            <p className="text-slate-600 dark:text-gray-400">Meet our dedicated educators shaping student success</p>
          </div>
          <button
            onClick={onClose}
            className="text-2xl font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {staff === null && <div className="text-center col-span-full py-12 text-lg">Loading teaching staff…</div>}
            {staff && staff.length === 0 && <div className="text-center col-span-full py-12 text-lg">No staff data found.</div>}
            {staff && staff.map((s, idx) => (
              <div key={idx} className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-cyan-500/40 p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3 flex flex-col items-center text-center overflow-hidden">
                {/* Photo - LARGE AND PROMINENT */}
                <div className="h-40 w-40 mb-4 overflow-hidden rounded-full bg-gradient-to-br from-cyan-300 to-blue-400 dark:from-cyan-700 dark:to-blue-700 border-4 border-cyan-500 shadow-2xl flex items-center justify-center bg-cover bg-center" style={{backgroundImage: s.photo ? `url('${s.photo}')` : 'none'}}>
                  {!s.photo && <img src={placeholderDataUrl(s.name)} alt={s.name || 'Staff'} className="h-full w-full object-cover" />}
                  {s.photo && <img src={s.photo} alt={s.name || 'Staff'} className="h-full w-full object-cover" />}
                </div>
                
                {/* Name - Large and Bold */}
                <div className="font-black text-2xl text-slate-900 dark:text-white mb-2 leading-tight line-clamp-2">
                  {s.name}
                </div>
                
                {/* Designation - Prominent Tag */}
                <div className="text-lg text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 px-6 py-3 rounded-full shadow-md">
                  {s.designation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 p-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-full bg-slate-300 dark:bg-slate-700 px-6 py-2 font-semibold hover:bg-slate-400 dark:hover:bg-slate-600 transition"
          >
            Close
          </button>
        </div>

        {showProtectionMessage && (
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] rounded-xl bg-red-600 px-6 py-4 text-center text-white font-semibold shadow-2xl" role="alert">
            Screenshots and copying are not allowed on the Teaching Faculty page.
          </div>
        )}
      </div>
    </div>
  );
}
