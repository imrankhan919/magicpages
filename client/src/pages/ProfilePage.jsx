import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Coins, Calendar, Image as ImageIcon, Palette, History } from 'lucide-react';
import Navbar from '../components/Navbar';
import ImageCard from '../components/ImageCard';
import StatusBadge from '../components/StatusBadge';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('photos'); // 'photos' | 'creations' | 'history'
  const [credits, setCredits] = useState(5);
  const [creditRequestsHistory, setCreditRequestsHistory] = useState([]);

  const userInfo = {
    name: "Aryan",
    email: "aryan@magicpages.com",
    phone: "(555) 987-6543"
  };

  const dummyRequests = [
    { id: 1, name: "Sarah Jenkins", role: "Classroom Teacher", reason: "Credits for 3rd grade end-of-year storybook project.", amount: 500, date: "June 8, 2026", status: "pending", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150" },
    { id: 2, name: "Mark Davis", role: "Special Ed Dept", reason: "Creating personalized social stories for new students.", amount: 250, date: "June 7, 2026", status: "approved", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" },
    { id: 3, name: "Emma Wilson", role: "Library Coordinator", reason: "District-wide reading month kick-off materials.", amount: 1000, date: "June 6, 2026", status: "pending", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" },
    { id: 4, name: "Aryan", role: "Explorer Parent", reason: "Need extra credits to finish my custom dino series.", amount: 5, date: "June 5, 2026", status: "rejected", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK2-HFEpz2fwaVa1_D93Sdr2qOGCn_qL26wOhitt4NqrM6BV3y0eo836_ReIsLFaQphe-GVOSOzGTolYrWNqpJeyyAgAMbHB-UWTvaYMA3ijhjtPgfQHmC8dMAf12pYB3-3pgixaWOodsq0tzjbfWaliCh21p7G6Vr285AdnDRSHJLlyM4pURu3To9afhnJBGa9Icg89pmDFBPCSpJQZE5aLbl195Y0sPInMt8IsEL2XKN7AejlmwIRo7Qsyefp03GROmYZrIJySA animate-pulse" }
  ];

  // Load profile credentials and request history on mount
  useEffect(() => {
    // 1. Credits balance
    const savedCredits = localStorage.getItem('magic_pages_user_credits');
    if (savedCredits !== null) {
      setCredits(parseInt(savedCredits, 10));
    }

    // 2. Filter requests to show only Aryan's requests
    const savedRequests = localStorage.getItem('magic_pages_credit_requests');
    let allRequests = [];
    if (savedRequests) {
      allRequests = JSON.parse(savedRequests);
    } else {
      localStorage.setItem('magic_pages_credit_requests', JSON.stringify(dummyRequests));
      allRequests = dummyRequests;
    }
    const filtered = allRequests.filter(req => req.name === 'Aryan');
    setCreditRequestsHistory(filtered);
  }, []);

  const myPhotos = [
    { id: 1, title: "Aryan superhero outfit", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=300", date: "June 8, 2026" },
    { id: 2, title: "Puppy Bruno playing", image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=400", date: "June 7, 2026" },
    { id: 3, title: "Family picnic fun", image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400", date: "June 3, 2026" },
    { id: 4, title: "Cute cat sleeping", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400", date: "May 29, 2026" }
  ];

  const myCreations = [
    { id: 1, title: "Super Aryan Dino", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=300", date: "June 8, 2026" },
    { id: 2, title: "Unicorn in the Clouds", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=300", date: "June 7, 2026" },
    { id: 3, title: "Galaxy Space Explorer", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300", date: "June 5, 2026" },
    { id: 4, title: "Happy Metal Robot", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=300", date: "June 1, 2026" },
  ];

  return (
    <div className="min-h-screen bg-magic-bg flex flex-col font-vietnam relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-magic-pink-soft/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-magic-purple-soft/10 rounded-full blur-3xl -z-10" />

      {/* LoggedIn Navbar */}
      <Navbar isLoggedIn={true} credits={credits} />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-8 w-full space-y-8">
        
        {/* Profile Info Header */}
        <section className="bg-white border-2 border-magic-purple-light/10 rounded-[2.5rem] p-6 md:p-8 shadow-magic max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="relative w-28 h-28 rounded-full border-4 border-magic-purple bg-magic-purple-soft flex items-center justify-center text-4xl shadow-md overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK2-HFEpz2fwaVa1_D93Sdr2qOGCn_qL26wOhitt4NqrM6BV3y0eo836_ReIsLFaQphe-GVOSOzGTolYrWNqpJeyyAgAMbHB-UWTvaYMA3ijhjtPgfQHmC8dMAf12pYB3-3pgixaWOodsq0tzjbfWaliCh21p7G6Vr285AdnDRSHJLlyM4pURu3To9afhnJBGa9Icg89pmDFBPCSpJQZE5aLbl195Y0sPInMt8IsEL2XKN7AejlmwIRo7Qsyefp03GROmYZrIJySA" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex-grow text-center md:text-left space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-2 justify-center md:justify-start">
              <h1 className="font-quicksand font-bold text-3xl text-gray-800">{userInfo.name}</h1>
              <span className="px-3 py-1 bg-magic-purple-soft text-magic-purple text-xs font-bold rounded-full uppercase tracking-wider">
                Explorer
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>{userInfo.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>{userInfo.phone}</span>
              </div>
            </div>
          </div>

          {/* Credits Widget */}
          <div className="bg-magic-yellow-soft border-2 border-magic-yellow rounded-[2rem] p-4 text-center min-w-[150px] shadow-sm flex flex-col items-center">
            <Coins className="w-6 h-6 text-magic-yellow-dark mb-1 animate-pulse" />
            <span className="font-quicksand font-bold text-xl text-magic-yellow-dark">{credits} Credits</span>
            <span className="text-[10px] text-magic-yellow-dark/80 font-bold uppercase tracking-wider mt-0.5">Active Balance</span>
          </div>
        </section>

        {/* Tabs and Grid Area */}
        <section className="max-w-4xl mx-auto space-y-6">
          {/* Tab buttons */}
          <div className="flex border-b-2 border-magic-purple-light/10 gap-2 pb-px justify-center sm:justify-start">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center gap-1.5 px-5 py-3 border-b-4 font-quicksand font-bold text-sm transition-all duration-200 ${
                activeTab === 'photos'
                  ? 'border-magic-purple text-magic-purple'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              <ImageIcon className="w-4.5 h-4.5" />
              <span>My Photos</span>
            </button>

            <button
              onClick={() => setActiveTab('creations')}
              className={`flex items-center gap-1.5 px-5 py-3 border-b-4 font-quicksand font-bold text-sm transition-all duration-200 ${
                activeTab === 'creations'
                  ? 'border-magic-purple text-magic-purple'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              <Palette className="w-4.5 h-4.5" />
              <span>My Creations</span>
            </button>

            <button
              onClick={() => setActiveTab('history')}
              className={`flex items-center gap-1.5 px-5 py-3 border-b-4 font-quicksand font-bold text-sm transition-all duration-200 ${
                activeTab === 'history'
                  ? 'border-magic-purple text-magic-purple'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              <History className="w-4.5 h-4.5" />
              <span>Credit History</span>
            </button>
          </div>

          {/* Tab Content Panels */}
          <div>
            {activeTab === 'photos' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
              >
                {myPhotos.map((p) => (
                  <ImageCard
                    key={p.id}
                    title={p.title}
                    image={p.image}
                    date={p.date}
                    type="upload"
                    actionLabel="Select Template"
                    onAction={() => navigate('/templates')}
                  />
                ))}
              </motion.div>
            )}

            {activeTab === 'creations' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
              >
                {myCreations.map((c) => (
                  <ImageCard
                    key={c.id}
                    title={c.title}
                    image={c.image}
                    date={c.date}
                    type="creation"
                    onAction={(type) => alert(`Downloading ${c.title} as ${type.toUpperCase()}...`)}
                  />
                ))}
              </motion.div>
            )}

            {activeTab === 'history' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-magic-purple-light/10 rounded-[2rem] overflow-hidden shadow-magic"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-magic-purple-soft/30 font-quicksand font-bold text-sm text-magic-purple-dark border-b border-magic-purple-light/20">
                        <th className="px-6 py-4">Request Date</th>
                        <th className="px-6 py-4">Requested Credits</th>
                        <th className="px-6 py-4">Approval Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm text-gray-700 font-medium">
                      {creditRequestsHistory.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span>{row.date}</span>
                          </td>
                          <td className="px-6 py-4 font-quicksand font-bold">
                            ⭐ {row.amount} Credits
                          </td>
                          <td className="px-6 py-4">
                            <StatusBadge status={row.status} />
                          </td>
                        </tr>
                      ))}
                      {creditRequestsHistory.length === 0 && (
                        <tr>
                          <td colSpan="3" className="py-8 text-center text-gray-400 font-quicksand font-bold">
                            No request history. Click "Request Credits" on the Dashboard to start!
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-magic-purple-light/10 py-8 mt-16 text-center text-sm text-gray-400">
        <p>&copy; 2026 MagicPages. Made with love for kids and parents! ✨</p>
      </footer>
    </div>
  );
}
