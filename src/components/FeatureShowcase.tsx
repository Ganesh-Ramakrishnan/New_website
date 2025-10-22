import {
  CheckCircle,
  ChevronDown,
  Shield,
  Target,
  TrendingUp,
  Wrench,
  Zap
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: {
    description: string;
    features: string[];
  };
}

const FeatureShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [expandedCards, setExpandedCards] = useState<number[]>([0]); // Only first card expanded by default
  const [isScrolling, setIsScrolling] = useState(false);
  const rightSideRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  const features: Feature[] = [
    {
      id: 'smart-requirement-capture',
      title: 'Smart Requirement Capture & Management',
      description: 'Smart Requirement Capture & Management',
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      details: {
        description: 'Smart Requirement Capture & Management',
        features: [
          'Automate transformation of raw inputs into actionable Epics, Features, and User Stories.',
          'Ensure full traceability by connecting requirements to original sources.',
          'Use AI to detect gaps, ambiguities, and prioritize critical requirements.'
        ]
      }
    },
    {
      id: 'predictive-release-planning',
      title: 'Predictive & Intelligent Release Planning',
      description: 'Predictive & Intelligent Release Planning',
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      details: {
        description: 'Predictive & Intelligent Release Planning',
        features: [
          'Forecast bottlenecks and optimize release order with AI-driven insights.',
          'Make informed Go/No-Go decisions backed by risk analysis and readiness scores.',
          'Keep stakeholders aligned with real-time release dashboards and metrics.'
        ]
      }
    },
    {
      id: 'next-gen-test-creation',
      title: 'Next-Gen Test Creation & Execution',
      description: 'Next-Gen Test Creation & Execution',
      icon: <Wrench className="h-6 w-6 text-blue-500" />,
      details: {
        description: 'Next-Gen Test Creation & Execution',
        features: [
          'Generate prioritized test cases and automation scripts powered by AI analysis.',
          'Seamlessly convert user stories to manual tests, then automate with ease.',
          'Streamline API and web test creation side-by-side for comprehensive coverage.',
          'Enhance execution with self-healing, adaptive scheduling, and failure prediction.'
        ]
      }
    },
    {
      id: 'ai-driven-defect-identification',
      title: 'AI-Driven Defect Identification & Resolution',
      description: 'AI-Driven Defect Identification & Resolution',
      icon: <Target className="h-6 w-6 text-blue-500" />,
      details: {
        description: 'AI-Driven Defect Identification & Resolution',
        features: [
          'Uncover root causes and recurring defect patterns using AI-powered analysis.',
          'Focus efforts on high-impact defects through data-driven prioritization.',
          'Track quality progress and improvements with dynamic, executive-friendly reports.'
        ]
      }
    },
    {
      id: 'actionable-analytics',
      title: 'Actionable Analytics for Continuous Improvement',
      description: 'Actionable Analytics for Continuous Improvement',
      icon: <TrendingUp className="h-6 w-6 text-blue-500" />,
      details: {
        description: 'Actionable Analytics for Continuous Improvement',
        features: [
          'Leverage AI to predict trends and uncover optimization opportunities.',
          'Analyze team performance, velocity, and quality patterns over time.',
          'Customize dashboards with real-time KPIs tailored to different roles.',
          'Proactively monitor critical metrics with live updates and smart alerts.'
        ]
      }
    }
  ];

  const currentFeature = features[activeFeature];

  const toggleCardExpansion = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? [] // Close all if clicking on an open card
        : [index] // Open only the clicked card, close all others
    );
    
    // If expanding a card, scroll to that section
    if (!expandedCards.includes(index)) {
      setActiveFeature(index);
      scrollToFeature(index);
    }
  };

  const scrollToFeature = (index: number) => {
    if (rightSideRef.current) {
      const sectionHeight = rightSideRef.current.clientHeight;
      const scrollPosition = index * sectionHeight;
      rightSideRef.current.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };


  // Scroll-based feature switching with animations
  useEffect(() => {
    let ticking = false;
    let scrollTimeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!rightSideRef.current) {
            ticking = false;
            return;
          }

          setIsScrolling(true);
          
          // Clear previous timeout
          clearTimeout(scrollTimeout);
          
          // Set timeout to detect when scrolling stops
          scrollTimeout = setTimeout(() => {
            setIsScrolling(false);
          }, 150);

          const scrollTop = rightSideRef.current.scrollTop;
          const containerHeight = rightSideRef.current.clientHeight;
          const sectionHeight = containerHeight; // Each section takes full height
          
          // Calculate which section should be active based on scroll position
          const newActiveFeature = Math.round(scrollTop / sectionHeight);
          const clampedFeature = Math.max(0, Math.min(newActiveFeature, features.length - 1));

          if (clampedFeature !== activeFeature) {
            setActiveFeature(clampedFeature);
            setExpandedCards([clampedFeature]);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    const rightSide = rightSideRef.current;
    if (rightSide) {
      // Add smooth scroll behavior
      rightSide.style.scrollBehavior = 'smooth';
      
      rightSide.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        rightSide.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, [activeFeature, features.length]);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Next-Gen ALM: AI-Driven Quality and Delivery Management
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform Your Application Lifecycle Management with AI-Powered Solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left Navigation */}
          <div className="space-y-4">
            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const isExpanded = expandedCards.includes(index);
                return (
                  <div
                    key={feature.id}
                    className={`rounded-xl transition-all duration-300 ${
                      activeFeature === index
                        ? 'border-l-4 border-blue-500'
                        : ''
                    }`}
                    style={{
                      border: '1px solid rgba(75, 75, 75, 0.36)',
                      background: 'rgb(24, 24, 27)'
                    }}
                  >
                    {/* Card Header - Always Visible */}
                    <div 
                      className="p-6 cursor-pointer"
                      onClick={() => {
                        setActiveFeature(index);
                        scrollToFeature(index);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="flex-shrink-0 mt-1">
                            {feature.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className={`text-lg font-bold ${
                              activeFeature === index ? 'text-white' : 'text-gray-300'
                            }`}>
                              {feature.title}
                            </h3>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCardExpansion(index);
                          }}
                          className="p-1 rounded hover:bg-gray-600 transition-all duration-300 ease-in-out"
                        >
                          <div className={`transform transition-transform duration-500 ease-in-out ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Card Description - Collapsible */}
                    <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6">
                        <div className="space-y-2">
                          {feature.details.features.map((featureItem, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{featureItem}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Detail View - Scrollable */}
          <div 
            className="h-[600px] overflow-y-auto scrollbar-hide" 
            ref={rightSideRef} 
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth',
              scrollSnapType: 'y mandatory'
            }}
          >
            <div>
              {features.map((feature, index) => {
                const isActive = index === activeFeature;
                const isVisible = Math.abs(index - activeFeature) <= 1; // Show current and adjacent sections
                
                return (
                  <div
                    key={feature.id}
                    ref={el => featureRefs.current[index] = el}
                    className={`rounded-xl p-8 h-[600px] flex flex-col justify-center transition-all duration-700 ease-in-out ${
                      isActive 
                        ? 'opacity-100 transform translate-y-0 scale-100' 
                        : isVisible 
                          ? 'opacity-30 transform translate-y-4 scale-95' 
                          : 'opacity-0 transform translate-y-8 scale-90'
                    } ${isScrolling ? 'transition-duration-300' : 'transition-duration-700'}`}
                    style={{ 
                      scrollSnapAlign: 'start',
                      border: '1px solid rgba(75, 75, 75, 0.36)',
                      background: 'rgb(24, 24, 27)'
                    }}
                  >
                  {/* Feature Icon and Title */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      {feature.title}
                    </h2>
                  </div>

                  {/* Subtitle */}
                  <p className="text-gray-300 text-lg mb-6">
                    {feature.description}
                  </p>


                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    {feature.details.features.map((featureItem, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-300">{featureItem}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex items-center justify-end space-x-4">
                    <div className="flex-1 bg-gray-600 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((index + 1) / features.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-white font-medium">
                      {index + 1}/{features.length}
                    </span>
                  </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
