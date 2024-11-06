import {
  BarChart3,
  Calculator,
  PiggyBank,
  FileText,
  Building,
} from "lucide-react";

const services = [
  {
    title: "Asesoría Financiera",
    description:
      "Análisis y estrategias para optimizar tus finanzas personales y empresariales.",
    icon: BarChart3,
    spanX: 2, // Ocupa 2 columnas
    spanY: 1, // Ocupa 1 fila
  },
  {
    title: "Planificación Fiscal",
    description:
      "Optimización de impuestos y cumplimiento de obligaciones fiscales.",
    icon: Calculator,
    spanX: 2, // Ocupa 2 columnas
    spanY: 1, // Ocupa 1 fila
  },
  {
    title: "Inversiones",
    description:
      "Gestión de carteras y asesoramiento en inversiones para maximizar rendimientos.",
    icon: PiggyBank,
    spanX: 2, // Ocupa 2 columnas
    spanY: 1, // Ocupa 1 fila
  },
  {
    title: "Servicios de Contabilidad",
    description:
      "Mantenimiento de registros contables y preparación de estados financieros.",
    icon: FileText,
    spanX: 3, // Ocupa 3 columnas
    spanY: 2, // Ocupa 2 filas
  },
  {
    title: "Administración General",
    description:
      "Soporte en la gestión y administración eficiente de tu negocio.",
    icon: Building,
    spanX: 3, // Ocupa 3 columnas
    spanY: 2, // Ocupa 2 filas
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-4 min-h-[25vh] rounded-lg shadow-lg ${
                service.bgColor
              } flex flex-col justify-center space-x-4 
                ${service.spanX === 2 ? "col-span-2" : "col-span-3"}
                ${service.spanY === 2 ? "row-span-2" : "row-span-1"}
                `}
            >
              <div className="flex items-center justify-start p-4 ">
                <div className="min-w-[3rem] min-h-[3rem] mr-3 bg-yellow-700 text-white rounded-full flex items-center justify-center">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <div>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
