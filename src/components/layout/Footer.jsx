import { MessageCircle, Camera, Briefcase, Code } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary pt-16 pb-8 border-t-[6px] border-transparent" style={{ borderImage: 'linear-gradient(to right, #FF7A00, #FFC83D) 1' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <span className="font-poppins font-bold text-xl text-text-heading">Altima</span>
            </a>
            <p className="text-text-body mb-6">
              Transforming ideas into powerful digital solutions. We build scalable, premium software for ambitious startups and enterprises.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Briefcase size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Code size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Camera size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-text-heading mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-text-body hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-text-body hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#team" className="text-text-body hover:text-primary transition-colors">Team</a></li>
              <li><a href="#contact" className="text-text-body hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-text-heading mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-text-body hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#services" className="text-text-body hover:text-primary transition-colors">Custom Software</a></li>
              <li><a href="#services" className="text-text-body hover:text-primary transition-colors">AI Solutions</a></li>
              <li><a href="#services" className="text-text-body hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="text-text-body hover:text-primary transition-colors">UI/UX Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-text-heading mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-text-body">
                <span className="block font-medium text-text-heading">Address:</span>
                123 Innovation Drive, Tech City, TC 90210
              </li>
              <li className="text-text-body">
                <span className="block font-medium text-text-heading">Email:</span>
                <a href="mailto:hello@altimasoftware.com" className="hover:text-primary transition-colors">hello@altimasoftware.com</a>
              </li>
              <li className="text-text-body">
                <span className="block font-medium text-text-heading">Phone:</span>
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-body text-sm">
            &copy; {currentYear} Altima Software Solutions. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-text-body">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
