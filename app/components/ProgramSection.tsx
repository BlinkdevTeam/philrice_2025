"use client";

import React, { useState, useRef, useEffect } from "react";
import { programData } from "../data/programData";

export default function ProgramSection() {
  const [activeDay, setActiveDay] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setIsScrolled(scrollRef.current.scrollTop > 10);
      }
    };

    const el = scrollRef.current;
    el?.addEventListener("scroll", handleScroll);

    return () => {
      el?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeProgram = programData[activeDay];
  if (!activeProgram) return null;

  return (
    <div className="w-full bg-white flex flex-col items-center justify-start">
      <section
        id="program"
        className="bg-[#006A71] text-white w-full h-[1194px] flex flex-col items-center py-10 px-4 relative overflow-hidden"
      >
        <div className="w-full max-w-[1153px] flex flex-col flex-1 overflow-hidden mt-8 z-10">
          {/* Header + Tabs */}
          <div className="w-full flex flex-col md:flex-row justify-between shrink-0">
            <div>
              <h2 className="text-[55px] leading-[60px] font-bold">
                Conference
                <br />
                <span className="text-[#F58A1F]">Program</span>
              </h2>
              <div className="w-[373px] h-[3px] bg-[#F58A1F] my-6" />
            </div>

            {/* Date Tabs */}
            <div className="flex gap-4 overflow-x-auto pb-2">
              {programData.map((day, index) => (
                <button
                  key={day.date}
                  onClick={() => setActiveDay(index)}
                  className={`w-[230px] h-[142px] grid grid-rows-3 rounded-[26px] overflow-hidden transition-all shrink-0 cursor-pointer ${
                    activeDay === index
                      ? "text-white"
                      : "opacity-40 hover:opacity-70"
                  }`}
                  type="button"
                >
                  <div
                    className={`text-[20px] flex justify-center items-center ${
                      activeDay === index
                        ? "bg-[#007831] text-[#FFB703]"
                        : "bg-[#004049] text-[#006872]"
                    }`}
                  >
                    <p className="uppercase font-bold text-white">
                      Day 0{index + 1}
                    </p>
                  </div>
                  <div
                    className={`flex justify-center items-center gap-4 row-span-2 ${
                      activeDay === index
                        ? "bg-[#F58A1F] text-[#FFFFFF]"
                        : "bg-[#004F5A] text-[#006872]"
                    }`}
                  >
                    <h1 className="text-[80px] -mt-5">{day.date}</h1>
                    <p className="text-[23.5px] font-bold">
                      {day.label.split(" ")[0]} <br />
                      {day.label.split(" ")[1]}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable Program Schedule */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto mt-6 pr-2 custom-scrollbar relative z-0"
          >
            <div className="flex flex-col gap-3 w-full">
              {activeProgram.programs.map((item) => (
                <div
                  key={`${item.time}-${item.title}`}
                  className="flex flex-col md:flex-row items-stretch overflow-hidden bg-transparent gap-6 group"
                >
                  {/* Time Column */}
                  <div className="flex justify-center items-center font-bold px-12 py-3 rounded-xl h-[91px] bg-white group-hover:bg-[#F58A1F] transition-colors duration-300">
                    <p className="text-[30px] text-center text-[#1F773A] group-hover:text-white transition-colors duration-300">
                      {item.time}
                    </p>
                  </div>

                  {/* Details Column */}
                  <div className="flex flex-col justify-center items-start px-4 py-4 flex-1 rounded-xl h-auto bg-white group-hover:bg-[#F58A1F] transition-colors duration-300">
                    <h4 className="font-bold text-lg text-[#1F773A] text-[30px] group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h4>

                    {item.details && (
                      <ul className="text-sm text-[#000000] group-hover:text-white transition-colors duration-300 list-disc ml-6 space-y-1">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    )}

                    {item.chair && (
                      <p className="text-sm mt-1 text-[#000000] group-hover:text-white transition-colors duration-300">
                        Chair:{" "}
                        <span className="italic font-semibold">
                          {item.chair}
                        </span>
                      </p>
                    )}

                    {item.speaker && (
                      <p className="text-sm mt-1 text-[#000000] group-hover:text-white transition-colors duration-300">
                        <span className="font-semibold">{item.speaker}</span>
                        <br />
                        {item.position}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (min-width: 1930px) {
            #program {
              max-width: 1920px;
              border-radius: 20px;
            }
          }
        `}</style>

        {/* Gradient Overlay in front of all content */}
        <div
          className={`absolute bottom-0 left-0 w-full h-[25%] bg-linear-to-t from-[#006872]/80 via-[#006872]/40 to-transparent z-20 pointer-events-none transition-opacity duration-300 ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
        />
      </section>
    </div>
  );
}
