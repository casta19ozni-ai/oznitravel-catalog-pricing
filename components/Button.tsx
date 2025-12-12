import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'gold';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-8 py-3 rounded-none font-sans font-medium transition-all duration-300 tracking-wider uppercase text-sm";
  
  const variants = {
    primary: "bg-ozni-navy text-white hover:bg-ozni-dark border border-transparent",
    outline: "bg-transparent text-white border border-white hover:bg-white hover:text-ozni-navy",
    gold: "bg-ozni-gold text-ozni-navy hover:bg-white hover:text-ozni-gold border border-ozni-gold"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};