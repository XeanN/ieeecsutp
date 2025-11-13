import { Cpu, Users, Beaker } from "lucide-react";
import Footer from "../components/Footer";

export default function NuestroImpacto() {
  return (
    <div className="pt-24 w-full overflow-x-hidden bg-white">

      {/* =====================================================
            HERO PRINCIPAL
      ===================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Nuestro <span className="text-ieeeBlue">Impacto</span>
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            El compromiso de nuestra comunidad se refleja en los proyectos, 
            actividades formativas y la producción científica que impulsamos 
            dentro y fuera de la universidad.
          </p>

        </div>
      </section>

      {/* =====================================================
            BLOQUE 1 · PROYECTOS TECNOLÓGICOS
      ===================================================== */}
      <section id="proyectos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Cpu size={36} className="text-ieeeYellow" />
              <h2 className="text-3xl font-bold text-gray-900">Proyectos Tecnológicos</h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Nuestro capítulo impulsa el desarrollo de soluciones tecnológicas 
              en áreas como inteligencia artificial, ciencia de datos, 
              desarrollo web, automatización, plataformas educativas y software 
              innovador.  
              Cada proyecto está orientado al impacto real y aplicada a retos del 
              mundo académico y profesional.
            </p>
          </div>

          {/* Imagen */}
          <img
            src="/assets/impacto/proyectos-tecnologicos.png"
            alt="Proyectos tecnológicos IEEE"
            className="w-72 md:w-96 mx-auto"
          />
        </div>
      </section>

      {/* =====================================================
            BLOQUE 2 · ACTIVIDADES INTERNAS
      ===================================================== */}
      <section id="actividades" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Imagen */}
          <img
            src="/assets/impacto/actividades-internas.png"
            alt="Actividades internas IEEE"
            className="w-72 md:w-96 mx-auto order-1 md:order-2"
          />

          {/* Texto */}
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <Users size={36} className="text-ieeeBlue" />
              <h2 className="text-3xl font-bold text-gray-900">Actividades Internas</h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Fortalecemos a nuestros miembros mediante workshops, capacitaciones,
              mentorías, dinámicas de integración y espacios de aprendizaje continuo.  
              Impulsamos el desarrollo técnico, personal y profesional dentro de 
              nuestra comunidad IEEE CS UTP.
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
            BLOQUE 3 · INVESTIGACIÓN
      ===================================================== */}
      <section id="investigacion" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Beaker size={36} className="text-ieeeYellow" />
              <h2 className="text-3xl font-bold text-gray-900">Investigación</h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Promovemos la investigación formativa y científica mediante la 
              elaboración de artículos, papers, revisiones técnicas y participación 
              en congresos universitarios.  
              Nuestro objetivo es fomentar la curiosidad académica, el pensamiento 
              crítico y la divulgación tecnológica.
            </p>
          </div>

          {/* Imagen */}
          <img
            src="/assets/impacto/investigacion.png"
            alt="Investigación IEEE"
            className="w-72 md:w-96 mx-auto"
          />
        </div>
      </section>

      {/* =====================================================
            FOOTER GLOBAL
      ===================================================== */}
      <Footer />

    </div>
  );
}
