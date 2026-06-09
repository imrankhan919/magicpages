import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FileEdit } from 'lucide-react';
import Navbar from '../../components/Navbar';
import StatusBadge from '../../components/StatusBadge';

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { id: 1, name: "Sarah Jenkins", email: "sarah.j@classroom.edu", phone: "(555) 123-4567", credits: 500, status: "approved" },
    { id: 2, name: "Mark Davis", email: "mark.d@specialed.org", phone: "(555) 987-6543", credits: 250, status: "approved" },
    { id: 3, name: "Emma Wilson", email: "emma.w@districtlibrary.gov", phone: "(555) 456-7890", credits: 1000, status: "approved" },
    { id: 4, name: "Aryan", email: "aryan@magicpages.com", phone: "(555) 987-6543", credits: 5, status: "approved" },
    { id: 5, name: "Jessica Taylor", email: "jessica@taylorhome.net", phone: "(555) 890-1234", credits: 15, status: "rejected" }
  ];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-magic-bg flex flex-col font-vietnam relative overflow-hidden">
      {/* Admin Navbar */}
      <Navbar isLoggedIn={true} isAdmin={true} />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-8 w-full space-y-8 z-10">
        
        {/* Header and Search */}
        <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-magic-purple-light/10 pb-6">
          <div>
            <h1 className="font-quicksand font-bold text-3xl text-gray-800">User Directory</h1>
            <p className="text-gray-500 text-sm">Manage user registrations, accounts, and credits balances.</p>
          </div>

          <div className="relative w-full sm:w-80">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search className="w-5 h-5" />
            </div>
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or email..."
              className="block w-full pl-11 pr-4 py-2.5 bg-white border-2 border-magic-purple-light/20 focus:border-magic-purple rounded-full font-quicksand text-sm text-gray-800 outline-none shadow-sm transition-all"
            />
          </div>
        </section>

        {/* Directory Table */}
        <section className="bg-white border border-magic-purple-light/10 rounded-[2.5rem] shadow-magic overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 font-quicksand font-bold text-xs text-gray-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Name</th>
                  <th className="py-4 px-6">Contact Info</th>
                  <th className="py-4 px-6">Credits Balance</th>
                  <th className="py-4 px-6">Account Status</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700 font-medium">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50/30 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-magic-purple-soft text-magic-purple rounded-full flex items-center justify-center font-quicksand font-bold text-sm">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-quicksand font-bold text-gray-800 leading-tight">{user.name}</p>
                          <p className="text-[10px] text-gray-400 font-medium">ID: #{user.id * 123}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-xs text-gray-500 space-y-0.5">
                      <p className="text-gray-700">{user.email}</p>
                      <p className="text-gray-400 font-normal">{user.phone}</p>
                    </td>
                    <td className="py-4 px-6 font-quicksand font-bold text-magic-purple-dark text-sm">
                      ⭐ {user.credits} Credits
                    </td>
                    <td className="py-4 px-6">
                      <StatusBadge status={user.status} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => alert(`Edit User Modal: Opening config for ${user.name}`)}
                          className="px-4 py-1.5 bg-magic-purple-soft hover:bg-magic-purple hover:text-white text-magic-purple-dark rounded-full font-quicksand font-bold text-xs flex items-center gap-1 transition-all duration-200"
                        >
                          <FileEdit className="w-3.5 h-3.5" />
                          <span>Edit</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
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
