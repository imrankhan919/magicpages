import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Check, X, Calendar } from 'lucide-react';
import Navbar from '../../components/Navbar';
import StatusBadge from '../../components/StatusBadge';

export default function AdminCreditRequestsPage() {
  const [filter, setFilter] = useState('all');
  const [requests, setRequests] = useState([]);

  const dummyRequests = [
    { id: 1, name: "Sarah Jenkins", role: "Classroom Teacher", reason: "Credits for 3rd grade end-of-year storybook project.", amount: 500, date: "June 8, 2026", status: "pending", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150" },
    { id: 2, name: "Mark Davis", role: "Special Ed Dept", reason: "Creating personalized social stories for new students.", amount: 250, date: "June 7, 2026", status: "approved", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" },
    { id: 3, name: "Emma Wilson", role: "Library Coordinator", reason: "District-wide reading month kick-off materials.", amount: 1000, date: "June 6, 2026", status: "pending", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" },
    { id: 4, name: "Aryan", role: "Explorer Parent", reason: "Need extra credits to finish my custom dino series.", amount: 5, date: "June 5, 2026", status: "rejected", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK2-HFEpz2fwaVa1_D93Sdr2qOGCn_qL26wOhitt4NqrM6BV3y0eo836_ReIsLFaQphe-GVOSOzGTolYrWNqpJeyyAgAMbHB-UWTvaYMA3ijhjtPgfQHmC8dMAf12pYB3-3pgixaWOodsq0tzjbfWaliCh21p7G6Vr285AdnDRSHJLlyM4pURu3To9afhnJBGa9Icg89pmDFBPCSpJQZE5aLbl195Y0sPInMt8IsEL2XKN7AejlmwIRo7Qsyefp03GROmYZrIJySA" },
    { id: 5, name: "Jessica Taylor", role: "Home Project", reason: "Coloring pages for kid's birthday party.", amount: 15, date: "June 2, 2026", status: "approved", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150" }
  ];

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('magic_pages_credit_requests');
    if (saved) {
      setRequests(JSON.parse(saved));
    } else {
      localStorage.setItem('magic_pages_credit_requests', JSON.stringify(dummyRequests));
      setRequests(dummyRequests);
    }
  }, []);

  const handleStatusChange = (id, requesterName, amount, newStatus) => {
    const updated = requests.map(req => {
      if (req.id === id) {
        return { ...req, status: newStatus };
      }
      return req;
    });
    setRequests(updated);
    localStorage.setItem('magic_pages_credit_requests', JSON.stringify(updated));

    if (newStatus === 'approved' && requesterName === 'Aryan') {
      const currentCredits = parseInt(localStorage.getItem('magic_pages_user_credits') || '5', 10);
      const newCredits = currentCredits + amount;
      localStorage.setItem('magic_pages_user_credits', newCredits.toString());
      alert(`Approved ${amount} Credits for Aryan! Their balance is now ${newCredits}! ✨`);
    } else {
      alert(`Request status updated to ${newStatus.toUpperCase()} for ${requesterName}.`);
    }
  };

  const filteredRequests = requests.filter(req => {
    if (filter === 'all') return true;
    return req.status === filter;
  });

  return (
    <div className="min-h-screen bg-magic-bg flex flex-col font-vietnam relative overflow-hidden">
      {/* Admin Navbar */}
      <Navbar isLoggedIn={true} isAdmin={true} />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-8 w-full space-y-8 z-10">
        
        {/* Header and Filter Tab Bar */}
        <section className="space-y-6">
          <div>
            <h1 className="font-quicksand font-bold text-3xl text-gray-800 flex items-center gap-2">
              <ShieldAlert className="w-8 h-8 text-magic-pink" />
              <span>Credit Approval Requests</span>
            </h1>
            <p className="text-gray-500 text-sm">Review educator and parent request lists for supplementary coloring credits.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap border-b border-magic-purple-light/10 gap-2 pb-px">
            {['all', 'pending', 'approved', 'rejected'].map((tab) => {
              const count = tab === 'all' 
                ? requests.length 
                : requests.filter(r => r.status === tab).length;

              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-5 py-3 border-b-4 font-quicksand font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                    filter === tab
                      ? 'border-magic-purple text-magic-purple'
                      : 'border-transparent text-gray-400 hover:text-gray-600'
                  }`}
                >
                  <span>{tab}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    filter === tab ? 'bg-magic-purple text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Requests Table */}
        <section className="bg-white border border-magic-purple-light/10 rounded-[2.5rem] shadow-magic overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 font-quicksand font-bold text-xs text-gray-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Requester</th>
                  <th className="py-4 px-6">Reason Details</th>
                  <th className="py-4 px-6">Requested</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700 font-medium">
                <AnimatePresence mode="popLayout">
                  {filteredRequests.map((row) => (
                    <motion.tr 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={row.id} 
                      className="hover:bg-gray-50/30 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <img 
                            src={row.avatar} 
                            alt={row.name} 
                            className="w-10 h-10 rounded-full border border-magic-purple-light/20 object-cover" 
                          />
                          <div>
                            <p className="font-quicksand font-bold text-gray-800 leading-tight">{row.name}</p>
                            <p className="text-[10px] text-magic-purple font-bold uppercase tracking-wider">{row.role}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-xs text-gray-500 max-w-[250px] leading-relaxed">
                        {row.reason}
                      </td>
                      <td className="py-4 px-6 font-quicksand font-bold text-magic-purple-dark text-xs">
                        ⭐ {row.amount} Credits
                      </td>
                      <td className="py-4 px-6 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{row.date}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <StatusBadge status={row.status} />
                      </td>
                      <td className="py-4 px-6 text-center">
                        {row.status === 'pending' ? (
                          <div className="flex items-center justify-center gap-2">
                            <button 
                              onClick={() => handleStatusChange(row.id, row.name, row.amount, 'rejected')}
                              className="px-3 py-1.5 bg-magic-pink-soft text-magic-pink hover:bg-magic-pink hover:text-white rounded-full font-quicksand font-bold text-xs flex items-center gap-0.5 transition-colors duration-200"
                              title="Reject"
                            >
                              <X className="w-3.5 h-3.5" />
                              <span>Reject</span>
                            </button>
                            <button 
                              onClick={() => handleStatusChange(row.id, row.name, row.amount, 'approved')}
                              className="px-3 py-1.5 bg-magic-green-soft text-magic-green-dark hover:bg-magic-green hover:text-white rounded-full font-quicksand font-bold text-xs flex items-center gap-0.5 transition-colors duration-200"
                              title="Approve"
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>Approve</span>
                            </button>
                          </div>
                        ) : (
                          <span className="text-xs text-gray-400 italic">No Actions</span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
                {filteredRequests.length === 0 && (
                  <tr>
                    <td colSpan="6" className="py-10 text-center text-gray-400 font-quicksand font-bold">
                      No requests found matching this status filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-magic-purple-light/10 py-8 mt-16 text-center text-sm text-gray-400">
        <p>&copy; 2026 MagicPages. Admin dashboard panel. 🛡️</p>
      </footer>
    </div>
  );
}
