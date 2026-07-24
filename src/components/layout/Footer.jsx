import { Link } from 'react-router-dom';

const LinkedinIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const MailIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MsmeLogo = ({ size = 36, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
    {/* Elegant National Crest Style Shield */}
    <path d="M50 8 L82 17 V45 C82 63 68 81 50 90 C32 81 18 63 18 45 V17 Z" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.08" />
    {/* Inner Chakra/Wheel structure */}
    <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="50" cy="50" r="5" fill="currentColor" />
    {/* Spoke lines representation */}
    <line x1="50" y1="32" x2="50" y2="68" stroke="currentColor" strokeWidth="1.5" />
    <line x1="32" y1="50" x2="68" y2="50" stroke="currentColor" strokeWidth="1.5" />
    <line x1="37.2" y1="37.2" x2="62.8" y2="62.8" stroke="currentColor" strokeWidth="1.2" />
    <line x1="37.2" y1="62.8" x2="62.8" y2="37.2" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="50" cy="50" r="23" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white pt-12 pb-6 overflow-hidden border-t border-white/5">
      {/* Dark navy to crimson gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#081A3A] via-[#0D1B2A] to-[#E11D48] opacity-95 z-0" />
      
      {/* Dot grid pattern overlay */}
      <div className="absolute inset-0 dot-bg opacity-[0.03] z-0 pointer-events-none" />

      {/* Abstract wave decoration */}
      <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-[0.04] pointer-events-none z-0 hidden lg:block">
        <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
          <path d="M 100 600 C 300 650, 450 450, 800 500" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 50 650 C 250 700, 400 500, 800 550" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
        </svg>
      </div>

      {/* Thin glowing top border line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#0A84FF]/40 via-[#FF6B6B]/40 to-[#E11D48]/40 opacity-80 z-10" />

      {/* Glowing accent blobs */}
      <div className="absolute -right-20 -bottom-20 w-[400px] h-[400px] bg-[#E11D48] opacity-[0.18] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute -left-20 -top-20 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10 text-left items-start">
          
          {/* Left Column: Brand */}
          <div className="col-span-1 lg:col-span-5 flex flex-col items-start">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <img src="/logo-icon.png" alt="Altima Logo Icon" className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
              <span className="font-space-grotesk font-bold text-white text-xl tracking-tight">ALTIMA</span>
            </a>
            <h3 className="font-space-grotesk font-semibold text-base text-white mb-2 leading-snug">
              Transforming Ideas Into Intelligent Digital Solutions.
            </h3>
            <p className="text-white/60 mb-4 text-xs sm:text-sm leading-relaxed max-w-sm font-inter">
              Altima Software Solutions helps startups and businesses build modern websites, AI-powered applications, and scalable software that drive real results.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 items-center">
              
              <a 
                href="https://www.instagram.com/altimasoftwaresolutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary hover:bg-white/5 transition-all duration-300"
              >
                <InstagramIcon size={16} />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=altimasoftwaresolutions@gmail.com" 
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary hover:bg-white/5 transition-all duration-300"
              >
                <MailIcon size={16} />
              </a>
            </div>
          </div>

          {/* Center Column: Quick Links */}
          <div className="col-span-1 sm:col-span-4 lg:col-span-3 lg:pl-8">
            <h4 className="font-space-grotesk font-bold text-white mb-4 tracking-wider text-xs uppercase opacity-50">Quick Links</h4>
            <ul className="space-y-2 font-inter text-xs sm:text-sm">
              <li><a href="/#home" className="text-white/60 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="/#about" className="text-white/60 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="/#services" className="text-white/60 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="/#team" className="text-white/60 hover:text-white transition-colors duration-300">Team</a></li>
              <li><a href="/#contact" className="text-white/60 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Right Column: Premium Trust Card */}
          <div className="col-span-1 lg:col-span-4 w-full flex justify-start lg:justify-end">
            <div className="relative w-full max-w-sm rounded-[18px] backdrop-blur-md bg-white/5 border border-white/10 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden group hover:border-white/20 transition-all duration-500">
              
              {/* Minimal government-inspired line art watermark */}
              <svg className="absolute right-4 bottom-4 w-28 h-28 text-white/5 pointer-events-none -z-10 transition-all duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                <circle cx="50" cy="50" r="45" strokeDasharray="2 2" />
                <circle cx="50" cy="50" r="40" />
                <circle cx="50" cy="50" r="12" />
                <line x1="50" y1="10" x2="50" y2="90" strokeDasharray="1 1" />
                <line x1="10" y1="50" x2="90" y2="50" strokeDasharray="1 1" />
                <line x1="21.7" y1="21.7" x2="78.3" y2="78.3" />
                <line x1="21.7" y1="78.3" x2="78.3" y2="21.7" />
                <line x1="35" y1="12" x2="65" y2="88" />
                <line x1="65" y1="12" x2="35" y2="88" />
                <line x1="12" y1="35" x2="88" y2="65" />
                <line x1="88" y1="35" x2="12" y2="65" />
              </svg>

              {/* Light glow behind card */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 to-[#E11D48]/10 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

              {/* Verified Badge */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2.5">
                  <MsmeLogo size={24} className="text-amber-500/95" />
                  <div>
                    <h5 className="font-space-grotesk font-bold text-xs uppercase tracking-wider text-white/90 leading-tight">
                      Govt of India
                    </h5>
                    <p className="font-inter text-[10px] font-medium text-white/50">
                      MSME Registered
                    </p>
                  </div>
                </div>
                
                <span className="bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 text-[9px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verified
                </span>
              </div>

              {/* Registration Details */}
              <div className="pt-3 border-t border-white/5">
                <span className="block text-white/40 uppercase text-[8px] font-semibold tracking-wider font-inter mb-1">
                  Udyam Registration Number
                </span>
                <span className="block text-white font-space-grotesk font-bold text-sm tracking-wide bg-white/5 border border-white/5 rounded-lg py-1.5 px-3 select-all">
                  UDYAM-MH-33-0453531
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-white/50 text-xs font-inter">
            &copy; {currentYear} Altima Software Solutions. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-xs text-white/50 font-inter">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
