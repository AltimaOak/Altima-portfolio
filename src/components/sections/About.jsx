import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Target, Lightbulb, Heart } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Our Mission",
      desc: "To empower businesses with cutting-edge digital solutions that drive growth, efficiency, and exceptional user experiences."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: "Our Vision",
      desc: "To be the globally recognized partner for innovative software development and intelligent digital transformation."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Core Values",
      desc: "Excellence, transparency, continuous innovation, and a relentless focus on client success."
    }
  ];

  return (
    <section id="about" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="About Altima" 
          subtitle="We are passionate technologists dedicated to building the future of the web."
        />

        <div className="flex flex-col lg:flex-row items-center gap-16 mt-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-tr from-primary/20 to-secondary/20 p-8 flex items-center justify-center relative">
                {/* Abstract graphic representing the company */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10 w-full h-full border-2 border-white/40 rounded-xl flex items-center justify-center backdrop-blur-sm bg-white/10">
                  <motion.div
                     animate={{ rotate: 360 }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                     className="w-32 h-32 rounded-full border-4 border-dashed border-primary opacity-50 absolute"
                  />
                  <div className="w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center transform rotate-12">
                    <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent">
                      A
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2 space-y-8">
            <h3 className="text-3xl font-poppins font-bold text-text-heading">
              Innovating at the intersection of design and technology.
            </h3>
            <p className="text-text-body text-lg leading-relaxed">
              Founded on the principle that software should be both beautiful and functional, Altima Software Solutions has quickly grown into a trusted partner for startups and established enterprises alike. We don't just write code; we build digital experiences that matter.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {values.map((item, index) => (
                <AnimatedCard key={index} delay={index * 0.2} className="text-center p-6">
                  <div className="mx-auto w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-poppins font-semibold text-text-heading mb-2">{item.title}</h4>
                  <p className="text-sm text-text-body">{item.desc}</p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
