import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Comites from "../pages/Comites";
import Experiencias from "../pages/Experiencias";
import NuestroImpacto from "../pages/NuestroImpacto";
import Inscribete from "../pages/Inscribete";

export default function AppRouter() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/comites" element={<Comites />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/nuestro-impacto" element={<NuestroImpacto />} />
        <Route path="/inscribete" element={<Inscribete />} />
      </Routes>
    </HashRouter>
  );
}
