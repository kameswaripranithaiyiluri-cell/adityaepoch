import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

// Socket.io client connecting to admin namespace
const socket = io(import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000');

// Admission table columns
const admissionColumns = ['fullName', 'email', 'phone', 'dob', 'course', 'qualification', 'address', 'city', 'state'];
const admissionLabels = {
  fullName: 'Full Name', email: 'Email', phone: 'Phone', dob: 'DOB',
  course: 'Course', qualification: 'Qualification', address: 'Address', city: 'City', state: 'State'
};

// Contact table columns
const contactColumns = ['name', 'email', 'phone', 'message'];
const contactLabels = {
  name: 'Name', email: 'Email', phone: 'Phone', message: 'Message'
};

function TableView({ title, data, columns, labels, icon }) {
  if (data.length === 0) return null;
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
        <span>{icon}</span> {title} <span className="text-sm text-gray-500 font-normal">({data.length})</span>
      </h2>
      <div className="overflow-x-auto rounded-xl border border-gray-700">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-800 text-gray-300 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">#</th>
              {columns.map(col => (
                <th key={col} className="px-4 py-3 whitespace-nowrap">{labels[col]}</th>
              ))}
              <th className="px-4 py-3 whitespace-nowrap">Submitted At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {data.map((s, idx) => (
              <tr key={s.id} className="bg-gray-900 hover:bg-gray-800 transition">
                <td className="px-4 py-3 text-gray-500">{idx + 1}</td>
                {columns.map(col => (
                  <td key={col} className="px-4 py-3 text-white whitespace-nowrap max-w-[200px] truncate" title={s.data[col] || ''}>
                    {s.data[col] || '-'}
                  </td>
                ))}
                <td className="px-4 py-3 text-gray-400 whitespace-nowrap text-xs">
                  {new Date(s.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AdminPanel({ authToken, onLogout }) {
  const [submissions, setSubmissions] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const token = authToken || localStorage.getItem('auth_token');
    if (!token) return;

    fetch(`${import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000'}/api/admin/submissions`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          throw new Error('Access denied');
        }
        return res.json();
      })
      .then(data => {
        setSubmissions(data.submissions || []);
      })
      .catch(console.error);

    socket.on('newSubmission', (submission) => {
      setSubmissions(prev => [submission, ...prev]);
    });

    return () => {
      socket.off('newSubmission');
    };
  }, [authToken]);

  const admissionSubmissions = submissions.filter(s => s.type === 'admission');
  const contactSubmissions = submissions.filter(s => s.type === 'contact');

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex gap-4 items-center">
          <span className="text-sm text-gray-400">Logged in as admin</span>
          <button
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
          <p className="text-gray-400 text-sm">Total Submissions</p>
          <p className="text-3xl font-bold text-white">{submissions.length}</p>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
          <p className="text-gray-400 text-sm">Admission Applications</p>
          <p className="text-3xl font-bold text-cyan-400">{admissionSubmissions.length}</p>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
          <p className="text-gray-400 text-sm">Contact Messages</p>
          <p className="text-3xl font-bold text-yellow-400">{contactSubmissions.length}</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 border-b border-gray-700 pb-2">
        {['all', 'admission', 'contact'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition ${
              activeTab === tab
                ? 'bg-cyan-400 text-black'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {tab === 'all' ? 'All' : tab === 'admission' ? 'Admissions' : 'Contact Messages'}
          </button>
        ))}
      </div>

      {/* Tables */}
      {submissions.length === 0 && <p className="text-gray-400 text-center py-10">No submissions yet.</p>}

      {(activeTab === 'all' || activeTab === 'admission') && (
        <TableView
          title="Admission Applications"
          icon="📋"
          data={admissionSubmissions}
          columns={admissionColumns}
          labels={admissionLabels}
        />
      )}

      {(activeTab === 'all' || activeTab === 'contact') && (
        <TableView
          title="Contact Messages"
          icon="✉️"
          data={contactSubmissions}
          columns={contactColumns}
          labels={contactLabels}
        />
      )}
    </div>
  );
}
