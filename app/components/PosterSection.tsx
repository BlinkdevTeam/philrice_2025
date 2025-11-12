"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function TripleSlider() {
  const posters = [
    "/assets/posters/sample_1.jpg",
    "/assets/posters/sample_2.jpg",
    "/assets/posters/sample_3.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const total = posters.length;

  const sliderRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const diff = e.clientX - startX.current;
    if (diff > 50) prevSlide();
    if (diff < -50) nextSlide();
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff > 50) prevSlide();
    if (diff < -50) nextSlide();
  };

  const getTransform = (index: number) => {
    const distance = (index - current + total) % total;
    if (distance === 0)
      return { translateX: 0, scale: 1, opacity: 1, zIndex: 20, blur: 0 };
    if (distance === 1 || distance === -(total - 1))
      return { translateX: 300, scale: 0.9, opacity: 0.6, zIndex: 10, blur: 2 };
    if (distance === total - 1 || distance === -1)
      return {
        translateX: -300,
        scale: 0.9,
        opacity: 0.6,
        zIndex: 10,
        blur: 2,
      };
    return { translateX: 0, scale: 0, opacity: 0, zIndex: 0, blur: 0 };
  };

  return (
    <section
      id="posters"
      className="w-full flex flex-col items-center bg-white py-16 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-[1920px] w-full px-6 md:px-32 lg:px-40 mb-10">
        <h2 className="text-3xl md:text-[55px] text-[#006872] leading-tight md:leading-[60px] text-left">
          List of <span className="text-[#F58A1F]">Posters</span>
        </h2>
        <div className="w-[200px] md:w-[373px] h-[3px] bg-[#FFC200] mt-4 md:mt-[26px]" />
      </div>

      {/* Slider: centered */}
      <div className="w-full flex justify-center">
        <div
          ref={sliderRef}
          className="relative w-full max-w-[1120px] h-[800px] flex items-center justify-center cursor-grab select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => (isDragging.current = false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {posters.map((src, index) => {
            const { translateX, scale, opacity, zIndex, blur } =
              getTransform(index);
            return (
              <div
                key={index}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  filter: `blur(${blur}px)`,
                  transition: "all 0.7s ease-in-out",
                  position: "absolute",
                }}
                className="rounded-2xl overflow-hidden shadow-xl w-[912px] h-[502px]"
              >
                <Image
                  src={src}
                  alt={`Poster ${index + 1}`}
                  fill
                  className="rounded-2xl object-cover w-full h-full"
                />
              </div>
            );
          })}

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl bg-[#00000060] hover:bg-[#00000080] rounded-full p-2 transition z-30"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl bg-[#00000060] hover:bg-[#00000080] rounded-full p-2 transition z-30"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
