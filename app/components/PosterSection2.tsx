"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "../globals.css";
import { Minimize2, Maximize, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PosterSection2() {
  const posterUrl =
    "https://sfvideo.blob.core.windows.net/sitefinity/images/default-source/default-album/decoded-temp-image-storage/23-idt-scientific-poster-template-with-labels.jpg?sfvrsn=c6a9f207_6";

  const router = useRouter();
  const [fullscreenUrl, setFullscreenUrl] = useState<string | null>(null);

  // Minimize button to go back to homepage
  const handleMinimize = () => {
    router.push("/#posters");
    if (window.location.pathname === "/") {
      const section = document.getElementById("posters");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Open the clicked image in fullscreen modal
  const handleFullscreenImage = (url: string) => {
    setFullscreenUrl(url);
  };

  // Close the modal
  const handleCloseModal = () => {
    setFullscreenUrl(null);
  };

  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <section
        id="posters"
        className="bg-white text-white w-full h-full flex flex-col items-center justify-center py-10 px-4"
      >
        <div className="relative w-full max-w-[1920px] flex flex-col flex-1 justify-center items-start overflow-visible mt-8 z-10 md:px-32 lg:px-40 mb-10">
          {/* Minimize Button */}
          <div className="absolute top-6 right-6 flex flex-col gap-3 z-20">
            <button
              onClick={handleMinimize}
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#007831]/80 hover:bg-[#006872] text-white rounded-full shadow-md transition cursor-pointer"
              title="Go to Homepage Posters"
            >
              <Minimize2 size={20} />
            </button>
          </div>

          <h2 className="text-3xl md:text-[55px] text-[#006872] leading-tight md:leading-[60px] text-left">
            List of <span className="text-[#F58A1F]">Posters</span>
          </h2>
          <div className="w-[200px] md:w-[373px] h-[3px] bg-[#FFC200] mt-4 md:mt-[26px] mb-10" />

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
            {[1, 2, 3, 4, 5].map((i) => (
              <SwiperSlide key={i} className="flex justify-center relative">
                <img
                  src={posterUrl}
                  className="poster-img cursor-pointer"
                  alt={`Poster ${i}`}
                  onClick={() => handleFullscreenImage(posterUrl)}
                />
                {/* Fullscreen per image */}
                {/* <button
                  onClick={() => handleFullscreenImage(posterUrl)}
                  className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 bg-[#007831]/80 hover:bg-[#006872] text-white rounded-full shadow-md transition cursor-pointer"
                  title="View Fullscreen"
                >
                  <Maximize size={16} />
                </button> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {fullscreenUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={handleCloseModal}
        >
          <div
            className="relative max-w-[90%] max-h-[90%] flex items-center justify-center p-12"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking image
          >
            <img
              src={fullscreenUrl}
              alt="Fullscreen Poster"
              className="max-w-full max-h-full object-contain rounded-md"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 -right-12 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 text-white rounded-full cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
