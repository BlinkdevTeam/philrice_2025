"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const sections = [
    "home",
    "about",
    "speaker",
    "program",
    "venue",
    "posters",
    "faqs",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-[#006872] shadow" : "py-0 bg-transparent"
      }`}
    >
      <div
        className={`w-full flex items-start justify-between pl-32 pr-40 transition-all duration-300 ${
          isScrolled ? "mt-0" : "mt-8"
        }`}
      >
        {/* 🔰 Logo Section */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img
            src="/assets/logos/6533772d20b398bc3050934c63409508e31649c2.png"
            alt="Event Logo"
            className={`transition-all duration-300 ${
              isScrolled
                ? "w-[60px] h-[60px] transition-all ease-in rotate-360 duration-300"
                : "w-[156px] h-[156px]"
            }`}
          />
        </div>

        {/* 🌐 Navigation Links */}
        <div
          className={`flex gap-8 items-center transition-all duration-300 ${
            isScrolled ? "mt-2" : "mt-[7px]"
          }`}
        >
          <ul className="flex items-center gap-8">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="capitalize text-white font-bold hover:text-green-600 transition"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="https://ugnaypalay.philrice.gov.ph:441/csd/37th/registration-form/ABCDefgHI"
            target="_blank"
            rel="noopener noreferrer"
            className="capitalize text-[#FFB703] font-bold hover:text-white transition 
             border border-solid border-[#FFB703] rounded-full 
             px-7 py-3 flex items-center justify-center 
             hover:bg-[#FFB703]"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
