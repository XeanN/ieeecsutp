import { useState } from "react";

const committees = [
  {
    id: "publicidad",
    name: "Publicidad y Marketing",
    description:
      "Encargado de la imagen institucional, campañas digitales, contenido multimedia, diseño gráfico y difusión oficial del capítulo.",
    image: "/assets/committees/publicidad.jpg",
  },
  {
    id: "proyectos",
    name: "Proyectos",
    description:
      "Desarrollan soluciones tecnológicas reales: IA, software, robótica, automatización y proyectos interdisciplinarios.",
    image: "/assets/committees/proyectos.jpg",
  },
  {
    id: "podcast",
    name: "Podcast",
    description:
      "Producción de entrevistas, episodios educativos, experiencias tecnológicas y contenido para nuestra comunidad universitaria.",
    image: "/assets/committees/podcast.jpg",
  },
  {
    id: "investigacion",
    name: "Investigación",
    description:
      "Líneas de investigación, papers, semilleros, análisis científico y participación en congresos y proyectos académicos.",
    image: "/assets/committees/investigacion.jpg",
  },
  {
    id: "editorial",
    name: "Editorial de Revista",
    description:
      "Creación de artículos, revistas tecnológicas, divulgación científica y contenido escrito profesional.",
    image: "/assets/committees/editorial.jpg",
  },
  {
    id: "rrhh",
    name: "RRHH y Talento",
    description:
      "Gestión interna del equipo, bienestar, liderazgo, cultura organizacional y selección de nuevos voluntarios.",
    image: "/assets/committees/rrhh.jpg",
  },
];

export default function Committees() {
  const [active, setActive] = useState("publicidad");
  const selected = committees.find((c) => c.id === active);

  return (
    <section id="comites" className="w-full bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Comités
        </h2>

        {/* Tabs */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 justify-start md:justify-center whitespace-nowrap">
            {committees.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`px-4 py-2 text-sm md:text-base rounded-md transition font-medium
                  ${
                    active === item.id
                      ? "bg-ieeeBlue text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }
                `}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="mt-12">
          <div className="grid md:grid-cols-2 gap-10 items-center bg-gray-50 p-8 rounded-3xl shadow-sm">

            {/* Image */}
            <div className="flex justify-center">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-72 md:w-96 rounded-2xl shadow"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-4">
              <span className="text-sm text-gray-500">Nov 2025</span>

              <h3 className="text-2xl font-bold">{selected.name}</h3>

              <p className="text-gray-700 leading-relaxed">
                {selected.description}
              </p>

              <a
                href="/comites"
                className="mt-2 inline-block bg-ieeeYellow hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-md transition"
              >
                Ver más
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
