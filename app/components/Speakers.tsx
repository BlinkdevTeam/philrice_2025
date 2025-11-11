import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  keynoteSpeakers,
  plenarySpeakers,
  panelSpeakers,
  Speaker,
} from "../data/speakers";
import { X } from "lucide-react";

export default function SpeakerSection() {
  const [activeFilter, setActiveFilter] = useState<
    "keynote" | "plenary" | "panel"
  >("keynote");
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const displayedSpeakers =
    activeFilter === "keynote"
      ? keynoteSpeakers
      : activeFilter === "plenary"
      ? plenarySpeakers
      : panelSpeakers;

  return (
    <section
      id="speaker"
      className="w-full flex justify-center items-center bg-white py-16"
    >
      <div className="max-w-[1920px] w-full">
        {/* Header */}
        <div className="text-start mb-10 px-6 md:px-32 lg:px-40">
          <h2 className="text-3xl md:text-[55px] text-[#006872] leading-tight md:leading-[60px]">
            Our Event{" "}
            <span className="text-[#F58A1F]">Speakers and Panelists</span>
          </h2>
          <div className="w-[200px] md:w-[373px] h-[3px] bg-[#FFC200] mt-4 md:mt-[26px]" />
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-start gap-3 mb-8 flex-wrap px-6 md:px-32 lg:px-40">
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
              activeFilter === "plenary"
                ? "bg-[#005C46] text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => setActiveFilter("plenary")}
          >
            PLENARY SESSION 1
          </button>
          <button
            className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer ${
              activeFilter === "panel"
                ? "bg-[#005C46] text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => setActiveFilter("panel")}
          >
            PANEL DISCUSSION 1
          </button>
        </div>

        {/* Swiper */}
        <div className="relative px-6 md:pl-32">
          <Swiper
            loop
            slidesPerView={5}
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1080: { slidesPerView: 3 },
              1560: { slidesPerView: 5 },
            }}
          >
            {displayedSpeakers.map((speaker) => (
              <SwiperSlide key={speaker.id}>
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
                <div className="w-[272px] h-[437px] rounded-2xl shadow-lg transition-all duration-300 bg-[#006872] flex flex-col justify-end relative overflow-hidden">
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
                <div className="p-8">
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
