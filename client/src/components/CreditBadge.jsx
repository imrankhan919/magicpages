import React from 'react';
import { Star } from 'lucide-react';

export default function CreditBadge({ credits = 5, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-1.5 px-4 py-1.5 bg-magic-yellow-soft border-2 border-magic-yellow rounded-full text-magic-yellow-dark font-quicksand font-bold text-sm shadow-sm hover:scale-105 transition-transform duration-200 ${className}`}>
      <Star className="w-4 h-4 fill-magic-yellow text-magic-yellow-dark animate-pulse" />
      <span>{credits} {credits === 1 ? 'Credit' : 'Credits'}</span>
    </div>
  );
}
