import HobbyCard from "@/component/HobbyCard";

export default function HobbiesPage() {
  const hobbiesData = [
    {
      title: "Desk Setup",
      desc: "Cleaning, Organizing, and Arranging My Workspace, includes Desk accessories and decorations.",
      tag: "Aesthetic",
    },
    {
      title: "Digital and Traditional Art",
      desc: "Drawing in both Digital and Traditional, learning Color Theories, Anatomy, Perspectives, Shapes, Gestures, etc...",
      tag: "Artistic",
    },
    {
      title: "Tea and Coffee",
      desc: "I personally like Moka Pot coffee, and I love Jasmine Green tea paired with Bread",
      tag: "Drinking",        
    },
    {
      title: "Typing",
      desc: "I Just love typing, my Highest is 144wpm, and my Average is 120 - 129wpm.",
      tag: "Keyboard",        
    },
    {
      title: "Algorithm",
      desc: "Solving Complex Problems to get results.",
      tag: "Programming",        
    },    
    {
      title: "Watching",
      desc: "I like to watch Hololive EN, especially Ninomae Ina'nis and Raora Panthera and listen to 音魂ヒビク(Otodama Hibiku) Stream",
      tag: "Vtuber",
    },
    {
      title: "Desktop",
      desc: "I Like gaming, most of my games are mostly in my desktop, I'm not fond of mobile gaming",
      tag: "Gaming",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">

      <p className="text-[#FF9F43] text-xs font-bold tracking-[0.3em] uppercase mb-2">
        Passion & Interest
      </p>
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          My Hobbies
        </h1>
      </div>


      <div className="space-y-4">
        {hobbiesData.map((hobby, index) => (
          <HobbyCard
            key={index}
            title={hobby.title}
            desc={hobby.desc}
            tag={hobby.tag}
          />
        ))}
      </div>
    </div>
  );
}