import React, { useEffect } from 'react';
import { X, Ticket } from 'lucide-react';

const RegisterModal = ({ isOpen, onClose }) => {

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="glass-card max-w-md w-full p-6 md:p-8 relative rounded-2xl border border-cyan-500/20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2 justify-center">
            <Ticket className="w-4 h-4" />
            Registration Portal
          </div>

          <h2 className="text-2xl md:text-3xl text-white font-bold mb-2">
            Register for RYVONEXA '26
          </h2>

          <p className="text-gray-300 text-sm">
            Click below to complete your registration via Google Form.
          </p>
        </div>

        {/* Register Button */}
        <div className="flex justify-center pt-4">
          <a
            href="https://forms.gle/ULqwLTu2izgfYckC9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-3 text-center rounded-lg font-semibold hover:scale-105 transition-transform"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;