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
    <section className="py-12 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-[20px] border border-border-primary neo-shadow">
              <div className="text-4xl md:text-5xl font-poppins font-bold text-text-heading mb-2 flex justify-center items-baseline">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  <span>0</span>
                )}
                <span className="text-secondary">{stat.suffix}</span>
              </div>
              <p className="text-text-body font-medium text-sm tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
