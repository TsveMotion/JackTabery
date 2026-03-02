import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`
        relative w-full py-16 md:py-24 
        ${dark ? 'bg-brand-navy text-brand-text' : 'bg-brand-navy text-brand-text'} 
        ${className}
      `}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-12">
        {children}
      </div>
    </section>
  );
};