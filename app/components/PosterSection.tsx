"use client";

import React, {useEffect, useState, useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "../globals.css";
import { Maximize2 } from "lucide-react";
import { useRouter } from "next/navigation"; // <-- import useRouter
import Image from "next/image";

import { X, ChevronDown } from "lucide-react";

import { group1, group2, group3, group4 } from "../data/posters";

export default function PosterSection() {
  const [activeTheme, setActivetheme] = useState(1)
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const router = useRouter(); // <-- initialize router



  // Navigate to Posters page
  const handleFullscreen = () => {
    router.push("/Posters");
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
          
          <div className="flex gap-[20px]" ref={dropdownRef}>
            <div>
              <h2 className="text-[46px] sm:text-[55px] text-[#006872] leading-tight md:leading-[60px] text-left">
                List of <span className="text-[#F58A1F]">Posters</span>
              </h2>
              <div className="w-full md:w-[373px] h-[3px] bg-[#F58A1F] mt-4 md:mt-[26px] mb-10" />
            </div>

            <div className="relative pt-[20px] hidden md:block">
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
          <div className="block md:hidden">
            <div>
              <p className="text-[#666666] text-center w-[80%] mx-auto">Poster viewing is unavailable on mobile devices. Kindly use a desktop or tablet.</p>
            </div>
          </div>
          <div className="hidden md:block">
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
                <SwiperSlide key={idx} className="flex justify-center">
                  <Image 
                    src={src} className="poster-img" 
                    alt={`Poster ${idx}`} 
                    width={700}
                    height={0}           // placeholder, won't be used
                    style={{ height: idx === 34 ? '500px' : 'auto' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>
    </div>
  );
}
