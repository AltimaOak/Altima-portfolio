import { motion } from 'framer-motion';

export const AnimatedCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`glass-card rounded-2xl p-6 soft-shadow transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};
