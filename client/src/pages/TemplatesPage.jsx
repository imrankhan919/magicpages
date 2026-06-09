import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Palette } from 'lucide-react';
import Navbar from '../components/Navbar';
import TemplateCard from '../components/TemplateCard';

export default function TemplatesPage() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);

  const templates = [
    { id: 1, title: "Fairy Kingdom", image: "https://images.unsplash.com/photo-1518887570146-0612132dd618?q=80&w=300", credits: 2 },
    { id: 2, title: "Dino Adventure", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=300", credits: 2 },
    { id: 3, title: "Space Explorer", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300", credits: 2 },
    { id: 4, title: "Jungle Safari", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=300", credits: 1 },
    { id: 5, title: "Deep Sea Submarine", image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=300", credits: 1 },
    { id: 6, title: "Princess Castle", image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=300", credits: 2 }
  ];

  const handleGenerate = () => {
    if (!selectedId) return;
    navigate('/generating');
  };

  const selectedTemplate = templates.find(t => t.id === selectedId);

  return (
    <div className="min-h-screen bg-magic-bg flex flex-col font-vietnam relative overflow-hidden pb-32">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-magic-pink-soft/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-magic-purple-soft/20 rounded-full blur-3xl -z-10" />

      {/* LoggedIn Navbar */}
      <Navbar isLoggedIn={true} />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-8 w-full space-y-12">
        {/* Header */}
        <section className="text-center space-y-3 max-w-2xl mx-auto">
          <h1 className="font-quicksand font-bold text-3xl sm:text-4xl text-magic-purple-dark">
            Choose Your Magical Scene 🎭
          </h1>
          <p className="text-gray-500 text-base sm:text-lg">
            Pick a background style for your coloring page. What kind of story adventure will you start today?
          </p>
        </section>

        {/* Template Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              title={template.title}
              image={template.image}
              credits={template.credits}
              selected={selectedId === template.id}
              onSelect={() => setSelectedId(template.id)}
            />
          ))}
        </section>
      </main>

      {/* Sticky Bottom Action Panel */}
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t-2 border-magic-purple-light/20 p-5 z-40 shadow-[0_-10px_25px_rgba(139,92,246,0.1)]"
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-magic-purple-soft text-magic-purple rounded-full flex items-center justify-center animate-pulse">
                  <Palette className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="font-quicksand font-bold text-lg text-gray-800 leading-tight">
                    Selected Theme: {selectedTemplate?.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium">
                    This creation will use <span className="text-magic-purple font-bold">{selectedTemplate?.credits} Credits</span>
                  </p>
                </div>
              </div>

              <button 
                onClick={handleGenerate}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-magic-purple to-magic-pink text-white rounded-full font-quicksand font-bold text-lg shadow-magic hover:shadow-magic-hover flex items-center justify-center gap-2 border-b-4 border-magic-purple-dark hover:border-b-2 active:border-b-0 active:translate-y-1 transition-all duration-200"
              >
                <span>Generate My Coloring Page</span>
                <Sparkles className="w-5 h-5 animate-spin" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white border-t border-magic-purple-light/10 py-8 text-center text-sm text-gray-400">
        <p>&copy; 2026 MagicPages. Pick your favorite style and let the magic paint! ⭐</p>
      </footer>
    </div>
  );
}
