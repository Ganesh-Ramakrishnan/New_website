import React from 'react';

type ToolCardProps = {
  src: string;
  label: string;
};


const ToolCard = ({ src, label }: ToolCardProps) => (
  <div
    className="flex flex-col items-center justify-center p-8 shadow-lg"
    style={{ width: '150px', height: '150px', background: '#535353', borderRadius: 0 }}
  >
    <img src={src} alt={label} className="h-12 w-12 mb-4 object-contain" />
    <span className="text-gray-200 text-base font-medium mt-2">{label}</span>
  </div>
);

const ScrollingRow = ({ cards, direction = 'left', duration = 20 }: { cards: ToolCardProps[]; direction?: 'left' | 'right'; duration?: number }) => {
  // Duplicate cards for seamless infinite scroll
  const allCards = [...cards, ...cards];
  const animationName = direction === 'left' ? 'scrollLeft' : 'scrollRight';
  const innerRef = React.useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (innerRef.current) innerRef.current.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    if (innerRef.current) innerRef.current.style.animationPlayState = 'running';
  };

  return (
    <div style={{
      overflow: 'hidden',
      width: '100%',
      position: 'relative',
      height: '150px',
    }}>
      <div
        ref={innerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          display: 'flex',
          gap: '10px',
          width: 'max-content',
          animationName: animationName,
          animationDuration: `${duration}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          willChange: 'transform',
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {allCards.map((card, idx) => (
          <ToolCard key={idx + card.label} src={card.src} label={card.label} />
        ))}
      </div>
    </div>
  );
};

// Add keyframes for scrolling animation (use translate3d for GPU acceleration)
const style = document.createElement('style');
style.innerHTML = `
@keyframes scrollLeft {
  0% { transform: translate3d(0, 0, 0); -webkit-transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); -webkit-transform: translate3d(-50%, 0, 0); }
}
@keyframes scrollRight {
  0% { transform: translate3d(-50%, 0, 0); -webkit-transform: translate3d(-50%, 0, 0); }
  100% { transform: translate3d(0, 0, 0); -webkit-transform: translate3d(0, 0, 0); }
}
/* Optional: prefer compositor-only properties for smoother playback */
@media (prefers-reduced-motion: reduce) {
  @keyframes scrollLeft { 0% { transform: none; } 100% { transform: none; } }
  @keyframes scrollRight { 0% { transform: none; } 100% { transform: none; } }
}
`;
if (!document.head.querySelector('style[data-scroll-anim]')) {
  style.setAttribute('data-scroll-anim', 'true');
  document.head.appendChild(style);
}

const FavoriteToolsGrid: React.FC = () => (
  <section className="py-20 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Integrations & Favorite Tools</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">Connect with your favorite DevOps, collaboration, and testing tools for a seamless workflow.</p>
      </div>
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Vignette effect only for grid */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 2,
              background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.7) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 2,
              background: 'radial-gradient(circle, rgb(0 0 0 / 0%) 0%, rgba(0, 0, 0, 0.2) 60%, rgb(0 0 0) 100%)',
            }}
          />
        <div className="flex flex-col gap-[10px] items-center justify-center relative z-0">
          {/* Row 1: scroll left */}
          <ScrollingRow
            direction="left"
            duration={40}
            cards={[
              { src: "/assets/fav_tool/Slack.svg", label: "Slack" },
              { src: "/assets/fav_tool/MS teams.svg", label: "Teams" },
              { src: "/assets/fav_tool/Google chat.svg", label: "Chat" },
              { src: "/assets/fav_tool/Browser stack.svg", label: "Browser stack" },
              { src: "/assets/fav_tool/Sauce labs.svg", label: "Sauce labs" },
              { src: "/assets/fav_tool/LambdaTest.svg", label: "Lambdatest" },
              { src: "/assets/fav_tool/Kobiton.svg", label: "Kobiton" },
            ]}
          />
          {/* Row 2: scroll right */}
          <ScrollingRow
            direction="right"
            duration={40}
            cards={[
              { src: "/assets/fav_tool/Jira.svg", label: "Jira" },
              { src: "/assets/fav_tool/freshrelease.svg", label: "Fresh release" },
              { src: "/assets/fav_tool/YouTrack.svg", label: "Youtrack" },
              { src: "/assets/fav_tool/Backlog.svg", label: "Backlog" },
              { src: "/assets/fav_tool/Zepel.svg", label: "Zepel" },
              { src: "/assets/fav_tool/Bugzilla_logo_(2022) 1.svg", label: "Bugzilla" },
              { src: "/assets/fav_tool/Trello.svg", label: "Trello" },
              { src: "/assets/fav_tool/Codeship.svg", label: "Codeship" },
            ]}
          />
          {/* Row 3: scroll left */}
          <ScrollingRow
            direction="left"
            duration={40}
            cards={[
              { src: "/assets/fav_tool/Linear.svg", label: "Linear" },
              { src: "/assets/fav_tool/Jenkins_logo 1.svg", label: "Jenkins" },
              { src: "/assets/fav_tool/Circle CL.svg", label: "Circle CL" },
              { src: "/assets/fav_tool/Azure devops.svg", label: "Azure Devops" },
              { src: "/assets/fav_tool/Bamboo.svg", label: "Bamboo" },
              { src: "/assets/fav_tool/AWS.svg", label: "Aws" },
              { src: "/assets/fav_tool/Travis CI.svg", label: "Travis CL" },
            ]}
          />
        </div>
      </div>
    </div>
  </section>
);

export default FavoriteToolsGrid;
