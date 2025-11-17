"use client";

import React, { useState } from "react";
import { questions } from "../data/questions"; // Adjust the path if needed

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.href;
    window.open(href, "_blank"); // Opens the link in a new tab
  };

  return (
    <section
      id="faqs"
      className="w-full flex flex-col items-center bg-white pb-16 pt-8 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-[1920px] w-full px-6 md:px-32 lg:px-40 mb-10">
        <h2 className="text-3xl md:text-[55px] text-[#006872] leading-tight md:leading-[60px] text-left">
          Frequently <span className="text-[#F58A1F]">asked questions</span>
        </h2>
        <div className="w-[200px] md:w-[373px] h-[3px] bg-[#FFC200] mt-4 md:mt-[26px]" />
      </div>

      {/* Accordion */}
      <div className="w-full max-w-[1258px]">
        {questions.map((item, index) => (
          <div
            key={index}
            className="mb-3 shadow-md rounded-lg overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleAccordion(index)}
              className={`w-full flex justify-between items-center px-4 py-5 text-left text-lg md:text-xl lg:text-2xl font-bold rounded-t-lg transition-colors duration-300 cursor-pointer ${
                openIndex === index
                  ? "bg-[#006872] text-white"
                  : "bg-[#EDEDED] text-[#0E9046] hover:bg-[#E6F5EA]"
              }`}
            >
              <span>{item.question}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <div className="bg-[##EDEDED] text-black px-4 py-5 text-sm md:text-base lg:text-lg">
                {item.answer}
                {item.link && (
                  <a
                    href={item.link}
                    onClick={handleLinkClick}
                    className="ml-2 text-[#F3B71C] underline"
                  >
                    Link
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
