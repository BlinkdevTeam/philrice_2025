"use client";

import Image from "next/image";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Two-column Useful Links layout
  const usefulLinksCol1 = ["home", "about", "speakers", "program"];
  const usefulLinksCol2 = ["venue", "posters", "faqs"];

  return (
    <footer className="relative w-full bg-[#1A1A1A] shadow flex justify-center pt-[63px] pb-[53px] pl-32 pr-16">
      <div className="grid grid-cols-2 gap-6 w-full">
        {/* Left Side */}
        <div className="flex flex-col gap-[33px]">
          {/* Logo */}
          <div className="relative w-[475px] h-[135px]">
            <Image
              src="/assets/logos/Asset 5@12x-8 2.png"
              alt="Philippine Rice Research Institute"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Text */}
          <div className="flex w-full">
            <p className="text-[#D9D9D9] text-[20px] leading-[130%]">
              PHILRICE © 2024. All rights reserved.
              <br />
              Powered by BLINK CREATIVE STUDIO
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[9px]">
              <h3 className="text-white text-[30px]">Contact Info</h3>
              <div className="w-[124px] h-[3px] bg-[#FFC200]"></div>
            </div>
            <div className="flex flex-col gap-4 text-[16px] text-white">
              {/* phone */}
              <div className="flex items-center gap-3">
                <div className="w-[33px] h-[33px] rounded-full bg-[rgba(255,255,255,0.25)] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="15"
                    viewBox="0 0 10 15"
                    fill="none"
                  >
                    <path
                      d="M1.42857 15C1.03571 15 0.699405 14.8665 0.419643 14.5994C0.139881 14.3324 0 14.0114 0 13.6364V1.36364C0 0.988636 0.139881 0.667614 0.419643 0.400568C0.699405 0.133523 1.03571 0 1.42857 0H8.57143C8.96429 0 9.3006 0.133523 9.58036 0.400568C9.86012 0.667614 10 0.988636 10 1.36364V13.6364C10 14.0114 9.86012 14.3324 9.58036 14.5994C9.3006 14.8665 8.96429 15 8.57143 15H1.42857ZM1.42857 12.9545V13.6364H8.57143V12.9545H1.42857ZM1.42857 11.5909H8.57143V3.40909H1.42857V11.5909ZM1.42857 2.04545H8.57143V1.36364H1.42857V2.04545Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="">+63 123 456 7890</p>
              </div>

              {/* email */}
              <div className="flex items-center gap-3">
                <div className="w-[33px] h-[33px] rounded-full bg-[rgba(255,255,255,0.25)] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                  >
                    <path
                      d="M2 0C0.895431 0 0 0.895431 0 2V10L2.58386e-05 10.0103C0.00555998 11.1101 0.898859 12 2 12H7.5C7.77614 12 8 11.7761 8 11.5C8 11.2239 7.77614 11 7.5 11H2C1.53715 11 1.14774 10.6855 1.03376 10.2586L6.67417 6.7876L8 7.5831L15 3.3831V6.5C15 6.77614 15.2239 7 15.5 7C15.7761 7 16 6.77614 16 6.5V2C16 0.89543 15.1046 0 14 0H2ZM5.70808 6.20794L1 9.10522V3.3831L5.70808 6.20794ZM1 2.2169V2C1 1.44772 1.44772 1 2 1H14C14.5523 1 15 1.44772 15 2V2.2169L8 6.4169L1 2.2169Z"
                      fill="white"
                    />
                    <path
                      d="M14.2467 12.2686C15.2567 12.2686 15.8339 11.4116 15.8339 10.2442V10.0344C15.8339 8.42973 14.6402 7 12.5197 7H12.4847C10.421 7 9 8.35978 9 10.4322V10.6465C9 12.8195 10.4385 14 12.3579 14H12.4016C12.9963 14 13.4204 13.9257 13.639 13.8251V13.0949C13.3941 13.2042 12.9656 13.2742 12.4585 13.2742H12.4147C11.0812 13.2742 9.84385 12.4872 9.84385 10.6202V10.4628C9.84385 8.80575 10.9019 7.73891 12.4847 7.73891H12.524C14.0587 7.73891 15.0075 8.78826 15.0075 10.065V10.183C15.0075 11.158 14.6839 11.5734 14.3691 11.5734C14.1374 11.5734 13.9582 11.4247 13.9582 11.1537V8.96315H13.0531V9.53154H13.0225C12.9394 9.23423 12.6552 8.90194 12.0693 8.90194C11.2911 8.90194 10.8101 9.45721 10.8101 10.3011V10.8301C10.8101 11.722 11.2998 12.2642 12.0693 12.2642C12.5415 12.2642 12.9656 12.0369 13.0837 11.6215H13.1274C13.2455 12.0412 13.7439 12.2686 14.2467 12.2686ZM11.7939 10.6814V10.4541C11.7939 9.90756 12.0212 9.66271 12.3666 9.66271C12.664 9.66271 12.9394 9.85509 12.9394 10.371V10.7383C12.9394 11.3111 12.6858 11.4816 12.3754 11.4816C12.0212 11.4816 11.7939 11.2673 11.7939 10.6814Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="">example@email.com</p>
              </div>

              {/* facebook */}
              <div className="flex items-center gap-3">
                <div className="w-[33px] h-[33px] rounded-full bg-[rgba(255,255,255,0.25)] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                  >
                    <path
                      d="M9.5 0.5H7.04545C5.96048 0.5 4.91994 0.947767 4.15274 1.7448C3.38555 2.54183 2.95455 3.62283 2.95455 4.75V7.3H0.5V10.7H2.95455V17.5H6.22727V10.7H8.68182L9.5 7.3H6.22727V4.75C6.22727 4.52457 6.31347 4.30837 6.46691 4.14896C6.62035 3.98955 6.82846 3.9 7.04545 3.9H9.5V0.5Z"
                      stroke="#FFF6F6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="">DA-PhilRice</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-[9px]">
              <h3 className="text-white text-[30px]">Useful Links</h3>
              <div className="w-[124px] h-[3px] bg-[#FFC200]"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-[16px] text-white">
              {/* Column 1 */}
              <ul className="flex flex-col gap-2">
                {usefulLinksCol1.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link)}
                      className="capitalize hover:text-green-400 transition"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Column 2 */}
              <ul className="flex flex-col gap-2">
                {usefulLinksCol2.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link)}
                      className="capitalize hover:text-green-400 transition"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Scroll to Top Button */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute top-6 right-6 w-[50px] h-[50px] rounded-full bg-[#EDEDED] flex items-center justify-center cursor-pointer hover:bg-[rgba(255,255,255,0.4)] transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
            >
              <path
                d="M1 7L7 1L13 7"
                stroke="#ABABAB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
