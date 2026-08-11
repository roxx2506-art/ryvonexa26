import React from 'react';
import { MapPin, Navigation, Phone, Mail, Clock, Bus } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em]">
            Venue & Directions
          </span>

          <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mt-3">
            Symposium Location & Reach
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Join us live at P.S.R. Engineering College, Sevalpatti, Sivakasi,
            and experience an exciting celebration of technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

            <div className="glass-card p-6 md:p-8 space-y-6 border-cyan-500/30">

              {/* Campus Location */}
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                  Campus Location
                </h3>

                <p className="text-sm font-mono text-cyan-400">
                  P.S.R. Engineering College
                </p>

                <p className="text-gray-300 text-sm font-light mt-2 leading-relaxed">
                  Sevalpatti, Sivakasi - 626140,
                  <br />
                  Virudhunagar District,
                  <br />
                  Tamil Nadu, India.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 border-t border-white/10 pt-6 text-sm">

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="text-xs font-mono text-gray-400 block">
                      Helpline Numbers
                    </span>

                    <span className="text-white font-mono font-medium">
                      6369045590/ 7904832661 / 9751780504
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="text-xs font-mono text-gray-400 block">
                      Official Support Email
                    </span>

                    <span className="text-white font-mono font-medium">
                      cse_association@psr.edu.in
                    </span>
                  </div>
                </div>

                {/* Transport */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-400 shrink-0">
                    <Bus className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="text-xs font-mono text-gray-400 block">
                      College Transport
                    </span>

                    <span className="text-white text-xs font-light leading-relaxed">
                      College transportation facilities are available for
                      students and faculty. Transport Contact: 8760923731.
                    </span>
                  </div>
                </div>

                {/* Campus Timing */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>

                  <div>
                    <span className="text-xs font-mono text-gray-400 block">
                      Campus Location
                    </span>

                    <span className="text-white text-xs font-light">
                      Sevalpatti, Sivakasi - 626140
                    </span>
                  </div>
                </div>

              </div>

              {/* Google Maps Button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=PSR+Engineering+College+Sevalpatti+Sivakasi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Open Google Maps Navigation
              </a>

            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7">
            <div className="glass-card h-full min-h-[380px] p-2 border-purple-500/30 relative overflow-hidden group">

              <iframe
                title="PSR Engineering College Location Map"
                src="https://www.google.com/maps?q=PSR%20Engineering%20College%2C%20Sevalpatti%2C%20Sivakasi&output=embed"
                className="w-full h-full min-h-[360px] rounded-xl border-0"
                loading="lazy"
                allowFullScreen
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;