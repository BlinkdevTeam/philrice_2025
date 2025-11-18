// Posters page
"use client";

import { useEffect } from "react";
import PosterSection2 from "../components/PosterSection2";

export default function Posters() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <PosterSection2 />
      </div>
    </>
  );
}
