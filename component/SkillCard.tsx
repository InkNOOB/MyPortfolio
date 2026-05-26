// component/SkillCard.tsx
import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: string;
}

export default function SkillCard({ title, skills, icon }: SkillCardProps) {
  return (
    <div className="group relative bg-[#1A2326]/50 backdrop-blur-md border border-white/10 hover:border-[#FF9F43]/40 rounded-2xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 w-full">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#FF9F43]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="flex items-center gap-3 mb-4 relative z-10">
        <span className="text-2xl bg-[#12161A]/80 p-2 rounded-xl border border-white/5 shadow-inner select-none">
          {icon}
        </span>
        <h3 className="text-lg font-bold text-white tracking-wide">
          {title}
        </h3>
      </div>

      <ul className="space-y-2.5 relative z-10">
        {skills.map((skill, sIndex) => (
          <li key={sIndex} className="flex items-center gap-2 text-sm text-[#85929E]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F43]/70 shrink-0" />
            <span className="group-hover:text-white transition-colors duration-200">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}