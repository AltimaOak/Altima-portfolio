import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { ExternalLink, Code } from 'lucide-react';
import { Button } from '../ui/Button';

export const Portfolio = () => {
  const projects = [
    {
      title: "Fintech Dashboard",
      client: "Nova Financial",
      desc: "A comprehensive analytics dashboard for real-time financial tracking with AI-powered insights.",
      tech: ["React", "Tailwind", "Python", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    },
    {
      title: "E-Commerce Platform",
      client: "StyleStore",
      desc: "High-performance headless e-commerce solution with sub-second page loads and seamless checkout.",
      tech: ["Next.js", "Shopify", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    },
    {
      title: "AI CRM System",
      client: "Nexus Corp",
      desc: "Intelligent customer relationship manager predicting sales trends using OpenAI integration.",
      tech: ["Vue", "Node.js", "MongoDB", "OpenAI"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Featured Work" 
          subtitle="Explore some of our recent projects that showcase our technical expertise and design capabilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">{project.client}</div>
                <h3 className="text-2xl font-poppins font-bold text-text-heading mb-3">{project.title}</h3>
                <p className="text-text-body mb-6 flex-grow">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-bg-secondary text-text-heading rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
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
