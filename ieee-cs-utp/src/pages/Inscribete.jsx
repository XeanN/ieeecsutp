import { MessageCircle, HelpCircle, Megaphone } from "lucide-react";
import Footer from "../components/Footer";

export default function Inscribete() {
  return (
    <div className="pt-24 bg-white">

      {/* =====================================================
            HERO PRINCIPAL
      ===================================================== */}
      <section className="w-full py-20 bg-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Únete al capítulo estudiantil{" "}
            <span className="text-ieeeBlue">IEEE Computer Society UTP</span>
          </h1>

          <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg">
            Conecta con líderes, impulsa tu desarrollo profesional y forma parte
            de la comunidad tecnológica estudiantil más grande del mundo.
          </p>

          <a
            href="#por-que"
            className="mt-8 inline-block bg-ieeeYellow px-8 py-4 rounded-lg font-semibold 
            text-black text-lg hover:bg-yellow-500 transition shadow-md"
          >
            ¿Por qué ser parte?
          </a>

        </div>
      </section>

      {/* =====================================================
            ¿POR QUÉ SER PARTE?
      ===================================================== */}
      <section id="por-que" className="w-full py-20 bg-gray-50 animate-slide-up">
        <div className="max-w-6xl mx-auto px-6 md:px-10">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ¿Por qué ser parte?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Testimonios */}
            <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
              <MessageCircle
                size={42}
                className="mx-auto text-ieeeBlue mb-4 drop-shadow-sm"
              />
              <h3 className="font-bold text-xl mb-2">Testimonios reales</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Descubre cómo el capítulo ayudó a estudiantes a entrar a la
                industria, conseguir prácticas y desarrollar habilidades técnicas.
              </p>
            </div>

            {/* Preguntas frecuentes */}
            <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
              <HelpCircle
                size={42}
                className="mx-auto text-ieeeBlue mb-4 drop-shadow-sm"
              />
              <h3 className="font-bold text-xl mb-2">Preguntas frecuentes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Conoce los beneficios, qué se requiere para postular y cómo es
                el proceso para unirte a un comité.
              </p>
            </div>

            {/* Convocatoria activa */}
            <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
              <Megaphone
                size={42}
                className="mx-auto text-ieeeBlue mb-4 drop-shadow-sm"
              />
              <h3 className="font-bold text-xl mb-2">Convocatoria activa</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Infórmate sobre la convocatoria actual 2025-2 y postula al comité
                que mejor se adapte a tu perfil e intereses.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
            FAQ
      ===================================================== */}
      <section className="py-20 bg-white animate-fade-in">
        <div className="max-w-5xl mx-auto px-6 md:px-10">

          <h2 className="text-3xl font-bold text-center mb-10">Preguntas Frecuentes</h2>

          <div className="space-y-6">

            <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">¿Cuáles son los requisitos para unirme?</h3>
              <p className="text-gray-600 mt-2">
                Solo necesitas estar estudiando en la UTP, tener interés en tecnología
                y disposición para aprender y colaborar en actividades del capítulo.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">¿Debo tener conocimientos previos?</h3>
              <p className="text-gray-600 mt-2">
                No. Contamos con comités para todos los niveles y brindamos capacitaciones
                internas para ayudarte a crecer desde cero.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">¿Cuánto tiempo debo dedicar?</h3>
              <p className="text-gray-600 mt-2">
                2 a 4 horas por semana en promedio, dependiendo del comité y proyectos activos.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">¿Puedo cambiar de comité luego?</h3>
              <p className="text-gray-600 mt-2">
                Sí. Puedes solicitar un cambio interno tras completar un periodo mínimo.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
            CTA FINAL
      ===================================================== */}
      <section className="bg-gray-50 py-20 text-center animate-slide-up">
        <div className="max-w-3xl mx-auto px-6">

          <h3 className="text-2xl font-bold mb-4">¿Listo para dar el siguiente paso?</h3>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Completa el formulario oficial de postulación y comienza tu camino
            como miembro activo del IEEE Computer Society UTP.
          </p>

          <a
            href="https://forms.gle/xxxxxxxxxxxx" 
            target="_blank"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white 
            px-8 py-4 rounded-lg text-lg font-semibold transition shadow-md"
          >
            ¡Postula ahora!
          </a>

        </div>
      </section>

      {/* =====================================================
            FOOTER
      ===================================================== */}
      <Footer />
    </div>
  );
}
