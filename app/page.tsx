"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQs";
import HeroSection from "./components/HeroSection";
import LocationSection from "./components/Location";
import PosterSection from "./components/PosterSection";
import ProgramSection from "./components/ProgramSection";
import SpeakerSection from "./components/Speakers";
import Timer from "./components/Timer";

export default function Home() {
  // const router = useRouter();
  // const timerRef = useRef<NodeJS.Timeout | null>(null);

  // const goToPosters = () => {
  //   router.push("/Posters"); // navigate with hash
  // };

  // const resetTimer = () => {
  //   if (timerRef.current) clearTimeout(timerRef.current);
  //   timerRef.current = setTimeout(goToPosters, 30000); // 20 sec
  // };

  // useEffect(() => {
  //   resetTimer();
  //   const events = ["mousemove", "keydown", "scroll", "touchstart"];
  //   events.forEach((event) => window.addEventListener(event, resetTimer));

  //   return () => {
  //     if (timerRef.current) clearTimeout(timerRef.current);
  //     events.forEach((event) => window.removeEventListener(event, resetTimer));
  //   };
  // }, []);

  return (
    <div className="max-w-screen w-full bg-white flex flex-col justify-center items-center">
      <HeroSection />
      <Timer />
      <AboutSection />
      <SpeakerSection />
      <ProgramSection />
      <LocationSection />
      <PosterSection />
      <FAQSection />
    </div>
  );
}
