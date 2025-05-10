
import React from 'react';
import { Heart, Flower, Star, Sparkles } from 'lucide-react';

const AnimatedElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top left decorations */}
      <Heart 
        className="absolute text-pink-300 top-[10%] left-[5%] w-12 h-12 animate-float opacity-70" 
        strokeWidth={1.5}
        fill="#fcc7d9"
      />
      <Flower 
        className="absolute text-rose-400 top-[15%] left-[15%] w-10 h-10 animate-float-reverse opacity-70"
        strokeWidth={1.5}
      />
      
      {/* Top right decorations */}
      <Star 
        className="absolute text-amber-400 top-[8%] right-[12%] w-8 h-8 animate-float opacity-80"
        strokeWidth={1.5}
        fill="#fde68a"
      />
      <Heart 
        className="absolute text-rose-500 top-[20%] right-[5%] w-10 h-10 animate-float-reverse opacity-70"
        strokeWidth={1.5}
        fill="#fda4af"
      />
      
      {/* Bottom left decorations */}
      <Flower 
        className="absolute text-purple-400 bottom-[15%] left-[10%] w-12 h-12 animate-float opacity-70"
        strokeWidth={1.5}
      />
      <Star 
        className="absolute text-orange-300 bottom-[10%] left-[25%] w-8 h-8 animate-float-reverse opacity-80"
        strokeWidth={1.5}
        fill="#fdba74"
      />
      
      {/* Bottom right decorations */}
      <Heart 
        className="absolute text-pink-400 bottom-[20%] right-[8%] w-10 h-10 animate-float opacity-70"
        strokeWidth={1.5}
        fill="#f9a8d4"
      />
      <Sparkles 
        className="absolute text-amber-300 bottom-[8%] right-[22%] w-10 h-10 animate-float-reverse opacity-80"
        strokeWidth={1.5}
      />
      
      {/* Center decorations */}
      <Star 
        className="absolute text-yellow-300 top-[40%] left-[8%] w-6 h-6 animate-float opacity-60"
        strokeWidth={1.5}
        fill="#fde68a"
      />
      <Sparkles 
        className="absolute text-orange-200 top-[35%] right-[10%] w-8 h-8 animate-float-reverse opacity-60"
        strokeWidth={1.5}
      />
    </div>
  );
};

export default AnimatedElements;
