import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
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
      id: 'ai-requirement-management',
      title: 'AI-Powered Requirement Management',
      description: 'Transform How You Capture & Manage Requirements',
      icon: <Zap className="h-6 w-6 text-white" />,
      details: {
        description: 'Revolutionize your requirement management with AI that automatically converts business documents, designs, and discussions into structured, traceable requirements.',
        features: [
          'Intelligent Requirement Generation - Automatically convert BRDs, specs, wireframes, Figma screens, and meeting discussions into structured Epics, Features, and User Stories',
          'Traceability & Context - Link every requirement to its source, whether a document, design element, or meeting timestamp, ensuring full visibility and accountability',
          'Quality & Priority Insights - AI detects ambiguities, highlights missing flows, and flags high-priority items to keep your requirements complete, precise, and aligned with business goals'
        ]
      }
    },
    {
      id: 'ai-release-management',
      title: 'AI-Powered Release Management',
      description: 'Plan, Predict, and Deliver Releases with Confidence',
      icon: <Shield className="h-6 w-6 text-white" />,
      details: {
        description: 'Leverage AI to anticipate risks, optimize release planning, and deliver high-quality releases with predictive insights and automated reporting.',
        features: [
          'Predictive Risk & Intelligent Planning - AI anticipates potential bottlenecks, assesses code, test results, and historical defect trends, highlights high-risk modules, and optimizes the sequencing of features, bug fixes, and test cases for smooth, efficient releases',
          'Actionable Release Insights - Calculate Go/No-Go readiness scores, detect areas likely to cause regression or failures, and receive step-by-step recommendations to mitigate risks before deployment',
          'Automated Reporting & Stakeholder Visibility - Generate real-time dashboards, scrum summaries, velocity charts, story progress, blockers, and detailed release health metrics to keep teams and stakeholders fully informed'
        ]
      }
    },
    {
      id: 'ai-test-management',
      title: 'AI-Powered Test Management',
      description: 'Smarter, Faster, and More Reliable Testing',
      icon: <Wrench className="h-6 w-6 text-white" />,
      details: {
        description: 'Transform your testing process with AI-driven test planning, intelligent execution, and automated insights for comprehensive quality assurance.',
        features: [
          'Intelligent Test Planning & Generation - AI suggests and generates test cases and automation scripts based on requirements, user stories, past defects, and risk analysis, while prioritizing tests for maximum coverage and business impact',
          'Optimized Execution & Self-Healing - Detect duplicate steps, optimize test sequences, adapt to UI changes, dynamically schedule across devices and environments, and predict failures for faster, cleaner, and more reliable testing',
          'Automated Insights & Analytics - Gain real-time test health insights, detect anomalies, ensure coverage, and generate executive-ready dashboards and reports for data-driven decisions'
        ]
      }
    },
    {
      id: 'ai-defect-management',
      title: 'AI-Powered Defect Management',
      description: 'Accelerate Defect Resolution with Intelligence',
      icon: <Target className="h-6 w-6 text-white" />,
      details: {
        description: 'Streamline defect resolution with AI-powered root cause analysis, intelligent prioritization, and automated reporting for faster issue resolution.',
        features: [
          'Root Cause & Pattern Analysis - AI examines logs, test steps, and historical defects to identify probable causes and detect recurring patterns across modules for systemic issue resolution',
          'Data-Driven Prioritization - Quickly identify, analyze, and prioritize defects to focus on high-impact issues and streamline resolution',
          'Automated Reporting & Metrics - Generate real-time dashboards, executive-ready reports, and track quality metrics across releases for continuous improvement and actionable insights'
        ]
      }
    },
    {
      id: 'ai-analytics-insights',
      title: 'AI-Powered Analytics & Insights',
      description: 'Transform Data into Actionable Intelligence',
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      details: {
        description: 'Leverage advanced AI analytics to gain deep insights into your development process, predict trends, and make data-driven decisions for continuous improvement.',
        features: [
          'Predictive Analytics & Forecasting - Advanced AI models analyze historical data to predict future trends, bottlenecks, and opportunities for optimization',
          'Performance Trend Analysis - Comprehensive analysis of development velocity, quality metrics, and team performance patterns over time',
          'Custom Dashboard Creation - Build personalized dashboards with real-time data visualization and customizable KPIs for different stakeholder needs',
          'Real-time Metrics & KPIs - Monitor critical performance indicators with live updates and automated alerts for proactive decision making'
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
            Intelligent Automation Across the ALM
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform Your Application Lifecycle Management with AI-Powered Solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 h-full">
          {/* Left Navigation */}
          <div className="lg:col-span-3 space-y-4">
            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const isExpanded = expandedCards.includes(index);
                return (
                  <div
                    key={feature.id}
                    className={`rounded-xl transition-all duration-1000 ease-in-out ${
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
                          className="p-1 rounded hover:bg-gray-600 transition-colors"
                        >
                          {isExpanded ? (
                            <ChevronUp className="h-4 w-4 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Card Description - Collapsible */}
                    <div className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                      isExpanded ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-6 pb-6">
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Detail View - Scrollable */}
          <div 
            className="lg:col-span-7 h-[600px] overflow-y-auto scrollbar-hide" 
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
                    className={`rounded-xl p-8 h-[600px] flex flex-col justify-center transition-all duration-1500 ease-in-out ${
                      isActive 
                        ? 'opacity-100 transform translate-y-0 scale-100' 
                        : isVisible 
                          ? 'opacity-30 transform translate-y-4 scale-95' 
                          : 'opacity-0 transform translate-y-8 scale-90'
                    } ${isScrolling ? 'transition-duration-800' : 'transition-duration-1500'}`}
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
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-in-out"
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
