"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { speakers, type Speaker } from "../data/speakers";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function SpeakerSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const swiperRef = useRef<import("swiper").Swiper | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (
      !swiperRef.current ||
      !prevRef.current ||
      !nextRef.current ||
      typeof swiperRef.current.params.navigation === "boolean"
    ) {
      return;
    }

    const nav = swiperRef.current.params.navigation as {
      prevEl?: HTMLElement | null;
      nextEl?: HTMLElement | null;
    };

    if (nav) {
      nav.prevEl = prevRef.current;
      nav.nextEl = nextRef.current;

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section
      id="speaker"
      className="w-full flex justify-center items-center bg-white py-16"
    >
      <div className="w-full">
        {/* Header */}
        <div className="text-start mb-10 pl-32 pr-40">
          <h2 className="text-[55px] text-[#006872] leading-[60px]">
            Our Event{" "}
            <span className="text-[#0E9046]">Speakers and Panelist</span>
          </h2>
          <div className="w-[373px] h-[3px] bg-[#FFC200] mt-[26px]" />
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap pl-32 pr-40">
          <button className="bg-[#005C46] text-white font-semibold px-5 py-2 rounded-full text-sm">
            KEYNOTE SPEAKER
          </button>
          <button className="bg-gray-100 text-gray-500 font-semibold px-5 py-2 rounded-full text-sm">
            PLENARY SESSION 1
          </button>
          <button className="bg-gray-100 text-gray-500 font-semibold px-5 py-2 rounded-full text-sm">
            PANEL DISCUSSION 1
          </button>

          <button className="ml-auto flex items-center gap-2 bg-[#005C46] text-white font-semibold px-6 py-2 rounded-full text-sm">
            SEE MORE <span className="text-lg">➜</span>
          </button>
        </div>

        {/* Swiper Slider */}
        <div className="relative pl-32">
          <Swiper
            loop={true}
            slidesPerView={4}
            spaceBetween={20}
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="speaker-swiper"
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {speakers.map((speaker) => (
              <SwiperSlide key={speaker.id}>
                <div
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="cursor-pointer rounded-2xl overflow-hidden shadow-md transition-all duration-300 grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                >
                  <div className="relative h-[380px]">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-white font-bold text-lg leading-tight">
                        {speaker.name}
                      </h3>
                      <p className="text-gray-200 text-sm">{speaker.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            aria-label="Previous slide"
            className="absolute left-[50px] top-1/2 -translate-y-1/2 z-10 bg-[#005C46] hover:bg-[#007d60] text-white p-3 rounded-full shadow-lg transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            ref={nextRef}
            aria-label="Next slide"
            className="absolute right-[50px] top-1/2 -translate-y-1/2 z-10 bg-[#005C46] hover:bg-[#007d60] text-white p-3 rounded-full shadow-lg transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedSpeaker && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                <Image
                  src={selectedSpeaker.image}
                  alt={selectedSpeaker.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-[#0E9046] mb-2">
                {selectedSpeaker.name}
              </h2>
              <p className="text-gray-700 mb-4">{selectedSpeaker.title}</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {/* Placeholder for additional description */}
                {selectedSpeaker.description ??
                  "This speaker will share insights about their field of expertise and contributions to the event."}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
