import React from 'react';
import { Clock, Calendar, CheckCircle2, Award, Utensils, Zap, Play, Sparkles } from 'lucide-react';

const schedule = [
  {
    time: '9:30 AM',
    title: 'Registration & Welcome Desk',
    location: 'Main Entrance Lobby',
    desc: 'Participant check-in, event badge verification and welcome kit distribution',
    icon: CheckCircle2,
    color: 'cyan'
  },
  {
    time: '10:00 AM',
    title: 'Grand Inauguration Ceremony',
    location: 'CSE Auditorium',
    desc: 'Lamp lighting, welcome address by HOD CSE, and keynote speech by Chief Guest & Industry Leader.',
    icon: Play,
    color: 'purple'
  },
  {
    time: '10:30 AM',
    title: 'Technical Events Start',
    location: 'Labs & Seminar Halls',
    desc: 'Commencement of TechTalk Arena, Code Relay, The Prompt Cipher, and Frontend Fix-It competitions.',
    icon: Zap,
    color: 'pink'
  },
  {
    time: '1:00 PM',
    title: 'Grand Buffet Lunch & Networking',
    location: 'At hostel cafeteria',
    desc: 'Complimentary feast lunch break for all registered participants and faculty delegates.',
    icon: Utensils,
    color: 'yellow'
  },
  {
    time: '2:00 PM',
    title: 'Non-Technical Events ',
    location: 'Labs & Seminar Halls',
    desc: 'Tech Gamble, Crack the Vault, Memory Wall, and Aura Unlocked competitions.',
    icon: Clock,
    color: 'cyan'
  },
  {
    time: '3:00 PM',
    title: 'Valedictory Ceremony & Trophies',
    location: 'Main Auditorium Stage',
    desc: 'Awarding trophies, certificates, and closing remarks by Symposium Student Chairs.',
    icon: Award,
    color: 'purple'
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="section-padding relative z-10">
      <div className="container">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="section-badge">
            <Clock className="w-4 h-4 text-cyan-400" />
            Schedule & Hours
          </div>
          <h2 className="section-title text-white">
            Symposium <span className="gradient-text">Event Timeline</span>
          </h2>
          <p className="section-subtitle">
            Structured full-day itinerary from 9:30 AM to 4:00 PM featuring keynotes, competitive hackathons, dining, and prize ceremonies.
          </p>
        </div>

        {/* Timeline Line Container */}
        <div className="max-w-4xl mx-auto relative px-4">
          {/* Vertical Glowing Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)] transform md:-translate-x-1/2" />

          {/* Schedule Nodes */}
          <div className="space-y-12">
            {schedule.map((item, index) => {
              const IconComp = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Timeline Indicator Circle */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050505] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(229,193,88,0.8)] z-10">
                    <IconComp className="w-5 h-5 text-cyan-400" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                    <div className="glass-card p-6 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group">
                      {/* Time Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-code font-bold text-xs mb-3">
                        <Clock className="w-3.5 h-3.5" />
                        {item.time}
                      </div>

                      <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-400 transition-colors mb-1">
                        {item.title}
                      </h3>

                      <div className="text-xs font-mono text-purple-400 mb-3">
                        📍 {item.location}
                      </div>

                      <p className="text-gray-300 text-sm font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
