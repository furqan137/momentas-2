import React from 'react';

interface SectionBadgeProps {
  text: string;
  className?: string;
}

const SectionBadge: React.FC<SectionBadgeProps> = ({ text, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-200 ${className}`}
    >
      {text}
    </div>
  );
};

export default SectionBadge;
