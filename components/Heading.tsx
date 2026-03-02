import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4;
  accentWord?: string;
  inverse?: boolean;
  dark?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({ 
  children, 
  className = '', 
  level = 2, 
  accentWord,
  inverse = false,
  dark = false
}) => {
  const Tag = `h${level}` as React.ElementType;
  
  const baseColor = dark ? 'text-brand-navy' : (inverse ? 'text-white' : 'text-brand-text');

  // Basic rendering if no accent logic needed
  if (!accentWord || typeof children !== 'string') {
    return (
      <Tag className={`font-heading font-black italic uppercase ${baseColor} ${className}`}>
        {children}
      </Tag>
    );
  }

  // Accent logic
  const parts = children.split(new RegExp(`(${accentWord})`, 'gi'));
  
  return (
    <Tag className={`font-heading font-black italic uppercase ${baseColor} ${className}`}>
      {parts.map((part, i) => 
        part.toLowerCase() === accentWord.toLowerCase() ? (
          <span key={i} className="text-brand-accent">{part}</span>
        ) : (
          part
        )
      )}
    </Tag>
  );
};