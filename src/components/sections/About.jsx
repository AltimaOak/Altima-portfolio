import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Target, Lightbulb, Shield, Cpu } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-16 bg-white border-y border-border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side: Editorial Text */}
          <div className="w-full lg:w-5/12 text-left">
            <SectionTitle 
              title="Who We Are." 
              subtitle="Altima is a modern software development studio obsessed with design and engineering excellence."
              className="mb-6"
            />
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-text-body text-base md:text-lg leading-relaxed mb-6"
            >
              We reject visual clutter and focus on what truly matters: speed, scalability, and user experience. By combining clean architecture with pixel-perfect design, we build software products that feel natural and function flawlessly.
            </motion.p>
          </div>

          {/* Right Side: Symmetrical 2x2 Pillars Grid */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Pillar 1: Robust Engineering */}
            <AnimatedCard delay={0.1} className="bg-bg-primary p-6 md:p-8 border-border-primary/60 flex flex-col justify-start rounded-[24px]">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-5 flex-shrink-0">
                <Cpu className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg md:text-xl font-poppins font-semibold text-text-heading mb-2">Robust Engineering</h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                Scalable, secure, and future-proof architectures built to support your growth.
              </p>
            </AnimatedCard>

            {/* Pillar 2: Premium UI/UX */}
            <AnimatedCard delay={0.2} className="bg-bg-primary p-6 md:p-8 border-border-primary/60 flex flex-col justify-start rounded-[24px]">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-5 flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg md:text-xl font-poppins font-semibold text-text-heading mb-2">Premium UI/UX</h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                Minimalist, highly engaging interfaces designed with pixel-perfect precision.
              </p>
            </AnimatedCard>

            {/* Pillar 3: Quality First */}
            <AnimatedCard delay={0.3} className="bg-bg-primary p-6 md:p-8 border-border-primary/60 flex flex-col justify-start rounded-[24px]">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-5 flex-shrink-0">
                <Shield className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg md:text-xl font-poppins font-semibold text-text-heading mb-2">Uncompromised Quality</h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                Rigorous testing, optimized clean code, and zero technical debt.
              </p>
            </AnimatedCard>

            {/* Pillar 4: Shared Partnership */}
            <AnimatedCard delay={0.4} className="bg-bg-primary p-6 md:p-8 border-border-primary/60 flex flex-col justify-start rounded-[24px]">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-5 flex-shrink-0">
                <Target className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg md:text-xl font-poppins font-semibold text-text-heading mb-2">Shared Partnerships</h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed">
                Direct collaborative integration focused entirely on achieving your business goals.
              </p>
            </AnimatedCard>

          </div>

        </div>
      </div>
    </section>
  );
};
