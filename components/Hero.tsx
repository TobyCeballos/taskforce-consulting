import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: "url('./assets/bg.jpg')" }}
      className="bg-cover bg-fixed bg-gray-50 dark:bg-gray-800 relative"
    >
      <div className="flex items-center w-full h-[80vh] px-8 bg-black/40">
        <div className="container text-center md:text-left ">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white dark:text-white leading-tight animate-fade-in-left">
            Expertos en <br/>Consultoría Financiera
          </h1>
          <p className="text-xl mb-6 text-gray-200 animate-fade-in-left">
            Optimizamos tus finanzas para impulsar el crecimiento de tu negocio. Ofrecemos servicios de asesoría financiera, planificación fiscal y estrategias de inversión personalizadas.
          </p>
          <div>
          <Button size="lg" asChild className="animate-fade-in-left hover:bg-yellow-600 transition-transform transform hover:scale-105">
            <a href="/contact">Contáctanos</a>
          </Button></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
