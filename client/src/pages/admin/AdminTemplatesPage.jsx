import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, LayoutGrid } from 'lucide-react';
import Navbar from '../../components/Navbar';
import TemplateCard from '../../components/TemplateCard';

export default function AdminTemplatesPage() {
  const [templates, setTemplates] = useState([
    { id: 1, title: "Fairy Kingdom", image: "https://images.unsplash.com/photo-1518887570146-0612132dd618?q=80&w=300", credits: 2 },
    { id: 2, title: "Dino Adventure", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=300", credits: 2 },
    { id: 3, title: "Space Explorer", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300", credits: 2 },
    { id: 4, title: "Jungle Safari", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=300", credits: 1 }
  ]);

  const handleAddTemplate = () => {
    alert("Add New Template: Simulated file and detail configuration form triggered! ✨");
    const newTemplate = {
      id: Date.now(),
      title: "Magical Underwater Coral",
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=300",
      credits: 2
    };
    setTemplates([...templates, newTemplate]);
  };

  const handleEdit = (template) => {
    alert(`Editing Template: Configured editor mockup for ${template.title}!`);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this theme template?")) {
      setTemplates(prev => prev.filter(t => t.id !== id));
      alert("Template deleted successfully.");
    }
  };

  return (
    <div className="min-h-screen bg-magic-bg flex flex-col font-vietnam relative overflow-hidden">
      {/* Admin Navbar */}
      <Navbar isLoggedIn={true} isAdmin={true} />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 py-8 w-full space-y-8 z-10">
        
        {/* Header and Add Button */}
        <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-magic-purple-light/10 pb-6">
          <div>
            <h1 className="font-quicksand font-bold text-3xl text-gray-800 flex items-center gap-2">
              <LayoutGrid className="w-8 h-8 text-magic-purple" />
              <span>Manage Templates</span>
            </h1>
            <p className="text-gray-500 text-sm">Create, edit, or remove coloring book backgrounds and scenes.</p>
          </div>

          <button 
            onClick={handleAddTemplate}
            className="w-full sm:w-auto px-6 py-3 bg-magic-purple hover:bg-magic-purple-dark text-white rounded-full font-quicksand font-bold text-sm shadow-md flex items-center justify-center gap-2 border-b-4 border-magic-purple-dark hover:border-b-2 active:border-b-0 active:translate-y-[2px] transition-all duration-200"
          >
            <Plus className="w-5 h-5" />
            <span>Add New Template</span>
          </button>
        </section>

        {/* Templates Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              title={template.title}
              image={template.image}
              credits={template.credits}
              isAdmin={true}
              onEdit={() => handleEdit(template)}
              onDelete={() => handleDelete(template.id)}
            />
          ))}
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-magic-purple-light/10 py-8 mt-16 text-center text-sm text-gray-400">
        <p>&copy; 2026 MagicPages. Admin dashboard panel. 🛡️</p>
      </footer>
    </div>
  );
}
