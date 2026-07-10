import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-bg-primary pt-28 pb-10">
      {/* Background dot grid pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none dot-bg opacity-30" />
      
      {/* Concentric circles behind logo (right side) */}
      <div className="absolute right-[5%] lg:right-[10%] top-1/2 -translate-y-1/2 w-[550px] h-[550px] hidden md:flex items-center justify-center pointer-events-none z-0">
        <div className="w-[300px] h-[300px] rounded-full border border-border-primary/40 absolute"></div>
        <div className="w-[450px] h-[450px] rounded-full border border-border-primary/30 absolute"></div>
        <div className="w-[600px] h-[600px] rounded-full border border-border-primary/20 absolute"></div>
        <div className="w-[750px] h-[750px] rounded-full border border-border-primary/10 absolute"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-poppins font-semibold text-text-heading leading-[1.15] mb-6 tracking-tight">
                Transforming Ideas<br />
                Into Intelligent<br />
                <span className="text-secondary">Digital Solutions.</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-text-body max-w-xl leading-relaxed"
            >
              Altima Software Solutions helps startups and businesses build modern websites, AI-powered applications, and scalable software that drive real results.
            </motion.p>
          </div>

          {/* Right Column: Logo Showcase (No pedestal, nested in grid to reduce empty space) */}
          <div className="w-full lg:w-[45%] flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[320px] h-[320px] flex items-center justify-center"
            >
              {/* Glow Behind Logo */}
              <div className="absolute w-56 h-56 bg-secondary/15 blur-3xl z-0 rounded-full pointer-events-none" />

              {/* Logo Icon (No pedestal) */}
              <div className="relative z-10 w-[240px] h-[240px] flex items-center justify-center">
                <img 
                  src="/logo-icon.png" 
                  alt="Altima Icon" 
                  className="w-full h-auto object-contain drop-shadow-[0_16px_36px_rgba(17,17,17,0.1)]" 
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
