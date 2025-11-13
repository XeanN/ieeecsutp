export default function Stats() {
  return (
    <section className="w-full bg-white py-16 md:py-20 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          {/* Stat 1 */}
          <div className="flex flex-col items-center">
            <span className="text-ieeeBlue text-4xl font-extrabold">+50</span>
            <p className="text-gray-600 text-lg mt-2">Voluntarios</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <span className="text-ieeeBlue text-4xl font-extrabold">+10</span>
            <p className="text-gray-600 text-lg mt-2">Años</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <span className="text-ieeeBlue text-4xl font-extrabold">5</span>
            <p className="text-gray-600 text-lg mt-2">Comités</p>
          </div>

        </div>
      </div>
    </section>
  );
}
