import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    role: 'CEO, TechStart',
    content: 'Taskforce transformó completamente nuestra gestión financiera. Su expertise nos ayudó a optimizar recursos y crecer de manera sostenible.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
  },
  {
    name: 'Roberto Méndez',
    role: 'Director, Constructora RMC',
    content: 'El equipo de Taskforce no solo maneja nuestra contabilidad, sino que nos ha guiado en decisiones estratégicas cruciales para nuestro crecimiento.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
  },
  {
    name: 'Laura Torres',
    role: 'Fundadora, EcoVerde',
    content: 'Su asesoría ha sido fundamental para estructurar nuestras finanzas y prepararnos para la expansión internacional.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const nextTestimonial = () => {
    setSlideDirection('left');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setSlideDirection('right');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="testimonials" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Historias de éxito que nos enorgullecen
          </p>
        </div>

        <div className="mt-20 relative">
          <div className="overflow-hidden">
            <div
              key={currentIndex}
              className={`max-w-2xl mx-auto ${
                slideDirection === 'left' ? 'animate-slide-left' : 'animate-slide-right'
              }`}
            >
              <div className="bg-white rounded-xl shadow-xl p-8">
                <div className="flex items-center mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-gold-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-lg italic mb-6">"{testimonials[currentIndex].content}"</p>
                <div className="flex items-center">
                  <img
                    className="h-14 w-14 rounded-full object-cover border-2 border-gold-200"
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                  />
                  <div className="ml-4">
                    <p className="text-lg font-semibold text-gray-900">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gold-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gold-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gold-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gold-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gold-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setSlideDirection(index > currentIndex ? 'left' : 'right');
                  setCurrentIndex(index);
                }}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gold-500' : 'bg-gold-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}