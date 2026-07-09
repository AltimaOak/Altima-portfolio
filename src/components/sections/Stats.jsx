import { useInView } from 'react-intersection-observer';
import _CountUp from 'react-countup';
const CountUp = _CountUp.default || _CountUp;

export const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    { value: 2, suffix: '+', label: "Clients Served" },
    { value: 4, suffix: '', label: "Team Members" },
    { value: 100, suffix: '%', label: "Client Satisfaction" },
    { value: 2, suffix: '+', label: "Projects Delivered" }
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-2 flex justify-center items-baseline">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  <span>0</span>
                )}
                <span>{stat.suffix}</span>
              </div>
              <p className="text-text-heading font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
