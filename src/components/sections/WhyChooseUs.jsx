import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Rocket, ShieldCheck, Clock, RefreshCw } from 'lucide-react';

export const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Modern Technologies",
      desc: "We stay ahead of the curve, utilizing the latest frameworks to build scalable and future-proof solutions.",
      icon: <Rocket className="w-10 h-10 text-primary" />
    },
    {
      title: "Quality Code",
      desc: "Our rigorous testing and code review processes ensure robust, secure, and maintainable software.",
      icon: <ShieldCheck className="w-10 h-10 text-secondary" />
    },
    {
      title: "Fast Delivery",
      desc: "Agile methodologies allow us to deliver high-quality products quickly without compromising on standards.",
      icon: <Clock className="w-10 h-10 text-accent" />
    },
    {
      title: "Long-Term Support",
      desc: "We build lasting partnerships, offering ongoing maintenance and updates as your business grows.",
      icon: <RefreshCw className="w-10 h-10 text-accent-blue" />
    }
  ];

  return (
    <section className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Why Choose Us" 
          subtitle="What sets Altima apart from the rest."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <AnimatedCard key={index} delay={index * 0.15} className="flex gap-6 items-start p-8">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-bg-secondary shadow-inner">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-poppins font-bold text-text-heading mb-2">{reason.title}</h3>
                <p className="text-text-body leading-relaxed">{reason.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
