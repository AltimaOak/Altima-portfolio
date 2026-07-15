import { AnimatedCard } from '../ui/AnimatedCard';
import { Cpu, Gem, ShieldCheck, Users } from 'lucide-react';
import { Button } from '../ui/Button';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-bg-warm border-y border-border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side: Editorial Text */}
          <div className="w-full lg:w-5/12 text-left flex flex-col items-start">
            <span className="text-primary text-xs md:text-sm font-semibold tracking-wider uppercase block mb-3 font-space-grotesk">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-semibold text-text-heading mb-6 tracking-tight leading-tight">
              Building Digital Experiences That Matter.
            </h2>
            <p className="text-text-body text-base md:text-lg leading-relaxed mb-8 font-inter">
              We're a modern software development studio obsessed with design and engineering excellence. We build products that are fast, scalable, and crafted for the future.
            </p>
            <Button variant="secondary" size="md" href="#contact" className="gap-2 font-semibold">
              More About Us <span className="text-lg">→</span>
            </Button>
          </div>

          {/* Right Side: Symmetrical 2x2 Pillars Grid */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Pillar 1: Robust Engineering */}
            <AnimatedCard delay={0.1} className="bg-white flex flex-col justify-start text-left">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 flex-shrink-0 text-primary">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-space-grotesk font-semibold text-text-heading mb-2">Robust Engineering</h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed font-inter">
                Scalable, secure, and future-proof architecture built to support your growth.
              </p>
            </AnimatedCard>

            {/* Pillar 2: Premium UI/UX */}
            <AnimatedCard delay={0.2} className="bg-white flex flex-col justify-start text-left">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 flex-shrink-0 text-primary">
                <Gem className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-space-grotesk font-semibold text-text-heading mb-2">Premium UI/UX</h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed font-inter">
                Minimalist, highly engaging interfaces designed with care and user passion.
              </p>
            </AnimatedCard>

            {/* Pillar 3: Uncompromised Quality */}
            <AnimatedCard delay={0.3} className="bg-white flex flex-col justify-start text-left">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 flex-shrink-0 text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-space-grotesk font-semibold text-text-heading mb-2">Uncompromised Quality</h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed font-inter">
                Rigorous testing, performance checks, and zero shortcuts taken.
              </p>
            </AnimatedCard>

            {/* Pillar 4: Shared Partnerships */}
            <AnimatedCard delay={0.4} className="bg-white flex flex-col justify-start text-left">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 flex-shrink-0 text-primary">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-space-grotesk font-semibold text-text-heading mb-2">Shared Partnerships</h3>
              <p className="text-sm md:text-base text-text-body leading-relaxed font-inter">
                Close collaboration, transparent forward strategy for achieving your business goals.
              </p>
            </AnimatedCard>

          </div>

        </div>
      </div>
    </section>
  );
};
