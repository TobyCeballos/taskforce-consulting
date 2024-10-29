import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-50 to-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Expertos en</span>
            <span className="block text-gold-600">Consultoría Financiera</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Potenciamos el crecimiento de tu negocio con servicios contables y financieros de primer nivel.
            Soluciones estratégicas para el éxito empresarial.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow-lg">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border-2 border-gold-500 text-base font-medium rounded-md text-gold-700 bg-white hover:bg-gold-50 hover:text-gold-800 transition-all duration-300 md:py-4 md:text-lg md:px-10"
              >
                Comenzar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}