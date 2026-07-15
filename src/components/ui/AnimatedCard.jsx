import { motion } from 'framer-motion';

export const AnimatedCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`bg-white rounded-2xl p-8 border border-border-primary soft-shadow transition-all duration-300 hover:neo-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
};
