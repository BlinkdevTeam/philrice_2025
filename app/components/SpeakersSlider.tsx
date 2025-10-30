"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

type Speaker = {
  id: number;
  name: string;
  title: string;
  image: string;
};

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Engr. Remelyn R. Recoter",
    title: "RCEF-Seed (DA-PhilRice)",
    image: "/assets/speakers/recoter.jpg",
  },
  {
    id: 2,
    name: "Engr. Remelyn R. Recoter",
    title: "RCEF-Seed (DA-PhilRice)",
    image: "/assets/speakers/recoter.jpg",
  },
  {
    id: 3,
    name: "Engr. Remelyn R. Recoter",
    title: "RCEF-Seed (DA-PhilRice)",
    image: "/assets/speakers/recoter.jpg",
  },
  {
    id: 4,
    name: "Engr. Remelyn R. Recoter",
    title: "RCEF-Seed (DA-PhilRice)",
    image: "/assets/speakers/recoter.jpg",
  },
  {
    id: 5,
    name: "Engr. Remelyn R. Recoter",
    title: "RCEF-Seed (DA-PhilRice)",
    image: "/assets/speakers/recoter.jpg",
  },
];

export default function SpeakersSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="max-w-[1438px] mx-auto px-8 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-[#005C46]">
          Our Event Speakers and Panelist
        </h2>
        <div className="w-32 h-[3px] bg-[#FFD200] mx-auto mt-2"></div>
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
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
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="speaker-swiper"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {speakers.map((speaker, index) => (
          <SwiperSlide key={speaker.id}>
            <div
              className={`rounded-2xl overflow-hidden shadow-md transition-all duration-300 ${
                index === activeIndex
                  ? "grayscale-0"
                  : "grayscale opacity-70 hover:opacity-100"
              }`}
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
    </section>
  );
}
