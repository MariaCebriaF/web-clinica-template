import { useEffect, useRef } from 'react';

const logos = [
  '/logos/adeslas.svg',
  '/logos/asisa.svg',
  '/logos/canal-salud-24.svg',
  '/logos/caser.svg',
  '/logos/dkv.svg',
  '/logos/fiatc.svg',
  '/logos/groupama.svg',
  '/logos/mapfre.svg',
  '/logos/sanitas.svg',
];

const About = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let animation;

    if (track) {
      let start = null;
      const speed = 0.5; // ajuste de velocidad

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        track.scrollLeft += speed;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
        animation = requestAnimationFrame(step);
      };

      animation = requestAnimationFrame(step);

      return () => cancelAnimationFrame(animation);
    }
  }, []);

  return (
    <section id="about" className="bg-white py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 font-generalsans">
        Compañías de seguros con las que trabajamos
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-8 px-6">
        <img src="/logos/adeslas.svg" alt="Adeslas" className="h-12 object-contain" />
        <img src="/logos/caser.svg" alt="Caser Seguros" className="h-12 object-contain" />
        <img src="/logos/fiatc.svg" alt="FIATC" className="h-12 object-contain" />
        <img src="/logos/mapfre.svg" alt="Groupama" className="h-12 object-contain" />
      </div>


      <div className="mt-10 flex justify-center">
        <div className="bg-blue-20 border border-blue-300 rounded-2xl px-6 py-5 shadow-md text-center max-w-sm hover:scale-105 transition-transform duration-300">
          <img
            src="/assets/telefono.png"
            alt="Teléfono"
            className="mx-auto w-12 h-12 mb-3"
          />
          <p className="text-xl font-bold text-blue-800">963 XXX XXX</p>
          <p className="text-sm text-gray-700 mt-2 px-2">
            Consúltenos si su compañía le cubre la especialidad en la que está interesado/a.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
