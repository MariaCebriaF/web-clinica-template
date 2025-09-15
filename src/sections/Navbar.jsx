import { useState } from "react";
import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-base font-medium text-neutral-700">
      {navLinks.map(({ id, href, name }) => (
        <li key={id}>
          <a href={href} className="hover:text-primary transition-colors">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 px-6 sm:px-10">
          <a
            href="/"
            className="flex items-center gap-2 text-primary font-bold text-xl transition-colors"
          >
            <img
              src="/assets/hearth.svg"
              alt="Logo"
              className="w-6 h-6"
            />
            TU EMPRESA
          </a>

          {/* MOVIL */}
          <button
            onClick={toggleMenu}
            className="text-neutral-700 hover:text-black focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          {/* ESCRITORIO */}
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>

        {/* MOVIL */}
        <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96" : "max-h-0"} sm:hidden`}>
          <nav className="p-5">
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
