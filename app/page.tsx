"use client";

import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ProgramSection from "./components/ProgramSection";
import SpeakerSection from "./components/Speakers";
import SpeakersSlider from "./components/SpeakersSlider";
import Timer from "./components/Timer";

export default function Home() {
  return (
    <>
      {/* Remove the max-width wrapper */}
      <div className="w-full flex flex-col justify-center items-center">
        <HeroSection />
        <Timer />
        <AboutSection />
        <SpeakerSection />
        {/* <SpeakersSlider /> */}
        <ProgramSection />
      </div>
    </>
  );
}
