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
    // ✅ Defer the state update to avoid synchronous effect update
    const timeout = setTimeout(() => setIsClient(true), 0);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  if (!isClient) return null; // ⛔ Avoid hydration mismatch

  return (
    <div className="w-full bg-white flex justify-center items-center">
      <div className="bg-white max-w-[1153px] w-full flex items-center justify-between gap-4 font-bold pt-[84px]">
        <div className="w-[251px] h-[215px] bg-[#006872] flex flex-col justify-center items-center text-center rounded-[26px]">
          <span className="block text-[80px] text-[#FFC200]">
            {timeLeft.days}
          </span>
          <span className="text-[23.5px] text-white uppercase">Days</span>
        </div>
        <div className="w-[251px] h-[215px] bg-[#006872] flex flex-col justify-center items-center text-center rounded-[26px]">
          <span className="block text-[80px] text-[#FFC200]">
            {timeLeft.hours}
          </span>
          <span className="text-[23.5px] text-white uppercase">Hours</span>
        </div>
        <img
          src="/assets/logos/6533772d20b398bc3050934c63409508e31649c2.png"
          alt="Event Logo"
          className="w-[101px] h-auto"
        />
        <div className="w-[251px] h-[215px] bg-[#006872] flex flex-col justify-center items-center text-center rounded-[26px]">
          <span className="block text-[80px] text-[#FFC200]">
            {timeLeft.minutes}
          </span>
          <span className="text-[23.5px] text-white uppercase">Minutes</span>
        </div>
        <div className="w-[251px] h-[215px] bg-[#006872] flex flex-col justify-center items-center text-center rounded-[26px]">
          <span className="block text-[80px] text-[#FFC200]">
            {timeLeft.seconds}
          </span>
          <span className="text-[23.5px] text-white uppercase">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
