import { Target, Rocket, Linkedin, Instagram, Mail, Phone } from "lucide-react";

export default function Nosotros() {
  return (
    <div className="pt-24">

      {/* ===========================
          HERO NOSOTROS
      ============================ */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 px-6 md:px-10 gap-10 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Impulsamos tu futuro{" "}
              <span className="text-ieeeBlue">profesional</span> y{" "}
              <span className="text-ieeeYellow">digital.</span>
            </h1>

            <p className="text-gray-700 mt-4 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
              accumsan ante. Vestibulum id dolor.
            </p>

            <div className="flex gap-6 mt-6">
              <a
                className="bg-ieeeYellow font-semibold text-black px-6 py-3 rounded-md hover:bg-yellow-500 transition"
                href="#organizacion"
              >
                Conoce la Organización
              </a>

              <a
                className="font-semibold text-gray-700 hover:text-ieeeBlue transition"
                href="#equipo"
              >
                Nuestro Equipo
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/assets/nosotros/brain-chip.png"
              className="w-64 md:w-80"
            />
          </div>

        </div>
      </section>

      {/* ===========================
          MISIÓN & VISIÓN
      ============================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10">

          {/* Misión */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Target size={28} />
              <h3 className="text-2xl font-bold">Misión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sit amet vestibulum justo. Praesent arcu ex, ornare sed turpis ac,
              volutpat gravida tortor. Morbi nec maximus felis, ornare tempus turpis.
            </p>
          </div>

          {/* Visión */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Rocket size={28} />
              <h3 className="text-2xl font-bold">Visión</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sit amet vestibulum justo. Praesent arcu ex, ornare sed turpis ac,
              volutpat gravida tortor. Morbi nec maximus felis, ornare tempus turpis.
            </p>
          </div>

        </div>
      </section>

      {/* ===========================
          NUESTRO EQUIPO
      ============================ */}
      <section id="equipo" className="w-full py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id.
          </p>

          {/* Tabs simple */}
          <div className="flex gap-6 justify-center mb-10 text-gray-700 font-medium">
            <button className="hover:text-ieeeBlue">Junta directiva</button>
            <button className="hover:text-ieeeBlue">Líderes</button>
            <button className="hover:text-ieeeBlue">Colíderes</button>

            <div className="flex items-center gap-1">
              <span>2025</span>
              <span className="bg-ieeeYellow w-4 h-4 rounded-sm"></span>
            </div>
          </div>

          {/* Cards de miembros */}
          <div className="grid md:grid-cols-3 gap-10 mt-6">

            {[1, 2, 3].map((p) => (
              <div key={p} className="text-center">
                <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full"></div>

                <h3 className="font-bold mt-4">Nombre Apellido</h3>
                <p className="text-gray-600 text-sm">Rol</p>

                <p className="text-gray-600 text-sm mt-3 max-w-xs mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="flex justify-center gap-4 mt-4 text-gray-700">
                  <Linkedin size={22} className="hover:text-ieeeBlue" />
                  <Instagram size={22} className="hover:text-ieeeBlue" />
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===========================
          NUESTRA HISTORIA (TIMELINE)
      ============================ */}
      <section className="w-full bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Nuestra Historia
          </h2>

          <p className="text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id.
          </p>

          <img
            src="/assets/nosotros/history-timeline.png"
            className="w-full mx-auto"
          />

        </div>
      </section>

      {/* ===========================
          EL IEEE
      ============================ */}
      <section className="w-full py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">

          <h2 className="text-3xl font-bold mb-4">EL IEEE</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id.
          </p>

          <img
            src="/assets/nosotros/ieee-structure.png"
            className="w-full md:w-2/3 mx-auto"
          />

        </div>
      </section>

      {/* ===========================
          CTA - CONVOCATORIA
      ============================ */}
      <section className="bg-gradient-to-b from-ieeeYellow/40 to-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Sé parte del capítulo estudiantil IEEE Computer Society UTP mediante la Convocatoria activa 2025-2
          </h3>

          <p className="text-gray-600 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <a
            className="bg-ieeeYellow px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
            href="/unete"
          >
            Postular
          </a>

        </div>
      </section>

    </div>
  );
}
