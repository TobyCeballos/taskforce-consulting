export default function About() {
  const founders = [
    {
      name: 'María González',
      role: 'Co-Fundadora',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
      description: 'Contadora Pública y MBA con más de 15 años de experiencia en consultoría financiera.',
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Co-Fundador',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80',
      description: 'Contador Público especializado en estrategia empresarial con experiencia en Big Four.',
    },
  ];

  return (
    <div id="about" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Sobre Nosotros
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Expertos comprometidos con el éxito de tu negocio
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {founders.map((founder) => (
              <div key={founder.name} className="space-y-4">
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    className="object-cover shadow-lg rounded-lg h-96 w-full"
                    src={founder.image}
                    alt={founder.name}
                  />
                </div>
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3 className="text-2xl font-bold">{founder.name}</h3>
                    <p className="text-blue-600">{founder.role}</p>
                  </div>
                  <div className="text-lg">
                    <p className="text-gray-500">{founder.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}