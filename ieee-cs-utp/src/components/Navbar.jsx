import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

        {/* LOGOS UTP + IEEE */}
        <div className="flex items-center gap-4">
          <img 
            src="/assets/logos/utp.png" 
            alt="UTP Logo" 
            className="h-10"
          />
          <img 
            src="/assets/logos/ieee-cs.png" 
            alt="IEEE CS Logo" 
            className="h-10"
          />
        </div>

        {/* LINKS (Desktop) */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li><a href="/" className="hover:text-ieeeBlue">Inicio</a></li>
          <li><a href="/nosotros" className="hover:text-ieeeBlue">Nosotros</a></li>
          <li><a href="/comites" className="hover:text-ieeeBlue">Comités</a></li>
          <li><a href="/entretenimiento" className="hover:text-ieeeBlue">Entretenimiento</a></li>
          <li><a href="/noticias" className="hover:text-ieeeBlue">Noticias</a></li>
        </ul>

        {/* Botones derecha */}
        <div className="hidden md:flex items-center gap-4">

          {/* Selector de idioma */}
          <button className="flex items-center gap-1 hover:text-ieeeBlue">
            <Globe size={18} />
            <span>Español</span>
          </button>

          {/* Botón Inscribirse */}
          <a 
            href="/unete"
            className="bg-ieeeYellow hover:bg-yellow-500 transition px-4 py-2 rounded-md font-semibold"
          >
            Inscríbete
          </a>
        </div>

        {/* Botón móvil */}
        <button 
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4">
          <ul className="flex flex-col gap-4 font-medium">
            <li><a href="/">Inicio</a></li>
            <li><a href="/nosotros">Nosotros</a></li>
            <li><a href="/comites">Comités</a></li>
            <li><a href="/entretenimiento">Entretenimiento</a></li>
            <li><a href="/noticias">Noticias</a></li>
          </ul>

          <hr className="my-3" />

          <div className="flex flex-col gap-3">
            {/* Idioma */}
            <button className="flex items-center gap-2">
              <Globe size={18} />
              Español
            </button>

            <a 
              href="/unete"
              className="bg-ieeeYellow text-center py-2 rounded-md font-semibold"
            >
              Inscríbete
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
