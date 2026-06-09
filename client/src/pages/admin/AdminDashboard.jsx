import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Users, Clock, Palette, Image as ImageIcon, Check, X, ShieldAlert, ArrowRight, UserPlus } from 'lucide-react';
import Navbar from '../../components/Navbar';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  
  const dummyRequests = [
    { id: 1, name: "Sarah Jenkins", role: "Classroom Teacher", reason: "Credits for 3rd grade end-of-year storybook project.", amount: 500, date: "June 8, 2026", status: "pending", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150" },
    { id: 2, name: "Mark Davis", role: "Special Ed Dept", reason: "Creating personalized social stories for new students.", amount: 250, date: "June 7, 2026", status: "approved", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" },
    { id: 3, name: "Emma Wilson", role: "Library Coordinator", reason: "District-wide reading month kick-off materials.", amount: 1000, date: "June 6, 2026", status: "pending", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" }
  ];

  // Load requests from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('magic_pages_credit_requests');
    if (saved) {
      setRequests(JSON.parse(saved));
    } else {
      localStorage.setItem('magic_pages_credit_requests', JSON.stringify(dummyRequests));
      setRequests(dummyRequests);
    }
  }, []);

  const handleApprove = (id, requesterName, amount) => {
    const updated = requests.map(req => {
      if (req.id === id) {
        return { ...req, status: 'approved' };
      }
      return req;
    });
    setRequests(updated);
    localStorage.setItem('magic_pages_credit_requests', JSON.stringify(updated));

    // If request is for Aryan, increment their credits balance in localStorage
    if (requesterName === 'Aryan') {
      const currentCredits = parseInt(localStorage.getItem('magic_pages_user_credits') || '5', 10);
      const newCredits = currentCredits + amount;
      localStorage.setItem('magic_pages_user_credits', newCredits.toString());
      alert(`Approved ${amount} Credits for Aryan! Their balance is now ${newCredits}! ✨`);
    } else {
      alert(`Approved ${amount} Credits for ${requesterName}!`);
    }
  };

  const handleReject = (id, requesterName) => {
    const updated = requests.map(req => {
      if (req.id === id) {
        return { ...req, status: 'rejected' };
      }
      return req;
    });
    setRequests(updated);
    localStorage.setItem('magic_pages_credit_requests', JSON.stringify(updated));
    alert(`Rejected credit request from ${requesterName}.`);
  };

  // Get only pending requests to show in the action panel
  const pendingRequests = requests.filter(r => r.status === 'pending');

  const stats = [
    { id: 1, name: "Total Users", value: "12,480", change: "+14% this month", icon: <Users className="w-5 h-5" />, color: "bg-magic-purple-soft text-magic-purple" },
    { id: 2, name: "Pending Requests", value: pendingRequests.length.toString(), change: "Requires attention", icon: <Clock className="w-5 h-5" />, color: "bg-magic-yellow-soft text-magic-yellow-dark" },
    { id: 3, name: "Templates", value: "384", change: "Across 12 categories", icon: <Palette className="w-5 h-5" />, color: "bg-magic-pink-soft text-magic-pink" },
    { id: 4, name: "Images Generated", value: "1.2M", change: "+5% this week", icon: <ImageIcon className="w-5 h-5" />, color: "bg-magic-blue-soft text-magic-blue-dark" },
  ];

  const recentUsers = [
    { id: 1, name: "Michael Chen", email: "michael@classroom.edu", credits: 50, date: "Joined 2 hours ago" },
    { id: 2, name: "Sofia Rodriguez", email: "sofia.r@outlook.com", credits: 5, date: "Joined 5 hours ago" },
    { id: 3, name: "Liam O'Connor", email: "liam@parentblog.org", credits: 25, date: "Joined 1 day ago" }
  ];

  return (
    <div className="min-h-screen bg-magic-bg flex flex-col font-vietnam relative overflow-hidden">
      {/* Admin Navbar */}
      <Navbar isLoggedIn={true} isAdmin={true} />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-8 w-full space-y-10 z-10">
        
        {/* Page Header */}
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="font-quicksand font-bold text-3xl text-gray-800 flex items-center gap-2">
              <span>Overview Console</span>
              <Sparkles className="w-8 h-8 text-magic-yellow fill-magic-yellow/10" />
            </h1>
            <p className="text-gray-500 text-sm">Welcome back to the command center, Admin.</p>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div 
              key={s.id} 
              className="bg-white border border-magic-purple-light/10 rounded-[2rem] p-6 flex flex-col gap-4 shadow-magic hover:-translate-y-1 hover:shadow-magic-hover transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex justify-between items-start">
                <span className="font-quicksand font-bold text-xs text-gray-400 uppercase tracking-wider">{s.name}</span>
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${s.color}`}>
                  {s.icon}
                </div>
              </div>
              <div>
                <span className="font-quicksand font-bold text-3xl text-gray-800 block">{s.value}</span>
                <span className="text-xs text-magic-purple font-semibold mt-1 block">{s.change}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Main Action Area: Table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Credit Requests (Takes 2 Columns) */}
          <section className="lg:col-span-2 bg-white border border-magic-purple-light/10 rounded-[2.5rem] shadow-magic overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="font-quicksand font-bold text-lg text-gray-800 flex items-center gap-2">
                <span>Recent Credit Requests</span>
                <span className="bg-magic-yellow-soft border border-magic-yellow/40 text-magic-yellow-dark px-2 py-0.5 rounded-full font-quicksand font-bold text-xs">
                  {pendingRequests.length} Pending
                </span>
              </h3>
              <Link 
                to="/admin/credit-requests"
                className="text-xs font-quicksand font-bold text-magic-purple hover:text-magic-pink flex items-center gap-1 hover:underline"
              >
                <span>View All Requests</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100 font-quicksand font-bold text-xs text-gray-400 uppercase tracking-wider">
                    <th className="py-4 px-6">Educator / User</th>
                    <th className="py-4 px-6">Reason</th>
                    <th className="py-4 px-6">Credits</th>
                    <th className="py-4 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-sm text-gray-700 font-medium">
                  {pendingRequests.slice(0, 3).map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50/30 transition-colors">
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
                      <td className="py-4 px-6 text-xs text-gray-500 max-w-[200px] truncate">
                        {row.reason}
                      </td>
                      <td className="py-4 px-6 font-quicksand font-bold text-magic-purple-dark text-xs">
                        ⭐ {row.amount}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button 
                            onClick={() => handleReject(row.id, row.name)}
                            className="p-1.5 bg-magic-pink-soft text-magic-pink hover:bg-magic-pink hover:text-white rounded-full transition-colors"
                            title="Reject"
                          >
                            <X className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleApprove(row.id, row.name, row.amount)}
                            className="p-1.5 bg-magic-green-soft text-magic-green-dark hover:bg-magic-green hover:text-white rounded-full transition-colors"
                            title="Approve"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {pendingRequests.length === 0 && (
                    <tr>
                      <td colSpan="4" className="py-8 text-center text-gray-400 font-quicksand font-bold">
                        No pending credit requests. Excellent work! ✨
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Recent Users List (Takes 1 Column) */}
          <section className="bg-white border border-magic-purple-light/10 rounded-[2.5rem] shadow-magic overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h3 className="font-quicksand font-bold text-lg text-gray-800 flex items-center gap-1.5">
                <UserPlus className="w-5 h-5 text-magic-purple" />
                <span>Recent Signups</span>
              </h3>
              <Link 
                to="/admin/users"
                className="text-xs font-quicksand font-bold text-magic-purple hover:underline"
              >
                View Directory
              </Link>
            </div>

            <div className="p-4 space-y-4">
              {recentUsers.map((u) => (
                <div key={u.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-2xl transition-colors">
                  <div className="w-10 h-10 bg-magic-purple-soft text-magic-purple rounded-full flex items-center justify-center font-quicksand font-bold text-base">
                    {u.name.charAt(0)}
                  </div>
                  <div className="flex-grow">
                    <p className="font-quicksand font-bold text-sm text-gray-800 leading-tight">{u.name}</p>
                    <p className="text-[10px] text-gray-400 font-medium truncate max-w-[150px]">{u.email}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-quicksand font-bold text-xs text-magic-purple-dark">⭐ {u.credits}</span>
                    <p className="text-[9px] text-gray-400 mt-0.5">{u.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-magic-purple-light/10 py-8 mt-16 text-center text-sm text-gray-400">
        <p>&copy; 2026 MagicPages. Admin dashboard panel. 🛡️</p>
      </footer>
    </div>
  );
}
