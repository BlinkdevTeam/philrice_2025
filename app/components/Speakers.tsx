"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";
import {
  keynoteSpeakers,
  plenarySpeakers,
  panelSpeakers,
  concurrentSpeakers,
  guestOfHonorSpeakers,
  Speaker,
} from "../data/speakers";
import { X, ChevronDown } from "lucide-react";

type FilterValue =
  | "guestOfHonor"
  | "keynote"
  | "panel1"
  | "panel2"
  | "panel3"
  | "concurrent1a"
  | "concurrent1b"
  | "concurrent2a"
  | "concurrent2b"
  | "plenary1"
  | "plenary2";

export default function SpeakerSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("guestOfHonor");
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  // Dropdown states
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isPlenaryOpen, setIsPlenaryOpen] = useState(false);
  const [isConcurrent1Open, setIsConcurrent1Open] = useState(false);
  const [isConcurrent2Open, setIsConcurrent2Open] = useState(false);

  // Refs for outside click
  const panelRef = useRef<HTMLDivElement>(null);
  const plenaryRef = useRef<HTMLDivElement>(null);
  const concurrent1Ref = useRef<HTMLDivElement>(null);
  const concurrent2Ref = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(target))
        setIsPanelOpen(false);
      if (plenaryRef.current && !plenaryRef.current.contains(target))
        setIsPlenaryOpen(false);
      if (concurrent1Ref.current && !concurrent1Ref.current.contains(target))
        setIsConcurrent1Open(false);
      if (concurrent2Ref.current && !concurrent2Ref.current.contains(target))
        setIsConcurrent2Open(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayedSpeakers = (() => {
    switch (activeFilter) {
      case "guestOfHonor":
        return guestOfHonorSpeakers;
      case "keynote":
        return keynoteSpeakers;
      case "panel1":
      case "panel2":
      case "panel3":
        return panelSpeakers.filter((s) => s.panel === activeFilter);
      case "plenary1":
      case "plenary2":
        return plenarySpeakers.filter((s) => s.session === activeFilter);
      case "concurrent1a":
      case "concurrent1b":
        return concurrentSpeakers.filter((s) => s.session === activeFilter);
      case "concurrent2a":
      case "concurrent2b":
        return concurrentSpeakers.filter((s) => s.session === activeFilter);
      default:
        return [];
    }
  })();

  const handleFilterChange = (filter: FilterValue) => {
    setActiveFilter(filter);
    setIsPanelOpen(false);
    setIsPlenaryOpen(false);
    setIsConcurrent1Open(false);
    setIsConcurrent2Open(false);
  };

  return (
    <section
      id="speaker"
      className="w-full flex justify-center items-center bg-white py-16"
    >
      <div className="max-w-[1920px] w-full px-4">
        {/* Header */}
        <div className="w-full flex flex-col items-center lg:items-start mb-10 px-0 sm:px-6 md:px-32 lg:px-40">
          <h2 className="text-[46px] sm:text-[55px] text-[#006872] text-center lg:text-start leading-tight md:leading-[60px]">
            Our Event{" "}
            <span className="text-[#F58A1F]">Speakers and Panelists</span>
          </h2>
          <div className="max-w-[373px] w-full h-[3px] bg-[#F58A1F] mt-[26px]"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-8 px-0 sm:px-6 md:px-32 lg:px-40">
          {/* Guest of Honor */}
          <button
            type="button"
            className={`px-5 py-2 rounded-full text-[10px] sm:text-sm font-semibold uppercase cursor-pointer ${
              activeFilter === "guestOfHonor"
                ? "bg-[#005C46] text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => handleFilterChange("guestOfHonor")}
          >
            Guest of Honor
          </button>

          {/* Keynote */}
          <button
            type="button"
            className={`px-5 py-2 rounded-full text-[10px] sm:text-sm font-semibold uppercase cursor-pointer ${
              activeFilter === "keynote"
                ? "bg-[#005C46] text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => handleFilterChange("keynote")}
          >
            Keynote Speakers
          </button>

          {/* Panel Discussions Dropdown */}
          <div className="relative" ref={panelRef}>
            <button
              type="button"
              onClick={() => setIsPanelOpen((prev) => !prev)}
              className={`px-5 py-2 rounded-full text-[10px] sm:text-sm font-semibold flex items-center gap-2 uppercase cursor-pointer ${
                activeFilter.startsWith("panel")
                  ? "bg-[#005C46] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {activeFilter.startsWith("panel")
                ? `Panel Discussions ${activeFilter.slice(-1)}`
                : "Panel Discussions"}
              <ChevronDown size={16} />
            </button>
            {isPanelOpen && (
              <div className="absolute mt-2 w-48 bg-white border shadow-md rounded-xl z-50">
                {["panel1", "panel2", "panel3"].map((panel) => (
                  <div
                    key={panel}
                    className="px-4 py-2 hover:bg-gray-100 text-gray-500 cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onClick={() => handleFilterChange(panel as FilterValue)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter")
                        handleFilterChange(panel as FilterValue);
                    }}
                  >
                    Panel Discussion {panel.slice(-1)}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Plenary Dropdown */}
          <div className="relative" ref={plenaryRef}>
            <button
              type="button"
              onClick={() => setIsPlenaryOpen((prev) => !prev)}
              className={`px-5 py-2 rounded-full text-[10px] sm:text-sm font-semibold flex items-center gap-2 uppercase cursor-pointer ${
                activeFilter.startsWith("plenary")
                  ? "bg-[#005C46] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {activeFilter.startsWith("plenary")
                ? `Plenary Sessions ${activeFilter.slice(-1)}`
                : "Plenary Sessions"}
              <ChevronDown size={16} />
            </button>
            {isPlenaryOpen && (
              <div className="absolute mt-2 w-48 bg-white border shadow-md rounded-xl z-50">
                {["plenary1", "plenary2"].map((plenary) => (
                  <div
                    key={plenary}
                    className="px-4 py-2 hover:bg-gray-100 text-gray-500 cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onClick={() => handleFilterChange(plenary as FilterValue)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter")
                        handleFilterChange(plenary as FilterValue);
                    }}
                  >
                    Plenary Session {plenary.slice(-1)}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Concurrent Session 1 Dropdown */}
          <div className="relative" ref={concurrent1Ref}>
            <button
              type="button"
              onClick={() => setIsConcurrent1Open((prev) => !prev)}
              className={`px-5 py-2 rounded-full text-[10px] sm:text-sm font-semibold flex items-center gap-2 uppercase cursor-pointer ${
                ["concurrent1a", "concurrent1b"].includes(activeFilter)
                  ? "bg-[#005C46] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {["concurrent1a", "concurrent1b"].includes(activeFilter)
                ? `Concurrent Session 1 ${activeFilter.slice(-1).toUpperCase()}`
                : "Concurrent Session 1"}

              <ChevronDown size={16} />
            </button>
            {isConcurrent1Open && (
              <div className="absolute mt-2 w-48 bg-white border shadow-md rounded-xl z-50">
                {["concurrent1a", "concurrent1b"].map((s) => (
                  <div
                    key={s}
                    className="px-4 py-2 hover:bg-gray-100 text-gray-500 cursor-pointer capitalize"
                    role="button"
                    tabIndex={0}
                    onClick={() => handleFilterChange(s as FilterValue)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter")
                        handleFilterChange(s as FilterValue);
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Concurrent Session 2 Dropdown */}
          <div className="relative" ref={concurrent2Ref}>
            <button
              type="button"
              onClick={() => setIsConcurrent2Open((prev) => !prev)}
              className={`px-5 py-2 rounded-full text-[10px] sm:text-sm font-semibold flex items-center gap-2 uppercase cursor-pointer ${
                ["concurrent2a", "concurrent2b"].includes(activeFilter)
                  ? "bg-[#005C46] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {["concurrent2a", "concurrent2b"].includes(activeFilter)
                ? `Concurrent Session 2 ${activeFilter.slice(-1).toUpperCase()}`
                : "Concurrent Session 2"}

              <ChevronDown size={16} />
            </button>
            {isConcurrent2Open && (
              <div className="absolute mt-2 w-48 bg-white border shadow-md rounded-xl z-50">
                {["concurrent2a", "concurrent2b"].map((s) => (
                  <div
                    key={s}
                    className="px-4 py-2 hover:bg-gray-100 text-gray-500 cursor-pointer capitalize"
                    role="button"
                    tabIndex={0}
                    onClick={() => handleFilterChange(s as FilterValue)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter")
                        handleFilterChange(s as FilterValue);
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Swiper */}
        <div className="relative px-6 lg:pl-32">
          <Swiper
            loop
            slidesPerView={5}
            spaceBetween={20}
            pagination={{
              clickable: true,
              verticalClass: "swiper-pagination",
            }}
            modules={[Pagination]}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1080: { slidesPerView: 3 },
              1560: { slidesPerView: 5 },
            }}
          >
            {displayedSpeakers.map((speaker) => (
              <SwiperSlide key={speaker.id}>
                <div
                  onClick={() => setSelectedSpeaker(speaker)}
                  className="cursor-pointer w-[272px] h-[437px] pt-6 rounded-2xl shadow-lg transition-all duration-300 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 bg-white hover:bg-[#006872] flex flex-col justify-end relative overflow-hidden"
                >
                  <div className="absolute bottom-0 w-full h-[60%] bg-linear-to-t from-[#007831]/80 via-[#007831]/40 to-transparent flex flex-col justify-end p-5 z-50">
                    <h3 className="text-white font-semibold text-lg leading-tight mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-gray-200 text-sm italic line-clamp-2">
                      {speaker.title}
                    </p>
                  </div>
                  <div className="w-full h-[95%] mt-auto flex items-end justify-center overflow-visible">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                      style={{
                        transform: `scale(${
                          speaker.imageScale || 1
                        }) translateX(${speaker.imageXOffset || 0}px)`,
                      }}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Modal */}
        {selectedSpeaker && (
          <div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
            onClick={() => setSelectedSpeaker(null)}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-[320px] sm:max-w-[1227px] w-full relative max-h-screen sm:max-h-[90vh] h-full sm:h-auto flex flex-col sm:flex-row overflow-hidden">
              {/* Speaker Image */}
              <div className="sm:w-[272px] h-[437px] rounded-2xl shadow-lg bg-[#006872] flex flex-col justify-end relative overflow-hidden shrink-0">
                <div className="absolute bottom-0 w-full h-[60%] bg-linear-to-t from-[#007831]/80 via-[#007831]/40 to-transparent flex flex-col justify-end p-5 z-50">
                  <h3 className="text-white font-semibold text-lg leading-tight mb-1">
                    {selectedSpeaker.name}
                  </h3>
                  <p className="text-gray-200 text-sm italic line-clamp-2">
                    {selectedSpeaker.title}
                  </p>
                </div>
                <div className="w-full h-[94%] mt-auto flex items-end justify-center">
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="w-full h-full object-cover"
                    style={{
                      transform: `scale(${
                        selectedSpeaker.imageScale || 1
                      }) translateX(${selectedSpeaker.imageXOffset || 0}px)`,
                    }}
                  />
                </div>
              </div>

              {/* Scrollable Description */}
              <div
                className="relative flex-1 p-4 sm:p-8 overflow-y-auto max-h-[437px] 
                      scrollbar-thin scrollbar-thumb-[#005C46]/50 scrollbar-track-transparent 
                      hover:scrollbar-thumb-[#005C46]/80"
              >
                {/* Fixed Exit Button */}
                <button
                  type="button"
                  onClick={() => setSelectedSpeaker(null)}
                  className="hidden sm:block absolute top-3 right-3 text-gray-600 hover:text-black cursor-pointer z-10"
                >
                  <X size={24} />
                </button>

                <h1 className="leading-relaxed text-[#1F773A] text-[22px] sm:text-[30px] mb-4">
                  {selectedSpeaker.presentationTitle ||
                    "PhilRice@40: Milestones, Insights, and Future Commitments."}
                </h1>
                <p className="text-black leading-relaxed whitespace-pre-line">
                  {selectedSpeaker.description ||
                    "PhilRice@40: Milestones, Insights, and Future Commitments."}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
