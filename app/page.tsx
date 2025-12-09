"use client";

// import { useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
import AboutSection from "./components/AboutSection";
import FAQSection from "./components/FAQs";
import HeroSection from "./components/HeroSection";
import LocationSection from "./components/Location";
// import PosterSection from "./components/PosterSection";
import ProgramSection from "./components/ProgramSection";
import SpeakerSection from "./components/Speakers";
import Timer from "./components/Timer";

export default function Home() {
  //   const router = useRouter();
  //   const timerRef = useRef<NodeJS.Timeout | null>(null);

  //   useEffect(() => {
  //   // Detect if screen is likely a flatscreen TV
  //   const isTV =
  //     window.screen.width >= 1920 || window.screen.height >= 1080;

  //   if (!isTV) return; // ❌ Do not start timer if NOT a TV

  //   const goToPosters = () => {
  //     router.push("/Posters");
  //   };

  //   const resetTimer = () => {
  //     if (timerRef.current) clearTimeout(timerRef.current);
  //     timerRef.current = setTimeout(goToPosters, 30000);
  //   };

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
      {/* <PosterSection /> */}
      <FAQSection />
    </div>
  );
}
