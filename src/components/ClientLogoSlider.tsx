import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const clientLogos = [
  { src: '/assets/client/technotree.png', alt: 'Technotree' },
  { src: '/assets/client/Technology Mindz.png', alt: 'Technology Mindz' },
  { src: '/assets/client/Svatantra.png', alt: 'Svatantra' },
  { src: '/assets/client/Sunbots.png', alt: 'Sunbots' },
  { src: '/assets/client/SMFG india credits.png', alt: 'SMFG India Credits' },
  { src: '/assets/client/Smartx technologies.png', alt: 'Smartx Technologies' },
  { src: '/assets/client/Quest alliance.png', alt: 'Quest Alliance' },
  { src: '/assets/client/Piramal finance.png', alt: 'Piramal Finance' },
  { src: '/assets/client/Dr reddys laboratory.png', alt: 'Dr Reddys Laboratory' },
  { src: '/assets/client/carelon globalsolutions.png', alt: 'Carelon Global Solutions' },
  { src: '/assets/client/Availity.png', alt: 'Availity' },
  { src: '/assets/client/Adithya birla fashion retail.png', alt: 'Adithya Birla Fashion Retail' },
  { src: '/assets/client/images.png', alt: 'Images' },
  { src: '/assets/client/Opentext.png', alt: 'Opentext' },
  { src: '/assets/client/leap scholar.png', alt: 'Leap Scholar' },
  { src: '/assets/client/Persyst.png', alt: 'Persyst' },
];


const ClientLogoSlider = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  // Duplicate logos for seamless loop
  const logos = [...clientLogos, ...clientLogos];
  const positionRef = useRef(0);
  const reqIdRef = useRef(0);
  const speed = 1.2; // px per frame (increased speed)

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

  // Pause/resume auto-scroll on arrow hover
  const handleArrowMouseEnter = () => {
    isPausedRef.current = true;
  };
  const handleArrowMouseLeave = () => {
    isPausedRef.current = false;
  };

  // Manual scroll by arrow
  const scrollBy = (dir: 'left' | 'right') => {
    const marquee = marqueeRef.current;
    if (!marquee) return;
    let start = positionRef.current;
    // Use parent container width for card width calculation
    const parent = marquee.parentElement;
    const parentWidth = parent ? parent.offsetWidth : marquee.offsetWidth;
    const cardWidth = parentWidth / cardsVisible; // responsive visible cards
    let target = start;
    if (dir === 'left') {
      target += cardWidth;
      if (target > 0) {
        target = -marquee.scrollWidth / 2 + cardWidth;
      }
    } else {
      target -= cardWidth;
      if (Math.abs(target) >= marquee.scrollWidth / 2) {
        target = 0;
      }
    }
    // Animate the scroll smoothly
    const duration = 400; // ms
    const frameRate = 1000 / 60;
    const frames = duration / frameRate;
    const diff = target - start;
    let frame = 0;
    function animate() {
      frame++;
      const progress = frame / frames;
      const ease = 0.5 - Math.cos(progress * Math.PI) / 2; // easeInOut
      const current = start + diff * ease;
      if (marquee) {
        marquee.style.transform = `translateX(${current}px)`;
        positionRef.current = current;
      }
      if (frame < frames) {
        requestAnimationFrame(animate);
      } else {
        if (marquee) {
          marquee.style.transform = `translateX(${target}px)`;
          positionRef.current = target;
        }
      }
    }
    animate();
  };

  return (
    <div className="relative py-8 overflow-hidden">
      <div className="flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scrollBy('left')}
          onMouseEnter={handleArrowMouseEnter}
          onMouseLeave={handleArrowMouseLeave}
          aria-label="Previous"
          className="z-10 p-2 flex items-center justify-center"
          style={{ background: 'none', boxShadow: 'none', border: 'none' }}
        >
          <ChevronLeft className="h-7 w-7 text-white" />
        </button>
        {/* Logo Marquee with extra margin to prevent overlap */}
        <div className="flex-1 mx-4 overflow-hidden">
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
                  className="w-32 h-20 object-contain grayscale opacity-80 hover:opacity-100 transition duration-300 bg-white rounded-xl shadow"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right Arrow */}
        <button
          onClick={() => scrollBy('right')}
          onMouseEnter={handleArrowMouseEnter}
          onMouseLeave={handleArrowMouseLeave}
          aria-label="Next"
          className="z-10 p-2 flex items-center justify-center"
          style={{ background: 'none', boxShadow: 'none', border: 'none' }}
        >
          <ChevronRight className="h-7 w-7 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ClientLogoSlider;
