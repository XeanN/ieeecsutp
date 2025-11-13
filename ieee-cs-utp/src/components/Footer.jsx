import { Facebook, Instagram, Globe, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-dark text-gray-200 pt-16 pb-8 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Top section */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logos */}
          <div className="flex flex-col gap-4">
            <img
              src="/assets/logos/utp.png"
              alt="UTP Logo"
              className="h-12"
            />
            <img
              src="/assets/logos/ieee.png"
              alt="IEEE Logo"
              className="h-10"
            />
            <img
              src="/assets/logos/ieee-cs.png"
              alt="IEEE Computer Society"
              className="h-10"
            />
            <p className="text-sm text-gray-400 mt-2">
              Capítulo Estudiantil IEEE Computer Society – UTP
            </p>
          </div>

          {/* Menú rápido */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Secciones</h3>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li><a href="/" className="hover:text-ieeeYellow">Inicio</a></li>
              <li><a href="/nosotros" className="hover:text-ieeeYellow">Nosotros</a></li>
              <li><a href="/comites" className="hover:text-ieeeYellow">Comités</a></li>
              <li><a href="/noticias" className="hover:text-ieeeYellow">Noticias</a></li>
              <li><a href="/entretenimiento" className="hover:text-ieeeYellow">Entretenimiento</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contacto</h3>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li>Email institucional:</li>
              <li className="text-ieeeYellow">ieeecs.utp@gmail.com</li>
              <li className="mt-3">Campus UTP Lima</li>
              <li>Av. Petit Thouars 116, Lima</li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Síguenos</h3>
            <div className="flex gap-4 mt-2">

              <a href="#" className="hover:text-ieeeYellow transition">
                <Facebook size={24} />
              </a>

              <a href="#" className="hover:text-ieeeYellow transition">
                <Instagram size={24} />
              </a>

              <a href="#" className="hover:text-ieeeYellow transition">
                <Linkedin size={24} />
              </a>

              <a href="#" className="hover:text-ieeeYellow transition">
                <Globe size={24} />
              </a>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          © 2025 IEEE Computer Society UTP – Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}
