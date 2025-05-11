import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import AnimatedElements from '@/components/AnimatedElements';
import MessageArea from '@/components/MessageArea';
import GallerySection from '@/components/GallerySection';
import InteractiveHeart from '@/components/InteractiveHeart';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Heart, Music } from 'lucide-react';

interface HeartPosition {
  id: number;
  x: number;
  y: number;
}

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hearts, setHearts] = useState<HeartPosition[]>([]);
  const [clickCount, setClickCount] = useState(0);
  const { toast } = useToast();
  const [showPlayer, setShowPlayer] = useState(false);
  const audioRef = useRef(null);
  
  useEffect(() => {
    // Add a small delay for the entrance animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Create a heart at the click position
    const newHeart = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY
    };
    
    setHearts(prev => [...prev, newHeart]);
    setClickCount(prev => prev + 1);
    
    if (clickCount > 0 && clickCount % 5 === 0) {
      toast({
        title: "¡Muchos corazones!",
        description: "¡Tu hijo siente todo tu amor!",
      });
    }
  };

  const removeHeart = (id: number) => {
    setHearts(prev => prev.filter(heart => heart.id !== id));
  };

  return (
    <div 
      className="min-h-screen pb-20 relative overflow-hidden bg-transparent"
      onClick={handleBackgroundClick}
    >
      <AnimatedElements />
      
      {hearts.map((heart) => (
        <InteractiveHeart 
          key={heart.id}
          x={heart.x}
          y={heart.y}
          onAnimationComplete={() => removeHeart(heart.id)}
        />
      ))}
      
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
        <Header />
        
        <MessageArea />
        
        <GallerySection />
        
        <div className="text-center mt-16 relative z-10 pointer-events-auto">
          <Button 
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:opacity-90 px-8 py-6 rounded-xl text-lg font-medium group"
            onClick={(e) => {
              e.stopPropagation(); // Prevent background click
              const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3");
              audio.play();
              
              // Create multiple hearts around the button
              const buttonRect = document.querySelector('button')?.getBoundingClientRect();
              if (buttonRect) {
                const centerX = buttonRect.left + buttonRect.width / 2;
                const centerY = buttonRect.top + buttonRect.height / 2;
                
                for (let i = 0; i < 8; i++) {
                  const angle = (i / 8) * 2 * Math.PI;
                  const distance = 60;
                  const x = centerX + distance * Math.cos(angle);
                  const y = centerY + distance * Math.sin(angle);
                  
                  setTimeout(() => {
                    setHearts(prev => [...prev, {
                      id: Date.now() + i,
                      x,
                      y
                    }]);
                  }, i * 100);
                }
              }
              
              toast({
                title: "¡Feliz día, mamá!",
                description: "Te quiero mucho ❤️",
              });
            }}
          >
            <span>Haz Clic Para Un Abrazo Virtual</span>
            <Heart className="ml-2 inline-block group-hover:animate-heartbeat" fill="#ffffff" size={20} />
          </Button>
        </div>
      </div>
      
      <div className="mt-16 text-center text-gray-500 text-sm">
        Hecho con ❤️ para la mejor mamá del mundo, con amor de tu hijo Danilo
      </div>

      <Button
        className="fixed top-6 left-6 z-50 bg-white/80 hover:bg-pink-100 text-pink-600 shadow-lg rounded-full px-4 py-2 flex items-center gap-2"
        onClick={() => window.location.href = '/'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Volver
      </Button>

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

export default Index;
