import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Briefcase, Code, Mail } from 'lucide-react';

export const Team = () => {
  const team = [
    {
      name: "Alex Carter",
      role: "Founder & CEO",
      bio: "10+ years in software architecture and startup growth.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Sarah Jenkins",
      role: "CTO",
      bio: "AI specialist and former lead engineer at top tech firms.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      bio: "Award-winning UX/UI designer obsessed with user behavior.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack wizard building scalable and secure systems.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="team" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Meet the Team" 
          subtitle="The brilliant minds behind our innovative solutions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors transform hover:scale-110">
                    <Briefcase size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors transform hover:scale-110">
                    <Code size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors transform hover:scale-110">
                    <Mail size={18} />
                  </a>
                </div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-poppins font-bold text-text-heading mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-text-body">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
