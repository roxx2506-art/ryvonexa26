import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Sparkles, UserCheck } from 'lucide-react';

const Navbar = ({ onOpenRegister, onOpenAdmin }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // ScrollSpy active section detection
      const sections = ['home', 'events', 'timeline', 'brochure', 'team', 'location'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Events', href: '#events', id: 'events' },
    { name: 'Timeline', href: '#timeline', id: 'timeline' },
    { name: 'Brochure', href: '#brochure', id: 'brochure' },
    { name: 'Team', href: '#team', id: 'team' },
    { name: 'Location', href: '#location', id: 'location' }
  ];

  return (
    <header
      className={`glass-nav fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'scrolled py-3' : 'py-5'
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 text-decoration-none group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[1px] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">

            <div className="w-full h-full bg-[#050505] rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="/newlogo.jpg"
                alt="RYVONEXA Logo"
                className="w-8 h-8 object-contain"
              />
            </div>

          </div>
          <div>
            <div className="font-heading font-black text-xl tracking-wider text-white flex items-center gap-1">
              RYVONEXA <span className="text-cyan-400 text-sm font-code">'26</span>
            </div>
            <div className="text-[10px] text-gray-400 tracking-widest uppercase font-mono">
              Dept. of CSE
            </div>
          </div>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-sm font-medium transition-all duration-200 relative py-1 ${activeSection === link.id
                ? 'text-cyan-400 font-semibold'
                : 'text-gray-300 hover:text-cyan-400'
                }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse" />
              )}
            </a>
          ))}
        </nav>

        {/* CTA Register Button */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={onOpenRegister} className="btn-primary btn-glow">
           
            Register Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-cyan-400 focus:outline-none p-2 rounded-lg bg-white/5 border border-white/10"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a08]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium py-2 border-b border-white/5 ${activeSection === link.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="btn-primary w-full mt-2"
            >
              <Sparkles className="w-4 h-4" />
              Register Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
