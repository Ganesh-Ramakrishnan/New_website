import { X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface CalendlyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: object;
        utm?: object;
      }) => void;
    };
  }
}

const CalendlyPopup: React.FC<CalendlyPopupProps> = ({ isOpen, onClose }) => {
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Initialize Calendly widget when popup opens
  useEffect(() => {
    if (!isOpen || !calendlyContainerRef.current) return;

    setIsLoading(true);

    const initCalendly = () => {
      if (window.Calendly && calendlyContainerRef.current) {
        // Clear the container first
        calendlyContainerRef.current.innerHTML = '';

        // Initialize Calendly widget
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/ankita-simplify3x/new-meeting?hide_gdpr_banner=1',
          parentElement: calendlyContainerRef.current,
        });

        // Hide loader after widget fully loads
        setTimeout(() => setIsLoading(false), 3000);
      }
    };

    // Check if Calendly is already loaded
    if (window.Calendly) {
      initCalendly();
    } else {
      // Wait for Calendly to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          initCalendly();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkCalendly), 10000);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      {/* Hide Calendly's built-in loading spinner */}
      <style>{`
        .calendly-spinner { display: none !important; }
        .calendly-loading-spinner { display: none !important; }
        .calendly-inline-widget .calendly-spinner { display: none !important; }
        .calendly-inline-widget iframe { background: #09152f !important; }
        @keyframes pulseZoom {
          0% { transform: scale(0.6); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(0.6); opacity: 0.5; }
        }
        .animate-pulse-zoom { animation: pulseZoom 1.4s ease-in-out infinite; }
      `}</style>

      {/* Full page loader */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ background: 'rgba(9, 21, 47, 0.85)' }}>
          <img src="/favicon.ico" alt="Loading..." className="w-24 h-24 animate-pulse-zoom" style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 1)) drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))' }} />
        </div>
      )}

      <div className="w-full max-w-[1100px] h-[90vh] relative rounded-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 text-white hover:text-gray-300 transition-colors p-2 hover:bg-gray-800 rounded-full"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Calendly widget container */}
        <div
          ref={calendlyContainerRef}
          style={{ width: '100%', height: '100%', minWidth: '320px', opacity: isLoading ? 0 : 1 }}
        />
      </div>
    </div>
  );
};

export default CalendlyPopup;
