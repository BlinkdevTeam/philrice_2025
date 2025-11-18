"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "../globals.css";
import { Maximize2 } from "lucide-react";
import { useRouter } from "next/navigation"; // <-- import useRouter

export default function PosterSection() {
  const posterUrl =
    "https://sfvideo.blob.core.windows.net/sitefinity/images/default-source/default-album/decoded-temp-image-storage/23-idt-scientific-poster-template-with-labels.jpg?sfvrsn=c6a9f207_6";

  const router = useRouter(); // <-- initialize router

  // Navigate to Posters page
  const handleFullscreen = () => {
    router.push("/Posters");
  };

  return (
    <div className="w-full bg-white flex flex-col items-center justify-start">
      <section
        id="posters"
        className="bg-white text-white w-full flex flex-col items-center justify-center py-10 px-4"
      >
        <div className="relative w-full max-w-[1920px] flex flex-col items-center sm:items-start flex-1 overflow-visible mt-8 z-10 md:px-32 lg:px-40 mb-10">
          {/* ✅ Top-right buttons */}
          <div className="absolute top-32 right-2 sm:top-6 sm:right-6 flex flex-col gap-3 z-20">
            {/* Fullscreen Button */}
            <button
              onClick={handleFullscreen}
              className="hidden sm:flex items-center justify-center w-6 h-6 sm:w-12 sm:h-12 bg-[#007831]/80 hover:bg-[#006872] text-white rounded-full shadow-md transition cursor-pointer"
              title="View Fullscreen"
            >
              <div className="hidden sm:block">
                <Maximize2 size={20} />
              </div>
              {/* <div className="block sm:hidden">
                <Maximize2 size={14} />
              </div> */}
            </button>
          </div>

          <h2 className="text-[46px] sm:text-[55px] text-[#006872] leading-tight md:leading-[60px] text-left">
            List of <span className="text-[#F58A1F]">Posters</span>
          </h2>
          <div className="w-full md:w-[373px] h-[3px] bg-[#F58A1F] mt-4 md:mt-[26px] mb-10" />

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 1920,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {/* 5 slides manually */}
            {[1, 2, 3, 4, 5].map((i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <img
                  src={posterUrl}
                  className="poster-img"
                  alt={`Poster ${i}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
