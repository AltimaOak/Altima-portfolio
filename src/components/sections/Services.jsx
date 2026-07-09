import { SectionTitle } from '../ui/SectionTitle';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Monitor, Code, BrainCircuit, Smartphone, Layout, Cloud, Webhook, Wrench } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Website Development",
      desc: "Custom, responsive, and high-performance websites built with modern frameworks.",
      icon: <Monitor className="w-8 h-8 text-primary" />
    },
    {
      title: "Custom Software",
      desc: "Tailored business applications designed to streamline operations and scale.",
      icon: <Code className="w-8 h-8 text-secondary" />
    },
    {
      title: "AI Solutions",
      desc: "Intelligent integrations using OpenAI and Gemini to automate workflows.",
      icon: <BrainCircuit className="w-8 h-8 text-accent" />
    },
    {
      title: "Mobile Applications",
      desc: "Native and cross-platform mobile apps for iOS and Android.",
      icon: <Smartphone className="w-8 h-8 text-accent-blue" />
    },
    {
      title: "UI/UX Design",
      desc: "Beautiful, user-centric interfaces that engage and convert visitors.",
      icon: <Layout className="w-8 h-8 text-primary" />
    },
    {
      title: "Cloud Deployment",
      desc: "Secure and scalable hosting architectures using AWS, Vercel, and Docker.",
      icon: <Cloud className="w-8 h-8 text-secondary" />
    },
    {
      title: "API Development",
      desc: "Robust REST and GraphQL APIs to connect your digital ecosystem.",
      icon: <Webhook className="w-8 h-8 text-accent" />
    },
    {
      title: "Maintenance & Support",
      desc: "Ongoing support to ensure your digital products remain secure and up-to-date.",
      icon: <Wrench className="w-8 h-8 text-accent-blue" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive digital solutions tailored to your unique business needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedCard key={index} delay={index * 0.1} className="group hover:bg-gradient-to-br hover:from-white hover:to-secondary/5">
              <div className="mb-6 inline-flex p-4 rounded-xl bg-bg-secondary group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-poppins font-semibold text-text-heading mb-3">{service.title}</h3>
              <p className="text-text-body">{service.desc}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
