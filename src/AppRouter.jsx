import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./sections/App";
import AvisoLegal from "./pages/AvisoLegal";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />


        <Route path="/aviso-legal" element={<AvisoLegal />} />


        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
