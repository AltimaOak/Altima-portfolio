import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

export const WhyChooseUs = () => {
  const reasons = [
    "Pixel-perfect, modern UI/UX design",
    "Scalable and secure cloud architecture",
    "Agile methodology with transparent reporting",
    "Post-launch support and maintenance",
    "Expertise in AI integrations and automation",
    "Zero technical debt approach"
  ];

  return (
    <section className="py-10 bg-white relative overflow-hidden border-y border-border-primary">
      {/* Neo-Minimal background element */}
      <div className="absolute -right-[10%] top-[20%] w-[40%] h-[60%] rounded-full bg-secondary/5 blur-[100px] z-0 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left: Compact Logo & Stats Card */}
          <div className="w-full lg:w-[35%] flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[280px] rounded-[20px] overflow-hidden neo-shadow border border-border-primary bg-bg-primary p-6 flex flex-col items-center justify-center gap-4"
            >
              {/* Glow Behind Logo */}
              <div className="absolute w-36 h-36 bg-secondary/10 blur-3xl z-0 rounded-full pointer-events-none" />

              <img 
                src="/logo-icon.png" 
                alt="Altima Logo Icon" 
                className="w-24 h-auto object-contain relative z-10 drop-shadow-[0_8px_16px_rgba(0,0,0,0.02)]"
              />
              
              <div className="bg-white border border-border-primary p-3 rounded-[16px] w-full text-center relative z-10 shadow-sm">
                <div className="text-2xl font-poppins font-bold text-text-heading mb-0.5">1+</div>
                <div className="text-text-body text-xs font-medium">Year of combined engineering experience</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Section Info & Clean Symmetrical List */}
          <div className="w-full lg:w-[65%] text-left">
            <SectionTitle 
              title="Why Altima?" 
              subtitle="We don't just write code. We build digital assets that drive revenue, streamline operations, and elevate your brand."
              className="mb-4"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-center gap-3 py-1.5"
                >
                  <CheckCircle2 className="text-secondary w-5 h-5 flex-shrink-0" />
                  <span className="text-text-heading text-sm font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>

            <Button 
              size="md" 
              variant="primary"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=altimasoftwaresolutions@gmail.com&su=Consultation%20Request%20-%20Altima%20Software%20Solutions&body=Hi%20Altima%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20consultation%20with%20your%20team%20to%20discuss%20a%20new%20software%20project.%0A%0AHere%20are%20a%20few%20quick%20details%3A%0A-%20Project%20Type%20(e.g.%20Website%2C%20AI%20App%2C%20Custom%20Software)%3A%0A-%20Estimated%20Timeline%3A%0A-%20Brief%20Overview%3A%0A%0ALooking%20forward%20to%20connecting!%0A%0ABest%2C"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Consultation
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};
