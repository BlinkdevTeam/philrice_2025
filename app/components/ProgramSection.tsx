"use client";

import React, { useState } from "react";
import { programData } from "../data/programData";

export default function ProgramSection() {
  const [activeDay, setActiveDay] = useState(0);

  const activeProgram = programData[activeDay];
  if (!activeProgram) return null;

  //   // Helper: pick background/text color based on title keywords
  //   const getColorScheme = (title: string) => {
  //     if (
  //       title.toLowerCase().includes("break") ||
  //       title.toLowerCase().includes("lunch") ||
  //       title.toLowerCase().includes("coffee") ||
  //       title.toLowerCase().includes("dinner")
  //     ) {
  //       return { bg: "bg-[#FFC200]", text: "text-black" }; // yellow
  //     } else if (
  //       title.toLowerCase().includes("plenary") ||
  //       title.toLowerCase().includes("panel") ||
  //       title.toLowerCase().includes("forum") ||
  //       title.toLowerCase().includes("closing")
  //     ) {
  //       return { bg: "bg-[#00585C]", text: "text-white" }; // dark green
  //     } else {
  //       return { bg: "bg-white", text: "text-[#006A71]" }; // default
  //     }
  //   };

  return (
    <section
      id="program"
      className="bg-[#006A71] text-white h-screen w-full flex flex-col items-center py-10 px-4"
    >
      <div className="w-full max-w-[1153px] flex flex-col flex-1 overflow-hidden mt-8">
        {/* Header + Tabs */}
        <div className="w-full flex flex-col md:flex-row justify-between shrink-0">
          <div>
            <h2 className="text-[55px] leading-[60px] font-bold">
              Conference
              <br />
              <span className="text-[#FFC200]">Program</span>
            </h2>
            <div className="w-[373px] h-[3px] bg-[#FFC200] my-6" />
          </div>

          {/* Date Tabs */}
          <div className="flex gap-4 overflow-x-auto pb-2">
            {programData.map((day, index) => (
              <button
                key={day.date}
                onClick={() => setActiveDay(index)}
                className={`w-[230px] h-[142px] grid grid-rows-3 rounded-[26px] overflow-hidden transition-all flex-shrink-0 ${
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
                  <p className="uppercase font-bold">Day 0{index + 1}</p>
                </div>
                <div
                  className={`flex justify-center items-center gap-4 row-span-2 ${
                    activeDay === index
                      ? "bg-[#FFC200] text-[#007831]"
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
        <div className="flex-1 overflow-y-auto mt-6 pr-2 custom-scrollbar">
          <div className="flex flex-col gap-5 w-full">
            {activeProgram.programs.map((item) => {
              //   const color = getColorScheme(item.title);
              return (
                <div
                  key={`${item.time}-${item.title}`}
                  className={`flex flex-col md:flex-row items-stretch rounded-xl overflow-hidden bg-white hover:bg-[#FFC200]`}
                >
                  {/* Time Column */}
                  <div className="font-bold text-center px-4 py-3 md:w-40 text-[#1F773A]">
                    {item.time}
                  </div>

                  {/* Details Column */}
                  <div className="px-4 py-3 flex-1">
                    <h4 className="font-bold text-lg text-[#1F773A] mb-1">
                      {item.title}
                    </h4>

                    {item.details && (
                      <ul className="text-sm text-[#000000] list-disc ml-6 space-y-1">
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    )}

                    {item.chair && (
                      <p className="text-sm mt-1 text-[#000000]">
                        Chair:{" "}
                        <span className="italic font-semibold">
                          {item.chair}
                        </span>
                      </p>
                    )}

                    {item.speaker && (
                      <p className="text-sm mt-1 text-[#000000]">
                        <span className="font-semibold">{item.speaker}</span>
                        <br />
                        {item.position}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
