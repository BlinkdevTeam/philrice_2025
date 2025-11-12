"use client";

import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQs";
import HeroSection from "./components/HeroSection";
import LocationSection from "./components/Location";
import PosterSection from "./components/PosterSection";
import ProgramSection from "./components/ProgramSection";
import SpeakerSection from "./components/Speakers";
// import SpeakersSlider from "./components/SpeakersSlider";
import Timer from "./components/Timer";

export default function Home() {
  return (
    <>
      {/* Remove the max-width wrapper */}
      <div className="max-w-screen w-full bg-white flex flex-col justify-center items-center">
        <HeroSection />
        <Timer />
        <AboutSection />
        <SpeakerSection />
        {/* <SpeakersSlider /> */}
        <ProgramSection />
        <LocationSection />
        <PosterSection />
        <FAQSection />
      </div>
    </>
  );
}
