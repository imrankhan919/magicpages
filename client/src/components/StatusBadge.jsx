import React from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

export default function StatusBadge({ status = 'Pending', className = "" }) {
  const normalizedStatus = status.toLowerCase();

  let styles = {
    bg: 'bg-magic-yellow-soft border-magic-yellow text-magic-yellow-dark',
    icon: <Clock className="w-3.5 h-3.5" />,
    label: 'Pending'
  };

  if (normalizedStatus === 'approved' || normalizedStatus === 'active') {
    styles = {
      bg: 'bg-magic-green-soft border-magic-green text-magic-green-dark',
      icon: <CheckCircle className="w-3.5 h-3.5" />,
      label: 'Approved'
    };
  } else if (normalizedStatus === 'rejected' || normalizedStatus === 'inactive') {
    styles = {
      bg: 'bg-magic-pink-soft border-magic-pink text-magic-pink-dark',
      icon: <XCircle className="w-3.5 h-3.5" />,
      label: 'Rejected'
    };
  }

  return (
    <div className={`inline-flex items-center gap-1 px-3 py-1 border-2 rounded-full font-quicksand font-bold text-xs shadow-sm ${styles.bg} ${className}`}>
      {styles.icon}
      <span>{styles.label}</span>
    </div>
  );
}
