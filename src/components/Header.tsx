
import React from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="pt-10 pb-6 relative">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="inline-block relative">
          <Heart className="text-rose-500 absolute -top-10 -right-8 animate-heartbeat w-12 h-12 opacity-80" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text leading-tight">
            Feliz Día Mamá
          </h1>
        </div>
        <p className="text-lg md:text-xl text-pink-700 mt-4 opacity-90">
          Con todo mi amor y cariño, para la persona más especial del mundo
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-orange-300 mx-auto my-8 rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
