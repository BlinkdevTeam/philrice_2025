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
          The 36th Ugnay Palay National Rice R4D Conference arrives at a crucial
          moment in the evolution of the Philippine rice industry. This
          year&apos;s theme, &quot;Advancing Rice R4DE para sa Masaganang Bagong
          Pilipinas&quot; encapsulates DA-PhilRice&apos;s commitment to driving
          innovation, resilience, and sustainability in Philippine agriculture.
          It reflects the Institute’s dedication to placing farmers at the core
          of these advancements, ensuring their needs are met and their
          livelihoods are improved as they strive for greater productivity.
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
          This conference will serve as a pivotal platform for uniting
          stakeholders from across the rice sector—including researchers,
          scientists, policymakers, farmers, and industry partners—around a
          shared mission of transforming the industry. By focusing on harnessing
          cutting-edge advancements in rice research, technology, and
          development (R4D), the conference aims to build on the momentum
          initiated by the RCEF program, exploring ways to further elevate the
          productivity and market competitiveness of Filipino farmers and
          reinforce the Philippines&apos; standing as a global rice industry
          leader.
          <br />
          <br />
          Through collaboration and innovation, DA-PhilRice is confident in
          securing a more resilient, sustainable, and food-secure future for all
          Filipinos. Together, we are working toward realizing a
          &quot;Masaganang Bagong Pilipinas,&quot; where every Filipino enjoys a
          prosperous and secure life.
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
                  The DA-PhilRice charter established by Executive Order No.
                  1061 in November 1985, mandates the Institute to lead the
                  national rice research for development and extension (R4DE)
                  program. This initiative has been crucial in enhancing and
                  sustaining rice production across the Philippines. Over the
                  years, DA-PhilRice has worked closely with the Department of
                  Agriculture (DA) and a broad network of collaborators—
                  including state colleges and universities, local government
                  units, the private sector, non-governmental organizations, and
                  farmer groups—to uplift the nation’s rice farming communities.
                  <br />
                  <br />
                  During the implementation of its Strategic Plan 2017-2022,
                  DA-PhilRice successfully navigated numerous challenges and
                  played a key role in the rollout of the Rice Competitiveness
                  Enhancement Fund (RCEF)
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-[1047px] mt-12 px-0 sm:px-4">
            <p className="text-[16px] sm:text-[20px] leading-[26px] text-white text-center lg:text-start">
              During the implementation of its Strategic Plan 2017-2022,
              DA-PhilRice successfully navigated numerous challenges and played
              a key role in the rollout of the Rice Competitiveness Enhancement
              Fund (RCEF). This initiative provided Filipino rice farmers with
              access to high-quality seeds, advanced farming technologies,
              mechanization, and comprehensive training programs. These measures
              were pivotal in modernizing rice farming practices, reducing
              production costs, and increasing yields, thereby enhancing the
              competitiveness of Filipino farmers in the global market.
              <br />
              <br />
              Building on these successes, DA-PhilRice is now set to implement
              its 2023-2028 Strategic Plan, which focuses on leveraging advanced
              science and technology to create more prosperous and resilient
              rice farming communities. Central to this plan is a people-centric
              approach, aimed at improving the productivity, profitability, and
              well-being of farmers while ensuring the long-term sustainability
              and competitiveness of the rice industry.
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
