import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Taskforce</h3>
            <p className="text-gray-600 dark:text-gray-300">Expertos en consultoría financiera</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Enlaces rápidos</h4>
            <ul>
              <li><Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Inicio</Link></li>
              <li><Link href="#nosotros" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Nosotros</Link></li>
              <li><Link href="#servicios" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Servicios</Link></li>
              <li><Link href="#contacto" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contacto</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Contáctanos</h4>
            <p className="text-gray-600 dark:text-gray-300">Email: info@taskforce.com</p>
            <p className="text-gray-600 dark:text-gray-300">Teléfono: +34 123 456 789</p>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; 2024 Taskforce. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;