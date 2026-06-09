import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { UploadCloud, Image as ImageIcon, Sparkles, Plus, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import ImageCard from '../components/ImageCard';

export default function UploadPage() {
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([
    { id: 1, title: "Aryan superhero outfit", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400", date: "June 8, 2026" },
    { id: 2, title: "Puppy Bruno playing", image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=400", date: "June 7, 2026" },
    { id: 3, title: "Family picnic fun", image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=400", date: "June 3, 2026" },
    { id: 4, title: "Cute cat sleeping", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=400", date: "May 29, 2026" }
  ]);

  const handleUpload = () => {
    alert("Simulated file dialog: Photo uploaded successfully! ✨");
    const newPhoto = {
      id: Date.now(),
      title: "New Uploaded Photo",
      image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=400",
      date: "Just now"
    };
    setPhotos([newPhoto, ...photos]);
  };

  const handleSelectPhoto = (photo) => {
    // Navigate to templates page to pick a style for this photo
    navigate('/templates');
  };

  return (
    <div className="min-h-screen bg-magic-bg flex flex-col font-vietnam relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-magic-blue-soft/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-magic-purple-soft/20 rounded-full blur-3xl -z-10" />

      {/* LoggedIn Navbar */}
      <Navbar isLoggedIn={true} />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-8 w-full space-y-12">
        {/* Page Title */}
        <section className="text-center space-y-3 max-w-2xl mx-auto">
          <h1 className="font-quicksand font-bold text-3xl sm:text-4xl text-magic-purple-dark">
            Upload Reference Photo 📸
          </h1>
          <p className="text-gray-500 text-base sm:text-lg">
            Add a clear picture of your child, pet, or family. Our magical AI will use it as the main character for your coloring page!
          </p>
        </section>

        {/* Drag and Drop Zone */}
        <section className="max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            onClick={handleUpload}
            className="border-4 border-dashed border-magic-purple-light/30 hover:border-magic-purple bg-white rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center justify-center text-center shadow-magic hover:shadow-magic-hover cursor-pointer transition-all duration-300 relative group overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute -top-12 -left-12 text-magic-purple/10 pointer-events-none group-hover:rotate-6 transition-transform duration-500">
              <Sparkles className="w-32 h-32 fill-current" />
            </div>
            <div className="absolute -bottom-16 -right-16 text-magic-pink/10 pointer-events-none group-hover:-rotate-6 transition-transform duration-500">
              <Sparkles className="w-40 h-40 fill-current" />
            </div>

            <div className="w-20 h-20 bg-magic-purple-soft text-magic-purple rounded-[2rem] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
              <UploadCloud className="w-10 h-10" />
            </div>

            <h3 className="font-quicksand font-bold text-2xl text-gray-800 mb-2">
              Drag & Drop your photo here
            </h3>
            <p className="text-gray-400 font-medium text-sm mb-6">
              or click to browse files from your device
            </p>

            <button className="px-6 py-3 bg-magic-purple hover:bg-magic-purple-dark text-white rounded-full font-quicksand font-bold text-sm shadow-md flex items-center gap-2 transition-transform duration-200 border-b-4 border-magic-purple-dark hover:border-b-2 active:border-b-0">
              <Plus className="w-4 h-4" />
              <span>Choose Photo</span>
            </button>

            <div className="flex items-center gap-1.5 mt-6 text-xs text-gray-400">
              <AlertCircle className="w-4 h-4 text-magic-purple" />
              <span>Tips: Close-up portraits with clear lighting work best! (Max 10MB)</span>
            </div>
          </motion.div>
        </section>

        {/* Previously Uploaded Photos */}
        <section className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between border-b border-magic-purple-light/10 pb-4">
            <h2 className="font-quicksand font-bold text-2xl text-gray-800 flex items-center gap-2">
              <ImageIcon className="w-6 h-6 text-magic-pink" />
              <span>Previously Uploaded Photos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <ImageCard
                key={photo.id}
                title={photo.title}
                image={photo.image}
                date={photo.date}
                type="upload"
                actionLabel="Use This Photo"
                onAction={() => handleSelectPhoto(photo)}
              />
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-magic-purple-light/10 py-8 mt-16 text-center text-sm text-gray-400">
        <p>&copy; 2026 MagicPages. Pick a photo and make something beautiful! 🎨</p>
      </footer>
    </div>
  );
}
