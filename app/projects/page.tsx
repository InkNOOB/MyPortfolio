"use client";
import Image from "next/image";
import CentralGridPic from "@/public/image/CGWSscreenshot.png";
import Portfolio from "@/public/image/PortfolioPic.png";
import OldPortfolio from "@/public/image/WorkImmersion.png";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Central Grid Workspace",
      category: "NET , CC225 Project",
      desc: "A collaborative or personal centralized dashboard system",
      tags: ["Next.js", "Node.js", "TypeScript", "Railway mySQL" , "Vercel"],
      liveLink: "https://central-grid-workspace.vercel.app/",
      githubLink: "https://github.com/InkNOOB/CentralGridWorkspace",
      image: CentralGridPic,
      featured: true, 
    },

    {
      title: "Portfolio",
      category: "Grade 12 ICT : Work Immersion Project",
      desc: "A project from Frontline Business Solutions Inc. Work Immersion",
      tags: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/InkNOOB/OLDPortfolioProject",
      image: OldPortfolio, 
      featured: false,
    },
    {
      title: "My Portfolio",
      category: "IPT222 Project",
      desc: "The website you are currently viewing.",
      tags: ["Next.js", "Tailwind CSS"],
      liveLink: "/home",
      githubLink: "#",
      image: Portfolio,
      featured: false,
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 animate-fadeIn">

      <div className="mb-10">
        <p className="text-[#FF9F43] text-xs font-bold tracking-[0.3em] uppercase mb-2">
          03 // Case Studies & Implementations
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          My Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`group bg-[#1A2326]/50 backdrop-blur-md border border-white/10 hover:border-[#FF9F43]/40 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col ${
              project.featured ? "md:col-span-2 lg:flex-row h-auto" : "col-span-1"
            }`}
          >

            <div className={`relative bg-[#12161A] overflow-hidden min-h-[220px] ${
              project.featured ? "lg:w-1/2 aspect-video lg:aspect-auto" : "w-full aspect-video"
            }`}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-102 select-none"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white/10 select-none p-4 text-center">
                  <span className="text-4xl mb-2">⚙️</span>
                  <span className="text-xs uppercase tracking-widest text-[#85929E]">System Overview Content</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12161A]/80 via-transparent to-transparent lg:hidden" />
            </div>

            <div className={`p-6 md:p-8 flex flex-col justify-between ${
              project.featured ? "lg:w-1/2" : "w-full flex-grow"
            }`}>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF9F43] mb-1 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white tracking-wide mb-3 group-hover:text-[#FF9F43] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-[#85929E] leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="px-2.5 py-0.5 bg-[#12161A]/60 border border-white/5 rounded-md text-[11px] text-[#ECEFF1]/80 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                <a
                  href={project.liveLink}
                  className="px-4 py-2 bg-[#FF9F43] text-[#12161A] text-xs font-bold tracking-wider uppercase rounded-xl hover:bg-[#ffae5c] transition-all duration-200 shadow-md shadow-[#FF9F43]/10"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  className="px-4 py-2 bg-white/5 border border-white/10 text-[#ECEFF1] text-xs font-semibold tracking-wider uppercase rounded-xl hover:text-[#FF9F43] hover:border-[#FF9F43] transition-all duration-200"
                >
                  View Code
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}