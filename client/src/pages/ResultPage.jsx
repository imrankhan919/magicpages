import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Download, FileDown, ArrowLeft, Star, Compass } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function ResultPage() {
  const navigate = useNavigate();

  const handleDownload = (type) => {
    alert(`Downloading your Magic Page as ${type.toUpperCase()}... Enjoy coloring! 🎨`);
  };

  // Floating celebration emojis
  const celebratoryItems = [
    { id: 1, text: "🎉", x: "15%", y: "20%", delay: 0.1 },
    { id: 2, text: "✨", x: "85%", y: "25%", delay: 0.3 },
    { id: 3, text: "🖍️", x: "12%", y: "60%", delay: 0.5 },
    { id: 4, text: "🌈", x: "88%", y: "65%", delay: 0.2 },
    { id: 5, text: "🦕", x: "20%", y: "80%", delay: 0.4 },
    { id: 6, text: "🦄", x: "80%", y: "85%", delay: 0.6 }
  ];

  return (
    <div className="min-h-screen bg-magic-bg flex flex-col font-vietnam relative overflow-hidden">
      {/* Celebration Confetti-like Floating Emojis */}
      {celebratoryItems.map((item) => (
        <motion.div
          key={item.id}
          initial={{ scale: 0, opacity: 0, y: 50 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7], y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay: item.delay,
            ease: "easeInOut"
          }}
          className="absolute z-0 pointer-events-none hidden md:block text-4xl"
          style={{ left: item.x, top: item.y }}
        >
          {item.text}
        </motion.div>
      ))}

      {/* LoggedIn Navbar */}
      <Navbar isLoggedIn={true} />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-8 w-full space-y-8 z-10">
        
        {/* Header */}
        <section className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-magic-green-soft border border-magic-green text-magic-green-dark rounded-full font-quicksand font-bold text-xs shadow-sm">
            <Sparkles className="w-3.5 h-3.5 fill-magic-green-dark/20 text-magic-green-dark" />
            <span>Successfully Generated!</span>
          </div>
          <h1 className="font-quicksand font-bold text-3xl sm:text-4xl text-magic-purple-dark">
            Ta-da! Your Page is Ready! 🎉
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Your custom coloring book page is complete. Grab your crayons, colored pencils, or markers!
          </p>
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-magic-yellow-soft border border-magic-yellow/40 rounded-full text-magic-yellow-dark font-quicksand font-bold text-xs">
            <Star className="w-4 h-4 fill-magic-yellow/20" />
            <span>Used 2 Credits</span>
          </div>
        </section>

        {/* Action and Preview Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Coloring Page Card Preview (takes 7 columns) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white border-2 border-magic-purple-light/10 rounded-[2.5rem] p-4 shadow-magic hover:shadow-magic-hover transition-shadow duration-300"
          >
            <div className="relative aspect-[4/5] bg-gray-50 border-2 border-dashed border-gray-200 rounded-[1.8rem] overflow-hidden flex items-center justify-center p-6 group">
              <img 
                src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=450" 
                alt="Generated Coloring Page Outline" 
                className="w-full h-full object-contain filter grayscale contrast-200 brightness-95 opacity-90 p-4 transition-transform duration-300 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300" />
            </div>
          </motion.div>

          {/* Action controls (takes 5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Actions Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-magic-purple-light/10 rounded-[2.5rem] p-6 shadow-magic space-y-4"
            >
              <h3 className="font-quicksand font-bold text-xl text-gray-800 border-b border-gray-100 pb-3">
                Save & Print
              </h3>

              <div className="space-y-3">
                <button 
                  onClick={() => handleDownload('pdf')}
                  className="w-full py-4 bg-magic-purple hover:bg-magic-purple-dark text-white rounded-full font-quicksand font-bold text-base shadow-md hover:scale-102 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 border-b-4 border-magic-purple-dark hover:border-b-2 active:border-b-0"
                >
                  <FileDown className="w-5 h-5" />
                  <span>Download PDF Document</span>
                </button>

                <button 
                  onClick={() => handleDownload('png')}
                  className="w-full py-4 bg-white hover:bg-magic-purple-soft/30 text-magic-purple border-2 border-magic-purple-light/30 hover:border-magic-purple rounded-full font-quicksand font-bold text-base shadow-sm hover:scale-102 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download PNG Image</span>
                </button>
              </div>

              <div className="border-t border-gray-100 pt-4 mt-2">
                <Link 
                  to="/upload"
                  className="w-full py-3.5 bg-gradient-to-r from-magic-pink to-magic-pink-dark text-white rounded-full font-quicksand font-bold text-base shadow-md hover:scale-102 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 border-b-4 border-magic-pink-dark hover:border-b-2 active:border-b-0 inline-flex"
                >
                  <Compass className="w-5 h-5" />
                  <span>Create Another</span>
                </Link>
              </div>
            </motion.div>

            {/* Prompt details Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-magic-purple-soft/20 border border-magic-purple-light/20 rounded-[2rem] p-5 space-y-2"
            >
              <h4 className="font-quicksand font-bold text-xs text-magic-purple-dark uppercase tracking-wider">
                Magic Ingredients
              </h4>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                "A brave 7-year-old explorer riding a friendly dinosaur in a prehistoric land, cartoon coloring book style, clean thick borders."
              </p>
            </motion.div>

            {/* Back button */}
            <Link 
              to="/dashboard"
              className="inline-flex items-center gap-1.5 text-sm font-quicksand font-bold text-magic-purple hover:text-magic-pink transition-colors ml-2 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Dashboard</span>
            </Link>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-magic-purple-light/10 py-8 mt-16 text-center text-sm text-gray-400">
        <p>&copy; 2026 MagicPages. Print, color, and share your creations! 🎨</p>
      </footer>
    </div>
  );
}
