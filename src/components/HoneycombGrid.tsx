import React, { useState } from 'react';

type HexagonCellProps = {
  icon: string;
  label: string;
  size?: number;
  animationDelay?: number;
  pulseType?: 'big' | 'small';
};

const HexagonCell: React.FC<HexagonCellProps> = ({
  icon,
  label,
  size = 130,
  animationDelay = 0,
  pulseType = 'big'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // For a pointy-top hexagon: width = size, height = size * 2 / sqrt(3) ≈ size * 1.1547
  const width = size;
  const height = size * 1.1547;

  const animationName = pulseType === 'big' ? 'hexPulseBig' : 'hexPulseSmall';

  return (
    <div
      className="hexagon-cell-animated"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        filter: isHovered ? 'drop-shadow(0 0 20px rgba(100, 160, 220, 0.5))' : 'none',
        zIndex: isHovered ? 10 : 1,
        animation: isHovered ? 'none' : `${animationName} 3s ease-in-out infinite`,
        animationDelay: `${animationDelay}s`,
        transform: isHovered ? 'scale(1.1)' : undefined,
        transition: 'filter 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hexagon SVG background - pointy top */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 100 115.47"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <defs>
          <linearGradient id={`hexGrad-${label.replace(/\s/g, '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isHovered ? '#1e3a5f' : '#101c2c'} />
            <stop offset="100%" stopColor={isHovered ? '#243f5f' : '#152538'} />
          </linearGradient>
        </defs>
        <polygon
          points="50,0 100,28.87 100,86.60 50,115.47 0,86.60 0,28.87"
          fill={`url(#hexGrad-${label.replace(/\s/g, '')})`}
          stroke={isHovered ? '#4080b0' : '#283848'}
          strokeWidth="2"
          style={{ transition: 'all 0.3s ease' }}
        />
      </svg>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={icon}
          alt={label}
          style={{
            width: '36px',
            height: '36px',
            objectFit: 'contain',
            marginBottom: '10px',
          }}
        />
        <span
          style={{
            color: isHovered ? '#b0d0f0' : '#708090',
            fontSize: '10px',
            fontWeight: 700,
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            transition: 'color 0.3s ease',
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

const HoneycombGrid: React.FC<{ className?: string }> = ({ className = '' }) => {
  const hexSize = 130;
  const hexWidth = hexSize;
  const hexHeight = hexSize * 1.1547;

  // Add spacing between hexagons
  const horizontalSpacing = 10; // horizontal gap between hexagons

  // For honeycomb with spacing
  const colStep = hexWidth + horizontalSpacing;
  const rowStep = hexHeight * 0.87;

  // Define exact positions - 2 rows layout
  const items = [
    // Row 0: 6 hexagons
    { row: 0, col: 0, icon: '/assets/fav_tool/Azure devops.svg', label: 'Azure' },
    { row: 0, col: 1, icon: '/assets/fav_tool/Jira.svg', label: 'Jira' },
    { row: 0, col: 2, icon: '/assets/fav_tool/MS teams.svg', label: 'Teams' },
    { row: 0, col: 3, icon: '/assets/fav_tool/Browser stack.svg', label: 'Browser Stack' },
    { row: 0, col: 4, icon: '/assets/fav_tool/sauce_lab.svg', label: 'Sauce Labs' },
    { row: 0, col: 5, icon: '/assets/fav_tool/AWS.svg', label: 'AWS' },

    // Row 1: 5 hexagons (offset for honeycomb effect)
    { row: 1, col: 0.5, icon: '/assets/fav_tool/gitlab.svg', label: 'GitLab' },
    { row: 1, col: 1.5, icon: '/assets/fav_tool/concourse.svg', label: 'Concourse' },
    { row: 1, col: 2.5, icon: '/assets/fav_tool/bamboo.svg', label: 'Bamboo' },
    { row: 1, col: 3.5, icon: '/assets/fav_tool/Jenkins_logo 1.svg', label: 'Jenkins' },
    { row: 1, col: 4.5, icon: '/assets/fav_tool/Slack.svg', label: 'Slack' },
  ];

  // Calculate container dimensions for 2 rows
  const maxCol = 5;
  const maxRow = 1;
  const containerWidth = (maxCol + 1) * colStep + hexWidth * 0.5;
  const containerHeight = (maxRow + 1) * rowStep + hexHeight * 0.5;

  return (
    <section
      className={`pt-20 overflow-hidden ${className}`}
    >
      <style>
        {`
          @keyframes hexPulseBig {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.08);
            }
          }

          @keyframes hexPulseSmall {
            0%, 100% {
              transform: scale(1.08);
            }
            50% {
              transform: scale(1);
            }
          }
        `}
      </style>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Connect. Orchestrate. Deliver.
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl text-blue-100/80 max-w-3xl mx-auto"
            style={{ fontWeight: 400, letterSpacing: '0.3px' }}
          >
            Bridge the gap between fragmented tools. Turn your disconnected CI/CD, management, and testing tools into a single, unified delivery engine for integration
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div
            style={{
              position: 'relative',
              width: containerWidth,
              height: containerHeight,
            }}
          >
            {items.map((item, index) => {
              const x = item.col * colStep;
              const y = item.row * rowStep;
              // Alternate between big and small pulse animation
              const pulseType = index % 2 === 0 ? 'big' : 'small';
              // Stagger animation delays
              const delay = index * 0.15;

              return (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    left: x,
                    top: y,
                  }}
                >
                  <HexagonCell
                    icon={item.icon}
                    label={item.label}
                    size={hexSize}
                    animationDelay={delay}
                    pulseType={pulseType}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoneycombGrid;
