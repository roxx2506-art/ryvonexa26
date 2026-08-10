import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

const faqs = [
  {
    q: 'Who is eligible to participate in RYVONEXA 2026?',
    a: 'Students pursuing B.E / B.Tech (CSE, IT, AI-DS) or PG degrees (M.E, MCA, M.Sc) from any accredited engineering college are eligible to participate.'
  },
  {
    q: 'Is spot registration available on the day of the event?',
    a: 'While online registration is strongly recommended to reserve lab seats and slots.'
  },
  {
    q: 'What is the registration fee structure?',
    a: 'General Symposium Registration fee is ₹500 per head, which unlocks access to selected events, official welcome kit, participation certificates, and complimentary lunch.'
  },
  {
    q: 'Will participation certificates be issued to everyone?',
    a: 'Yes, all registered candidates who attend events will receive digital certificates of participation signed by the HOD and principal.'
  },
  {
    q: 'Can I register for both Technical and Non-Technical events?',
    a: 'Absolutely! you can register for one technical and non-technical events.'
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="section-padding relative z-10">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <div className="section-badge">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            Questions & Support
          </div>
          <h2 className="section-title text-white">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card overflow-hidden border border-white/10 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-base md:text-lg text-white hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-gray-300 text-sm font-light leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
