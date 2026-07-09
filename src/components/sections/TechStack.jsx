import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';

export const TechStack = () => {
  const technologies = [
    "React", "JavaScript", "Node.js", "Python", 
    "FastAPI", "PostgreSQL", "MongoDB", "Firebase", 
    "Docker", "Git", "Tailwind CSS", "OpenAI", "Gemini"
  ];

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Technologies We Use" 
          subtitle="Modern tools for modern problems. We leverage the best technologies to build scalable solutions."
        />

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100 font-medium text-text-heading cursor-default hover:shadow-md hover:border-primary/30 transition-all"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
