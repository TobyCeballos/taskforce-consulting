import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: "url('./assets/bg.jpg')" }}
      className="bg-cover bg-center bg-gray-50 dark:bg-gray-800"
    >
      <div className="flex items-center py-72 w-full h-[80vh] mx-auto px-4 bg-black/50 backdrop-brightness-75">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-white">
            Expertos en Consultoría Financiera
          </h1>
          <p className="text-xl mb-8 text-white dark:text-gray-300">
            Optimizamos tus finanzas para impulsar el crecimiento de tu negocio. Ofrecemos servicios de asesoría financiera, planificación fiscal y estrategias de inversión personalizadas.
          </p>
          <Button size="lg" asChild>
            <a href="#contacto">Contáctanos</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
