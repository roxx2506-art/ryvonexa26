import React from 'react';
import { Award, ShieldCheck, Cpu, Users, Sparkles, BookOpen, GraduationCap, Building2 } from 'lucide-react';

const AboutAssociation = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-b from-[#050505] via-[#0c0a06] to-[#050505]">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-badge inline-flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-amber-400" />
            Institution & Association Profile
          </div>
          <h2 className="section-title text-white">
            About <span className="gradient-text">College & CAFE Association</span>
          </h2>
          <p className="section-subtitle">
            P.S.R. Engineering College in collaboration with the Computer Association for Folksy Engineers (CAFE) welcomes tech innovators nationwide.
          </p>
        </div>

        {/* 2-Column Showcase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: P.S.R. Engineering College */}
          <div className="glass-card p-8 md:p-10 relative group hover-lift flex flex-col justify-between border border-amber-500/20 hover:border-amber-500/50">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-black border border-amber-500/40 p-2 shadow-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src="/logo.jpg"
                    alt="P.S.R. Engineering College Logo"
                    className="w-full h-full object-contain filter-none"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block font-mono mb-0.5">
                    Autonomous Institution
                  </span>
                  <h3 className="text-2xl font-extrabold text-white font-heading leading-tight flex items-center gap-2">
                    P.S.R. Engineering College
                  </h3>
                  <span className="text-xs text-gray-300 font-medium">
                    Approved by AICTE, Accredited by NAAC with A+ Grade
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                P.S.R. Engineering College, established with a vision to impart quality technical education, is a premier autonomous institution in Tamil Nadu. The college is accredited with NAAC ‘A+’ grade and offers cutting-edge infrastructure, state-of-the-art research laboratories, and an inspiring academic environment to nurture engineering pioneers.
              </p>

              {/* Highlights Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-amber-400 font-bold text-lg font-heading">NAAC A+</div>
                  <div className="text-[11px] text-gray-400">Accredited</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <div className="text-amber-400 font-bold text-lg font-heading">Autonomous</div>
                  <div className="text-[11px] text-gray-400">Status</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center col-span-2 sm:col-span-1">
                  <div className="text-amber-400 font-bold text-lg font-heading">Sivakasi</div>
                  <div className="text-[11px] text-gray-400">Tamil Nadu</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-amber-400" /> Dept. of Computer Science & Engg.</span>
              <span className="font-mono text-amber-400">ESTD 1999</span>
            </div>
          </div>

          {/* Card 2: CAFE Association Logo & Details */}
          <div className="glass-card p-8 md:p-10 relative group hover-lift flex flex-col justify-between border border-amber-500/20 hover:border-amber-500/50">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-black border-2 border-amber-400 p-0.5 shadow-xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform overflow-hidden">
                  <img
                    src="\association logo.jpg"
                    alt="CAFE Association Logo"
                    className="w-full h-full object-cover rounded-full filter-none"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block font-mono mb-0.5">
                    Department Association
                  </span>
                  <h3 className="text-2xl font-extrabold text-white font-heading leading-tight flex items-center gap-2">
                    CAFE
                  </h3>
                  <span className="text-xs text-gray-300 font-medium">
                    Computer Association for Folksy Engineers
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                CAFE (Computer Association for Folksy Engineers) is the dynamic student body association of the CSE Department at P.S.R. Engineering College. CAFE acts as a platform for budding developers, researchers, and innovators to showcase technical excellence, organize hackathons, coding arena battles, and foster technological breakthroughs.
              </p>

              {/* Association Features */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-3 text-xs text-gray-300 bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <Cpu className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Organizing National Level Technical Symposium <strong>RYVONEXA '26</strong></span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300 bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <Users className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Driven by CSE Faculty Mentors & Energetic Student Coordinators</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300 bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Empowering innovation through technical paper presentations, hackathons & code battles</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-amber-400" /> Official CSE Association</span>
              <span className="font-mono text-amber-400">P.S.R.E.C</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutAssociation;
