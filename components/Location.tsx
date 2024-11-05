const Location = () => {
  return (
    <section id="ubicacion" className="py-20 h-fit w-full">
      <div className=" mx-auto h-fit w-full">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Nuestra Ubicación</h2>
        <div className="h-full w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3835.6815278963186!2d-58.257306912097945!3d-37.84643907669625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDUwJzQ3LjIiUyA1OMKwMTUnMTkuOSJX!5e1!3m2!1ses-419!2sar!4v1730665711654!5m2!1ses-419!2sar"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[35vh] rounded-lg shadow-lg"
          ></iframe>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-800 dark:text-gray-300">Taskforce Consultoría Financiera</p>
          <p className="text-gray-600 dark:text-gray-300">7620, Balcarce, Buenos Aires</p>
        </div>
      </div>
    </section>
  );
};

export default Location;
