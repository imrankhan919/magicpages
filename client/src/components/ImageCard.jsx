import React from 'react';
import { Download, FileDown, ArrowRight, Calendar } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function ImageCard({
  image = "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=300",
  title = "My Magic Unicorn",
  status = null, // e.g. "Approved", "Pending"
  date = "June 8, 2026",
  type = "creation", // "creation" | "upload"
  onAction = () => {},
  actionLabel = "Use This Photo"
}) {
  return (
    <div className="bg-white border border-magic-purple-light/20 rounded-[2rem] overflow-hidden shadow-magic hover:shadow-magic-hover hover:-translate-y-1 transition-all duration-300">
      {/* Image container */}
      <div className="relative aspect-square bg-gray-50 flex items-center justify-center p-3 overflow-hidden group">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover rounded-[1.5rem] transition-transform duration-300 group-hover:scale-105 ${
            type === 'creation' ? 'filter grayscale contrast-125' : ''
          }`}
        />

        {/* Status badge in top-left */}
        {status && (
          <div className="absolute top-5 left-5">
            <StatusBadge status={status} />
          </div>
        )}

        {/* Action button overlay for uploads */}
        {type === 'upload' && (
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <button
              onClick={onAction}
              className="px-6 py-2.5 bg-magic-purple hover:bg-magic-purple-dark text-white rounded-full font-quicksand font-bold text-sm shadow-md hover:scale-105 active:scale-95 flex items-center gap-1.5 transition-all duration-200"
            >
              <span>{actionLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Info details */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-quicksand font-bold text-base text-gray-800 line-clamp-1">{title}</h4>
            <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{date}</span>
            </div>
          </div>
        </div>

        {/* Action Row for Creations */}
        {type === 'creation' && (
          <div className="flex items-center gap-2 mt-4">
            <button 
              onClick={() => onAction('png')}
              className="flex-1 py-2 px-3 border border-magic-purple text-magic-purple hover:bg-magic-purple-soft rounded-full font-quicksand font-bold text-xs flex items-center justify-center gap-1 transition-colors duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PNG</span>
            </button>
            <button 
              onClick={() => onAction('pdf')}
              className="flex-1 py-2 px-3 bg-magic-purple hover:bg-magic-purple-dark text-white rounded-full font-quicksand font-bold text-xs flex items-center justify-center gap-1 transition-colors duration-200"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>PDF</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
