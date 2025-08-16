const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  onClick,
  type = 'button',
  className = ''
}) => {
  const baseClasses = 'font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#ab6bef] to-purple-700 text-white hover:from-purple-600 hover:to-[#ab6bef] hover:-translate-y-0.5 hover:shadow-lg',
    secondary: 'bg-color-border text-color-secondary hover:bg-[color-accent] hover:text-bg-card',
    danger: 'bg-red-500 text-white hover:bg-red-600 hover:scale-105'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:transform-none' : 'cursor-pointer';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabledClasses}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
