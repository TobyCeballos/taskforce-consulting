import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Calculator, PiggyBank, FileText, Building } from 'lucide-react';

const services = [
  {
    title: "Asesoría Financiera",
    description: "Análisis y estrategias para optimizar tus finanzas personales y empresariales.",
    icon: BarChart3
  },
  {
    title: "Planificación Fiscal",
    description: "Optimización de impuestos y cumplimiento de obligaciones fiscales.",
    icon: Calculator
  },
  {
    title: "Inversiones",
    description: "Gestión de carteras y asesoramiento en inversiones para maximizar rendimientos.",
    icon: PiggyBank
  },
  {
    title: "Servicios de Contabilidad",
    description: "Mantenimiento de registros contables y preparación de estados financieros.",
    icon: FileText
  },
  {
    title: "Administración General",
    description: "Soporte en la gestión y administración eficiente de tu negocio.",
    icon: Building
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-700 text-primary-foreground rounded-full flex items-center justify-center mb-4">
                  <service.icon size={24} />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;