import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-inter font-medium rounded-full transition-all duration-300 focus:outline-none';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-orange-600 shadow-md hover:shadow-lg hover:-translate-y-1',
    secondary: 'bg-white text-text-heading border border-border-primary hover:border-primary hover:text-primary shadow-sm hover:shadow-md hover:-translate-y-1',
    text: 'text-text-body hover:text-primary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const sizeClass = props.size ? sizes[props.size] : sizes.md;

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
