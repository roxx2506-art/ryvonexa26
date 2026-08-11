import React, { useState } from 'react';
import {
  FileText,
  Download,
  CheckCircle,
  Eye,
  X,
  ExternalLink,
  Sparkles
} from 'lucide-react';

const Brochure = () => {
  const [downloading, setDownloading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const brochureImageSrc = '/CSE Symposium Most Final Broucher Without Boarder .png';

  const handleDownload = (type = 'pdf') => {
    setDownloading(true);
    try {
      const link = document.createElement('a');
      if (type === 'png') {
        link.href = brochureImageSrc;
        link.download = 'RYVONEXA-26_Official_Brochure.png';
      } else {
        link.href = '/CSE Symposium OG Final Final.pdf';
        link.download = 'RYVONEXA-26_Official_Brochure.pdf';
      }
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setTimeout(() => setDownloading(false), 500);
    }
  };

  return (
    <section id="brochure" className="py-20 px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono text-sm uppercase tracking-widest mb-3">
          <FileText className="w-4 h-4" />
          Official Publication
        </div>

        <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
          Symposium Event Brochure
        </h2>

        <p className="max-w-2xl mx-auto text-gray-400">
          View or download the official RYVONEXA '26 brochure poster for complete event guidelines, schedule, and registration details.
        </p>
      </div>

      {/* Brochure Card */}
      <div className="max-w-5xl mx-auto glass-card p-6 md:p-10 border-cyan-500/30 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Brochure Poster Preview Card (Column 5) */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative group cursor-pointer w-full max-w-sm rounded-2xl overflow-hidden border border-cyan-500/40 bg-[#0a0d24] shadow-[0_0_35px_rgba(0,240,255,0.2)] hover:shadow-[0_0_45px_rgba(0,240,255,0.4)] transition-all duration-300 transform hover:scale-[1.02]"
            >
              {/* Poster Image */}
              <div className="relative aspect-[4/3] sm:aspect-[1.41] overflow-hidden bg-black/60">
                <img
                  src={brochureImageSrc}
                  alt="RYVONEXA '26 Official Brochure Poster"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/CSE Symposium OG Final Final.png';
                  }}
                />

                {/* Overlay Hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/30 border border-cyan-400/60 text-cyan-200 font-mono text-xs backdrop-blur-md group-hover:bg-cyan-500/50 group-hover:scale-110 transition duration-300 shadow-lg">
                    <Eye className="w-4 h-4 text-cyan-400" /> Click to View Full Image
                  </span>
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className="p-3 bg-black/60 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-300">
                <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                  <Sparkles className="w-3.5 h-3.5" /> Official Poster
                </span>
                <span className="text-gray-400">High-Res Edition</span>
              </div>
            </div>
          </div>

          {/* Details & Actions (Column 7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest mb-2">
              National Level Technical Symposium
            </span>

            <h3 className="font-heading font-black text-2xl md:text-3xl text-white mb-4">
              RYVONEXA <span className="text-cyan-400 font-code">'26</span> Brochure
            </h3>

            <p className="text-gray-300 text-sm mb-6 leading-relaxed font-light">
              Get all information regarding Technical & Non-Technical events, cash prizes, schedule, QR code registration, staff, and student coordinators in one official poster layout.
            </p>

            <ul className="space-y-3 mb-8 text-sm text-gray-300 font-light">
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Technical: TechTalk Arena, Code Relay, Prompt Cipher & Frontend Fix-It</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Non-Technical: Tech Gamble, Crack The Vault, Memory Wall & Aura Unlocked</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>QR Code Registration, Helpline numbers & Convenor details</span>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary py-3.5 px-6 text-sm flex items-center justify-center gap-2 flex-1"
              >
                <Eye className="w-4 h-4" />
                View Brochure Image
              </button>

              <button
                onClick={() => handleDownload('pdf')}
                disabled={downloading}
                className="btn-primary btn-glow py-3.5 px-6 text-sm flex items-center justify-center gap-2 flex-1 disabled:opacity-50"
              >
                <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
                {downloading ? 'Downloading...' : 'Download Brochure'}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* High-Resolution Brochure Modal / Lightbox */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="relative bg-[#090c21] border border-cyan-500/40 rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-[0_0_60px_rgba(0,240,255,0.3)] overflow-hidden">

            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-cyan-400" />
                <h3 className="font-heading font-bold text-base md:text-lg text-white">
                  RYVONEXA '26 Official Brochure Poster
                </h3>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-red-500/20 hover:text-red-400 text-gray-300 transition"
                title="Close Viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Image Container */}
            <div className="flex-1 overflow-auto p-2 sm:p-4 flex items-center justify-center bg-black/70 min-h-[300px]">
              <img
                src={brochureImageSrc}
                alt="RYVONEXA '26 Official Brochure Poster"
                className="max-w-full h-auto rounded-xl shadow-2xl border border-white/10 object-contain max-h-[75vh]"
                onError={(e) => {
                  e.target.src = '/CSE Symposium OG Final Final.png';
                }}
              />
            </div>

            {/* Modal Footer Controls */}
            <div className="p-4 border-t border-white/10 bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono text-gray-400">
                P.S.R. Engineering College — CSE Dept. (CAFE)
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() => window.open('/CSE Symposium OG Final Final.pdf', '_blank')}
                  className="px-4 py-2 text-xs font-mono rounded-lg bg-white/10 hover:bg-white/20 text-cyan-300 border border-cyan-500/30 transition flex items-center gap-2"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> View PDF
                </button>

                <button
                  onClick={() => handleDownload('pdf')}
                  className="btn-primary py-2 px-4 text-xs flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Brochure;