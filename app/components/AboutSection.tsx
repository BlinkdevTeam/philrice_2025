import Image from "next/image";

export default function AboutSection() {
  return (
    // Section wrapper
    <section
      id="about"
      className=" w-full bg-white flex flex-col items-center justify-start pt-[64px] sm:pt-[84px]"
    >
      {/* ---------- Section 1: About the Conference ---------- */}
      <div className="max-w-[1046px] w-full flex flex-col items-center justify-start text-center px-4 md:px-2">
        <h2 className="text-[46px] sm:text-[55px] text-[#006872] leading-[60px]">
          About the <span className="text-[#F58A1F]">Conference</span>
        </h2>
        <div className="max-w-[373px] w-full h-[3px] bg-[#F58A1F] mt-[26px]"></div>

        <p className="text-[16px] sm:text-[20px] text-[#808080] leading-[130%] mt-12 sm:mt-[63px]">
          As DA-PhilRice celebrates its 40th founding anniversary, we find it timely and appropriate to adopt the theme ‘40 Years of Rice Innovations: Sowing Progress, Harvesting Prosperity’ for this year’s conference. The 37th Ugnay Palay National Rice R4D Conference becomes a strategic platform to revisit our shared journey–highlighting the significant scientific breakthroughs, institutional partnerships, and field-level interventions that have contributed to the transformation of rice-farming communities and the broader agri-food system.
        </p>

        {/* Image Grid */}
        <div className="my-[63px]">
          <div className="flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-2 gap-[30px]">
            <div>
              <div className="rounded-[26px] overflow-hidden">
                <Image
                  src="/assets/last_year_event/Image450.jpg"
                  alt="Image 450"
                  width={289}
                  height={193}
                  className="scale-100 hover:scale-105 transition-all ease-in-out duration-300"
                />
              </div>
            </div>
            <div>
              <div className="rounded-[26px] overflow-hidden">
                <Image
                  src="/assets/last_year_event/Image451.jpg"
                  alt="Image 451"
                  width={289}
                  height={193}
                  className="scale-100 hover:scale-105 transition-all ease-in-out duration-300"
                />
              </div>
            </div>
            <div className="col-start-1">
              <div className="rounded-[26px] overflow-hidden">
                <Image
                  src="/assets/last_year_event/Image452.jpg"
                  alt="Image 452"
                  width={289}
                  height={193}
                  className="scale-100 hover:scale-105 transition-all ease-in-out duration-300"
                />
              </div>
            </div>
            <div className="col-start-2">
              <div className="rounded-[26px] overflow-hidden">
                <Image
                  src="/assets/last_year_event/Image453.jpg"
                  alt="Image 453"
                  width={289}
                  height={193}
                  className="scale-100 hover:scale-105 transition-all ease-in-out duration-300"
                />
              </div>
            </div>
            <div className="row-span-2 row-start-1 col-start-3">
              <div className="rounded-[26px] h-[191.69px] sm:h-full overflow-hidden">
                <Image
                  src="/assets/last_year_event/Image449.png"
                  alt="Image 449"
                  width={289}
                  height={434.55}
                  className="scale-100 hover:scale-105 transition-all ease-in-out duration-300 -translate-y-14 sm:translate-y-0"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="text-[16px] sm:text-[20px] text-[#808080] leading-[130%] mb-16 sm:mb-[84px]">
          The conference is anchored on the belief that R4DE must be responsive, inclusive, and forward-looking. Amid the challenges posed by climate change, dwindling natural resources, technological disruptions, and shifting policy landscapes, the Ugnay Palay serves as a venue to galvanize the rice R4DE community toward co-creating solutions, fostering strong partnerships, and aligning efforts with national and global sustainable development goals.
          <br />
          <br />
          This annual convergence of rice scientists, farmers, youth, policymakers, and private sector collaborators will feature insights on past accomplishments, critical reflections on ongoing initiatives, and forward-looking discussions to guide the next generation of innovations and policy directions. It will serve as a pivotal platform for knowledge sharing, reflection, and strategic collaboration in charting the course for a resilient, inclusive, and technology-driven rice industry.
        </p>
      </div>

      {/* ---------- Section 2: About DA-PhilRice (Background Image) ---------- */}
      <div
        id="da-philrice-bg"
        className="relative w-full flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('/assets/DJI_20251002142745_0207_D.JPG')",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[rgba(19,67,51,0.75)]"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1200px] w-full flex flex-col justify-start items-center py-20 px-4 sm:px-2">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start">
            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
              <h2 className="text-[46px] sm:text-[55px] text-white text-center lg:text-start leading-[60px]">
                About <span className="text-[#F58A1F]">DA-PhilRice</span>
              </h2>
              <div className="max-w-[373px] w-full h-[3px] bg-[#F58A1F] mt-[26px]"></div>
            </div>

            <div className="flex justify-start items-center gap-[10px] mt-8 lg:-mt-8">
              <img
                src="/assets/40_years_1.png"
                alt="orange 40 years"
                className="max-w-[230px] sm:max-w-[230px] lg:max-w-[455px] w-full"
              />
            </div>
          </div>

          <div className="w-full flex flex-col lg:grid lg:grid-cols-2 items-start mt-12">
            <div className="w-full flex justify-center lg:justify-start ml-0 lg:ml-18 mt-12 lg:mt-0 order-2 lg:order-1">
              <img
                src="/assets/logos/Asset 5@12x-8 1.png"
                alt="orange 40 years"
                className="max-w-[280px] md:max-w-[300px] lg:max-w-[455px] w-full"
              />
            </div>

            {/* Right Section */}
            <div className="order-1 lg:order-2">
              <div className="ml-0 lg:ml-20 mt-0 px-4 lg:pr-12">
                <p className="text-[16px] sm:text-[20px] leading-[26px] text-white text-center lg:text-start">
                  Promulgated in November 1985, Executive Order No. 1061 mandates DA-PhilRice to lead the National Rice Research for Development and Extension (R4DE) program to improve and sustain rice production in the country. Since then, the Institute has contributed significantly to advancing rice science and technology, improving farm productivity, and enhancing the well-being of Filipino rice farmers. It has been at the forefront of generating, scaling, and sustaining science-based solutions in rice farming that continue to uplift the lives of millions of rice-farming families across the country. 
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-[1047px] mt-12 px-0 sm:px-4">
            <p className="text-[16px] sm:text-[20px] leading-[26px] text-white text-center lg:text-start">
              This year marks four decades of DA-PhilRice’s leadership in rice R4DE and its transformative impacts on the country’s food security, rural development, and scientific advancement. The Institute was able to deliver these impacts over the years because of its strong and close partnerships with the Department of Agriculture (DA) and a dynamic network of collaborators—including state colleges and universities, local government units, the private sector, non-government organizations, and farmer groups.
              <br />
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1930px) {
          #da-philrice-bg {
            max-width: 1920px;
            height: auto;
            border-radius: 20px;
            background-position: top;
            background-image: linear-gradient(
                to top,
                rgba(19, 67, 51, 1) 0%,
                rgba(19, 67, 51, 0.7) 25%,
                rgba(19, 67, 51, 0.4) 60%,
                rgba(19, 67, 51, 0) 100%
              ),
              url("/assets/DJI_20251002142745_0207_D.JPG");
          }
        }
      `}</style>
    </section>
  );
}
