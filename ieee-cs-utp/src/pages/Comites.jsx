import {
  Megaphone,
  Podcast,
  Laptop,
  BookOpen,
  Users,
  BrainCircuit,
  Gamepad2,
  BookText,
} from "lucide-react";

import Footer from "../components/Footer";

export default function Comites() {
  return (
    <div className="pt-24 w-full overflow-x-hidden bg-white">

      {/* =====================================================
            SECCIÓN 1 · INTRO
      ===================================================== */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Nuestros <span className="text-ieeeBlue">Comités</span>
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Los comités del capítulo estudiantil IEEE Computer Society UTP están 
            diseñados para impulsar el desarrollo tecnológico, la creación de 
            proyectos, el liderazgo estudiantil y el crecimiento profesional de 
            nuestra comunidad universitaria.
          </p>

        </div>
      </section>

      {/* =====================================================
            COMITÉ • PUBLICIDAD Y MARKETING
      ===================================================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Megaphone size={34} className="text-ieeeYellow" />
              <h2 className="text-3xl font-bold">Publicidad y Marketing</h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Encargados del branding, estrategia visual, diseño gráfico, 
              redes sociales, anuncios, creación de contenido y comunicación 
              oficial del capítulo.  
              Son quienes mantienen viva la identidad visual institucional.
            </p>
          </div>

          <img
            src="/assets/comites/marketing.png"
            alt="Publicidad y Marketing"
            className="w-72 md:w-96 mx-auto"
          />
        </div>
      </section>

      {/* =====================================================
            COMITÉ • PODCAST
      ===================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <Podcast size={34} className="text-ieeeBlue" />
              <h2 className="text-3xl font-bold">Podcast</h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Son la voz oficial del capítulo.  
              Realizan entrevistas, debates, paneles y podcasts sobre ciencia, 
              tecnología, innovación y experiencias estudiantiles, con formato 
              profesional para YouTube, Spotify y redes sociales.
            </p>
          </div>

          <img
            src="/assets/comites/podcast.png"
            alt="Podcast IEEE"
            className="w-72 md:w-96 mx-auto order-1 md:order-2"
          />
        </div>
      </section>

      {/* =====================================================
            COMITÉ • PROYECTOS
      ===================================================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Laptop size={34} className="text-ieeeYellow" />
              <h2 className="text-3xl font-bold">Proyectos Tecnológicos</h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Desarrollan soluciones reales en software, IA, web, automatización, 
              programación, ciencia de datos y herramientas digitales.  
              Son el núcleo técnico y de innovación del capítulo.
            </p>
          </div>

          <img
            src="/assets/comites/projects.png"
            alt="Proyectos IEEE"
            className="w-72 md:w-96 mx-auto"
          />
        </div>
      </section>

      {/* =====================================================
            COMITÉ • INVESTIGACIÓN
      ===================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={34} className="text-ieeeBlue" />
              <h2 className="text-3xl font-bold">Investigación</h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Producen papers, artículos científicos, análisis, revisiones 
              bibliográficas y estudios técnicos.  
              Participan en congresos, convocatorias académicas e investigación 
              universitaria colaborativa.
            </p>
          </div>

          <img
            src="/assets/comites/research.png"
            alt="Investigación IEEE"
            className="w-72 md:w-96 mx-auto order-1 md:order-2"
          />
        </div>
      </section>

      {/* =====================================================
            COMITÉ • EDITORIAL DE REVISTA
      ===================================================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-3 mb-4">
            <BookText size={34} className="text-ieeeYellow" />
            <h2 className="text-3xl font-bold">Editorial de Revista</h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mb-12">
            Este comité es responsable de la revista oficial del capítulo.  
            Desarrollan artículos divulgativos, entrevistas, reportajes, análisis 
            tecnológicos y diseño editorial profesional.
          </p>

          <div className="grid md:grid-cols-3 gap-12">

            {/* Divulgación */}
            <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">Divulgación</h3>
              <p className="text-gray-600">
                Contenido educativo, análisis de tendencias, ciencia, tecnología 
                y cultura digital.
              </p>
            </div>

            {/* Redacción */}
            <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">Redacción</h3>
              <p className="text-gray-600">
                Preparan textos, artículos, columnas, informes y entrevistas.
              </p>
            </div>

            {/* Diseño Editorial */}
            <div className="p-8 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">Diseño Editorial</h3>
              <p className="text-gray-600">
                Maquetación, ilustración, portada, fotografía y diseño visual 
                de la revista.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
            COMITÉ • RECURSOS HUMANOS
      ===================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <Users size={34} className="text-ieeeBlue" />
              <h2 className="text-3xl font-bold">
                Recursos Humanos y Gestión del Talento
              </h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              Gestionan bienestar, clima organizacional, reclutamiento interno, 
              entrevistas, integración, comunicación y seguimiento a equipos.  
              Son quienes fortalecen la cultura interna del capítulo.
            </p>
          </div>

          <img
            src="/assets/comites/human-talent.png"
            alt="RH IEEE"
            className="w-72 md:w-96 mx-auto order-1 md:order-2"
          />
        </div>
      </section>

      {/* =====================================================
            COMITÉ • VIDEOJUEGOS
      ===================================================== */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-3 mb-4">
            <Gamepad2 size={34} className="text-ieeeYellow" />
            <h2 className="text-3xl font-bold">Desarrollo de Videojuegos</h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mb-10">
            Equipo especializado en game design, programación de juegos, arte 
            digital, narrativa, animación, sonido y producción interactiva.  
            Crean demos, prototipos y videojuegos completos.
          </p>

          <img
            src="/assets/comites/videogames.png"
            className="w-72 md:w-96 mx-auto"
            alt="Videojuegos IEEE"
          />

        </div>
      </section>

      {/* =====================================================
            COMITÉ • IA Y CIENCIA DE DATOS
      ===================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-3 mb-4">
            <BrainCircuit size={34} className="text-ieeeBlue" />
            <h2 className="text-3xl font-bold">
              Inteligencia Artificial y Ciencia de Datos
            </h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mb-10">
            Comité dedicado a machine learning, deep learning, modelos 
            generativos, visión artificial, NLP, ciencia de datos y 
            aplicaciones reales de IA.  
            Son el equipo más técnico y de investigación aplicada.
          </p>

          <img
            src="/assets/comites/ai-datascience.png"
            className="w-72 md:w-96 mx-auto"
            alt="AI & Data Science IEEE"
          />

        </div>
      </section>

      {/* =====================================================
            FOOTER
      ===================================================== */}
      <Footer />
    </div>
  );
}
