import React from 'react';
import { X, Users, Clock, MapPin, CheckCircle } from 'lucide-react';

const EventModal = ({ event, onClose, onRegisterForEvent }) => {
  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.2)] animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase mb-2">
            {event.category} Event
          </div>

          <h2 className="font-heading font-black text-3xl text-white mb-1">
            {event.title}
          </h2>
          <p className="text-cyan-400 font-mono text-sm">
            {event.tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-black/40 border border-white/10 mb-6 text-xs font-mono">

          <div>
            <span className="text-gray-400 block mb-1">Team Size</span>
            <span className="text-cyan-400 font-bold text-sm flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              {event.teamSize}
            </span>
          </div>

          <div>
            <span className="text-gray-400 block mb-1">Time Slot</span>
            <span className="text-purple-400 font-bold text-sm flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {event.time}
            </span>
          </div>

          <div>
            <span className="text-gray-400 block mb-1">Venue</span>
            <span className="text-pink-400 font-bold text-sm flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {event.venue}
            </span>
          </div>
        </div>

        {/* Detailed Overview */}
        <div className="mb-6">
          <h3 className="font-heading font-bold text-lg text-white mb-2">
            Event Overview
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed font-light">
            {event.fullDesc}
          </p>
        </div>

        {/* Rules & Guidelines */}
        <div className="mb-6">
          <h3 className="font-heading font-bold text-lg text-white mb-3">
            Rules & Standard Guidelines
          </h3>
          <ul className="space-y-2">
            {event.rules.map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
