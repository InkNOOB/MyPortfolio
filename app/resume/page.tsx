import Link from "next/link";
import Image from "next/image";
import MyPhoto from "@/public/image/picme.jpg"; 
export default function ResumePage() {
  const skills = [
    { name: "Digital Illustrator", level: "90%" },
    { name: "Full-Stack Developer", level: "75%" },
    { name: "UI/UX Designing", level: "82%" },
    { name: "Typing", level: "82%" },
    { name: "Problem Solving", level: "88%" },
    { name: "Task Management", level: "92%" },
  ];

  const experience = [
    { role: "Artist", desc: "Created Digital and Traditional Illustrations" },
    { role: "Designer", desc: "UI/UX Designs for Website and Softwares" },
    { role: "Programmer", desc: "Developed and maintained Website and Software Applications" },
    { role: "Full Stack Developer", desc: "Developed responsive web application using next.js, node.js, API routes, and deployed it" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-12 pb-16 animate-fadeIn">
      

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-white/5 pb-6">
        <div>
          <p className="text-[#FF9F43] text-xs font-bold tracking-[0.3em] uppercase mb-2">
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Resume / CV
          </h1>
        </div>
        
        <Link 
          href="/aboutme" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-xs font-semibold tracking-wider uppercase text-white hover:text-[#FF9F43] hover:border-[#FF9F43] rounded-xl transition-all duration-200 self-start sm:self-center"
        >
          ← Back to About Hub
        </Link>
      </div>


      <div className="mx-auto w-full max-w-[800px] bg-white text-[#282C34] shadow-2xl rounded-xl p-8 md:p-12 font-sans selection:bg-[#105078]/20">

        <div className="flex flex-col-reverse sm:flex-row justify-between items-start gap-6 border-b-2 border-[#105078]/10 pb-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold text-[#105078] tracking-tight">
              Jhonver Louis Flores
            </h1>
            

            <div className="space-y-1.5 text-xs md:text-sm text-[#4A5568]">
              <p className="flex items-start gap-2">
                <span className="font-bold text-[#105078] min-w-[60px] inline-block">Address</span>
                <span>SAN PABLO CITY, Philippines, 4000</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold text-[#105078] min-w-[60px] inline-block">Phone</span>
                <span className="font-medium">09662738337</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="font-bold text-[#105078] min-w-[60px] inline-block">E-mail</span>
                <a href="mailto:jhonver2006ph@gmail.com" className="hover:underline text-[#105078]">jhonver2006ph@gmail.com</a>
              </p>
            </div>
          </div>


          <div className="w-28 h-28 md:w-32 md:h-32 rounded-xl bg-[#E2E8F0] border-2 border-[#105078]/20 overflow-hidden flex items-center justify-center shrink-0 shadow-inner relative group">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#718096] text-center px-2 select-none">
                <Image
                src={MyPhoto}
                alt="Flores Jhonver Profile Picture"
                fill
                priority
              />
            </span>
          </div>
        </div>


        <div className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-[#105078] uppercase tracking-wider border-b border-[#105078]/20 pb-1">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 pt-1">
            <div className="md:col-span-3 text-xs md:text-sm font-semibold text-[#4A5568]">
              Expected in 2028-06
            </div>
            <div className="md:col-span-9 space-y-1">
              <h3 className="text-base font-bold text-[#2D3748]">
                Bachelor of Science: Information Technology
              </h3>
              <p className="text-xs md:text-sm text-[#718096] italic font-medium">
                Pamantasan Ng Lungsod Ng San Pablo - San Pablo City, Province Of Laguna, Philippines
              </p>
            </div>
          </div>
        </div>


        <p className="mt-6 text-sm text-[#4A5568] leading-relaxed border-l-4 border-[#105078]/40 pl-4 py-1 italic bg-[#F7FAFC]">
          Dynamic Full-Stack Developer skilled in digital illustration and UI/UX design. Proven ability to create responsive web applications and engaging user experiences. Committed to delivering innovative solutions.
        </p>

        <div className="mt-8 space-y-4">
          <h2 className="text-lg font-bold text-[#105078] uppercase tracking-wider border-b border-[#105078]/20 pb-1">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pt-1">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#105078]">•</span>
                  <span className="text-sm font-medium text-[#2D3748]">{skill.name}</span>
                </div>
 
                <div className="w-32 bg-[#EDF2F7] h-2 rounded-full overflow-hidden shrink-0">
                  <div 
                    className="bg-[#105078] h-full rounded-full" 
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="mt-8 space-y-4">
          <h2 className="text-lg font-bold text-[#105078] uppercase tracking-wider border-b border-[#105078]/20 pb-1">
            Professional Experience
          </h2>
          <div className="space-y-4 pt-1">
            {experience.map((exp, index) => (
              <div key={index} className="group pl-2 border-l-2 border-[#EDF2F7] hover:border-[#105078]/40 transition-colors">
                <h3 className="text-base font-bold text-[#2D3748] tracking-wide">
                  {exp.role}
                </h3>
                <p className="text-xs md:text-sm text-[#718096] mt-0.5 font-medium">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}