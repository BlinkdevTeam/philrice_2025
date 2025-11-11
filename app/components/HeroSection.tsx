export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative max-w-[1920px] w-full flex flex-col items-start justify-start pl-32 overflow-hidden"
      style={{ height: "900px" }}
    >
      {/* Background image + gradient overlay */}
      <div
        id="bg-image"
        className="absolute top-0 left-0 right-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to top, rgba(0, 104, 114, 1) 0%, rgba(0, 104, 114, 0.8) 30%, rgba(0, 104, 114, 0) 110%),
            url('/assets/4886408.jpg')
          `,
          backgroundPosition: "top",
        }}
      >
        {/* Bottom-right logo inside bg-image */}
        <img
          src="/assets/PHILRICE_UGNAY_PALAY_2025_BUMPER_STUDY2.png"
          alt="Philrice"
          className="absolute -bottom-14 right-0 max-w-[1920px] w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-16 mt-52">
        <div>
          <div className="relative z-10 max-w-[1200px] text-[#006872]">
            <div className="flex items-center gap-4">
              <img
                src="/assets/logos/6533772d20b398bc3050934c63409508e31649c2.png"
                alt="Event Logo"
                className="w-[160px] h-[160px] leading-0"
              />
              <div>
                <h1 className="text-[110px] leading-20">
                  37<sup className="align-super text-2xl">th</sup>
                </h1>
                <h2 className="text-[72px] leading-20">UGNAY PALAY</h2>
              </div>
            </div>
            <h3 className="text-[42px] mt-0">National Rice R4D Conference</h3>
          </div>
          <div className="relative w-auto h-auto bg-[#006872] px-6 py-2 mt-3 -ml-6">
            <p className="text-[23.5px] font-bold leading-[137%] text-[#ffffff]">
              25 - 27 November 2025 | CBC Plenary Hall | DA-PhilRice CES
            </p>
          </div>
        </div>

        <div className="relative flex justify-start items-center gap-4 mt-4">
          <img src="/assets/40_years_1.png" alt="orange 40 years" />
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1930px) {
          #bg-image {
            height: 810px; /* crop background */
            border-radius: 20px;
            background-image: linear-gradient(
                to top,
                rgba(0, 104, 114, 1) 0%,
                rgba(0, 104, 114, 0.6) 20%,
                rgba(0, 104, 114, 0) 100%
              ),
              url("/assets/4886408.jpg"); /* gradient stops changed */
            margin-top: 88px;
          }

          section {
            max-width: 1920px;
          }
        }
      `}</style>
    </section>
  );
}
