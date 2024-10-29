import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Taskforce</h3>
              <p className="text-gray-400 text-sm">
                Expertos en consultoría financiera y contable, comprometidos con el éxito de tu negocio.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-gold-400">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold-400">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold-400">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gold-400">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-gold-400">Inicio</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-gold-400">Servicios</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-gold-400">Sobre Nosotros</a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-gold-400">Testimonios</a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-gold-400">FAQ</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-400 hover:text-gold-400">Manejo Contable</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-gold-400">Consultoría Financiera</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-gold-400">Consultoría Estratégica</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-gold-400">Asesoría Fiscal</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>contacto@taskforce.com</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>Av. Principal 123, Ciudad</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="text-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Taskforce. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}