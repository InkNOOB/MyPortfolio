
import SkillCard from "@/component/SkillCard";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "Next.js (App Router)", "Tailwind CSS", "CSS" , "TypeScript"],
      icon: "💻",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "API Routing", "Database Integration", "Functional Programming"],
      icon: "⚙️",
    },
  
    {
      title: "Designing",
      skills: ["Graphic Design", "UI/UX Layouts", "Typography" ],
      icon: "🎨",
    },
    {
      title: "Art",
      skills: ["Digital", "Traditional", "Rendering", "Perspective", "Anatomy" ],
      icon: "🎨",
    },
      {
      title: "Languages",
      skills: ["Java", "JavaScript", "C#" , "TypeScript"],
      icon: "</>",
    },  
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12">

      <div className="mb-10">
        <p className="text-[#FF9F43] text-xs font-bold tracking-[0.3em] uppercase mb-2">
          Capabilities
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          My Skills
        </h1>
      </div>

 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {skillCategories.map((category, index) => (
          <SkillCard
            key={index}
            title={category.title}
            skills={category.skills}
            icon={category.icon}
          />
        ))}
      </div>
    </div>
  );
}