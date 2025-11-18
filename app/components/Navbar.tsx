"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
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
          className={`fixed top-0 w-full h-auto sm:h-[80px] md:h-[88px] z-50 transition-all duration-500 transform py-2 lg:py-0
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolled ? "bg-[#006872] shadow-md" : "bg-transparent"}
      `}
        >
          <div
            id="navbar-container"
            className={`
          max-w-[1920px] mx-auto flex items-center justify-between
          px-4 sm:px-6 md:px-10 lg:px-32 xl:px-40
          transition-all duration-300
        `}
          >
            {/* LOGO */}
            <div
              id="navbar-logo"
              className="cursor-pointer flex items-center"
              onClick={() => scrollToSection("home")}
            >
              <img
                src="/assets/Asset 2@4x-8 1.png"
                alt="Event Logo"
                className={`
                h-10 sm:h-12 md:h-14 xl:h-16
                transition-all duration-300 
                ${isScrolled ? "scale-90" : ""}
              `}
              />
            </div>

            {/* DESKTOP MENU */}
            <div
              id="navbar-links"
              className={`hidden lg:flex gap-6 xl:gap-10 items-center transition-all duration-300 ${
                isScrolled ? "mt-4.5" : "mt-5"
              }`}
            >
              <ul className="flex items-center gap-4 xl:gap-8">
                {sections.map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`
                      uppercase font-bold cursor-pointer transition text-sm md:text-base xl:text-lg
                      ${isScrolled ? "text-white" : "text-[#006872]"}
                      hover:text-[#F58A1F]
                    `}
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
                className={`
                uppercase font-bold border rounded-full px-6 py-2 xl:px-8 xl:py-3 text-sm xl:text-lg transition
                ${
                  isScrolled
                    ? "bg-[#F58A1F] text-white border-[#F58A1F]"
                    : "text-[#006872] border-[#006872] hover:bg-[#F58A1F] hover:text-white hover:border-[#F58A1F]"
                }
              `}
              >
                Register Now
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-8 h-8 gap-1"
            >
              <span
                className={`block w-8 h-0.5 bg-[#F58A1F] transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-8 h-0.5 bg-[#F58A1F] transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-8 h-0.5 bg-[#F58A1F] transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>

          {/* MOBILE MENU */}
          {isMenuOpen && (
            <div className="lg:hidden flex flex-col items-center gap-4 py-6 bg-[#006872] text-white">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="uppercase font-bold text-lg hover:text-[#F58A1F]"
                >
                  {section}
                </button>
              ))}

              <a
                href="https://ugnaypalay.philrice.gov.ph:441/csd/37th/registration-form/ABCDefgHI"
                target="_blank"
                className="uppercase font-bold bg-[#F58A1F] rounded-full px-6 py-3 hover:bg-[#F58A1F] hover:text-white"
              >
                Register Now
              </a>
            </div>
          )}

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
