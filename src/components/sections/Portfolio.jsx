import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLink, Code } from 'lucide-react';
import { Button } from '../ui/Button';

export const Portfolio = () => {
  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      desc: "A high-performance financial analytics dashboard handling real-time trading data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "TypeScript", "Tailwind"],
      link: "#",
      github: "#"
    },
    {
      title: "AI Content Generator",
      category: "SaaS Platform",
      desc: "An intelligent platform leveraging OpenAI models to generate marketing copy at scale.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "OpenAI", "Node.js"],
      link: "#",
      github: "#"
    },
    {
      title: "HealthConnect App",
      category: "Mobile App",
      desc: "A secure, HIPAA-compliant telehealth application connecting patients with doctors.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "Firebase", "WebRTC"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-white border-y border-border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionTitle 
            title="Selected Work." 
            subtitle="Explore a selection of digital products we've engineered for our clients."
            className="mb-0"
          />
          <Button variant="secondary">View All Projects</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-[24px] border border-border-primary overflow-hidden hover:neo-shadow transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-bg-secondary">
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-text-heading text-xs font-semibold rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-poppins font-semibold text-text-heading mb-2 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-body text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium text-text-body bg-bg-secondary px-2.5 py-1 rounded-md border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a href={project.link} className="flex-1">
                    <Button variant="primary" className="w-full flex gap-2" size="sm">
                      Visit <ExternalLink size={16} />
                    </Button>
                  </a>
                  <a href={project.github} className="flex-1">
                    <Button variant="secondary" className="w-full flex gap-2" size="sm">
                      Code <Code size={16} />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
