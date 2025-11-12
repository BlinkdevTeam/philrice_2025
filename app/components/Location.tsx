"use client";
import Image from "next/image";
import { Maximize2, Download } from "lucide-react";

export default function LocationSection() {
  const imageUrl =
    "https://shvutlcgljqiidqxqrru.supabase.co/storage/v1/object/public/philrice/map1.png";

  // Handle fullscreen open
  const handleFullscreen = () => {
    const newWindow = window.open(imageUrl, "_blank");
    if (newWindow) newWindow.focus();
  };

  // ✅ Handle proper image download (fetch → blob)
  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl, { mode: "cors" });
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "DA-PhilRice-Map.png";
      document.body.appendChild(link);
      link.click();
      link.remove();

      // Clean up blob after download
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("❌ Download failed:", error);
      alert("Failed to download image. Please try again.");
    }
  };

  return (
    <section
      id="venue"
      className="w-full bg-white flex flex-col items-center justify-start py-[84px]"
    >
      {/* ---------- Section: DA-PhilRice (Layered Full Image Responsive) ---------- */}
      <div
        id="da-philrice-bg"
        className="relative w-full max-w-[1185px] h-[488px] flex flex-col items-center justify-start overflow-hidden bg-[#134333] sm:max-w-[1600px] sm:h-[650px] xl:max-w-[1920px] xl:h-[791px] rounded-2xl"
      >
        {/* Map Image Layer */}
        <Image
          src="/assets/map1.png"
          alt="DA-PhilRice Map"
          fill
          className="object-fill object-center"
          priority
        />

        {/* ✅ Top-right buttons */}
        <div className="absolute top-6 right-6 flex flex-col gap-3 z-20">
          {/* Fullscreen Button */}
          <button
            onClick={handleFullscreen}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#007831]/80 hover:bg-[#006872] text-white rounded-full shadow-md transition cursor-pointer"
            title="View Fullscreen"
          >
            <Maximize2 size={20} />
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#007831]/80 hover:bg-[#F58A1F] text-white rounded-full shadow-md transition cursor-pointer"
            title="Download Image"
          >
            <Download size={20} />
          </button>
        </div>

        {/* Content Layer (Bottom Left Corner, Responsive) */}
        <div className="absolute bottom-16 left-32 z-10 flex flex-col items-start justify-end">
          <div className="bg-[#006872]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-10 max-w-[90%] sm:max-w-[600px]">
            <h2 className="text-[40px] sm:text-[55px] text-white leading-tight sm:leading-[60px]">
              Conference
              <br />
              <span className="text-[#F58A1F]">Program</span>
            </h2>
            <div className="w-[200px] sm:w-[373px] h-[3px] bg-[#F58A1F] mt-4 sm:mt-[26px] mb-6 sm:mb-8"></div>

            <p className="text-white text-base sm:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Nec adipiscing aliquet
              integer adipiscing pulvinar.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1930px) {
          #da-philrice-bg {
            max-width: 1920px;
            height: 791px;
          }
        }
      `}</style>
    </section>
  );
}
