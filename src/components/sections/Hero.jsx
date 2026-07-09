import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-bg-primary pt-20">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-gradient-to-tr from-accent/20 to-secondary/20 blur-[120px]"
        />
        {/* Soft grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,122,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,122,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-extrabold text-text-heading leading-tight mb-6">
                Transforming Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Powerful</span> Digital Solutions
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-text-body mb-8 max-w-2xl leading-relaxed"
            >
              We are a modern software development startup delivering premium websites, scalable AI solutions, and impactful business applications for the future.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/client-project">
                <Button size="lg" variant="primary">View Client Project</Button>
              </Link>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full mt-12 lg:mt-0 relative h-[500px]">
             {/* Animated Illustration */}
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="relative w-full h-full flex items-center justify-center"
             >
                {/* Central main element */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute z-20 w-64 h-48 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
                >
                  <div className="h-6 bg-gray-100 border-b flex items-center px-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="p-4 flex-grow bg-bg-secondary flex flex-col gap-3">
                    <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-20 w-full bg-white rounded border border-gray-100"></div>
                  </div>
                </motion.div>

                {/* Floating Element 1 - Mobile */}
                <motion.div 
                  animate={{ y: [0, 20, 0], rotate: [-5, 5, -5] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-10 right-10 z-30 w-24 h-48 bg-white rounded-2xl shadow-xl border-4 border-gray-800 p-2"
                >
                  <div className="w-full h-full rounded-lg bg-gradient-to-b from-primary/10 to-secondary/10"></div>
                </motion.div>

                {/* Floating Element 2 - Code block */}
                <motion.div 
                  animate={{ y: [0, -25, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-10 left-10 z-30 w-48 h-32 bg-gray-900 rounded-xl shadow-xl p-4 text-xs font-mono text-green-400"
                >
                  <div>const app = () =&gt; &#123;</div>
                  <div className="pl-4">return (</div>
                  <div className="pl-8 text-blue-400">&lt;Success /&gt;</div>
                  <div className="pl-4">);</div>
                  <div>&#125;;</div>
                </motion.div>

                {/* Connection lines / abstract elements */}
                <svg className="absolute inset-0 w-full h-full z-10 opacity-30" viewBox="0 0 400 400">
                  <motion.path 
                    d="M100,200 Q200,100 300,300" 
                    fill="none" 
                    stroke="url(#grad1)" 
                    strokeWidth="3"
                    strokeDasharray="10 5"
                    animate={{ strokeDashoffset: [0, 100] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF7A00" />
                      <stop offset="100%" stopColor="#5BA7FF" />
                    </linearGradient>
                  </defs>
                </svg>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
