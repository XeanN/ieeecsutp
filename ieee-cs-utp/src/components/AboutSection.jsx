export default function AboutSection() {
  return (
    <section id="nosotros" className="w-full bg-[#f8f8ff] py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Nosotros
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGEN */}
          <div className="flex justify-center">
            <img
              src="/assets/about/group-photo.jpg"
              alt="IEEE CS UTP"
              className="w-72 md:w-96 rounded-3xl shadow-md"
            />
          </div>

          {/* TEXTO */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              Impulsamos el avance de la tecnología y la computación a través 
              de la innovación, la colaboración y la educación. Transformamos 
              el conocimiento en soluciones reales que impactan positivamente 
              a la sociedad, promoviendo un futuro más inclusivo desde el 
              corazón de la comunidad tecnológica global.
            </p>

            <a
              href="#comites"
              className="inline-block self-start bg-ieeeYellow hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-md transition"
            >
              Conocer más
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
