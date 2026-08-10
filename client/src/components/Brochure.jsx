import React, { useState } from 'react';
import {
  FileText,
  Download,
  CheckCircle,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const Brochure = () => {
  const [downloading, setDownloading] = useState(false);

  // Download the existing PDF
  const generateAndDownloadPDF = () => {
    setDownloading(true);

    try {
      const link = document.createElement('a');

      link.href = '/CSE Symposium OG Final Final.pdf';
      link.download = 'RYVONEXA-26_Official_Brochure.pdf';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err) {
      console.error('PDF Download Error:', err);
    } finally {
      setTimeout(() => {
        setDownloading(false);
      }, 500);
    }
  };

  // Open PDF in a new browser tab
  const viewBrochure = () => {
    window.open(
      '/CSE Symposium OG Final Final.pdf',
      '_blank',
      'noopener,noreferrer'
    );
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
          Download the official RYVONEXA '26 brochure.
        </p>

      </div>


      {/* Brochure Card */}
      <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 border-cyan-500/30 relative overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">


          {/* =========================
              BROCHURE PREVIEW
          ========================== */}
          <div className="relative group">

            <div
              className="
                aspect-[3/4]
                rounded-2xl
                bg-gradient-to-br
                from-[#0c0f2b]
                to-[#171c42]
                p-6
                border
                border-cyan-500/30
                shadow-[0_0_30px_rgba(0,240,255,0.2)]
                flex
                flex-col
                justify-between
                relative
                overflow-hidden
                group-hover:scale-105
                transition-transform
                duration-300
              "
            >

              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/20 blur-2xl rounded-full" />

              <div className="absolute bottom-0 left-0 w-36 h-36 bg-purple-500/20 blur-2xl rounded-full" />


              {/* Brochure Information */}
              <div className="relative z-10">

                <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest mb-1">
                  OFFICIAL SYMPOSIUM BROCHURE
                </div>

                <h3 className="font-heading font-black text-3xl text-white tracking-wider mb-2">
                  RYVONEXA{' '}
                  <span className="text-cyan-400 text-xl font-code">
                    '26
                  </span>
                </h3>

                <p className="text-xs text-gray-400 font-mono">
                  Dept. of Computer Science & Engineering
                </p>

              </div>


              {/* Event Details */}
              <div className="relative z-10 space-y-2 border-y border-white/10 py-4 my-4 text-xs font-mono text-gray-300">

                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Date:
                  </span>

                  <span className="text-cyan-300">
                    Sep 16, 2026
                  </span>
                </div>


                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Venue:
                  </span>

                  <span className="text-yellow-400 font-bold">
                    CSE Block
                  </span>
                </div>


                <div className="flex justify-between">
                  <span className="text-gray-400">
                    Total Events:
                  </span>

                  <span className="text-purple-300">
                    8 Flagship Battles
                  </span>
                </div>

              </div>


              {/* PDF Status */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-gray-400">

                <span>
                  PDF Document
                </span>

                <span className="text-cyan-400">
                  Verified Edition
                </span>

              </div>

            </div>

          </div>


          {/* =========================
              DESCRIPTION + BUTTONS
          ========================== */}
          <div className="flex flex-col justify-center">

            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              Get All Details in One Printable PDF
            </h3>


            <ul className="space-y-3 mb-8 text-sm text-gray-300 font-light">

              {/* Item 1 */}
              <li className="flex items-center gap-2.5">

                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />

                <span>
                  Comprehensive rulebook & problem statements
                </span>

              </li>


              {/* Item 2 */}
              <li className="flex items-center gap-2.5">

                <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />

                <span>
                  Detailed schedule and event coordinator details
                </span>

              </li>


              {/* Item 3 */}
              <li className="flex items-center gap-2.5">

                <CheckCircle className="w-4 h-4 text-pink-400 shrink-0" />

                <span>
                  Faculty & Student head contact details
                </span>

              </li>


              {/* Item 4 */}
              <li className="flex items-center gap-2.5">

                <CheckCircle className="w-4 h-4 text-yellow-400 shrink-0" />



              </li>

            </ul>


            {/* =========================
                BUTTONS
            ========================== */}
            <div className="flex flex-col sm:flex-row gap-3">

              {/* VIEW PDF */}
              <button
                onClick={viewBrochure}
                className="
                  btn-primary
                  py-4
                  px-6
                  text-base
                  flex
                  items-center
                  justify-center
                  gap-3
                  flex-1
                "
              >

                <ExternalLink className="w-5 h-5" />

                View Brochure

              </button>


              {/* DOWNLOAD PDF */}
              <button
                onClick={generateAndDownloadPDF}
                disabled={downloading}
                className="
                  btn-primary
                  btn-glow
                  py-4
                  px-6
                  text-base
                  flex
                  items-center
                  justify-center
                  gap-3
                  flex-1
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
              >

                <Download
                  className={`w-5 h-5 ${downloading ? 'animate-bounce' : ''
                    }`}
                />

                {downloading
                  ? 'Downloading...'
                  : 'Download PDF'}

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Brochure;