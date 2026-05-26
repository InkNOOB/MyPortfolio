import React from 'react';


interface HobbyCardProps {
  title: string;
  desc: string;
  tag: string;
}

export default function HobbyCard({ title, desc, tag }: HobbyCardProps) {
  return (
    <div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#1A2326]/40 backdrop-blur-md border border-white/5 hover:border-white/10 rounded-xl p-5 md:p-6 transition-all duration-300 hover:bg-[#1A2326]/60 shadow-lg">
      <div className="max-w-2xl">
        {/* Category Tag */}
        <span className="inline-block px-2.5 py-0.5 mb-2 bg-[#12161A]/80 border border-white/10 rounded-md text-[10px] uppercase tracking-widest text-[#FF9F43] font-semibold">
          {tag}
        </span>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-1 tracking-wide group-hover:text-[#FF9F43] transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-[#85929E] leading-relaxed">
          {desc}
        </p>
      </div>


    </div>
  );
}