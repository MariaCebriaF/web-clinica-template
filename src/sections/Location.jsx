import React from "react";

const Location = () => {
  return (
    <section className="py-20 px-6 bg-gray-100" id="location">
      <div className="flex items-center justify-center mb-12 gap-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-8 font-generalsans">
          <img
            src="/assets/location.png"
            alt="Icono de ubicación"
            className="mx-auto mb-4 w-12 h-12"
          />
          ¿Dónde encontrarnos?
        </h2>

      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center justify-center">
        {/* Texto */}
        <div className="lg:w-1/2 text-base text-gray-700 leading-relaxed font-generalsans">
          <p className="mb-4">
            Nuestra clínica se encuentra en una ubicación privilegiada en el centro de X,
            fácilmente accesible tanto a pie como en transporte público.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Metro:</strong> parada INVENTADA (líneas X, Y, Z)</li>
            <li><strong>Autobuses:</strong> líneas LOQUESEA y metropolitanas</li>
            <li><strong>Tren:</strong> a pocos minutos de la Estación del LOQUESEA (EMPRESA X)</li>
            <li><strong>Aparcamiento:</strong> parkings públicos cercanos</li>
          </ul>
        </div>

        {/* Mapa */}
        <div className="lg:w-1/2 w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="Ubicación de la clínica"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.4747776995164!2d-0.34545192321790874!3d39.48119267160521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60487c5d604077%3A0x150fdf31fdc5a6f6!2sValencia%20Polytechnic%20University!5e0!3m2!1sen!2ses!4v1757919747969!5m2!1sen!2ses"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
