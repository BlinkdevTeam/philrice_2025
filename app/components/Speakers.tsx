import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  guestOfhonor,
  keynoteSpeakers,
  plenarySpeakers1,
  panelSpeakers1,
  concurrentSession1A,
  concurrentSession1B,
  panelSpeakers2,
  concurrentSession2A,
  concurrentSession2B,
  plenarySpeakers2,
  panelSpeakers3,
  Speaker,
} from "../data/speakers";
import { X } from "lucide-react";

export default function SpeakerSection() {
  const [activeFilter, setActiveFilter] = useState<
    "guestOfhonor" | "keynote" | "plenary1" | "panel1" | "concurrent1A" | "concurrent1B" | "panel2" | "concurrent2A" | "concurrent2B" | "plenary2" | "panel3"
  >("keynote");
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [day, setDay] = useState(0);

  const displayedSpeakers =
    activeFilter === "guestOfhonor" ? guestOfhonor

    : activeFilter === "keynote" ? keynoteSpeakers

    : activeFilter === "panel1" ? panelSpeakers1

    : activeFilter === "concurrent1A" ? concurrentSession1A

    : activeFilter === "concurrent1B" ? concurrentSession1B

    : activeFilter === "panel2" ? panelSpeakers2

    : activeFilter === "plenary1" ? plenarySpeakers1

    : activeFilter === "concurrent2A" ? concurrentSession2A

    : activeFilter === "concurrent2B" ? concurrentSession2B

    : activeFilter === "plenary2" ? plenarySpeakers2

    : activeFilter === "panel3" ? panelSpeakers3

    : keynoteSpeakers;

  const handleSetday = (day: any) => {
     setDay(day)
    if(day) {
      setActiveFilter("plenary1")
    } else {
      setActiveFilter("keynote")
    }
  }

  console.log("displayedSpeakers", displayedSpeakers)

  return (
    <section
      id="speaker"
      className="w-full flex justify-center items-center bg-white py-16"
    >
      <div className="max-w-[1920px] w-full">
        {/* Header */}
        <div className="text-start mb-[10px] px-6 md:px-32 lg:px-40">
          <h2 className="text-3xl md:text-[55px] text-[#006872] leading-tight md:leading-[60px]">
            Our Event{" "}
            <span className="text-[#F58A1F]">Speakers and Panelists</span>
          </h2>
          <div className="w-[200px] md:w-[373px] h-[3px] bg-[#FFC200] mt-4 md:mt-[26px]" />
        </div>
        
        {/*Day 1 Filter Buttons */}
        <div className={`${!day ? "block" : "hidden"}`}>
          <div className="lg:px-40 pb-[10px] pb-[40px]">
            <h6 className="text-[#006872] text-[24px]"><span className="text-[#F58A1F]">Day 1</span> Speakers</h6>
          </div>
          <div className={`flex justify-between px-6 md:px-32 lg:px-40 mb-8`}>
            <div className={`flex items-center justify-start gap-3 flex-wrap`}>
              <button
                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                  activeFilter === "guestOfhonor"
                    ? "bg-[#005C46] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter("guestOfhonor")}
              >
                GUEST OF HONOR
              </button>
              <button
                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                  activeFilter === "keynote"
                    ? "bg-[#005C46] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter("keynote")}
              >
                KEYNOTE SPEAKER
              </button>
              <button
                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                  activeFilter === "panel1"
                    ? "bg-[#005C46] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter("panel1")}
              >
                PANEL DISCUSSION 1
              </button>
              <button
                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                  activeFilter === "concurrent1A"
                    ? "bg-[#005C46] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter("concurrent1A")}
              >
                CONCURRENT SESSION 1A
              </button>
              <button
                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                  activeFilter === "concurrent1B"
                    ? "bg-[#005C46] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter("concurrent1B")}
              >
                CONCURRENT SESSION 1B
              </button>
              <button
                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                  activeFilter === "panel2"
                    ? "bg-[#005C46] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter("panel2")}
              >
                PANEL DISCUSSION 2
              </button>
            </div>
            <button
                className={`px-5 py-2 rounded-full text-sm cursor-pointer bg-[#006872] hover:bg-[#005C46] text-white`}
                onClick={() => handleSetday(1)}
              >
                SEE SPEAKERS FOR <span className={`font-[800] text-[#FFC200]`}>DAY 2</span>
            </button>
          </div>
        </div>


        {/*Day 2 Filter Buttons */}
        <div className={`${!day ? "hidden" : "block"}`}>
          <div className="lg:px-40 pb-[10px] pb-[40px]">
            <h6 className="text-[#006872] text-[24px]"><span className="text-[#F58A1F]">Day 2</span> Speakers</h6>
          </div>
          <div className={`flex justify-between px-6 md:px-32 lg:px-40 mb-8`}>
            <div className={`flex items-center justify-start gap-3 flex-wrap`}>
              <button
                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                  activeFilter === "plenary1"
                    ? "bg-[#005C46] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter("plenary1")}
              >
                PLENARY SESSION 1
              </button>
              <button
                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                  activeFilter === "concurrent2A"
                    ? "bg-[#005C46] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter("concurrent2A")}
              >
                CONCURRENT SESSION 2A
              </button>
              <button
                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                  activeFilter === "concurrent2B"
                    ? "bg-[#005C46] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter("concurrent2B")}
              >
                CONCURRENT SESSION 2B
              </button>
              <button
                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                  activeFilter === "plenary2"
                    ? "bg-[#005C46] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter("plenary2")}
              >
                PLENARY SESSION 2
              </button>
              <button
                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer ${
                  activeFilter === "panel3"
                    ? "bg-[#005C46] text-white"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
                onClick={() => setActiveFilter("panel3")}
              >
                PANEL DISCUSSION 3
              </button>
            </div>
            <button
                className={`px-5 py-2 rounded-full text-sm cursor-pointer bg-[#006872] hover:bg-[#005C46] text-white`}
                onClick={() => handleSetday(0)}
              >
                SEE SPEAKERS FOR <span className={`font-[800] text-[#FFC200]`}>DAY 1</span>
            </button>
          </div>
        </div>

        {/* Swiper */}
        <div className="mx-6 px-6 md:px-22">
          <div className="relative mx-6">
            {/* Custom Navigation Buttons */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 z-50">
              <button className="custom-prev bg-[#006872] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                ‹
              </button>
            </div>

            <div className="absolute top-1/2 right-0 -translate-y-1/2 z-50">
              <button className="custom-next bg-[#006872] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                ›
              </button>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              loop={true}
              slidesPerView={5}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1080: { slidesPerView: 3 },
                1560: { slidesPerView: 5 },
              }}
            >
              {displayedSpeakers.map((speaker, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => setSelectedSpeaker(speaker)}
                    className="cursor-pointer w-[272px] h-[437px] rounded-2xl shadow-lg transition-all duration-300 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 bg-white hover:bg-[#006872] flex flex-col justify-end relative overflow-hidden"
                  >
                    {/* Overlay */}
                    <div className="absolute bottom-0 w-full h-[60%] bg-linear-to-t from-[#007831]/80 via-[#007831]/40 to-transparent flex flex-col justify-end p-5 z-50">
                      <h3 className="text-white font-semibold text-lg leading-tight mb-1">
                        {speaker.name}
                      </h3>
                      <p className="text-gray-200 text-sm italic line-clamp-2">
                        {speaker.title}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="w-full h-[95%] mt-auto flex items-end justify-center">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>


        {/* Modal */}
        {selectedSpeaker && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-[1227px] w-full relative">
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black cursor-pointer"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <div className="flex w-full">
                <div className="w-[30%] h-[100%] rounded-2xl shadow-lg transition-all duration-300 bg-[#006872] flex flex-col justify-end relative overflow-hidden">
                  {/* Overlay */}
                  <div className="absolute bottom-0 w-full h-[60%] bg-linear-to-t from-[#007831]/80 via-[#007831]/40 to-transparent flex flex-col justify-end p-5 z-50">
                    <h3 className="text-white font-semibold text-lg leading-tight mb-1">
                      {selectedSpeaker.name}
                    </h3>
                    <p className="text-gray-200 text-sm italic line-clamp-2">
                      {selectedSpeaker.title}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="w-full h-[94%] mt-auto flex items-end justify-center">
                    <img
                      src={selectedSpeaker.image}
                      alt={selectedSpeaker.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-[80%] p-8">
                  <h1 className="leading-relaxed text-[#1F773A] text-[30px]">
                    {selectedSpeaker.presentationTitle ??
                      "This speaker will share insights about their field of expertise and contributions to the event."}
                  </h1>
                  <p className="text-black leading-relaxed mt-4">
                    {selectedSpeaker.description ??
                      "This speaker will share insights about their field of expertise and contributions to the event."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
