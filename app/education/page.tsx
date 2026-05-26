import Link from "next/link";

export default function EducationPage() {
  const educationHistory = [
    {
      level: "College",
      school: "Pamantasan ng Lungsod ng San Pablo",
      address: "Brgy. San Jose, San Pablo City, Laguna",
      year: "2023 — Present",
      highlight: "Bachelor of Science in Information Technology (Software Development)"
    },
    {
      level: "Senior High School",
      school: "San Pablo Colleges",
      address: "Hermanos Belen St., Barangay 3A, San Pablo City, Laguna",
      year: "2024 Graduated"
    },
    {
      level: "Secondary School",
      school: "San Bartolome Integrated High School",
      address: "Brgy. San Bartolome, San Pablo City, Laguna",
      year: "2022 Graduated"
    },
    {
      level: "Elementary School",
      school: "Major Juan Eseo Elementary School",
      address: "Purok 2 Brgy. Santiago II, San Pablo City, Laguna",
      year: "2018 Graduated"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-12 animate-fadeIn">
      

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-white/5 pb-6">
        <div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Educational Background
          </h1>
        </div>
        
        <Link 
          href="/aboutme" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-xs font-semibold tracking-wider uppercase text-white hover:text-[#FF9F43] hover:border-[#FF9F43] rounded-xl transition-all duration-200 self-start sm:self-center"
        >
          ← Back to About Hub
        </Link>
      </div>

      <div className="space-y-4 w-full">
        {educationHistory.map((edu, index) => (
          <div 
            key={index} 
            className="group bg-[#1A2326]/50 backdrop-blur-md border border-white/10 hover:border-[#FF9F43]/30 rounded-xl p-5 md:p-6 shadow-xl transition-all duration-300 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >

            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF9F43]/80">
                {edu.level}
              </span>
              <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-[#FF9F43] transition-colors duration-200">
                {edu.school}
              </h3>
              <p className="text-xs md:text-sm text-[#85929E]">
                {edu.address}
              </p>
              {edu.highlight && (
                <p className="text-xs text-white/70 font-medium pt-1">
                  {edu.highlight}
                </p>
              )}
            </div>

            <div className="sm:text-right shrink-0">
              <span className="inline-block sm:block px-3 py-1 bg-[#12161A]/80 border border-white/5 rounded-md text-xs font-mono text-[#ECEFF1]/90 tracking-wide font-semibold">
                {edu.year}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}