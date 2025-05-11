import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedElements from '@/components/AnimatedElements';

const Welcome = () => {
  const navigate = useNavigate();
  const [showTransition, setShowTransition] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);
  
  const handleContinue = () => {
    setShowTransition(true);
    
    // Navigate to home page after the transition animation completes
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-transparent">
      <AnimatedElements />
      {/* Welcome message */}
      <div className={`text-center transition-all duration-700 z-10 ${showTransition ? 'opacity-0 scale-90' : 'opacity-100'}`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-rose-600">
          De tu hijo Danilo, para ti mamá, feliz día
          <span className="text-rose-500 inline-block animate-heartbeat ml-2">❤</span>
        </h1>
        
        <Button 
          className="mt-8 bg-gradient-to-r from-rose-500 to-pink-500 hover:opacity-90 px-8 py-6 rounded-xl text-lg font-semibold"
          onClick={handleContinue}
        >
          Haz clic para continuar
        </Button>
      </div>
      
      {/* Heart transition */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
          showTransition ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}
      >
        <Heart 
          className="text-rose-500"
          size={500}
          strokeWidth={1}
          fill="#fda4af"
        />
      </div>

      <audio
        ref={audioRef}
        src="/audio/cancion.mp3"
        autoPlay
        loop
        controls
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 100,
          width: 220,
          background: 'rgba(255,255,255,0.8)',
          borderRadius: 8,
          boxShadow: '0 2px 12px #0002'
        }}
      />
    </div>
  );
};

export default Welcome;
