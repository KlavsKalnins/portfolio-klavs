'use client';

import { useEffect, useState } from 'react';

const targetDate = new Date('2025-10-06T10:55:00'); // Local time

export default function HeartCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeLeft() {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    const totalSeconds = Math.max(Math.floor(diff / 1000), 0);

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const seconds = totalSeconds % 60;

    return { days, hours, seconds };
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20 text-red-500 animate-pulse"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
          4.42 3 7.5 3c1.74 0 3.41 0.81 
          4.5 2.09C13.09 3.81 14.76 3 
          16.5 3 19.58 3 22 5.42 22 
          8.5c0 3.78-3.4 6.86-8.55 
          11.54L12 21.35z" />
      </svg>

      <div className="mt-4 text-xl font-semibold text-gray-200">
        {timeLeft.days} d {timeLeft.hours} h {timeLeft.seconds} s
      </div>
    </div>
  );
}
