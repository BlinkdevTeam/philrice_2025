export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-start justify-center py-24 pl-32 
                 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/assets/4886408.jpg')" }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[#006872]/80"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-[1200px]">
        <div className="flex flex-col">
          <h1 className="text-[80px]">
            37<sup className="align-super text-2xl">th</sup> UGNAY PALAY
          </h1>
          <h2 className="text-[47px] -mt-6">National Rice R4D Conference</h2>
        </div>

        <p className="text-[23.5px] font-bold leading-[137%] mt-3">
          25 - 27 November 2025 | CBC Plenary Hall | DA-PhilRice CES <br />
          Maligaya, Science City of Muñoz, Nueva Ecija
        </p>

        <div className="flex justify-start items-center gap-4">
          <img src="/assets/Rectangle.png" alt="Divider" />
          <p className="text-[20px] font-bold leading-[121.227%]">
            Years of Rice Innovations: <br />
            Sowing Progress, Harvesting Prosperity
          </p>
        </div>

        <img
          src="/assets/Asset 2@4x-8 1.png"
          alt="PhilRice Design Element"
          className="mt-4"
        />
      </div>

      {/* Logo image on the right bottom */}
      <div className="absolute bottom-0 right-0 z-0">
        <img
          src="/assets/PHILRICE_UGNAY PALAY 2025_1.png"
          alt="Philrice"
          className="max-w-[1200px] w-full h-auto"
        />
      </div>
    </section>
  );
}
