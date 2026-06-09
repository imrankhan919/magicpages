import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Wand2, Star } from 'lucide-react';

export default function GeneratingPage() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);

  const loadingMessages = [
    "AI is painting the magic... ✨",
    "Mixing magical colors in the cauldron... 🎨",
    "Chasing friendly dinosaurs through the woods... 🦕",
    "Helping unicorns leap over rainbows... 🦄",
    "Sprinkling golden fairy dust on the canvas... 🧚",
    "Polishing space helmets for takeoff... 🚀"
  ];

  // Cycle loading messages
  useEffect(() => {
    const textInterval = setInterval(() => {
      setLoadingTextIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2000);
    return () => clearInterval(textInterval);
  }, []);

  // Simulate loading progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Auto redirect to result screen when completed
          setTimeout(() => {
            navigate('/result');
          }, 500);
          return 100;
        }
        // Increment progress randomly
        const next = prev + Math.floor(Math.random() * 12) + 3;
        return next > 100 ? 100 : next;
      });
    }, 300);

    return () => clearInterval(progressInterval);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-magic-bg via-white to-magic-pink-soft/10 flex flex-col items-center justify-center p-6 relative overflow-hidden font-vietnam">
      {/* Decorative Floating Sparkles */}
      <div className="absolute top-12 left-12 opacity-30 text-magic-purple animate-bounce">
        <Star className="w-10 h-10 fill-magic-purple" />
      </div>
      <div className="absolute bottom-16 right-16 opacity-30 text-magic-pink animate-bounce duration-1000">
        <Sparkles className="w-12 h-12" />
      </div>
      <div className="absolute top-1/4 right-1/4 opacity-20 text-magic-blue animate-pulse">
        <span className="text-4xl">🎨</span>
      </div>

      <div className="w-full max-w-md mx-auto text-center space-y-8 z-10 flex flex-col items-center">
        {/* Animated Magic Wand Wrapper */}
        <div className="relative w-44 h-44 flex items-center justify-center">
          {/* Pulsing Aura */}
          <div className="absolute inset-2 bg-magic-purple/20 rounded-full blur-2xl animate-pulse" />
          
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3, 
              ease: "easeInOut" 
            }}
            className="relative z-10 text-magic-purple"
          >
            <div className="p-6 bg-white border-2 border-magic-purple-light/20 rounded-[2rem] shadow-magic-hover">
              <Wand2 className="w-16 h-16 text-magic-purple-dark animate-pulse" />
            </div>
          </motion.div>

          {/* Spinner element */}
          <div className="absolute -inset-1 border-4 border-dashed border-magic-pink rounded-full animate-spin duration-3000" />
        </div>

        {/* Dynamic Loading Message */}
        <div className="space-y-3">
          <h1 className="font-quicksand font-bold text-2xl sm:text-3xl text-magic-purple-dark animate-pulse">
            {loadingMessages[loadingTextIndex]}
          </h1>
          <p className="text-gray-400 font-medium text-sm max-w-[300px] mx-auto">
            Mixing colors, drawing lines, and writing spells just for you.
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-gray-100 border border-magic-purple-light/10 rounded-full h-5 overflow-hidden shadow-inner relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-magic-purple to-magic-pink rounded-full relative"
            style={{ width: `${progress}%` }}
          />
          {/* Shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>

        {/* Progress label */}
        <div className="flex justify-between w-full px-2 text-xs font-quicksand font-bold text-gray-500">
          <span>CREATING PAGES...</span>
          <span className="text-magic-purple">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
