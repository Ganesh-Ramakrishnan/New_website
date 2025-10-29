import { X } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

interface CalendlyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyPopup: React.FC<CalendlyPopupProps> = ({ isOpen, onClose }) => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      // Disable body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable body scroll
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      // Load Calendly script if not already loaded
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      
      if (!existingScript) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.head.appendChild(script);
      }

      // Initialize Calendly widget
      const initCalendly = () => {
        if (window.Calendly && calendlyRef.current) {
           window.Calendly.initInlineWidget({
             url: 'https://calendly.com/ankita-simplify3x/new-meeting',
             parentElement: calendlyRef.current,
             prefill: {},
             utm: {}
           });
        }
      };

      // Wait for Calendly to be available
      if (window.Calendly) {
        initCalendly();
      } else {
        // Wait for script to load
        const checkCalendly = setInterval(() => {
          if (window.Calendly) {
            clearInterval(checkCalendly);
            initCalendly();
          }
        }, 100);

        // Cleanup interval after 10 seconds
        setTimeout(() => clearInterval(checkCalendly), 10000);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div className="bg-white rounded-2xl w-full max-w-6xl h-[95vh] max-h-[900px] overflow-hidden shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Calendly Widget Container - No Padding, Full Size */}
        <div className="h-full w-full overflow-auto">
          <div 
            ref={calendlyRef}
            className="calendly-inline-widget w-full h-full"
            style={{ minWidth: '100%', height: '100%' }}
            data-url="https://calendly.com/ankita-simplify3x/new-meeting"
          />
        </div>
      </div>
    </div>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill: Record<string, any>;
        utm: Record<string, any>;
      }) => void;
    };
  }
}

export default CalendlyPopup;
