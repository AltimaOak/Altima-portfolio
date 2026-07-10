import { SectionTitle } from '../ui/SectionTitle';

export const TechStack = () => {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "TypeScript", icon: "📘" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "OpenAI", icon: "🧠" },
    { name: "Docker", icon: "🐳" },
  ];

  return (
    <section className="py-24 bg-white border-y border-border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Technology Stack." 
          subtitle="We use the most robust, modern technologies to build scalable solutions."
          className="text-center md:text-left"
        />

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="px-6 py-3 bg-bg-secondary rounded-[20px] border border-border-primary flex items-center gap-3 hover:-translate-y-1 hover:neo-shadow transition-all duration-300"
            >
              <span className="text-xl grayscale">{tech.icon}</span>
              <span className="font-medium text-text-heading text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
