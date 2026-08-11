import React, { useState } from "react";

const BrochureModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      {/* Open Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        View Brochure
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="relative bg-white rounded-lg p-4 max-w-4xl w-full mx-4">

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-2xl font-bold text-gray-700 hover:text-black"
            >
              ✕
            </button>

            {/* Image Container (scroll if large) */}
            <div className="max-h-[80vh] overflow-auto">
              <img
                src="CSE Symposium OG Final Final.png"   // ✅ Put your image in public folder
                alt="Brochure"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Download Button */}
            <div className="mt-4 text-center">
              <a
                href="/brochure.jpg"
                download
                className="inline-block px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Download Brochure
              </a>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default BrochureModal;