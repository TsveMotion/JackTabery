import React from 'react';

export const LaurelIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Refined Laurel Leaves */}
      <g className="opacity-40">
        <path d="M45 85 C30 85 15 75 10 55 C5 35 20 20 35 25" />
        <path d="M55 85 C70 85 85 75 90 55 C95 35 80 20 65 25" />
      </g>
      
      {/* Leaf Details */}
      <g strokeWidth="2">
        {/* Left */}
        <path d="M12 58 Q18 55 24 58" />
        <path d="M10 48 Q16 45 22 48" />
        <path d="M14 38 Q20 35 26 38" />
        <path d="M22 30 Q28 27 34 30" />
        
        {/* Right */}
        <path d="M88 58 Q82 55 76 58" />
        <path d="M90 48 Q84 45 78 48" />
        <path d="M86 38 Q80 35 74 38" />
        <path d="M78 30 Q72 27 66 30" />
      </g>

      {/* Top Crown/Star */}
      <path d="M50 12 L53 18 L60 18 L55 22 L57 29 L50 25 L43 29 L45 22 L40 18 L47 18 Z" fill="currentColor" stroke="none" />
      
      {/* Bottom Ribbon Base */}
      <path d="M35 85 Q50 90 65 85" strokeWidth="1" opacity="0.3" />
    </svg>
  </div>
);