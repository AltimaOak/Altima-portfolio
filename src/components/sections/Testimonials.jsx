import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Kohinoor City Offices",
      role: "Client",
      text: "The website created for Kohinoor City Offices perfectly captures our professional ethos. The sleek design and intuitive navigation have significantly elevated our digital presence and client engagement.",
    },
    {
      name: "Swastik Properties",
      role: "Client",
      text: "We are thrilled with the new website for Swastik Properties. It beautifully showcases our property portfolio with a modern, user-friendly interface that our clients absolutely love.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          title="Client Feedback." 
          subtitle="Don't just take our word for it. Here's what our partners say."
          className="text-center md:text-left mb-16"
        />

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-[24px] p-10 md:p-14 border border-border-primary neo-shadow text-center relative">
                    <Quote className="w-12 h-12 text-gray-200 absolute top-8 left-8" />
                    
                    <p className="text-xl md:text-2xl text-text-heading font-medium leading-relaxed mb-10 relative z-10 mt-6">
                      "{t.text}"
                    </p>
                    
                    <div className="flex flex-col items-center justify-center">
                      <h4 className="font-poppins font-semibold text-text-heading text-lg">{t.name}</h4>
                      <p className="text-secondary text-sm font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full bg-white border border-border-primary flex items-center justify-center text-text-heading hover:bg-bg-secondary hover:text-primary transition-colors focus:outline-none">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full bg-white border border-border-primary flex items-center justify-center text-text-heading hover:bg-bg-secondary hover:text-primary transition-colors focus:outline-none">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
