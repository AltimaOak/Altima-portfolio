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
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-bg-secondary border-t border-border-primary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          tag="Client Feedback"
          title="What Our Partners Say." 
          subtitle="Don't just take our word for it. Here's what our partners say."
          className="text-left mb-16"
        />

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-6 sm:p-10 md:p-14 border border-border-primary soft-shadow text-center relative">
                    <Quote className="w-8 h-8 md:w-12 md:h-12 text-stone-200/50 absolute top-4 left-4 md:top-8 md:left-8" />
                    
                    <p className="text-lg md:text-xl lg:text-2xl text-text-heading font-medium leading-relaxed mb-6 md:mb-10 relative z-10 mt-4 md:mt-6 font-space-grotesk">
                      "{t.text}"
                    </p>
                    
                    <div className="flex flex-col items-center justify-center">
                      <h4 className="font-space-grotesk font-semibold text-text-heading text-lg">{t.name}</h4>
                      <p className="text-primary text-sm font-semibold font-inter mt-1">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev} 
              className="w-12 h-12 rounded-full bg-white border border-border-primary flex items-center justify-center text-text-heading hover:bg-bg-secondary hover:text-primary hover:border-primary/45 transition-colors focus:outline-none cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next} 
              className="w-12 h-12 rounded-full bg-white border border-border-primary flex items-center justify-center text-text-heading hover:bg-bg-secondary hover:text-primary hover:border-primary/45 transition-colors focus:outline-none cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
