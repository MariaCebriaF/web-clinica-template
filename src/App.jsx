import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import Services from "./sections/Services.jsx";
import Location from "./sections/Location.jsx";
import About from "./sections/About.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <>
      <Hero />

      <Navbar />

      <About />

      <Services />

      <Location />
      <Footer />


    </>
  );
};

export default App;
