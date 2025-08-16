import { getAvatarColor } from '../../utils/helpers';

const Avatar = ({ character, index = 0, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-15 h-15 text-2xl'
  };

  return (
    <div 
      className={`
        rounded-full flex items-center justify-center text-white font-bold flex-shrink-0
        ${sizeClasses[size]} ${className}
      `}
      style={{ background: getAvatarColor(index) }}
    >
      {character}
    </div>
  );
};

export default Avatar;
