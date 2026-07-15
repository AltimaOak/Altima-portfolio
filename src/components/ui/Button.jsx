import { motion } from 'framer-motion';

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-inter font-medium transition-all duration-300 focus:outline-none';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-secondary hover:text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 rounded-xl md:rounded-[14px]',
    secondary: 'bg-white text-primary border border-border-primary hover:border-primary/40 hover:bg-bg-primary shadow-sm hover:shadow-md hover:-translate-y-0.5 rounded-xl md:rounded-[14px]',
    text: 'text-text-body hover:text-primary rounded-lg',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const sizeClass = props.size ? sizes[props.size] : sizes.md;

  const Component = props.href ? motion.a : motion.button;

  return (
    <Component
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
