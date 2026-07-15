import { useInView } from 'react-intersection-observer';
import _CountUp from 'react-countup';
import { Users, UserCheck, Star, Rocket } from 'lucide-react';
const CountUp = _CountUp.default || _CountUp;

export const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { value: 2, suffix: '+', label: "Clients Served", icon: Users },
    { value: 4, suffix: '', label: "Team Members", icon: UserCheck },
    { value: 100, suffix: '%', label: "Client Satisfaction", icon: Star },
    { value: 2, suffix: '+', label: "Projects Delivered", icon: Rocket }
  ];

  return (
    <section className="py-10 bg-bg-warm relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-[#B91C1C] to-[#FF4D6D] rounded-3xl shadow-xl overflow-hidden py-10 px-6 sm:px-12 border border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className={`flex flex-col items-center md:items-start text-center md:text-left justify-center pb-6 last:pb-0 mb-6 last:mb-0 border-b border-white/10 last:border-b-0 md:border-b-0 md:pb-0 md:mb-0 md:px-8 md:border-r border-white/15 md:last:border-r-0`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/90 bg-white/5 flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="text-4xl md:text-5xl font-space-grotesk font-bold text-white flex items-baseline tracking-tight">
                      {inView ? (
                        <CountUp end={stat.value} duration={2.5} separator="," />
                      ) : (
                        <span>0</span>
                      )}
                      <span className="text-accent-blue">{stat.suffix}</span>
                    </div>
                  </div>
                  <p className="text-white/80 font-space-grotesk text-xs font-semibold tracking-wider uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
