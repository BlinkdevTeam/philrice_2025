"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <nav
          id="main-navbar"
          className={`fixed top-0 w-full h-[88px] z-50 transition-all duration-500 transform ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          } ${
            isScrolled
              ? "bg-[#006872] shadow-md py-4 px-32"
              : "bg-transparent py-4 px-32"
          }`}
        >
          <div
            id="navbar-container"
            className={`max-w-[1920px] mx-auto flex items-center justify-between transition-all duration-300`}
          >
            <div
              id="navbar-logo"
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              <img
                src="/assets/Asset 2@4x-8 1.png"
                alt="Event Logo"
                className={`h-12 sm:h-14 transition-all duration-300 ${
                  isScrolled ? "scale-90" : ""
                }`}
              />
            </div>

            <div
              id="navbar-links"
              className={`flex gap-8 items-center transition-all duration-300 ${
                isScrolled ? "mt-1" : "mt-1.5"
              }`}
            >
              <ul className="flex items-center gap-6">
                {sections.map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      id={`nav-${section}`}
                      className={`uppercase font-bold transition cursor-pointer ${
                        isScrolled ? "text-[#FFFFFF]" : "text-[#006872]"
                      } hover:text-[#F58A1F]`}
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>

              <a
                id="register-button"
                href="https://ugnaypalay.philrice.gov.ph:441/csd/37th/registration-form/ABCDefgHI"
                target="_blank"
                rel="noopener noreferrer"
                className={`uppercase font-bold border border-solid rounded-full 
              px-7 py-3 flex items-center justify-center transition
              ${
                isScrolled
                  ? "bg-[#FFB703] text-white border-[#FFB703]"
                  : "text-[#006872] border-[#006872] hover:bg-[#FFB703] hover:text-white hover:border-[#FFB703]"
              }`}
              >
                Register Now
              </a>
            </div>
          </div>

          <style jsx>{`
            @media (min-width: 1930px) {
              nav {
                background-color: #ffffff;
                max-width: 1920px;
                border-bottom-left-radius: ${isScrolled ? "20px" : "0"};
                border-bottom-right-radius: ${isScrolled ? "20px" : "0"};
              }

              #navbar-container {
                margin: 0 auto;
              }

              #register-button:hover {
                transform: scale(1.05);
              }

              #navbar-links button {
                color: #006872 !important;
              }

              #navbar-links button:hover {
                color: #f58a1f !important;
              }
            }
          `}</style>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
