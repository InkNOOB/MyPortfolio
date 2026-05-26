import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-12 pb-16 animate-fadeIn">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-white/5 pb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact Information
          </h1>
        </div>
        
        <Link 
          href="/aboutme" 
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-xs font-semibold tracking-wider uppercase text-white hover:text-[#FF9F43] hover:border-[#FF9F43] rounded-xl transition-all duration-200 self-start sm:self-center"
        >
          ← Back to About Hub
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        
        {/* Email Card */}
        <div className="bg-[#1A2326]/50 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF9F43]">
            E-mail Address
          </span>
          <h3 className="text-xl font-bold text-white tracking-wide selection:bg-[#FF9F43]/20">
            jhonver2006ph@gmail.com
          </h3>
          <p className="text-xs text-[#85929E] leading-relaxed">
            my business email address
          </p>
        </div>

        {/* Phone Card */}
        <div className="bg-[#1A2326]/50 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF9F43]">
            Mobile Number
          </span>
          <h3 className="text-xl font-bold text-white tracking-wide selection:bg-[#FF9F43]/20">
            09662738337
          </h3>
          <p className="text-xs text-[#85929E] leading-relaxed">
            mobile contact number 
          </p>
        </div>

        {/* Location Card */}
        <div className="bg-[#1A2326]/50 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF9F43]">
            Location
          </span>
          <h3 className="text-xl font-bold text-white tracking-wide">
            San Pablo City
          </h3>
          <p className="text-xs text-[#85929E] leading-relaxed">
            Laguna, Philippines, 4000.
          </p>
        </div>

      </div>

    </div>
  );
}