import { motion } from 'framer-motion';

export const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`mb-20 ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold text-text-heading mb-6 tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-text-body max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
