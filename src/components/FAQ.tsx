import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: '¿Qué servicios contables ofrecen?',
    answer: 'Ofrecemos servicios completos de contabilidad, incluyendo manejo de libros contables, preparación de estados financieros, declaraciones de impuestos y asesoría fiscal personalizada.',
  },
  {
    question: '¿Cómo pueden ayudar a mi empresa a crecer?',
    answer: 'Proporcionamos análisis financiero detallado, planificación estratégica y asesoramiento para optimizar sus operaciones y maximizar el crecimiento.',
  },
  {
    question: '¿Trabajan con empresas de cualquier tamaño?',
    answer: 'Sí, trabajamos con empresas de todos los tamaños, desde startups hasta grandes corporaciones, adaptando nuestros servicios a sus necesidades específicas.',
  },
  {
    question: '¿Con qué frecuencia recibiré reportes financieros?',
    answer: 'Proporcionamos reportes mensuales detallados, además de análisis trimestrales y anuales. La frecuencia puede ajustarse según sus necesidades.',
  },
  {
    question: '¿Ofrecen consultas iniciales gratuitas?',
    answer: 'Sí, ofrecemos una consulta inicial gratuita para evaluar sus necesidades y explicar cómo podemos ayudar a su empresa.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="faq" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Respuestas a las dudas más comunes
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex justify-between items-center px-4 py-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 px-4 py-3 bg-white rounded-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}