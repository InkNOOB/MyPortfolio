"use client"; 

import { usePathname } from "next/navigation";
import Link from "next/link"; 

export default function Header() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const baseClass = "transition-colors duration-200 font-medium tracking-wide text-sm";
    const activeClass = "text-[#FF9F43]"; 
    const inactiveClass = "text-[#85929E] hover:text-[#FF9F43]"; 

    return pathname === path ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
  };

  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 border-b border-white/5 backdrop-blur-sm bg-[#12161A]/20">
      <nav className="flex gap-6 md:gap-8">
        
        <Link href="/home" className={getLinkClass("/home")}>
          Home
        </Link>
        <Link href="/aboutme" className={getLinkClass("/aboutme")}>
          About Me
        </Link>
        <Link href="/skills" className={getLinkClass("/skills")}>
          Skills
        </Link>
        <Link href="/hobbies" className={getLinkClass("/hobbies")}>
          Hobbies
        </Link>

      </nav>
      
      <div className="text-sm hidden sm:block text-[#85929E]">
        📞 63+ 966-273-8337
      </div>
    </header>
  );
}