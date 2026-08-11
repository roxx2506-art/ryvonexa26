import React from 'react';
import { Calendar, MapPin, Sparkles, ArrowRight, Zap, Code, ShieldCheck } from 'lucide-react';

const Hero = ({ onOpenRegister, stats }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Premium Light Sweep */}
      <div className="light-sweep" />
      {/* Ambient Radial Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-purple-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 text-center">

        {/* College Header & Association Banner */}
        <div className="flex flex-col items-center justify-center gap-3 mb-8">
          {/* College Name with Logo */}
          <div className="flex items-center justify-center gap-3 px-5 py-2.5 rounded-2xl bg-white/5 border border-amber-500/30 backdrop-blur-md shadow-lg">
            <img
              src="/newlogo.jpg"
              alt="P.S.R. Engineering College Logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            <div className="text-left">
              <div className="font-heading font-extrabold text-sm sm:text-base md:text-lg text-white tracking-wide leading-tight">
                P.S.R. ENGINEERING COLLEGE <span className="text-amber-400 text-xs font-mono font-normal">(AUTONOMOUS, NAAC A+)</span>
              </div>
              <div className="text-[11px] text-gray-400 font-mono tracking-wider">
                SIVAKASI - 626140, TAMIL NADU
              </div>
            </div>
          </div>

          {/* Department & Association Badge with CAFE Logo */}
          <div className="inline-flex items-center justify-center gap-3 px-5 py-2.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-400 text-xs md:text-sm font-semibold tracking-widest uppercase backdrop-blur-md max-w-full text-center">
            <div className="w-7 h-7 rounded-full border border-amber-400/50 overflow-hidden bg-black flex-shrink-0">
              <img
                src="/logo.jpg"
                alt="CAFE Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span>Department of CSE & Computer Association For Folksy Engineers (CAFE)</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
            • Proudly Presents •
          </div>
        </div>



        {/* Symposium Main Title */}
        <h1 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-white mb-4">
          <span className="shimmer-text drop-shadow-[0_0_35px_rgba(229,193,88,0.4)]">
            RYVONEXA
          </span>{' '}
          <span className="font-code text-cyan-400 text-4xl sm:text-6xl md:text-7xl align-top">
            '26
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-heading text-xl sm:text-2xl md:text-3xl font-medium gradient-text max-w-3xl mx-auto mb-8 leading-snug">
          Where innovation meets intelligence!
        </p>
        {/* Department Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 backdrop-blur-md animate-pulse">

          • National Level Technical Symposium •
        </div>

        {/* Event Date & Location Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10">
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg text-gray-200 text-sm md:text-base font-mono">
            <Calendar className="w-5 h-5 text-cyan-400" />
            <span>September 16, 2026</span>
          </div>
          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg text-gray-200 text-sm md:text-base font-mono">
            <MapPin className="w-5 h-5 text-purple-400" />
            <span> P.S.R Engineering College</span>
          </div>

          <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg text-gray-200 text-sm md:text-base font-mono">
            <MapPin className="w-5 h-5 text-purple-400" />
            <span>CSE Block</span>
          </div>

        </div>

        {/* Short Description */}
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Think. Innovate. Compete.<br></br>
          Challenge your technical expertise through speed debugging, competitive coding, prompt engineering, and e-sports while connecting with brilliant minds from across the nation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button onClick={onOpenRegister} className="btn-primary btn-glow text-base px-8 py-4">
            <Sparkles className="w-5 h-5" />
            Register For Symposium
          </button>

          <a href="#events" className="btn-secondary text-base px-8 py-4">
            Explore  Events
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Live Symposium Stats Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">

          <div className="glass-card p-4 text-center">
            <div className="font-heading font-extrabold text-2xl md:text-3xl text-purple-400 mb-1">
              8
            </div>
            <div className="text-xs text-gray-400 font-mono uppercase tracking-wider">
              Tech & Non-Tech Events
            </div>
          </div>

          <div className="glass-card p-4 text-center">
            <div className="font-heading font-extrabold text-2xl md:text-3xl text-yellow-400 mb-1">
              Exciting Prizes
            </div>
            <div className="text-xs text-gray-400 font-mono uppercase tracking-wider">
            </div>
            For Winners.
          </div>
        </div>
      </div>
    </section >
  );
};

export default Hero;
