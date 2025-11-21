export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative max-w-[1920px] w-full h-[570px] sm:h-[670px] md:h-[750] lg:h-[850px] xl:h-[900px] flex flex-col justify-start items-center lg:items-start lg:justify-start pl-4 pr-4 lg:pr-0 lg:pl-32 overflow-hidden"
    >
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
        <img
          src="/assets/PHILRICE_UGNAY_PALAY_2025_BUMPER_STUDY2.png"
          alt="Philrice"
          className="absolute -bottom-1 xl:-bottom-14 right-0 min-w-[530px] max-w-[1920px] w-full h-auto"
        />
      </div>

      <div className="flex flex-col gap-16 mt-20 sm:mt-25 lg:mt-36 xl:mt-52">
        <div>
          <div className="relative z-10 max-w-[1200px] text-[#006872]">
            <div className="flex justify-center items-center lg:justify-start gap-4">
              <img
                src="/assets/logos/6533772d20b398bc3050934c63409508e31649c2.png"
                alt="Event Logo"
                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[135px] lg:h-[135px] xl:w-[160px] xl:h-[160px] leading-0"
              />
              <div>
                <h1 className="text-[46px] sm:text-[66px] lg:text-[88px] xl:text-[110px] leading-10 sm:leading-13 lg:leading-18 xl:leading-20">
                  37
                  <sup className="align-super text-xl md:text-2xl lg:text-4xl">
                    th
                  </sup>
                </h1>
                <h2 className="text-[30px] sm:text-[43px] lg:text-[62px] xl:text-[72px] leading-10 sm:leading-13 lg:leading-18 xl:leading-20">
                  UGNAY PALAY
                </h2>
              </div>
            </div>
            <h3 className="text-[20px] sm:text-[28px] lg:text-[39px] xl:text-[42px] text-center lg:text-start my-2 lg:-my-2 tracking-normal xl:tracking-[1.2px]">
              National Rice R4D Conference
            </h3>
          </div>
          <div className="relative w-full xl:w-auto h-auto bg-[#006872] px-6 py-2 mt-0 lg:mt-3 ml-0 lg:-ml-6">
            <p className="text-[12px] sm:text-[16px] lg:text-[18px] xl:text-[20.5px] text-center lg:text-start font-bold leading-[140%] text-[#ffffff] tracking-normal xl:tracking-[1.1px]">
              25 - 27 November 2025 <span className="text-[#F58A1F]">|</span>{" "}
              DA-CBC Plenary Hall <span className="text-[#F58A1F]">|</span>{" "}
              DA-PhilRice CES
            </p>
          </div>
        </div>

        <div className="relative flex justify-center items-center lg:justify-start lg:items-start gap-4 -mt-10 lg:-mt-2">
          <img
            src="/assets/40_years_1.png"
            alt="orange 40 years"
            className="max-w-[170px] sm:max-w-[230px] lg:max-w-[478px] w-full"
          />
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1930px) {
          #bg-image {
            height: 810px;
            border-radius: 20px;
            background-image: linear-gradient(
                to top,
                rgba(0, 104, 114, 1) 0%,
                rgba(0, 104, 114, 0.6) 20%,
                rgba(0, 104, 114, 0) 100%
              ),
              url("/assets/4886408.jpg");
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
