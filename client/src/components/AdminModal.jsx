import React, { useState, useEffect } from 'react';
import { X, Users, Search, RefreshCw, UserCheck, Shield } from 'lucide-react';

const AdminModal = ({ isOpen, onClose }) => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchRegistrations = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/registrations');
      const data = await res.json();
      if (data.success) {
        setRegistrations(data.data);
      }
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchRegistrations();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = registrations.filter((r) => {
    const term = searchTerm.toLowerCase();
    return (
      r.regId?.toLowerCase().includes(term) ||
      r.fullName?.toLowerCase().includes(term) ||
      r.college?.toLowerCase().includes(term) ||
      r.email?.toLowerCase().includes(term)
    );
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card max-w-4xl w-full max-h-[90vh] overflow-hidden p-6 md:p-8 relative border-purple-500/40 shadow-[0_0_60px_rgba(139,92,246,0.25)] flex flex-col animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono font-semibold uppercase mb-2">
              <Shield className="w-3.5 h-3.5" />
              Symposium Admin Portal
            </div>
            <h2 className="font-heading font-black text-2xl md:text-3xl text-white">
              Registered Participants ({registrations.length})
            </h2>
          </div>

          <button
            onClick={fetchRegistrations}
            className="btn-secondary text-xs py-2 px-4 flex items-center gap-2"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by Registration ID, Name, College, or Email..."
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-xs font-mono focus:border-purple-400 focus:outline-none"
          />
        </div>

        {/* Table Container */}
        <div className="flex-1 overflow-y-auto border border-white/10 rounded-xl bg-black/40">
          <table className="w-full text-left border-collapse text-xs font-mono">
            <thead className="bg-[#11110e] text-purple-300 border-b border-white/10 sticky top-0 z-10">
              <tr>
                <th className="p-3">REG ID</th>
                <th className="p-3">DELEGATE NAME</th>
                <th className="p-3">COLLEGE</th>
                <th className="p-3">YEAR</th>
                <th className="p-3">EVENTS</th>
                <th className="p-3">FEE</th>
                <th className="p-3">STATUS</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/5 text-gray-300">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="7" className="p-8 text-center text-gray-500 font-mono">
                    {loading ? 'Fetching participant list...' : 'No registrations found.'}
                  </td>
                </tr>
              ) : (
                filtered.map((r, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-3 font-bold text-cyan-400">{r.regId}</td>
                    <td className="p-3 text-white font-semibold">{r.fullName}</td>
                    <td className="p-3 text-gray-300 max-w-[180px] truncate">{r.college}</td>
                    <td className="p-3 text-gray-400">{r.year}</td>
                    <td className="p-3 text-purple-300 font-bold">{r.selectedEvents?.length || 1} Events</td>
                    <td className="p-3 text-yellow-400">₹{r.totalFee || 500}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-[10px]">
                        Confirmed
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminModal;
