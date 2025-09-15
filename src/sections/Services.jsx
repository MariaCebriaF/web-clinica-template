// components/Services.jsx
import { specialties } from "../constants";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12 font-generalsans">
        Nuestros servicios
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {specialties.map(({ id, title, doctor, description, image }) => (
          <div
            key={id}
            className="bg-gray-100 p-4 rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-full h-40 sm:h-48 flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="max-h-full object-contain animate-float transition-transform duration-500 hover:scale-105"
            />


            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">{title}</h3>
            <p className="text-sm text-gray-600 mt-1">{doctor}</p>
            <p className="text-gray-700 mt-2 text-sm">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
