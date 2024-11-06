"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to listen for scroll events and update `isScrolled`
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full py-4 transition-all duration-300 ${
        isScrolled ? 'bg-white text-black shadow-lg' : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/assets/circle-logo.png" alt="Task Force Logo" className="w-12 h-12 mr-4" />
          <span className={`text-2xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
            Task Force
          </span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className={`hover:text-gray-800 ${isScrolled ? 'text-black' : 'text-white'}`}>
            Inicio
          </Link>
          <Link href="#servicios" className={`hover:text-gray-800 ${isScrolled ? 'text-black' : 'text-white'}`}>
            Servicios
          </Link>
          <Link href="#clientes" className={`hover:text-gray-800 ${isScrolled ? 'text-black' : 'text-white'}`}>
            Clientes
          </Link>
          <Link href="#contacto" className={`hover:text-gray-800 ${isScrolled ? 'text-black' : 'text-white'}`}>
            Contacto
          </Link>
        </nav>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className={`h-5 w-5 transition-all ${isScrolled ? 'text-black' : 'text-white'}`} />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <button
            className={`md:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`md:hidden mt-2 py-2  text-black bg-white`}>
          <Link href="/" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Inicio</Link>
          <Link href="#nosotros" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Nosotros</Link>
          <Link href="#servicios" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Servicios</Link>
          <Link href="#clientes" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Clientes</Link>
          <Link href="#contacto" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Contacto</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
