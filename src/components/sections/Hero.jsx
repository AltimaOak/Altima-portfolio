import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-bg-primary pt-24 pb-12 md:py-24">
      {/* Background dot grid pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none dot-bg opacity-45" />

      {/* Decorative SVG Wave Lines (underneath/behind the logo) */}
      <div className="absolute right-0 bottom-0 top-0 w-1/2 hidden lg:block pointer-events-none z-0">
        <svg 
          viewBox="0 0 800 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain opacity-60"
        >
          {/* Wave 1 */}
          <path 
            d="M 100 600 C 300 650, 450 450, 800 500" 
            stroke="url(#wave-gradient-1)" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
          {/* Wave 2 */}
          <path 
            d="M 50 650 C 250 700, 400 500, 800 550" 
            stroke="url(#wave-gradient-2)" 
            strokeWidth="1" 
            strokeLinecap="round"
          />
          {/* Wave 3 */}
          <path 
            d="M 150 550 C 350 580, 500 400, 800 430" 
            stroke="url(#wave-gradient-1)" 
            strokeWidth="0.8" 
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E11D48" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#FF6B6B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0D1B2A" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#E11D48" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0D1B2A" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Column: Text Content */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-space-grotesk font-semibold text-text-heading leading-[1.15] mb-6 tracking-tight">
                Transforming Ideas<br className="hidden md:inline" />
                Into Intelligent<br className="hidden md:inline" />
                <span className="text-primary">Digital Solutions.</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-text-body max-w-xl leading-relaxed font-inter"
            >
              Altima Software Solutions helps startups and businesses build modern websites, AI-powered applications, and scalable software that drive real results.
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Button variant="primary" size="md" href="#services" className="gap-2 font-semibold">
                Explore Our Services <span className="text-lg">→</span>
              </Button>
              <Button variant="secondary" size="md" href="#about" className="gap-2 font-semibold">
                Learn More <span className="text-lg">→</span>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Logo Showcase */}
          <div className="w-full lg:w-[45%] flex items-center justify-center lg:justify-end mt-8 lg:mt-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[280px] aspect-square sm:max-w-[380px] flex items-center justify-center"
            >
              {/* Radial Glow Behind Logo */}
              <div className="absolute inset-0 bg-[#E11D48] opacity-[0.12] blur-[80px] z-0 rounded-full pointer-events-none" />

              {/* Logo Icon */}
              <div className="relative z-10 w-[80%] h-[80%] flex items-center justify-center">
                <img 
                  src="/logo-icon.png" 
                  alt="Altima Icon" 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(8,26,58,0.12)] hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
