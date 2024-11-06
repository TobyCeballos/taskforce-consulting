const Location = () => {
  return (
    <section id="ubicacion" className="py-10 h-fit w-full">
      <div className=" mx-auto h-fit w-full">
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-900 dark:text-white">¿Dónde estamos?</h2>
        <div className="mb-8 text-center">
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-300">Task Force Consultora</p>
          <p className="text-gray-600 dark:text-gray-300">Calle 17 Nº620, B7620 Balcarce, Buenos Aires</p>
        </div>
        <div className="h-full w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d958.9033225776707!2d-58.256734730330216!3d-37.84775093925263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDUwJzUxLjkiUyA1OMKwMTUnMjEuOSJX!5e1!3m2!1ses-419!2sar!4v1730861797290!5m2!1ses-419!2sar"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[35vh] rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
        <div className="text-center">
          <p className="italic text-xl font-serif text-gray-700 dark:text-gray-400 pt-9">
            &quot;La mente que se abre a una nueva idea, jamás volverá a su tamaño original&quot; <br/>
            <span className="text-lg font-bold">~ Albert Einstein</span>
          </p>
        </div>
    </section>
  );
};

export default Location;
