import Image from "next/image";
import Link from "next/link";
import MyPhoto from "@/public/image/picme.jpg"; 

export default function AboutPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-12 animate-fadeIn">
      <div className="mb-10">
        <p className="text-[#FF9F43] text-xs font-bold tracking-[0.3em] uppercase mb-2">
          Background & Profile
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          About Me
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
        

        <div className="md:col-span-7 bg-[#1A2326]/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
          <div>
            <p className="text-sm md:text-base text-[#85929E] leading-relaxed">
              Hi, I'm <span className="text-white font-medium">Flores, Jhonver Louis, R.</span>, I am a Student from Pamantasan ng Lungsod ng San Pablo, a 2nd Year BSIT Student from section C, Majoring in Software Development
            </p>
          </div>

          <p className="text-sm md:text-base text-[#85929E] leading-relaxed">
            I plan to focus on <span className="text-[#FF9F43] font-medium">Full-Stack development</span> which I also believe will help me gain experience in this field, as well as learn how everything works together in a system and be able to develop them myself, while keeping up with my artistic hobby if there is an opportunity.
          </p>

          <p className="text-sm md:text-base text-[#85929E] leading-relaxed">
            I am still currently learning and continuously developing my skills through hands-on projects
          </p>
        </div>

        <div className="md:col-span-5 flex flex-col gap-6 w-full">
          
          <div className="bg-[#1A2326]/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl flex justify-center items-center">
            <div className="relative w-full aspect-square max-w-[260px] rounded-xl overflow-hidden border-2 border-[#FF9F43]/40 group shadow-lg">
              <Image
                src={MyPhoto}
                alt="Flores Jhonver Profile Picture"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105 select-none"
              />
            </div>
          </div>

          <div className="bg-[#1A2326]/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 shadow-xl space-y-3">
            <p className="text-[10px] font-bold text-[#FF9F43] tracking-widest uppercase border-b border-white/10 pb-2">
              Credentials Directory
            </p>
            
            <div className="flex flex-col gap-2">
              <Link 
                href="/education" 
                className="flex items-center justify-between w-full p-3 bg-white/5 border border-white/5 hover:border-[#FF9F43]/30 text-xs font-semibold tracking-wider text-[#ECEFF1] hover:text-white rounded-xl transition-all duration-200 group"
              >
                <span>🎓 EDUCATIONAL BACKGROUND</span>
                <span className="text-[#FF9F43] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>

              <Link 
                href="/achievements" 
                className="flex items-center justify-between w-full p-3 bg-white/5 border border-white/5 hover:border-[#FF9F43]/30 text-xs font-semibold tracking-wider text-[#ECEFF1] hover:text-white rounded-xl transition-all duration-200 group"
              >
                <span>🏆 ACHIEVEMENTS & AWARDS</span>
                <span className="text-[#FF9F43] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>

              <Link 
                href="/resume" 
                className="flex items-center justify-between w-full p-3 bg-white/5 border border-white/5 hover:border-[#FF9F43]/30 text-xs font-semibold tracking-wider text-[#ECEFF1] hover:text-white rounded-xl transition-all duration-200 group"
              >
                <span>📄 MY RESUME / CV</span>
                <span className="text-[#FF9F43] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>

              <Link 
                href="/contact" 
                className="flex items-center justify-between w-full p-3 bg-white/5 border border-white/5 hover:border-[#FF9F43]/30 text-xs font-semibold tracking-wider text-[#ECEFF1] hover:text-white rounded-xl transition-all duration-200 group"
              >
                <span>✉️ CONTACT INFORMATION</span>
                <span className="text-[#FF9F43] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Link>
            </div>
          </div>
          
          <a 
            href="/projects" 
            className="block text-center w-full py-2.5 bg-white/10 border border-white/40 text-xs font-semibold tracking-wider text-white hover:text-[#FF9F43] hover:border-[#FF9F43] rounded-full transition-all duration-300"
          >
            MY PROJECTS
          </a>

        </div>

      </div>
    </div>
  );
}
