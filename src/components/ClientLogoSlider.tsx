// Removed ChevronLeft, ChevronRight imports as manual controls are removed
import { useEffect, useRef, useState } from 'react';

const clientLogos = [
  { src: '/assets/client/AKPK Logo.svg', alt: 'AKPK' },
  { src: '/assets/client/Analec logo.svg', alt: 'Analec' },
  { src: '/assets/client/BMMB.svg', alt: 'BMMB' },
  { src: '/assets/client/CARELON.svg', alt: 'Carelon' },
  { src: '/assets/client/carwford.svg', alt: 'Carwford' },
  { src: '/assets/client/CGC.svg', alt: 'CGC' },
  { src: '/assets/client/Dexcom Logo.svg', alt: 'Dexcom' },
  { src: '/assets/client/Dr reddys laboratory.svg', alt: 'Dr Reddys Laboratory' },
  { src: '/assets/client/Elevence health.svg', alt: 'Elevence Health' },
  { src: '/assets/client/Envista Logo.svg', alt: 'Envista' },
  { src: '/assets/client/Equity.svg', alt: 'Equity' },
  { src: '/assets/client/euNetworks.svg', alt: 'euNetworks' },
  { src: '/assets/client/Finfort Logo.svg', alt: 'Finfort' },
  { src: '/assets/client/Globitel.svg', alt: 'Globitel' },
  { src: '/assets/client/hucu.svg', alt: 'Hucu' },
  { src: '/assets/client/IQST Logo.svg', alt: 'IQST' },
  { src: '/assets/client/leapscholar.svg', alt: 'Leap Scholar' },
  { src: '/assets/client/logisfleet.svg', alt: 'Logisfleet' },
  { src: '/assets/client/Malaysia Airlines Logo.svg', alt: 'Malaysia Airlines' },
  { src: '/assets/client/Net Health.svg', alt: 'Net Health' },
  { src: '/assets/client/Perfios-Logo.svg', alt: 'Perfios' },
  { src: '/assets/client/persyst.svg', alt: 'Persyst' },
  { src: '/assets/client/pirmal.svg', alt: 'Piramal' },
  { src: '/assets/client/Quest alliance.svg', alt: 'Quest Alliance' },
  { src: '/assets/client/Rawbank.svg', alt: 'Rawbank' },
  { src: '/assets/client/smartkarrot.svg', alt: 'Smartkarrot' },
  { src: '/assets/client/Smartx technologies.svg', alt: 'Smartx Technologies' },
  { src: '/assets/client/SMFG-Logo.svg', alt: 'SMFG' },
  { src: '/assets/client/Svatantra.svg', alt: 'Svatantra' },
  { src: '/assets/client/technotree.svg', alt: 'Technotree' },
  { src: '/assets/client/UST Global Logo.svg', alt: 'UST Global' },
  { src: '/assets/client/website logo-04.svg', alt: 'Website Logo' },
  { src: '/assets/client/worklama.svg', alt: 'Worklama' },
];


const ClientLogoSlider = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  // Duplicate logos for seamless loop
  const logos = [...clientLogos, ...clientLogos];
  const positionRef = useRef(0);
  const reqIdRef = useRef(0);
  const speed = 1.0; // px per frame (matching tools speed)

  // Responsive visible cards
  const getCardsVisible = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 600) {
      return 3;
    }
    return 5;
  };
  const [cardsVisible, setCardsVisible] = useState(getCardsVisible());

  useEffect(() => {
    const handleResize = () => {
      setCardsVisible(getCardsVisible());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Marquee auto-scroll effect with pause on arrow hover
  const isPausedRef = useRef(false);
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    let start = positionRef.current;
    const animate = () => {
      if (!isPausedRef.current) {
        start -= speed;
        if (Math.abs(start) >= marquee.scrollWidth / 2) {
          start = 0;
        }
        marquee.style.transform = `translateX(${start}px)`;
        positionRef.current = start;
      }
      reqIdRef.current = requestAnimationFrame(animate);
    };
    reqIdRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(reqIdRef.current);
  }, []);

  // Pause/resume auto-scroll on hover (like tools grid)
  const handleMouseEnter = () => {
    isPausedRef.current = true;
  };
  const handleMouseLeave = () => {
    isPausedRef.current = false;
  };

  // Removed manual scroll controls for continuous looping

  return (
    <div 
      className="relative py-8 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Logo Marquee - continuous loop */}
      <div className="overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex"
          style={{ willChange: 'transform' }}
        >
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className={`min-w-[${100/cardsVisible}%] max-w-[${100/cardsVisible}%] flex items-center justify-center px-6`}
              style={{ boxSizing: 'border-box', minWidth: `${100/cardsVisible}%`, maxWidth: `${100/cardsVisible}%` }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-32 h-20 object-contain rounded-xl shadow"
                style={{}}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogoSlider;
