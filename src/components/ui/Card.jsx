import { useEffect } from 'react';
import { cn } from '../../utils/cn';

const Card = ({ children, className }) => {
  return (
    <div
      className={cn(
        className,
        'bg-gray-700/20 ',
        'rounded-lg',
        'backdrop-blur-lg',
        'p-2'
      )}
    >
      <div className="flex flex-col h-full">{children}</div>
    </div>
  );
};
export default Card;
