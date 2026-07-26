import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Each link: if `to` is set, use React Router Link; otherwise use plain href anchor
  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', to: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Team', to: '/team' },
    { name: 'Contact', href: '/#contact' },
  ];

  const linkClass = "text-text-heading hover:text-primary text-sm font-semibold tracking-wide transition-colors relative py-1";
  const mobileLinkClass = "block px-3 py-2 text-base font-semibold text-text-heading hover:text-primary hover:bg-bg-secondary rounded-xl transition-colors";

  const renderNavLink = (link, mobile = false) => {
    const cls = mobile ? mobileLinkClass : linkClass;
    if (link.to) {
      return (
        <Link
          key={link.name}
          to={link.to}
          className={cls}
          onClick={() => mobile && setIsMobileMenuOpen(false)}
        >
          {link.name}
        </Link>
      );
    }
    return (
      <a
        key={link.name}
        href={link.href}
        className={cls}
        onClick={() => mobile && setIsMobileMenuOpen(false)}
      >
        {link.name}
      </a>
    );
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-bg-primary/90 backdrop-blur-md border-border-primary py-4 soft-shadow' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/#home" className="flex items-center">
              <img src="/logo.png" alt="Altima Software Solutions" className="h-10 w-auto object-contain" />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => renderNavLink(link, false))}
          </nav>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-heading p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-primary border-t border-border-primary overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col mt-2">
              {navLinks.map((link) => renderNavLink(link, true))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
