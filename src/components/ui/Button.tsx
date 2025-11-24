import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'soft';
  size?: 'sm' | 'md';
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-1.5 text-xs',
  md: 'px-5 py-2 text-sm',
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  let base =
    'inline-flex items-center justify-center rounded-full font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';

  if (variant === 'primary') {
    base += ' bg-white text-slate-900 hover:bg-slate-100 focus:ring-white/60';
  } else if (variant === 'ghost') {
    base += ' border border-white/20 text-slate-100 hover:bg-white/10 focus:ring-white/40';
  } else {
    base += ' bg-white/10 text-slate-100 hover:bg-white/20 focus:ring-white/40';
  }

  return (
    <button className={`${base} ${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
