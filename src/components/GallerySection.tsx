import React from 'react';
import { Card } from '@/components/ui/card';

const momentos = [
  {
    img: '/images/momento1.jpg',
    alt: 'Momento especial',
    titulo: 'Un recuerdo especial',
    fecha: 'Hace muchos años atrás',
    descripcion: 'Un momento lleno de alegría y cariño, donde el tiempo parecía detenerse y solo importaba la felicidad compartida. ¡Un recuerdo que siempre vivirá en el corazón!'
  },
  {
    img: '/images/momento2.jpg',
    alt: 'Momento inolvidable',
    titulo: 'Un momento inolvidable',
    fecha: 'Hace muchos años atrás',
    descripcion: 'Un instante que quedó grabado en la memoria, lleno de risas y emociones que nunca se olvidarán.'
  },
  {
    img: '/images/momento3.jpg',
    alt: 'Una celebración juntas',
    titulo: 'Una celebración juntas',
    fecha: 'Hace muchos años atrás',
    descripcion: 'Un día especial para celebrar la vida y el amor, compartiendo momentos únicos e irrepetibles.'
  }
];

const GallerySection = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Momentos Especiales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {momentos.map((m, i) => (
            <Card
              key={i}
              className="overflow-hidden shadow-2xl group transform transition-all duration-300 hover:-translate-y-3 hover:shadow-pink-200/60 bg-white rounded-2xl border-2 border-pink-100"
            >
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                <img
                  src={m.img}
                  alt={m.alt}
                  className="object-cover w-full h-full rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                  style={{ maxHeight: '250px' }}
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-pink-600 mb-1">{m.titulo}</h3>
                <span className="text-xs text-pink-400 font-medium mb-2">{m.fecha}</span>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">{m.descripcion}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
