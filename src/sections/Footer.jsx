
const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-10 mt-20 border-t border-blue-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-generalsans">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} TU EMPRESA |
          <a href="https://www.linkedin.com/in/mariacebriafernandez" target="_blank" rel="noopener noreferrer">
            Todos los derechos reservados.
          </a>
        </p>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center">
          <a
            href="/aviso-legal.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white-600 transition-colors"
          >
            Aviso Legal
          </a>
          <a
            href="/politica-privacidad.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white-600 transition-colors"
          >
            Política de Privacidad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
