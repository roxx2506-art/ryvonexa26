import React, { useState, useEffect } from 'react';
import { Clock, Sparkles, AlertCircle } from 'lucide-react';

const Countdown = ({ onOpenRegister }) => {
  // Target Event Date: September 16, 2026 09:00:00 IST
  const targetDate = new Date('2026-09-16T09:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const padZero = (num) => String(num).padStart(2, '0');

  return (
    <section className="relative z-10 -mt-8 mb-20 px-4">
      <div className="container max-w-4xl">
        <div className="glass-card p-8 md:p-10 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,240,255,0.15)] text-center relative overflow-hidden">
          {/* Subtle Ambient Light Corner Accents */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-cyan-500/20 blur-2xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-purple-500/20 blur-2xl rounded-full pointer-events-none" />

          {/* Section Heading */}
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm font-semibold uppercase tracking-widest mb-2">
            <Clock className="w-4 h-4 animate-spin-slow text-cyan-400" />
            Live Countdown Timer
          </div>

          <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-white mb-8">
            Event Starts In
          </h2>

          {/* Timer Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-8 max-w-3xl mx-auto">
            {/* Days */}
            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#11110e]/80 border border-cyan-500/20 shadow-inner group hover:border-cyan-400/50 transition-all">
              <span className="font-code font-black text-4xl md:text-5xl text-cyan-400 neon-glow-cyan">
                {padZero(timeLeft.days)}
              </span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400 mt-2">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#11110e]/80 border border-purple-500/20 shadow-inner group hover:border-purple-400/50 transition-all">
              <span className="font-code font-black text-4xl md:text-5xl text-purple-400 neon-glow-purple">
                {padZero(timeLeft.hours)}
              </span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400 mt-2">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#11110e]/80 border border-pink-500/20 shadow-inner group hover:border-pink-400/50 transition-all">
              <span className="font-code font-black text-4xl md:text-5xl text-pink-300">
                {padZero(timeLeft.minutes)}
              </span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400 mt-2">
                Minutes
              </span>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#11110e]/80 border border-yellow-500/20 shadow-inner group hover:border-yellow-400/50 transition-all">
              <span className="font-code font-black text-4xl md:text-5xl text-yellow-400 animate-pulse">
                {padZero(timeLeft.seconds)}
              </span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-400 mt-2">
                Seconds
              </span>
            </div>
          </div>

          {/* CTA Register Button below countdown */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onOpenRegister} className="btn-primary btn-glow px-8 py-3.5 text-base">
              <Sparkles className="w-5 h-5" />
              Register Now For All Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
