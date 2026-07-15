import { motion } from 'framer-motion';

export const SectionTitle = ({ tag, title, subtitle, className = '' }) => {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {tag && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-primary text-xs md:text-sm font-semibold tracking-wider uppercase block mb-3 font-space-grotesk"
        >
          {tag}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-semibold text-text-heading mb-4 tracking-tight leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg text-text-body max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
