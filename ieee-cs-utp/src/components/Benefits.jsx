import { Users, Award, Lightbulb } from "lucide-react";

export default function Benefits() {
  return (
    <section id="beneficios" className="w-full bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Beneficios
        </h2>

        {/* Tarjetas */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* 1. Comunidad */}
          <div className="p-8 rounded-3xl bg-gray-50 shadow-sm hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <Users size={40} className="text-ieeeBlue" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              Comunidad y Networking
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Conecta con estudiantes, profesionales y líderes tecnológicos 
              a través de workshops, charlas y proyectos reales.
            </p>
          </div>

          {/* 2. Certificados */}
          <div className="p-8 rounded-3xl bg-gray-50 shadow-sm hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <Award size={40} className="text-ieeeBlue" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              Certificaciones y Reconocimientos
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Obtén certificados de participación, liderazgo y excelencia 
              reconocidos por IEEE, la mayor comunidad tecnológica del mundo.
            </p>
          </div>

          {/* 3. Aprendizaje */}
          <div className="p-8 rounded-3xl bg-gray-50 shadow-sm hover:shadow-md transition">
            <div className="flex justify-center mb-4">
              <Lightbulb size={40} className="text-ieeeBlue" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">
              Aprendizaje Continuo
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Accede a proyectos, mentorías, cursos, talleres y recursos 
              exclusivos para impulsar tu desarrollo profesional.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
