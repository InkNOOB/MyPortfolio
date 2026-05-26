"use client";
"use html";
import { useState } from "react";
import Image from "next/image";


const galleryItems = [
  {
    id: 1,
    title: "Ninomae Ina'nis",
    category: "artwork",
    description: "Digital illustration, a fanart for Ninomae Ina'nis of Hololive EN Myth",
    src: "/image/NinoIna.png", 
  },
  {
    id: 2,
    title: "Setup",
    category: "workspace",
    description: "Picture of my setup during rainy day",
    src: "/image/setupforgallery.jpg",
  },
  {
    id: 3,
    title: "Raora Panthera",
    category: "artwork",
    description: "Digital illustration, a fanart for Raora Panthera of Hololive EN Justice",
    src: "/image/Raoraforgallery.png",
  },
  {
    id: 4,
    title: "Setup",
    category: "workspace",
    description: "Picture of my setup after cleaning it in the night",
    src: "/image/anothersetupforgallery.jpg",
  },
  {
    id: 5,
    title: "Central Grid Workspace",
    category: "programming",
    description: "A picture taken from Central Grid Workspace Board page, a school project of mine",
    src: "/image/CGWSscreenshot.png",
  },
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = activeTab === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 animate-fadeIn">

      <div className="mb-10">
        <p className="text-[#FF9F43] text-xs font-bold tracking-[0.3em] uppercase mb-2">
          Visual Showcase
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Gallery
        </h1>
      </div>


      <div className="flex flex-wrap gap-3 mb-8 border-b border-white/10 pb-5">
        {["all", "programming", "artwork", "workspace"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
              activeTab === category
                ? "bg-[#FF9F43] text-[#12161A] border-[#FF9F43] shadow-lg shadow-[#FF9F43]/20"
                : "bg-[#1A2326]/40 text-[#85929E] border-white/5 hover:border-white/20 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>


      {filteredItems.length === 0 ? (
        <div className="bg-[#1A2326]/30 backdrop-blur-md rounded-2xl border border-white/5 p-12 text-center text-[#85929E]">
          No images uploaded in this category yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-[#1A2326]/50 backdrop-blur-md border border-white/10 hover:border-[#FF9F43]/40 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col w-full"
            >
   
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#12161A]">
 
                <div className="absolute inset-0 flex items-center justify-center text-xs text-white/20 z-0 select-none">
                  [ Image Placeholder ]
                </div>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-w-7xl) 33vw, 100vw"
                  className="object-cover object-center relative z-10 transition-transform duration-500 group-hover:scale-105 select-none"
                  unoptimized 
                />
              </div>

              {/* Text Info Box */}
              <div className="p-5 flex-grow flex flex-col justify-between border-t border-white/5">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF9F43] mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-wide mb-1 group-hover:text-[#FF9F43] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#85929E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}