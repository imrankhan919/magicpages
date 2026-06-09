import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Upload, Palette, Printer, ArrowRight, Star, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import logoImg from '../assets/logo.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
};

export default function LandingPage() {
  const navigate = useNavigate();

  // Sample coloring pages for the gallery
  const samples = [
    { id: 1, title: "Magical Unicorn", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=300&auto=format&fit=crop", category: "Fantasy" },
    { id: 2, title: "Friendly Dinosaur", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=300&auto=format&fit=crop", category: "Prehistoric" },
    { id: 3, title: "Space Explorer", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300&auto=format&fit=crop", category: "Sci-Fi" },
    { id: 4, title: "Jungle Animals", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=300&auto=format&fit=crop", category: "Nature" },
    { id: 5, title: "Deep Sea Whale", image: "https://images.unsplash.com/photo-1518887570146-0612132dd618?q=80&w=300&auto=format&fit=crop", category: "Ocean" },
    { id: 6, title: "Playful Robot", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=300&auto=format&fit=crop", category: "Tech" },
  ];

  return (
    <div className="min-h-screen bg-magic-bg relative overflow-hidden flex flex-col font-vietnam">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-magic-pink-light/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-magic-purple-light/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Guest Navbar */}
      <Navbar isLoggedIn={false} />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-24">
        
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-magic-yellow-soft border-2 border-magic-yellow rounded-full text-magic-yellow-dark font-quicksand font-bold text-sm shadow-sm">
              <Sparkles className="w-4 h-4 text-magic-purple animate-spin" />
              <span>Make Coloring Books Magical!</span>
            </div>
            
            <h1 className="font-quicksand font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-800 leading-[1.15]">
              Turn Your Child Into a <br />
              <span className="bg-gradient-to-r from-magic-purple to-magic-pink bg-clip-text text-transparent relative inline-block">
                Coloring Book Hero
                <span className="absolute bottom-1 left-0 w-full h-2 bg-magic-yellow/40 -z-10 rounded-full" />
              </span> ✨
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Upload a simple photo and watch our magical AI instantly transform it into a personalized, printable coloring page. Let their creativity run wild!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                to="/register"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-magic-purple to-magic-purple-dark text-white rounded-full font-quicksand font-bold text-lg shadow-magic hover:shadow-magic-hover hover:scale-105 active:scale-95 flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>Start Creating Free</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a 
                href="#gallery"
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-magic-purple-light/20 text-magic-purple-dark hover:border-magic-purple hover:bg-magic-purple-soft/30 rounded-full font-quicksand font-bold text-lg shadow-sm hover:scale-105 active:scale-95 flex items-center justify-center gap-2 transition-all duration-200"
              >
                <span>View Samples</span>
              </a>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-[500px] aspect-square relative"
          >
            <div className="absolute inset-0 bg-magic-pink rounded-[2.5rem] transform rotate-3 shadow-magic opacity-40" />
            <div className="absolute inset-0 bg-white rounded-[2.5rem] p-4 transform -rotate-2 border-2 border-magic-purple-light/10 shadow-magic-hover overflow-hidden flex flex-col">
              <div className="flex-1 w-full flex relative rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
                {/* Photo half */}
                <div className="w-1/2 h-full border-r-2 border-dashed border-magic-purple-light/30 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400" 
                    alt="Original Kid" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full font-quicksand font-bold text-[10px] text-gray-700 shadow-sm">
                    1. Upload Photo
                  </div>
                </div>
                {/* Outline half */}
                <div className="w-1/2 h-full relative bg-white flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=300" 
                    alt="Coloring Page Outline" 
                    className="w-full h-full object-contain filter grayscale contrast-200 brightness-95 opacity-80"
                  />
                  <div className="absolute bottom-3 right-3 bg-magic-purple text-white px-2.5 py-1 rounded-full font-quicksand font-bold text-[10px] shadow-sm">
                    2. Magic Page!
                  </div>
                </div>
                {/* Sparkle Wand Badge */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-magic-yellow border-4 border-white text-magic-yellow-dark p-3.5 rounded-full shadow-magic-hover animate-bounce">
                  <Sparkles className="w-6 h-6 fill-magic-yellow-dark/20 text-magic-yellow-dark" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features & How It Works (Bento Grid Style) */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-quicksand font-bold text-3xl sm:text-4xl text-gray-800">
              How the Magic Works 🌟
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Three simple steps to transform your favorite memories into printable coloring adventures.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Step 1 */}
            <motion.div 
              variants={itemVariants}
              className="bg-white border-2 border-magic-purple-light/10 rounded-[2rem] p-8 shadow-magic relative hover:-translate-y-2 hover:border-magic-purple-light/40 transition-all duration-300 group"
            >
              <div className="absolute -top-5 -left-3 w-12 h-12 bg-magic-purple text-white rounded-full flex items-center justify-center font-quicksand font-bold text-xl shadow-md">
                1
              </div>
              <div className="w-16 h-16 bg-magic-purple-soft rounded-2xl flex items-center justify-center mb-6 text-magic-purple group-hover:scale-110 transition-transform duration-300">
                <Upload className="w-8 h-8" />
              </div>
              <h3 className="font-quicksand font-bold text-2xl text-gray-800 mb-3">Upload a Photo</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Snap a picture of your child, family pet, or favorite toy. Clear, close-up, and well-lit photos work best for our magic spell!
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              variants={itemVariants}
              className="bg-white border-2 border-magic-purple-light/10 rounded-[2rem] p-8 shadow-magic relative hover:-translate-y-2 hover:border-magic-purple-light/40 transition-all duration-300 group"
            >
              <div className="absolute -top-5 -left-3 w-12 h-12 bg-magic-yellow text-magic-yellow-dark rounded-full flex items-center justify-center font-quicksand font-bold text-xl shadow-md">
                2
              </div>
              <div className="w-16 h-16 bg-magic-yellow-soft rounded-2xl flex items-center justify-center mb-6 text-magic-yellow-dark group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="font-quicksand font-bold text-2xl text-gray-800 mb-3">Pick a Template</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Choose a fun setting or background! Put them in space as an astronaut, in a deep-sea submarine, or in a magical fairy garden.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              variants={itemVariants}
              className="bg-white border-2 border-magic-purple-light/10 rounded-[2rem] p-8 shadow-magic relative hover:-translate-y-2 hover:border-magic-purple-light/40 transition-all duration-300 group"
            >
              <div className="absolute -top-5 -left-3 w-12 h-12 bg-magic-pink text-white rounded-full flex items-center justify-center font-quicksand font-bold text-xl shadow-md">
                3
              </div>
              <div className="w-16 h-16 bg-magic-pink-soft rounded-2xl flex items-center justify-center mb-6 text-magic-pink group-hover:scale-110 transition-transform duration-300">
                <Printer className="w-8 h-8" />
              </div>
              <h3 className="font-quicksand font-bold text-2xl text-gray-800 mb-3">Download & Print</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Download high-resolution PNG or PDF files. Print them out instantly and let your child color with crayons, markers, or paints!
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Sample Gallery */}
        <section id="gallery" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-quicksand font-bold text-3xl sm:text-4xl text-gray-800">
              Browse the Gallery 🎨
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Check out some sample coloring pages generated by parents and kids using MagicPages.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {samples.map((sample) => (
              <motion.div 
                key={sample.id}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-white p-3 border border-magic-purple-light/10 rounded-[1.5rem] shadow-sm hover:shadow-magic transition-all duration-300 flex flex-col group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-gray-50 rounded-xl overflow-hidden mb-3 border border-gray-100 flex items-center justify-center">
                  <img 
                    src={sample.image} 
                    alt={sample.title}
                    className="w-full h-full object-contain filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="px-1 text-center">
                  <h4 className="font-quicksand font-bold text-sm text-gray-800 line-clamp-1">{sample.title}</h4>
                  <span className="text-[10px] bg-magic-purple-soft text-magic-purple px-2 py-0.5 rounded-full font-bold uppercase tracking-wider mt-1 inline-block">
                    {sample.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials or CTA Banner */}
        <section className="bg-gradient-to-r from-magic-purple to-magic-pink text-white rounded-[3rem] p-10 md:p-16 text-center space-y-8 relative overflow-hidden shadow-magic-hover">
          {/* Sparkles */}
          <div className="absolute top-8 left-12 text-magic-yellow opacity-40 animate-pulse">
            <span className="text-4xl">⭐</span>
          </div>
          <div className="absolute bottom-8 right-12 text-magic-yellow opacity-40 animate-bounce">
            <Sparkles className="w-8 h-8" />
          </div>
          
          <h2 className="font-quicksand font-bold text-3xl sm:text-4xl max-w-2xl mx-auto">
            Ready to Create Some Coloring Magic? ✨
          </h2>
          
          <p className="text-magic-purple-soft max-w-xl mx-auto text-base sm:text-lg">
            Join thousands of happy parents and teachers. Turn your photos into amazing coloring pages in under 10 seconds!
          </p>

          <Link 
            to="/register"
            className="px-8 py-4 bg-magic-yellow text-magic-yellow-dark border-2 border-white rounded-full font-quicksand font-bold text-lg shadow-lg hover:bg-white hover:text-magic-purple-dark active:scale-95 transition-all duration-200 inline-flex items-center gap-2"
          >
            <span>Generate Your First Page Free</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-magic-purple-light/10 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-quicksand font-bold text-xl text-magic-purple-dark">
            <img src={logoImg} alt="MagicPages Logo" className="h-10 w-auto object-contain" />
          </div>

          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; 2026 MagicPages. Made with 💖 for kids and creative minds.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-magic-purple">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-magic-purple">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-magic-purple">Parent Guide</a>
            <a href="#" className="text-gray-500 hover:text-magic-purple">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
