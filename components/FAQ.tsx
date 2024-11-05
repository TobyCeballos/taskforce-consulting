import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué servicios ofrece Taskforce?",
    answer: "Taskforce ofrece una amplia gama de servicios financieros, incluyendo asesoría financiera, planificación fiscal, gestión de inversiones, servicios de contabilidad y administración general para empresas y particulares."
  },
  {
    question: "¿Cómo puedo programar una consulta?",
    answer: "Puede programar una consulta llenando el formulario de contacto en nuestra página web, llamándonos directamente o enviándonos un correo electrónico. Nos pondremos en contacto con usted para acordar una fecha y hora conveniente."
  },
  {
    question: "¿Taskforce trabaja con empresas de todos los tamaños?",
    answer: "Sí, trabajamos con empresas de todos los tamaños, desde startups y pequeñas empresas hasta grandes corporaciones. Adaptamos nuestros servicios a las necesidades específicas de cada cliente."
  },
  {
    question: "¿Qué hace que Taskforce sea diferente de otras consultoras financieras?",
    answer: "Taskforce se distingue por su enfoque personalizado, su equipo de expertos altamente cualificados y su compromiso con la innovación en servicios financieros. Nos centramos en desarrollar estrategias a medida que se alinean con los objetivos específicos de cada cliente."
  },
  {
    question: "¿Ofrecen servicios de planificación financiera personal?",
    answer: "Sí, ofrecemos servicios de planificación financiera personal que incluyen gestión de inversiones, planificación de jubilación, planificación fiscal y asesoramiento en gestión de patrimonio para individuos y familias."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Preguntas Frecuentes</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;