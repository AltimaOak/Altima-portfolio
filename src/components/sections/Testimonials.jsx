import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "David Smith",
      company: "TechFlow Inc.",
      review: "Altima transformed our outdated legacy system into a lightning-fast, modern application. Their attention to detail is unmatched.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Lisa Johnson",
      company: "Creative Studio",
      review: "The UI/UX design they delivered was beyond our expectations. It perfectly captures our brand identity and significantly boosted conversions.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Robert Williams",
      company: "Global Logistics",
      review: "Working with Altima was a breeze. They delivered our complex logistics platform ahead of schedule and with zero bugs.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section className="py-24 bg-bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it."
        />

        {/* Auto-scroll carousel simulation using CSS/Framer */}
        <div className="mt-16 flex overflow-x-hidden relative py-10 -my-10">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex gap-8 whitespace-nowrap min-w-max px-4"
          >
            {[...testimonials, ...testimonials, ...testimonials].map((t, index) => (
              <div 
                key={index} 
                className="w-[350px] md:w-[450px] glass-card rounded-2xl p-8 soft-shadow flex flex-col whitespace-normal"
              >
                <Quote className="w-10 h-10 text-primary/20 mb-6" />
                <p className="text-text-heading text-lg italic mb-8 flex-grow">"{t.review}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" />
                  <div>
                    <h4 className="font-poppins font-bold text-text-heading">{t.name}</h4>
                    <p className="text-sm text-primary font-medium">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
