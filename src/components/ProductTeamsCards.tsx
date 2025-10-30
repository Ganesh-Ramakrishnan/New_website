import { Plus, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type CardItem = {
  id: string;
  title: string;
  imageSrc?: string; // background illustration (optional)
  onClick?: () => void;
  contentTitle?: string;
  contentParagraphs?: string[];
};

type ProductTeamsCardsProps = {
  heading?: string; // backward-compat single heading
  headingTitle?: string;
  headingSubtitle?: string;
  items?: CardItem[];
};

const Card: React.FC<CardItem> = ({ title, imageSrc, onClick }) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        background: 'rgb(29 29 29 / 35%)',
        height: '345px'
      }}
    >
      <button
        type="button"
        onClick={onClick}
        className="w-full h-full text-left group reset-module__RLQqCG__reset-button relative"
        aria-haspopup="dialog"
        aria-expanded="false"
      >
        {/* Image area with bottom overlay inside as child */}
        <div className="relative h-full">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background:
                  'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.06), transparent 35%)'
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0.6)]" />

          {/* Bottom row: title + plus icon */}
          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 w-full px-6 py-6">
            <span className="font-semibold leading-tight" style={{ fontSize: '20px', color: '#d0d0d0' }}>
              {title}
            </span>
            <span
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[rgba(255,255,255,0.06)] text-gray-300 group-hover:bg-[rgba(255,255,255,0.12)] transition-colors"
              aria-hidden="true"
            >
              <Plus className="h-4 w-4" />
            </span>
          </div>
        </div>
      </button>
    </div>
  );
};

const ProductTeamsCards: React.FC<ProductTeamsCardsProps> = ({ heading = 'Built for product teams', headingTitle, headingSubtitle, items }) => {
  const [openImage, setOpenImage] = useState<string | null>(null);
  const [openTitle, setOpenTitle] = useState<string>('');
  const [modalMounted, setModalMounted] = useState(false);
  const CLOSE_ANIM_MS = 600;

  // basic body scroll lock while modal is open
  useEffect(() => {
    if (openImage) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // allow enter animation on next frame
      requestAnimationFrame(() => setModalMounted(true));
      return () => { document.body.style.overflow = prev; };
    }
  }, [openImage]);

  const closeModal = () => {
    setModalMounted(false);
    window.setTimeout(() => setOpenImage(null), CLOSE_ANIM_MS);
  };

  const demoItems: CardItem[] = [
    {
      id: 'purpose-built',
      title: 'Release & Requirement Management',
      imageSrc: '/assets/modal_image/modal-1.png',
      contentTitle: 'Plan smarter, release faster.',
      contentParagraphs: [
        'Manage requirements, analyze impacts, and streamline releases with full visibility from change to delivery.',
        'RTM (Requirements Traceability Matrix): Ensure end-to-end traceability between requirements and test cases.',
        'Impact Analysis: Instantly identify test cases affected by any change in requirements.',
        'Service Virtualization: Simulate unavailable APIs or services to enable uninterrupted testing.',
        'CI/CD Integration: Integrate seamlessly with Jenkins, Azure DevOps, and other CI/CD tools for continuous testing.'
      ]
    },
    { id: 'fast', title: 'Test Management', imageSrc: '/assets/modal_image/modal-2.png', contentTitle: 'Organize, automate, and control with ease.', contentParagraphs: [
      'Simplify the way you design, manage, and govern test assets through intuitive, code-free automation.',
      'Scriptless Automation: Build automated tests without coding using a visual, drag-and-drop interface.',
      'Workflow Builder: Customize and control your testing workflows to suit your QA process.',
      'Hybrid Test Cases: Combine manual and automated steps in one flexible test case.',
      'Admin Control: Manage user roles, access, and configurations from one secure platform.'
    ] },
    { id: 'crafted', title: 'Test Execution', imageSrc: '/assets/modal_image/modal-3.png', contentTitle: 'Accelerate testing and gain real-time insights.', contentParagraphs: [
      'Run tests faster, schedule effortlessly, and monitor execution performance through powerful dashboards.',
      'Parallel / Cloud Execution: Execute tests across multiple devices or environments simultaneously.',
      'Scheduler: Automate and plan test runs at specific intervals or release cycles.',
      'Dashboard / Business Reports: Track coverage, progress, and results with real-time analytics.',
      'Code Editor: Edit and fine-tune automation scripts directly within the platform.'
    ] }
  ];

  const cards = items && items.length > 0 ? items : demoItems;

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{headingTitle || heading}</h2>
          {headingSubtitle && (
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">{headingSubtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card
              key={card.id}
              {...card}
              onClick={() => {
                if (card.imageSrc) setOpenImage(card.imageSrc);
                setOpenTitle(card.title);
              }}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal rendered in portal to ensure it overlays header and all content */}
      {openImage && createPortal(
        (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={openTitle}
            tabIndex={-1}
            onKeyDown={(e) => { if (e.key === 'Escape') closeModal(); }}
            className="fixed inset-0 z-[10000] flex items-center justify-center"
          >
            <div
              className={`absolute inset-0 bg-black/80 transition-opacity duration-500 ease-out ${modalMounted ? 'opacity-100' : 'opacity-0'} z-0`}
              onClick={closeModal}
            />
          <div
            className={`relative z-10 w-[92vw] max-w-[1100px] rounded-2xl overflow-hidden transform transition-all duration-500 ease-out ${modalMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} max-h-[85vh] overflow-y-auto`}
            style={{
              background: 'rgb(18,18,20)',
              backgroundImage: openImage ? `url(${openImage})` : undefined,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
              backgroundSize: 'contain'
            }}
          >
              {/* Sticky close button */}
              <div className="sticky top-4 z-20 flex justify-end px-4 pointer-events-none">
                <button
                  type="button"
                  aria-label="Close"
                  onClick={closeModal}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white/20 cursor-pointer pointer-events-auto"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Content area (starts from top; container scrolls) */}
              <div className="px-6 py-8" style={{ marginTop: 'calc(-275px + 100vh)' }}>
                <p className="text-gray-300 text-lg mb-2">{openTitle}</p>
                <h4 className="text-3xl md:text-5xl font-semibold text-white mb-6">{(cards.find(c => c.title === openTitle)?.contentTitle) || openTitle}</h4>
                <div className="space-y-4">
                  {(cards.find(c => c.title === openTitle)?.contentParagraphs || []).map((p, i) => (
                    <p key={i} className="text-gray-300 text-base leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ),
        document.body
      )}
    </section>
  );
};

export default ProductTeamsCards;


