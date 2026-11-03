import React from 'react';

export const TelegramButton: React.FC = () => {
  return (
    <a
      href="https://t.me/flshmnd"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join FlashMind Telegram Channel @flshmnd"
      title="Join FlashMind on Telegram for latest JKSSB updates & study material (@flshmnd)"
      className="fixed bottom-20 md:bottom-6 right-3 sm:right-6 z-40 group flex items-center gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-sky-500 via-[#229ED9] to-blue-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 active:scale-95 transition-all duration-200 border border-sky-300/30 select-none backdrop-blur-sm"
    >
      {/* Live notification ping */}
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
      </span>

      {/* Official Telegram Logo SVG */}
      <svg
        className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-current shrink-0"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>

      {/* Button Text */}
      <span className="text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap">
        Join Telegram
      </span>

      {/* Handle badge (hidden on extra small screens) */}
      <span className="hidden sm:inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-white/20 text-white/95 border border-white/20">
        @flshmnd
      </span>
    </a>
  );
};
