import Link from "next/link"; 

export default function Home() {
  return (
    <div className= "ml-10">
      <p className="text-[#FF9F43] text-l font-bold tracking-[0.5em] uppercase mb-2">
        My Portfolio
      </p>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-2 text-white">
        FLORES <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#85929E]">JHONVER</span>
      </h1>
      
      <h2 className="text-xl md:text-2xl font-light text-[#85929E] tracking-wide mb-8">
        Full-Stack Software & Web Developer
      </h2>

      <div className="flex flex-wrap gap-4">
        <Link 
          href="/projects" 
          className="px-6 py-3 border border-white/40 hover:border-[#FF9F43] hover:text-[#FF9F43] rounded-full text-sm font-medium tracking-wider transition-all duration-300 backdrop-blur-sm bg-white/5"
        >
          MY PROJECTS
        </Link>
        <Link 
          href="/gallery" 
          className="px-6 py-3 border border-transparent bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium tracking-wider transition-all duration-300 backdrop-blur-sm"
        >
          MY GALLERY
        </Link>
      </div>
    </div>
  );
}