import { X } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

interface CalendlyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyPopup: React.FC<CalendlyPopupProps> = ({ isOpen, onClose }) => {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

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
    if (isOpen && !isInitialized.current) {
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
        if (window.Calendly && calendlyRef.current && !isInitialized.current) {
          isInitialized.current = true;
          
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/ankita-simplify3x/new-meeting',
            parentElement: calendlyRef.current,
            prefill: {},
            utm: {}
          });

          // Try to size container to Calendly iframe height
          const parentEl = calendlyRef.current;
          const tryResize = () => {
            const iframe = parentEl.querySelector('iframe') as HTMLIFrameElement | null;
            if (iframe && containerRef.current) {
              const px = iframe.style.height || iframe.getAttribute('height') || '';
              if (px.endsWith('px')) {
                containerRef.current.style.height = px;
              }
            }
          };

          // Observe changes inside calendly to keep height in sync
          const mo = new MutationObserver(() => tryResize());
          mo.observe(parentEl, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'height'] });

          // Initial attempts
          tryResize();
          setTimeout(tryResize, 500);
          setTimeout(tryResize, 1500);
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

    // Reset initialization flag when popup closes
    if (!isOpen) {
      isInitialized.current = false;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div className="bg-transparent w-full max-w-[1100px] h-screen relative" ref={containerRef}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-700 transition-colors p-2 hover:bg-gray-100 rounded-full"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Calendly Widget Container - Fill available height */}
        <div className="w-full h-full overflow-auto">
          <div 
            ref={calendlyRef}
            className="calendly-inline-widget w-full h-full"
            style={{ minWidth: '320px', height: '100%' }}
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
