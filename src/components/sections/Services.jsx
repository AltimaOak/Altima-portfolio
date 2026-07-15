import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Monitor, Code, BrainCircuit, Smartphone, Layout, Cloud, Webhook, Wrench } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Website Development",
      desc: "Custom, responsive websites and web applications built with modern frameworks.",
      icon: Monitor
    },
    {
      title: "Custom Software",
      desc: "Tailored business applications designed to streamline operations and scale.",
      icon: Code
    },
    {
      title: "AI Solutions",
      desc: "Intelligent integrations using OpenAI and GenAI to automate workflows.",
      icon: BrainCircuit
    },
    {
      title: "Mobile Applications",
      desc: "Native and cross-platform mobile apps for iOS and Android.",
      icon: Smartphone
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful, user-centered interfaces that engage and convert visitors.",
      icon: Layout
    },
    {
      title: "Cloud Deployment",
      desc: "Leverage reliable cloud platforms like AWS, Vercel, and Docker for seamless deployment.",
      icon: Cloud
    },
    {
      title: "API Development",
      desc: "Robust REST and GraphQL APIs to connect your apps and systems effortlessly.",
      icon: Webhook
    },
    {
      title: "Maintenance & Support",
      desc: "Ongoing support to ensure your digital products remain secure, up-to-date, and optimized.",
      icon: Wrench
    }
  ];

  return (
    <section id="services" className="py-20 bg-bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          tag="Our Services"
          title="Comprehensive Digital Solutions For Your Business Needs."
          className="text-left"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <AnimatedCard 
                key={index} 
                delay={index * 0.05} 
                className="group hover:border-primary/30 flex flex-col justify-start text-left bg-white"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-space-grotesk font-semibold text-text-heading mb-3">{service.title}</h3>
                <p className="text-text-body text-sm leading-relaxed font-inter">{service.desc}</p>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
