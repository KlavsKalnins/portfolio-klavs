'use client';

import { useEffect, useState } from 'react';

const targetDate = new Date('2025-09-05T18:25:00');

export default function HeartCountdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    function getTimeLeft() {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      const totalSeconds = Math.max(Math.floor(diff / 1000), 0);

      if (totalSeconds === 0) setEnded(true);

      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      return { days, hours, minutes, seconds };
    }

    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  function pad(num: number) {
    return num.toString().padStart(2, '0');
  }

  function renderTime() {
    if (!timeLeft || ended) return null;
    const { days, hours, minutes, seconds } = timeLeft;
    const parts: string[] = [];
    if (days > 0) parts.push(`${pad(days)} d`);
    if (hours > 0 || parts.length > 0) parts.push(`${pad(hours)} h`);
    if (minutes > 0 || parts.length > 0) parts.push(`${pad(minutes)} m`);
    parts.push(`${pad(seconds)} s`);
    return parts.join(' ');
  }

  return (
    <div
      className={`h-screen w-screen flex flex-col items-center justify-center text-center transition-colors duration-700 ${
        ended ? 'bg-red-900' : 'bg-gray-900'
      }`}
    >
      {/* Heart SVG: never re-renders, keeps beating */}
      <Heart ended={ended} />

      {/* Countdown */}
      {!ended && (
        <div className="mt-4 text-2xl font-bold text-gray-200 tracking-wide">
          {renderTime()}
        </div>
      )}
    </div>
  );
}

function Heart({ ended }: { ended: boolean }) {
  return (
    <div
      className={`transition-transform duration-700 ${
        ended ? 'scale-[400%]' : 'scale-100'
      }`}
      style={{ transformOrigin: 'center center' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20 text-red-500 animate-beat"
        fill="url(#fireGradient)"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="fireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6a00">
              <animate
                attributeName="stop-color"
                values="#ff6a00;#ff0000;#ff6a00"
                dur="1s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#ff0000">
              <animate
                attributeName="stop-color"
                values="#ff0000;#ff9900;#ff0000"
                dur="1s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
          4.42 3 7.5 3c1.74 0 3.41 0.81 
          4.5 2.09C13.09 3.81 14.76 3 
          16.5 3 19.58 3 22 5.42 22 
          8.5c0 3.78-3.4 6.86-8.55 
          11.54L12 21.35z" />
      </svg>
    </div>
  );
}
