import { useEffect } from 'react';
import { cn } from '../utils/cn';

const Card = ({ children, className }) => {
  return (
    <div className={cn('card', className)}>
      <div className="flex flex-col h-full">{children}</div>
    </div>
  );
};
export default Card;
