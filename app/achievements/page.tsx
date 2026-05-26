
import Link from "next/link";

export default function AchievementsPage() {

  const achievementsList = [
    {
      title: "With Honors",
      issuer: "San Pablo Colleges",
      context: "Senior High School (ICT Strand)",
      year: "2024"
    },
    {
      title: "Certificate of Completeion",
      issuer: "Frontline Business solutions, Inc.",
      context: "successfully completed eighty(80) hours of Senior High School Work Immersion with the following learning outcomes in actual Web Design and Development",
      year: "2024"
    },
    {
      title: "Certificate of Completion NSTP",
      issuer: "Pamantasan ng Lungsod ng San Pablo",
      context: "completed the requirements of the National Service Training Program for the Tertiary Level Students",
      year: "2025"
    },

  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-12 animate-fadeIn">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Achievements
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
        {achievementsList.map((item, index) => (
          <div 
            key={index} 
            className="group bg-[#1A2326]/50 backdrop-blur-md border border-white/10 hover:border-[#FF9F43]/30 rounded-xl p-5 md:p-6 shadow-xl transition-all duration-300 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >

            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF9F43]/80 block">
                {item.issuer}
              </span>
              <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-[#FF9F43] transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-[#85929E]">
                {item.context}
              </p>
            </div>

 
            <div className="sm:text-right shrink-0">
              <span className="inline-block sm:block px-3 py-1 bg-[#12161A]/80 border border-white/5 rounded-md text-xs font-mono text-[#ECEFF1]/90 tracking-wide font-semibold">
                {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}