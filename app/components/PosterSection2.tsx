"use client";

import React, { useState, useRef , useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "../globals.css";
import { Minimize2, Maximize, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

import { group1, group2, group3, group4 } from "../data/posters";
import Image from "next/image";

export default function PosterSection2() {
  const [activeTheme, setActivetheme] = useState(1)
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const [fullscreenUrl, setFullscreenUrl] = useState<string | null>(null);

  // Minimize button to go back to homepage
  const handleMinimize = () => {
    router.push("/");
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

   const handleTheme = (theme: any) => {
      setActivetheme(theme)
      setIsOpen(false);
    }
  
    const handleDropdown = () => setIsOpen((prev) => !prev);
  
    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
              className="hidden sm:flex items-center justify-center w-6 h-6 sm:w-12 sm:h-12 bg-[#007831]/80 hover:bg-[#006872] text-white rounded-full shadow-md transition cursor-pointer"
              title="Go to Homepage Posters"
            >
              <div className="hidden sm:block">
                <Minimize2 size={20} />
              </div>
              <div className="block sm:hidden">
                <Minimize2 size={14} />
              </div>
            </button>
          </div>

          <div className="flex gap-[20px]" ref={dropdownRef}>
            <div>
                <h2 className="text-3xl md:text-[55px] text-[#006872] leading-tight md:leading-[60px] text-left">
                  List of <span className="text-[#F58A1F]">Posters</span>
                </h2>
                <div className="w-[200px] md:w-[373px] h-[3px] bg-[#F58A1F] mt-4 md:mt-[26px] mb-10" />
            </div>

            <div className="relative pt-[20px]">
              <div onClick={() => handleDropdown()} className="flex gap-[10px] items-center bg-[#005c46] rounded-full px-[25px] py-[10px]">
                <h6 className="">{`Theme ${activeTheme}`}</h6>
                <ChevronDown size={16} />
              </div>
              {isOpen && (
                <div className="absolute bg-white shadow-xl z-[99] rounded-[10px] overflow-hidden mt-2">
                  <div
                    onClick={() => handleTheme(1)}
                    className="bg-white hover:bg-[#cacaca] px-[35px] py-[7px] text-gray-500 cursor-pointer"
                  >
                    <h6>Theme 1</h6>
                  </div>
                  <div
                    onClick={() => handleTheme(2)}
                    className="bg-white hover:bg-[#cacaca] px-[35px] py-[7px] text-gray-500 cursor-pointer"
                  >
                    <h6>Theme 2</h6>
                  </div>
                  <div
                    onClick={() => handleTheme(3)}
                    className="bg-white hover:bg-[#cacaca] px-[35px] py-[7px] text-gray-500 cursor-pointer"
                  >
                    <h6>Theme 3</h6>
                  </div>
                  <div
                    onClick={() => handleTheme(4)}
                    className="bg-white hover:bg-[#cacaca] px-[35px] py-[7px] text-gray-500 cursor-pointer"
                  >
                    <h6>Theme 4</h6>
                  </div>
                </div>
              )}
            </div>
          </div>

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
            {(
              activeTheme === 1
                ? group1
                : activeTheme === 2
                ? group2
                : activeTheme === 3
                ? group3
                : activeTheme === 4
                ? group4
                : group1
            ).map((src, idx) => (
              <SwiperSlide key={idx} className="relative w-full flex justify-center">
                <Image
                  src={src}
                  alt={`Poster ${idx}`}
                  width={900}
                  height={0}           // placeholder, won't be used
                  style={{ height: 'auto' }}
                  className="object-contain"
                  loading="lazy"
                  onClick={() => handleFullscreenImage(src)}
                />
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
              className="hidden absolute top-2 -right-12 w-10 h-10 sm:flex items-center justify-center bg-white/20 hover:bg-white/40 text-white rounded-full cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
