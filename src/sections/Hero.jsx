

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center">

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 z-10 translate-y-8">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#60A5FA"
            fillOpacity="1"
            d="M0,0 C480,100 960,0 1440,100 L1440,120 L0,120 Z"
          ></path>
        </svg>
      </div>


      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/fondoclinica.mp4" type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      {/* 🧾 Contenido encima del video */}
      <div className="relative z-20 text-center text-white px-6">
        <h1 className="text-4xl sm:text-6xl font-bold font-generalsans">
          Bienvenidos a nuestra clínica
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-4xl mx-auto">
          TU EMPRESA es un centro de especialidades médicas con más de X años de experiencia en el sector, ubicado en DONDE SEA. <br />
          Contamos con un amplio cuadro médico formado por un grupo de profesionales altamente cualificados y de dilatada experiencia en sus respectivos campos, ofreciendo cobertura tanto a pacientes privados como a compañías de seguros de salud.
        </p>
      </div>


      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />


      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#60A5FA"
            fillOpacity="1"
            d="M0,0 C480,100 960,0 1440,100 L1440,120 L0,120 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
