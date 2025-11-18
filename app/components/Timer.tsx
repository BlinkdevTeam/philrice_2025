"use client";

import { useEffect, useState } from "react";

const Timer = () => {
  const calculateTimeLeft = () => {
    const target = new Date("November 25, 2025 07:00:00").getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsClient(true), 0);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  if (!isClient) return null;

  return (
    <div className="w-full bg-white flex justify-center items-center py-12">
      <div className="bg-white w-full max-w-[1920px] flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 px-4 sm:px-8">
        {/* Days */}
        <div className="flex flex-col justify-center items-center bg-[#006872] text-center rounded-[26px] w-full sm:w-[200px] md:w-[251px] h-[180px] sm:h-[200px] md:h-[215px]">
          <span className="text-[60px] sm:text-[70px] md:text-[80px] text-[#F58A1F] font-bold">
            {timeLeft.days}
          </span>
          <span className="text-[18px] sm:text-[20px] md:text-[23.5px] text-white uppercase">
            Days
          </span>
        </div>

        {/* Hours */}
        <div className="flex flex-col justify-center items-center bg-[#006872] text-center rounded-[26px] w-full sm:w-[200px] md:w-[251px] h-[180px] sm:h-[200px] md:h-[215px]">
          <span className="text-[60px] sm:text-[70px] md:text-[80px] text-[#F58A1F] font-bold">
            {timeLeft.hours}
          </span>
          <span className="text-[18px] sm:text-[20px] md:text-[23.5px] text-white uppercase">
            Hours
          </span>
        </div>

        {/* Logo */}
        <img
          src="/assets/logos/6533772d20b398bc3050934c63409508e31649c2.png"
          alt="Event Logo"
          className="w-[80px] sm:w-[90px] md:w-[101px] h-auto"
        />

        {/* Minutes */}
        <div className="flex flex-col justify-center items-center bg-[#006872] text-center rounded-[26px] w-full sm:w-[200px] md:w-[251px] h-[180px] sm:h-[200px] md:h-[215px]">
          <span className="text-[60px] sm:text-[70px] md:text-[80px] text-[#F58A1F] font-bold">
            {timeLeft.minutes}
          </span>
          <span className="text-[18px] sm:text-[20px] md:text-[23.5px] text-white uppercase">
            Minutes
          </span>
        </div>

        {/* Seconds */}
        <div className="flex flex-col justify-center items-center bg-[#006872] text-center rounded-[26px] w-full sm:w-[200px] md:w-[251px] h-[180px] sm:h-[200px] md:h-[215px]">
          <span className="text-[60px] sm:text-[70px] md:text-[80px] text-[#F58A1F] font-bold">
            {timeLeft.seconds}
          </span>
          <span className="text-[18px] sm:text-[20px] md:text-[23.5px] text-white uppercase">
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
