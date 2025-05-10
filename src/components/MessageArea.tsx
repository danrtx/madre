
import React from 'react';
import { Card } from '@/components/ui/card';

const MessageArea = () => {
  return (
    <section className="py-10 px-4 max-w-3xl mx-auto relative z-10">
      <Card className="bg-white/80 backdrop-blur-sm border border-pink-100 p-8 rounded-xl shadow-lg">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-pink-600 mb-6">
            Querida Mamá...
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Hoy quiero decirte lo mucho que significas para mí. Tu amor incondicional y tu fortaleza son mi 
            inspiración todos los días. Gracias por tu paciencia infinita, por tus abrazos que sanan, y por 
            ser mi refugio cuando más te necesito.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            No hay suficientes palabras para expresar cuánto te quiero y lo agradecido que estoy por tenerte 
            en mi vida. Eres el corazón de nuestra familia, el pilar que nos sostiene, y la sonrisa que 
            ilumina nuestros días.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Espero que hoy y siempre sepas lo especial que eres y cuánta felicidad traes al mundo.
            Te quiero infinitamente.
          </p>
          
          <div className="text-right italic text-lg text-pink-600 mt-8">
            Con todo mi amor,
            <div className="mt-2 font-script text-xl">Tu hijo</div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default MessageArea;
