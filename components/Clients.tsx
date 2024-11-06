"use client"
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    company: "Tech Innovators S.L.",
    testimonial: "Task Force ha sido fundamental en la optimización de nuestras finanzas. Su asesoramiento nos ha permitido crecer de manera sostenible.",
    avatar: "MG"
  },
  {
    name: "Carlos Rodríguez",
    company: "Eco Solutions",
    testimonial: "Gracias a la planificación fiscal de Task Force, hemos logrado importantes ahorros y una mejor gestión de nuestros recursos.",
    avatar: "CR"
  },
  {
    name: "Laura Martínez",
    company: "Global Trade Co.",
    testimonial: "El equipo de Task Force nos ha guiado expertamente en nuestras inversiones, logrando excelentes rendimientos incluso en tiempos difíciles.",
    avatar: "LM"
  }
];

const Clients = () => {
  const [index, setIndex] = useState(0);

  // Cambia el testimonio cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Cambia al siguiente testimonio
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Cambia al testimonio anterior
  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="clientes" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Lo que dicen<br className="lg:hidden"/> nuestros clientes
        </h2>

        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index} // Cambia el `key` para que AnimatePresence detecte un cambio
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-2/3"
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarFallback>{testimonials[index].avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonials[index].name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[index].company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    &quot;{testimonials[index].testimonial}&quot;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Flechas de navegación */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={handlePrevious}
            aria-label="Anterior"
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Siguiente"
            className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;
