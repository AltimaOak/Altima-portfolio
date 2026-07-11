import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary pt-16 pb-8 border-t border-border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center mb-6">
              <img src="/logo.png" alt="Altima Logo" className="h-10 w-auto object-contain" />
            </a>
            <p className="text-text-body mb-6 text-sm">
              Transforming ideas into powerful digital solutions. We build scalable, premium software for ambitious startups and enterprises.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=altimasoftwaresolutions@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-stone-400 hover:text-primary transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-inter font-semibold text-text-heading mb-6 tracking-wide text-sm uppercase">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/#home" className="text-text-body hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/#about" className="text-text-body hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/#team" className="text-text-body hover:text-primary transition-colors text-sm">Team</Link></li>
              <li><Link to="/#contact" className="text-text-body hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter font-semibold text-text-heading mb-6 tracking-wide text-sm uppercase">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/#services" className="text-text-body hover:text-primary transition-colors text-sm">Web Development</Link></li>
              <li><Link to="/#services" className="text-text-body hover:text-primary transition-colors text-sm">Custom Software</Link></li>
              <li><Link to="/#services" className="text-text-body hover:text-primary transition-colors text-sm">AI Solutions</Link></li>
              <li><Link to="/#services" className="text-text-body hover:text-primary transition-colors text-sm">Mobile Apps</Link></li>
              <li><Link to="/#services" className="text-text-body hover:text-primary transition-colors text-sm">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter font-semibold text-text-heading mb-6 tracking-wide text-sm uppercase">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-text-body text-sm">
                <span className="block font-medium text-text-heading mb-1">Call Us</span>
                <a href="tel:+918108839330" className="hover:text-primary transition-colors">+91 8108839330</a>
              </li>
              <li className="text-text-body text-sm">
                <span className="block font-medium text-text-heading mb-1">Email</span>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=altimasoftwaresolutions@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  altimasoftwaresolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-primary flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-body text-sm">
            &copy; {currentYear} Altima Software Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-body">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
