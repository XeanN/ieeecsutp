import {
  Calendar,
  Podcast,
  Trophy,
  Newspaper,
} from "lucide-react";

import Footer from "../components/Footer";

export default function Experiencias() {
  return (
    <div className="pt-24 w-full overflow-x-hidden bg-white">

      {/* =====================================================
            HERO PRINCIPAL
      ===================================================== */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Nuestras <span className="text-ieeeBlue">Experiencias</span>
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Conoce las actividades, proyectos y vivencias que fortalecen nuestra 
            comunidad IEEE CS UTP.  
            Cada experiencia está diseñada para fomentar el aprendizaje activo, 
            la colaboración y el crecimiento profesional.
          </p>

        </div>
      </section>

      {/* =====================================================
            SECCIÓN · EVENTOS
      ===================================================== */}
      <section id="eventos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Calendar size={34} className="text-ieeeYellow" />
              <h2 className="text-3xl font-bold">Eventos</h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Organizamos conferencias, charlas, talleres, bootcamps, meetups 
              tecnológicos, paneles con expertos de la industria y actividades 
              académicas que conectan a los estudiantes con nuevas tendencias y 
              profesionales del rubro.
            </p>
          </div>

          <img
            src="/assets/experiencias/eventos.png"
            alt="Eventos IEEE CS UTP"
            className="w-72 md:w-96 mx-auto"
          />
        </div>
      </section>

      {/* =====================================================
            SECCIÓN · PODCAST
      ===================================================== */}
      <section id="podcast" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <Podcast size={34} className="text-ieeeBlue" />
              <h2 className="text-3xl font-bold">Podcast</h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Creamos contenido en formato audio y video, incluyendo entrevistas, 
              historias de miembros, conversaciones con profesionales de la industria, 
              debates sobre tecnología y exploración de temas relevantes.  
              Encaminado a Spotify, YouTube y plataformas digitales oficiales.
            </p>
          </div>

          <img
            src="/assets/experiencias/podcast.png"
            alt="Podcast IEEE"
            className="w-72 md:w-96 mx-auto order-1 md:order-2"
          />
        </div>
      </section>

      {/* =====================================================
            SECCIÓN · TORNEOS
      ===================================================== */}
      <section id="torneos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-3 mb-4">
            <Trophy size={34} className="text-ieeeYellow" />
            <h2 className="text-3xl font-bold">Torneos</h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mb-10">
            Competencias internas y externas como hackathons, retos de programación, 
            desafíos de innovación, e-sports académicos y actividades colaborativas.  
            Fomentan el trabajo en equipo, la creatividad y el aprendizaje aplicado.
          </p>

          <img
            src="/assets/experiencias/torneos.png"
            alt="Torneos IEEE CS UTP"
            className="w-72 md:w-96 mx-auto"
          />

        </div>
      </section>

      {/* =====================================================
            SECCIÓN · BLOG / NOTICIAS
      ===================================================== */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-3 mb-4">
            <Newspaper size={34} className="text-ieeeBlue" />
            <h2 className="text-3xl font-bold">Noticias & Blog</h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mb-10">
            Publicamos artículos, reportajes, comunicados oficiales, análisis 
            tecnológicos, experiencias internas, lanzamientos y avances de 
            proyectos.  
            Un espacio donde compartimos lo que hacemos, aprendemos y construimos 
            dentro de IEEE CS UTP.
          </p>

          <img
            src="/assets/experiencias/blog.png"
            alt="Blog IEEE CS UTP"
            className="w-80 md:w-96 mx-auto"
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
