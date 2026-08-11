import React, { useState } from 'react';
import { Terminal, Layout, FileText, Cpu, Palette, Gamepad2, HelpCircle, Film, Trophy, Users, Clock, ArrowUpRight, Sparkles } from 'lucide-react';

const iconMap = {
  Terminal: Terminal,
  Layout: Layout,
  FileText: FileText,
  Cpu: Cpu,
  Palette: Palette,
  Gamepad2: Gamepad2,
  HelpCircle: HelpCircle,
  Film: Film
};

const Events = ({ events, onSelectEvent, onOpenRegister }) => {
  const [filter, setFilter] = useState('all');

  const filteredEvents = events.filter((e) => {
    if (filter === 'all') return true;
    return e.category === filter;
  });

  return (
    <section id="events" className="section-padding relative z-10">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="section-badge">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            Compete & Conquer
          </div>
          <h2 className="section-title text-white">
            Symposium <span className="gradient-text">Events & Battles</span>
          </h2>
          <p className="section-subtitle">
            Explore 8 flagship competitive arenas designed for coders, hackers, researchers, gamers, and visual creators.
          </p>

          {/* Filter Categories */}
          <div className="filter-tabs-wrapper w-full overflow-x-auto pb-2 mt-8 no-scrollbar">
            <div className="flex items-center justify-center min-w-max md:min-w-0 gap-2 sm:gap-3 mx-auto px-2">
              <button
                onClick={() => setFilter('all')}
                className={`filter-btn whitespace-nowrap ${filter === 'all' ? 'active' : ''}`}
              >
                All Events ({events.length})
              </button>
              <button
                onClick={() => setFilter('technical')}
                className={`filter-btn whitespace-nowrap ${filter === 'technical' ? 'active' : ''}`}
              >
                Technical Events
              </button>
              <button
                onClick={() => setFilter('non-technical')}
                className={`filter-btn whitespace-nowrap ${filter === 'non-technical' ? 'active' : ''}`}
              >
                Non-Technical Events
              </button>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const IconComponent = iconMap[event.icon] || Cpu;
            const isTech = event.category === 'technical';

            return (
              <div
                key={event.id}
                onClick={() => onSelectEvent(event)}
                className="glass-card p-6 flex flex-col justify-between cursor-pointer group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                {/* Neon Accent Stripe */}
                <div
                  className={`absolute top-0 left-0 w-full h-[3px] ${
                    isTech
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                      : 'bg-gradient-to-r from-purple-500 to-pink-500'
                  }`}
                />

                <div>
                  {/* Card Header: Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                        isTech
                          ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                          : 'bg-purple-500/10 border-purple-500/30 text-purple-400'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        isTech
                          ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-300'
                          : 'bg-purple-950/60 border-purple-500/30 text-purple-300'
                      }`}
                    >
                      {event.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-cyan-400 transition-colors mb-1">
                    {event.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400/80 mb-3">
                    {event.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-gray-300 text-sm line-clamp-3 mb-6 font-light leading-relaxed">
                    {event.shortDesc}
                  </p>
                </div>

                {/* Card Footer Info */}
                <div>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 mb-4 text-xs text-gray-400 font-mono">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gray-400" />
                      {event.teamSize}
                    </div>
                  </div>

                  <button className="w-full btn-secondary text-xs py-2.5 flex items-center justify-center gap-2 group-hover:border-cyan-400 group-hover:text-cyan-400">
                    View Details
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
