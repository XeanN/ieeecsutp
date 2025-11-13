import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Globe, Monitor } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/nosotros", label: "Nosotros" },
    { path: "/comites", label: "Comités" },
    { path: "/experiencias", label: "Experiencias" },
    { path: "/nuestro-impacto", label: "Nuestro impacto" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-4">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="IEEE CS UTP"
            className="h-12"
          />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-medium text-sm transition ${
                  isActive
                    ? "text-orange-600 font-semibold"
                    : "text-gray-700 hover:text-black"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* SISTEMA */}
          <button className="flex items-center gap-2 text-gray-700 hover:text-black">
            <Monitor size={18} />
            <span className="text-sm font-medium">Sistema</span>
          </button>

          {/* IDIOMA */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-gray-700 hover:text-black"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">Español</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 bg-white shadow-md rounded p-2 w-28">
                <button
                  className="w-full text-left px-2 py-1 hover:bg-gray-100 text-sm"
                >
                  Español
                </button>
                <button
                  className="w-full text-left px-2 py-1 hover:bg-gray-100 text-sm"
                >
                  Inglés
                </button>
              </div>
            )}
          </div>

          {/* INSCRIBIR */}

          <Link
            to="/inscribete"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Inscríbete
          </Link>

        </div>

        {/* BOTÓN MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="md:hidden bg-white shadow px-6 pb-6">

          <div className="flex flex-col gap-5 mt-4">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium ${
                    isActive ? "text-orange-600" : "text-gray-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* SISTEMA */}
            <button className="flex items-center gap-3 text-gray-700">
              <Monitor size={20} />
              <span className="font-medium">Sistema</span>
            </button>

            {/* IDIOMA */}
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-3 text-gray-700"
            >
              <Globe size={20} />
              <span className="font-medium">Idioma</span>
            </button>

            {langOpen && (
              <div className="bg-white border rounded p-2">
                <p className="px-2 py-1 hover:bg-gray-100">Español</p>
                <p className="px-2 py-1 hover:bg-gray-100">Inglés</p>
              </div>
            )}

            {/* INSCRIBIR */}
            <Link
              to="/inscripcion"
              onClick={() => setOpen(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-lg font-semibold"
            >
              Inscríbete
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}
