import {
  Target,
  Rocket,
  Users,
  Calendar,
  BookOpen,
  Globe,
  Linkedin,
  Instagram,
} from "lucide-react";
import Footer from "../components/Footer";

export default function Nosotros() {
  return (
    <div className="pt-24 w-full overflow-x-hidden">

      {/* ======================================================
          1. ¿QUIÉNES SOMOS?
      ======================================================= */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 px-6 md:px-12 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Somos el capítulo estudiantil{" "}
              <span className="text-ieeeBlue">IEEE Computer Society UTP</span>
            </h1>

            <p className="text-gray-700 mt-6 leading-relaxed text-lg">
              Una comunidad académica dedicada a la tecnología, innovación y el
              desarrollo profesional de los estudiantes de la Universidad
              Tecnológica del Perú.  
              Promovemos el aprendizaje colaborativo, la investigación y la
              participación en proyectos que impulsan el crecimiento personal y
              profesional dentro del ecosistema IEEE.
            </p>

            <p className="text-gray-700 mt-4 leading-relaxed">
              Formamos líderes, promovemos el talento y conectamos a los
              estudiantes con oportunidades globales en ciencia de la computación,
              ingeniería y tecnologías emergentes.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/assets/nosotros/brain-chip.png"
              className="w-72 md:w-96"
              alt="IEEE Innovation"
            />
          </div>
        </div>
      </section>

      {/* ======================================================
          2. MISIÓN & 3. VISIÓN
      ======================================================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 px-6 md:px-12 gap-16">

          {/* Misión */}
          <div className="bg-white rounded-xl shadow p-10">
            <div className="flex items-center gap-3 mb-4">
              <Target size={32} className="text-ieeeBlue" />
              <h3 className="text-3xl font-bold text-gray-900">Misión</h3>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Fomentar el crecimiento académico y profesional de los estudiantes
              mediante actividades, proyectos y experiencias que fortalezcan sus
              habilidades técnicas, liderazgo, innovación y responsabilidad social.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-xl shadow p-10">
            <div className="flex items-center gap-3 mb-4">
              <Rocket size={32} className="text-ieeeBlue" />
              <h3 className="text-3xl font-bold text-gray-900">Visión</h3>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Ser un referente nacional e internacional en la formación de líderes
              estudiantiles en tecnología, promoviendo investigación, desarrollo de
              proyectos innovadores y conexiones globales con IEEE.
            </p>
          </div>

        </div>
      </section>

      {/* ======================================================
          4. NUESTRA HISTORIA (TIMELINE)
      ======================================================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">

          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Nuestra Historia
          </h2>

          <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
            A lo largo de los años, hemos consolidado un capítulo sólido con
            impacto en cientos de estudiantes.  
            Este es nuestro camino.
          </p>

          <img
            src="/assets/nosotros/history-timeline.png"
            className="w-full mx-auto"
            alt="IEEE Timeline"
          />
        </div>
      </section>

      {/* ======================================================
          5. JUNTA DIRECTIVA
      ======================================================= */}
      <section className="w-full py-24 bg-gray-50" id="junta">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
            Junta Directiva 2025
          </h2>
          <p className="text-center text-gray-600 mb-14">
            Conoce a los líderes que guían la visión y el crecimiento del capítulo.
          </p>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { name: "Alfredo Beraun", role: "Presidente" },
              { name: "Angel Ponce", role: "Vicepresidente" },
              { name: "Luis Escobedo", role: "Secretario" },
              { name: "Luis Ramírez", role: "Tesorero" },
            ].map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gray-300"></div>
                <h3 className="font-bold mt-4 text-lg">{p.name}</h3>
                <p className="text-gray-600 text-sm">{p.role}</p>

                <div className="flex justify-center gap-4 mt-4 text-gray-700">
                  <Linkedin size={22} className="hover:text-ieeeBlue cursor-pointer" />
                  <Instagram size={22} className="hover:text-ieeeBlue cursor-pointer" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================
          6. LÍDERES DE COMITÉS
      ======================================================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
            Líderes de Comités
          </h2>
          <p className="text-center text-gray-600 mb-14">
            Equipos que dirigen las áreas estratégicas del capítulo.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              "Publicidad y Marketing",
              "Podcast",
              "Proyectos",
              "Investigación",
              "Editorial de Revista",
              "Recursos Humanos y Talento",
              "Desarrollo de Videojuegos",
              "IA & Ciencia de Datos"
            ].map((comite, i) => (
              <div key={i} className="rounded-xl shadow p-8 bg-gray-50 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-900">{comite}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Líder: Pendiente <br />
                  Colíder: Pendiente
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ======================================================
          7. ALIADOS A DETALLE
      ======================================================= */}
      <section className="w-full py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">

          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Nuestros Aliados
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Colaboraciones que fortalecen nuestro impacto estudiantil y fomentan el
            desarrollo de proyectos y actividades significativas.
          </p>

          <img
            src="/assets/nosotros/partners.png"
            className="w-full md:w-2/3 mx-auto"
            alt="Aliados IEEE"
          />
        </div>
      </section>

      {/* ======================================================
          8. IEEE GLOBAL
      ======================================================= */}
      <section className="w-full py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">

          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Conoce la Agrupación Profesional Global IEEE
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            IEEE es la organización profesional más grande del mundo dedicada a la
            ingeniería, tecnología e innovación.  
            Formar parte de este ecosistema abre puertas a certificaciones,
            conferencias, publicaciones, investigación y una red global de
            profesionales.
          </p>

          <img
            src="/assets/nosotros/ieee-structure.png"
            className="w-full md:w-2/3 mx-auto"
            alt="IEEE Global Structure"
          />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
