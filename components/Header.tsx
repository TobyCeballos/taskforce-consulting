"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 w-full bg-gray-100 dark:bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo with img tag */}
          <img src="/assets/logo.png" alt="Taskforce Logo" className="w-10 h-10 mr-2" />
          <span className="text-2xl font-bold text-gray-800 dark:text-white">Taskforce</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Inicio</Link>
          <Link href="#nosotros" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Nosotros</Link>
          <Link href="#servicios" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Servicios</Link>
          <Link href="#clientes" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Clientes</Link>
          <Link href="#contacto" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">Contacto</Link>
        </nav>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <button
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-2 py-2 bg-gray-100 dark:bg-gray-800">
          <Link href="/" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Inicio</Link>
          <Link href="#nosotros" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Nosotros</Link>
          <Link href="#servicios" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Servicios</Link>
          <Link href="#clientes" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Clientes</Link>
          <Link href="#contacto" className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">Contacto</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
