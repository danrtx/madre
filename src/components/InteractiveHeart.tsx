
import React, { useEffect } from 'react';
import { Heart } from 'lucide-react';

interface InteractiveHeartProps {
  x: number;
  y: number;
  onAnimationComplete: () => void;
}

const InteractiveHeart = ({ x, y, onAnimationComplete }: InteractiveHeartProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete();
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  const colors = ['#ff7bac', '#ff9d6c', '#fda4af', '#f9a8d4', '#fcc7d9'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomSize = Math.floor(Math.random() * 15) + 20; // Between 20-35px
  const randomRotation = Math.floor(Math.random() * 60) - 30; // Between -30 and 30 degrees

  return (
    <div 
      className="fixed pointer-events-none z-50 animate-heart-float"
      style={{
        left: `${x - randomSize/2}px`,
        top: `${y - randomSize/2}px`,
        transform: `rotate(${randomRotation}deg)`
      }}
    >
      <Heart 
        fill={randomColor}
        stroke={randomColor}
        size={randomSize}
        strokeWidth={1.5}
      />
    </div>
  );
};

export default InteractiveHeart;
