export default function Hero() {
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">

        {/* === LEFT CONTENT === */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Explora nuevas<br />
            formas de aprender
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-md">
            Tecnología y educación en perfecta armonía. Descubre cómo el aprendizaje
            evoluciona gracias a innovaciones tecnológicas.
          </p>

          <div>
            <a
              href="#nosotros"
              className="inline-block bg-ieeeYellow hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-md transition"
            >
              Saber más
            </a>
          </div>
        </div>

        {/* === RIGHT IMAGE === */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/assets/hero/students.png"
            alt="Estudiantes IEEE"
            className="w-80 md:w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
