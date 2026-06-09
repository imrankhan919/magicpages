import React from 'react';
import { Check, Edit, Trash2, Star } from 'lucide-react';

export default function TemplateCard({
  image = "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=300",
  title = "Cute Dinosaur",
  credits = 1,
  selected = false,
  onSelect = () => {},
  isAdmin = false,
  onEdit = () => {},
  onDelete = () => {}
}) {
  return (
    <div 
      onClick={!isAdmin ? onSelect : undefined}
      className={`relative group bg-white border-2 rounded-[2rem] overflow-hidden transition-all duration-300 ${
        !isAdmin ? 'cursor-pointer' : ''
      } ${
        selected 
          ? 'border-magic-purple shadow-magic-glow scale-102 bg-magic-purple-soft/10' 
          : 'border-magic-purple-light/20 hover:border-magic-purple-light/80 hover:shadow-magic hover:-translate-y-1'
      }`}
    >
      {/* Aspect Ratio Container for coloring pages */}
      <div className="relative aspect-[4/5] bg-gray-50 flex items-center justify-center p-4 border-b border-gray-100 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain filter grayscale contrast-125 hover:scale-105 transition-transform duration-300"
        />

        {/* Selected Overlay Checkmark */}
        {selected && !isAdmin && (
          <div className="absolute top-3 right-3 bg-magic-purple text-white p-1.5 rounded-full shadow-md animate-bounce">
            <Check className="w-5 h-5 stroke-[3]" />
          </div>
        )}

        {/* Admin actions overlay */}
        {isAdmin && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <button 
              onClick={(e) => { e.stopPropagation(); onEdit(); }}
              className="p-3 bg-white text-magic-purple hover:bg-magic-purple hover:text-white rounded-full transition-colors duration-200 shadow-lg"
              title="Edit Template"
            >
              <Edit className="w-5 h-5" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); onDelete(); }}
              className="p-3 bg-white text-magic-pink hover:bg-magic-pink hover:text-white rounded-full transition-colors duration-200 shadow-lg"
              title="Delete Template"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Credit Badge */}
        {!isAdmin && (
          <div className="absolute bottom-3 right-3 flex items-center gap-0.5 px-2.5 py-1 bg-magic-yellow/90 border border-magic-yellow-dark/20 text-magic-yellow-dark rounded-full font-quicksand font-bold text-xs shadow-sm">
            <Star className="w-3.5 h-3.5 fill-magic-yellow-dark/30" />
            <span>{credits} Credit</span>
          </div>
        )}
      </div>

      {/* Info footer */}
      <div className="p-4 bg-white">
        <h3 className="font-quicksand font-bold text-lg text-gray-800 line-clamp-1">{title}</h3>
      </div>
    </div>
  );
}
