import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Upload, Palette, Coins, ArrowRight, Star, HelpCircle, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import ImageCard from '../components/ImageCard';

export default function UserDashboard() {
  const [credits, setCredits] = useState(5);
  const [showToast, setShowToast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestAmount, setRequestAmount] = useState(50);
  const [requestReason, setRequestReason] = useState('');

  // Load credits balance from localStorage on mount
  useEffect(() => {
    const savedCredits = localStorage.getItem('magic_pages_user_credits');
    if (savedCredits !== null) {
      setCredits(parseInt(savedCredits, 10));
    } else {
      localStorage.setItem('magic_pages_user_credits', '5');
    }
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setRequestReason('');
    setRequestAmount(50);
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();

    // Create a new request object
    const newRequest = {
      id: Date.now(),
      name: "Aryan",
      role: "Explorer Parent",
      reason: requestReason || "Need extra credits to finish my custom dino series.",
      amount: parseInt(requestAmount, 10),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: "pending",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK2-HFEpz2fwaVa1_D93Sdr2qOGCn_qL26wOhitt4NqrM6BV3y0eo836_ReIsLFaQphe-GVOSOzGTolYrWNqpJeyyAgAMbHB-UWTvaYMA3ijhjtPgfQHmC8dMAf12pYB3-3pgixaWOodsq0tzjbfWaliCh21p7G6Vr285AdnDRSHJLlyM4pURu3To9afhnJBGa9Icg89pmDFBPCSpJQZE5aLbl195Y0sPInMt8IsEL2XKN7AejlmwIRo7Qsyefp03GROmYZrIJySA"
    };

    // Load current requests, append, and save
    const currentRequests = JSON.parse(localStorage.getItem('magic_pages_credit_requests')) || [
      { id: 1, name: "Sarah Jenkins", role: "Classroom Teacher", reason: "Credits for 3rd grade end-of-year storybook project.", amount: 500, date: "June 8, 2026", status: "pending", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150" },
      { id: 2, name: "Mark Davis", role: "Special Ed Dept", reason: "Creating personalized social stories for new students.", amount: 250, date: "June 7, 2026", status: "approved", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" },
      { id: 3, name: "Emma Wilson", role: "Library Coordinator", reason: "District-wide reading month kick-off materials.", amount: 1000, date: "June 6, 2026", status: "pending", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150" }
    ];

    const updatedRequests = [newRequest, ...currentRequests];
    localStorage.setItem('magic_pages_credit_requests', JSON.stringify(updatedRequests));

    handleCloseModal();
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const creations = [
    { id: 1, title: "Super Aryan Dino", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=300", date: "June 8, 2026" },
    { id: 2, title: "Unicorn in the Clouds", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=300", date: "June 7, 2026" },
    { id: 3, title: "Galaxy Space Explorer", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300", date: "June 5, 2026" },
    { id: 4, title: "Happy Metal Robot", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=300", date: "June 1, 2026" },
  ];

  return (
    <div className="min-h-screen bg-magic-bg flex flex-col font-vietnam relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-magic-pink-light/25 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-magic-purple-light/20 rounded-full blur-3xl -z-10" />

      {/* LoggedIn Navbar */}
      <Navbar isLoggedIn={true} credits={credits} />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-8 w-full space-y-12">
        
        {/* Toast Notification */}
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-6 z-50 bg-magic-purple text-white px-6 py-3.5 rounded-full font-quicksand font-bold shadow-lg flex items-center gap-2 border border-white/20"
          >
            <Sparkles className="w-5 h-5 animate-bounce" />
            <span>✨ Request sent! Awaiting admin approval.</span>
          </motion.div>
        )}

        {/* Welcome Banner */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-magic-purple to-magic-pink text-white rounded-[2.5rem] p-8 md:p-12 shadow-magic relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Sparkles */}
          <div className="absolute top-6 left-6 text-magic-yellow/40 animate-pulse">
            <span className="text-xl">⭐</span>
          </div>
          <div className="absolute bottom-6 right-10 text-white/20 animate-bounce">
            <Sparkles className="w-12 h-12" />
          </div>

          <div className="space-y-4 max-w-2xl text-center md:text-left z-10">
            <h1 className="font-quicksand font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Hi Aryan, ready to paint some magic? ✨
            </h1>
            <p className="text-magic-purple-soft text-base sm:text-lg">
              Upload a picture or choose a theme to generate your own personalized, high-quality coloring books instantly.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
              <Link 
                to="/upload"
                className="px-6 py-3 bg-magic-yellow text-magic-yellow-dark border-2 border-white rounded-full font-quicksand font-bold text-sm shadow-md hover:bg-white hover:text-magic-purple active:scale-95 transition-all duration-200 flex items-center gap-1.5"
              >
                <Upload className="w-4 h-4" />
                <span>Upload Photo</span>
              </Link>
              <Link 
                to="/templates"
                className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 rounded-full font-quicksand font-bold text-sm active:scale-95 transition-all duration-200 flex items-center gap-1.5"
              >
                <Palette className="w-4 h-4" />
                <span>Choose Template</span>
              </Link>
            </div>
          </div>

          {/* Credits Summary Badge */}
          <div className="bg-white/90 backdrop-blur rounded-[2rem] p-6 text-center text-gray-800 border-2 border-white shadow-lg flex flex-col items-center gap-1 min-w-[180px] z-10">
            <div className="w-12 h-12 bg-magic-yellow-soft border-2 border-magic-yellow text-magic-yellow-dark rounded-full flex items-center justify-center animate-bounce">
              <Coins className="w-6 h-6 fill-magic-yellow/30" />
            </div>
            <span className="font-quicksand font-bold text-2xl text-magic-purple-dark">{credits} Credits</span>
            <span className="text-xs text-gray-400 font-medium">Available Balance</span>
            <button 
              onClick={handleOpenModal}
              className="mt-3 text-xs font-quicksand font-bold text-magic-purple hover:text-magic-pink underline underline-offset-2 hover:scale-105 transition-transform"
            >
              Request Credits ⭐
            </button>
          </div>
        </motion.section>

        {/* Quick Actions & Recent Creations */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Quick Actions Panel */}
          <section className="lg:col-span-1 space-y-6">
            <h2 className="font-quicksand font-bold text-2xl text-gray-800">Quick Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              
              <Link 
                to="/upload"
                className="bg-white border-2 border-magic-purple-light/10 hover:border-magic-purple rounded-[2rem] p-5 shadow-sm hover:shadow-magic hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-4 group"
              >
                <div className="p-3 bg-magic-purple-soft text-magic-purple rounded-2xl group-hover:bg-magic-purple group-hover:text-white transition-colors duration-300">
                  <Upload className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-quicksand font-bold text-gray-800 group-hover:text-magic-purple transition-colors">Upload Portrait</h4>
                  <p className="text-xs text-gray-400">Convert kid face to line art</p>
                </div>
              </Link>

              <Link 
                to="/templates"
                className="bg-white border-2 border-magic-purple-light/10 hover:border-magic-purple rounded-[2rem] p-5 shadow-sm hover:shadow-magic hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-4 group"
              >
                <div className="p-3 bg-magic-yellow-soft text-magic-yellow-dark rounded-2xl group-hover:bg-magic-yellow group-hover:text-magic-yellow-dark transition-colors duration-300">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-quicksand font-bold text-gray-800 group-hover:text-magic-purple transition-colors">Pick Template</h4>
                  <p className="text-xs text-gray-400">Dino, space, magic worlds</p>
                </div>
              </Link>

              <div 
                onClick={handleOpenModal}
                className="bg-white border-2 border-magic-purple-light/10 hover:border-magic-purple rounded-[2rem] p-5 shadow-sm hover:shadow-magic hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-4 group"
              >
                <div className="p-3 bg-magic-pink-soft text-magic-pink rounded-2xl group-hover:bg-magic-pink group-hover:text-white transition-colors duration-300">
                  <Coins className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-quicksand font-bold text-gray-800 group-hover:text-magic-purple transition-colors">Ask Credits</h4>
                  <p className="text-xs text-gray-400">Request from admin</p>
                </div>
              </div>

            </div>
          </section>

          {/* Recent Creations Grid */}
          <section className="lg:col-span-3 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-quicksand font-bold text-2xl text-gray-800">Your Recent Masterpieces 🎨</h2>
              <Link 
                to="/profile" 
                className="font-quicksand font-bold text-sm text-magic-purple hover:text-magic-pink flex items-center gap-1 hover:underline"
              >
                <span>View All Creations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {creations.map((c) => (
                <ImageCard
                  key={c.id}
                  title={c.title}
                  image={c.image}
                  date={c.date}
                  type="creation"
                  onAction={(type) => alert(`Downloading ${c.title} as ${type.toUpperCase()}...`)}
                />
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* Credit Request Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white border-2 border-magic-purple rounded-[2.5rem] p-8 max-w-md w-full relative z-10 shadow-2xl space-y-6"
            >
              {/* Close Button */}
              <button 
                onClick={handleCloseModal}
                className="absolute top-6 right-6 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-magic-purple-soft text-magic-purple rounded-full flex items-center justify-center mx-auto mb-2">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="font-quicksand font-bold text-2xl text-gray-800">Request Magic Credits 🪄</h3>
                <p className="text-xs text-gray-400 font-medium">
                  Ask the wizard admin for supplementary coloring page credits.
                </p>
              </div>

              <form onSubmit={handleSubmitRequest} className="space-y-4">
                {/* Credits Amount */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="amount" className="block font-quicksand font-bold text-sm text-gray-600 ml-1">
                    How many credits do you need?
                  </label>
                  <input 
                    id="amount"
                    type="number"
                    min="1"
                    max="1000"
                    required
                    value={requestAmount}
                    onChange={(e) => setRequestAmount(e.target.value)}
                    className="block w-full px-4 py-2.5 bg-gray-50 border-2 border-magic-purple-light/20 focus:border-magic-purple focus:bg-white rounded-full font-quicksand font-bold text-sm text-gray-800 outline-none"
                  />
                </div>

                {/* Reason Textarea */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="reason" className="block font-quicksand font-bold text-sm text-gray-600 ml-1">
                    What is the reason for this request?
                  </label>
                  <textarea 
                    id="reason"
                    required
                    rows="3"
                    value={requestReason}
                    onChange={(e) => setRequestReason(e.target.value)}
                    placeholder="e.g., Creating dinosaur scenes for my class coloring books."
                    className="block w-full px-4 py-3 bg-gray-50 border-2 border-magic-purple-light/20 focus:border-magic-purple focus:bg-white rounded-[1.5rem] font-quicksand text-sm text-gray-800 outline-none h-24 resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button 
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 py-3 border border-gray-300 rounded-full font-quicksand font-bold text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 py-3 bg-gradient-to-r from-magic-purple to-magic-pink text-white rounded-full font-quicksand font-bold text-sm shadow-md hover:shadow-lg active:scale-95 transition-all border-b-4 border-magic-purple-dark hover:border-b-2 active:border-b-0"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white border-t border-magic-purple-light/10 py-8 mt-16 text-center text-sm text-gray-400">
        <p>&copy; 2026 MagicPages. Let your child's stories come to life! ⭐</p>
      </footer>
    </div>
  );
}
