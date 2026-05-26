import Image from "next/image";
import facebook from "@/public/image/facebook.png";
import x from "@/public/image/twitter.png";
import github from "@/public/image/github.png";
import youtube from "@/public/image/youtube.png";

export default function footer() {
  return (
    /* ADDED: 'w-full px-6 py-8 md:px-12' for clean layout spacing symmetry with the header */
    <div className="w-full px-6 py-8 md:px-12 flex flex-wrap items-center gap-6 text-[#85929E] text-lg relative z-10 border-t border-white/5 backdrop-blur-xs bg-[#12161A]/10">
      <a href="https://www.facebook.com/jhonverlouis.flores.31/" target="_blank" rel="noopener noreferrer" className="inline-block"><Image src={facebook} alt="facebook nav" width={30} className="transition-transform duration-300 hover:scale-125"/></a>
      <a href="https://x.com/MiiYatsuPH" target="_blank" rel="noopener noreferrer" className="inline-block"><Image src={x} alt="x nav" width={30} className="transition-transform duration-300 hover:scale-125"/></a>
      <a href="https://github.com/InkNOOB" target="_blank" rel="noopener noreferrer" className="inline-block"><Image src={github} alt="github nav" width={30} className="transition-transform duration-300 hover:scale-125"/></a>
      <a href="https://www.youtube.com/@MiiYatsu" target="_blank" rel="noopener noreferrer" className="inline-block"><Image src={youtube} alt="youtube nav" width={30} className="transition-transform duration-300 hover:scale-125"/></a>
      <span className="text-xs text-white/20">|</span>
      <p className="text-xs tracking-wide text-white/40">© 2026 My Portfolio. All rights reserved</p>
    </div>
  );
}