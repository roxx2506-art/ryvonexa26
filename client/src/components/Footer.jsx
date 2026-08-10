import React from 'react';
import {
  Cpu,
  Instagram,
  Linkedin,
  Mail,
  ArrowUp,
  Heart,
  MapPin,
  Phone,
  Bus
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                <img
                  src="/logo.jpg"
                  alt="PSR Engineering College Logo"
                  className="w-12 h-12 object-contain"
                />          </div>

              <div>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  PSR ENGINEERING COLLEGE
                </h3>

                <p className="text-xs font-mono text-cyan-400 mt-1">
                  DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm font-light leading-relaxed max-w-md">
              P.S.R. Engineering College, Sivakasi is an autonomous institution
              affiliated to Anna University, committed to excellence in
              technical education, innovation, research and professional
              development.
            </p>

            <div className="mt-6 space-y-3">

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />

                <p className="text-gray-400 text-xs leading-relaxed">
                  Sevalpatti, Sivakasi - 626140,
                  <br />
                  Virudhunagar District,
                  <br />
                  Tamil Nadu, India.
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />

                <p className="text-gray-400 text-xs font-mono">
                  9751780504/9344844533
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-pink-400 shrink-0" />

                <a
                  href="mailto:contact@psr.edu.in"
                  className="text-gray-400 text-xs font-mono hover:text-pink-400 transition-colors"
                >
                  ryvonexa26@gmail.com
                </a>
              </div>

              {/* Transport */}
              <div className="flex items-center gap-3">
                <Bus className="w-4 h-4 text-yellow-400 shrink-0" />

                <p className="text-gray-400 text-xs font-mono">
                  Transport:9344844533
                </p>
              </div>

            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
              Quick Navigation
            </h4>

            <ul className="space-y-3 text-sm text-gray-400 font-mono">

              <li>
                <a
                  href="#home"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#events"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Events & Battles
                </a>
              </li>

              <li>
                <a
                  href="#timeline"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Event Timeline
                </a>
              </li>

              <li>
                <a
                  href="#brochure"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Symposium Brochure
                </a>
              </li>

              <li>
                <a
                  href="#team"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Organizing Team
                </a>
              </li>

              <li>
                <a
                  href="#location"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Location & Venue
                </a>
              </li>

            </ul>
          </div>


          {/* Connect & College */}
          <div>

            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
              PSR Engineering College
            </h4>

            <p className="text-gray-400 text-xs leading-relaxed mb-5">
              An autonomous institution dedicated to quality technical
              education, research, innovation and professional excellence.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mb-6">

              

            </div>


            {/* Official Website */}
            <a
              href="https://psr.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-2.5 px-4 flex items-center justify-center gap-2 w-full mb-3"
            >
              Visit Official Website
            </a>


            {/* Back To Top */}
            <button
              onClick={scrollToTop}
              className="btn-secondary text-xs py-2.5 px-4 flex items-center justify-center gap-2 w-full"
            >
              <ArrowUp className="w-4 h-4" />
              Back To Top
            </button>

          </div>

        </div>


        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-400 gap-4">

          <div className="text-center sm:text-left">
            © 2026 PSR Engineering College. All Rights Reserved.
          </div>

          <div className="flex items-center gap-1 text-gray-400">
            Created by Ranjith & Sasidharan
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 mx-1" />
            for PSRians & Future Engineers
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;