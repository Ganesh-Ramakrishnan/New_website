import React, { useState } from 'react';

type AIFeature = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
};

const baseFeatures = [
  {
    id: 'test-creation',
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17ZM17 21V11H13V7H7V19H17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
    image: '/assets/gif_1.gif'
  },
  {
    id: 'genai-assertions',
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
    image: '/assets/gif_2.gif'
  },
  {
    id: 'genai-db-script',
    icon: (
      <div className="w-full h-full flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M21 12C21 13.66 16.97 15 12 15S3 13.66 3 12" stroke="currentColor" strokeWidth="2"/>
          <path d="M3 5V19C3 20.66 7.03 22 12 22S21 20.66 21 19V5" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>
    ),
    image: '/assets/gif_1.gif'
  }
];

const AIFeaturesShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<string>('test-creation');
  const [headingIndex, setHeadingIndex] = useState<number>(0);

  // Dynamic headings array
  const dynamicHeadings = [
    "AI for Faster Test Creation",
    "Streamlined Manual Testing", 
    "Adaptive Self-Healing Technology",
    "AI-Powered Code Assistant",
    "Intelligent Test Data Management",
    "Smart Regression Testing",
    "Conversational QA Assistant"
  ];

  // Dynamic card content based on heading index
  const getDynamicCardContent = () => {
    const cardContents = [
      {
        title: "Intelligent User Story Creation",
        description: "Automatically generate clear, detailed user stories from requirements."
      },
      {
        title: "Streamlined Manual Test Case Authoring",
        description: "Generate detailed manual test cases automatically to ensure full coverage."
      },
      {
        title: "Adaptive Self-Healing Automation",
        description: "AI-driven test scripts that automatically adapt to application changes."
      },
      {
        title: "AI-Powered Co-Pilot for Test Code",
        description: "Real-time smart code suggestions and debugging within your IDE."
      },
      {
        title: "Intelligent Test Data Creation",
        description: "Generate realistic, compliant test data sets automatically."
      },
      {
        title: "AI-Optimized Regression Testing",
        description: "Prioritize tests intelligently to speed up regression cycles."
      },
      {
        title: "Conversational AI Assistant",
        description: "Instant QA support and guidance through natural language chat."
      }
    ];
    return cardContents[headingIndex] || cardContents[0];
  };

  // Generate dynamic aiFeatures based on current heading
  const getAIFeatures = (): AIFeature[] => {
    const dynamicContent = getDynamicCardContent();
    return baseFeatures.map(feature => ({
      ...feature,
      title: dynamicContent.title,
      description: dynamicContent.description
    }));
  };

  const getCurrentFeature = () => {
    const aiFeatures = getAIFeatures();
    return aiFeatures.find(feature => feature.id === activeFeature) || aiFeatures[0];
  };

  const goToPreviousHeading = () => {
    if (headingIndex > 0) {
      setHeadingIndex(headingIndex - 1);
    }
  };

  const goToNextHeading = () => {
    if (headingIndex < dynamicHeadings.length - 1) {
      setHeadingIndex(headingIndex + 1);
    }
  };

  return (
    <section className="py-8 md:py-16 bg-white relative">
      {/* Left Arrow - Closer to Container */}
      <button
        onClick={goToPreviousHeading}
        disabled={headingIndex === 0}
        className={`absolute left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-700 rounded-full p-3 shadow-lg transition-all duration-200 ${
          headingIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:shadow-xl'
        }`}
        aria-label="Previous Section"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow - Closer to Container */}
      <button
        onClick={goToNextHeading}
        disabled={headingIndex === dynamicHeadings.length - 1}
        className={`absolute right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-700 rounded-full p-3 shadow-lg transition-all duration-200 ${
          headingIndex === dynamicHeadings.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:shadow-xl'
        }`}
        aria-label="Next Section"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header with Dynamic Title */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 transition-all duration-300">
            {dynamicHeadings[headingIndex]}
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row relative lg:items-stretch lg:gap-0">
          {/* Left Sidebar - Feature List */}
          <div className="w-full lg:w-1/2 space-y-3 relative mb-6 lg:mb-0 flex flex-col">
            {getAIFeatures().map((feature) => (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`flex items-start gap-4 p-4 md:p-6 cursor-pointer transition-all duration-200 relative min-h-[120px] md:min-h-[130px] linear_bg ${
                  activeFeature === feature.id
                    ? 'text-white rounded-l-lg opacity-100'
                    : 'text-white rounded-l-lg border-t border-b border-l border-gray-700 opacity-40 hover:opacity-100'
                }`}
                style={{
                  boxShadow: 'rgba(207, 231, 255, 0.2) 0px 1px 0px 0px inset, rgba(207, 231, 255, 0.1) 0px -1px 0px 0px inset, rgba(207, 231, 255, 0.1) 1px 0px 0px 0px inset, rgba(207, 231, 255, 0.1) -1px 0px 0px 0px inset',
                  backgroundColor: activeFeature === feature.id ? '#141516 !important' : undefined,
                  border: activeFeature === feature.id ? 'unset' : undefined
                }}
              >
                {/* Icon */}
                <div 
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center relative z-20 ${
                    activeFeature === feature.id 
                      ? 'bg-purple-700 text-white' 
                      : 'bg-purple-600 text-white'
                  }`}
                >
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0 relative z-20 flex flex-col justify-center">
                  <h3 className="font-semibold text-sm md:text-base mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className={`text-xs md:text-sm leading-relaxed line-clamp-3 ${
                    activeFeature === feature.id ? 'text-purple-100' : 'text-gray-300'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Panel - Feature Interface */}
          <div className="w-full lg:w-1/2 m-0 flex flex-col">
            <div className="linear_bg border-t border-b border-r border-gray-700 rounded-lg lg:rounded-r-lg lg:rounded-l-none overflow-hidden flex-1 flex flex-col" style={{boxShadow: 'rgba(207, 231, 255, 0.2) 0px 2px 1px 0px inset, rgba(207, 231, 255, 0.1) 0px -1px 1px 0px inset', backgroundColor: '#141516 !important'}}>
              {/* Image Area Only */}
              <div className="flex-1 linear_bg flex items-center justify-center relative overflow-hidden min-h-[300px] lg:min-h-0 p-5">
                <img
                  key={activeFeature} // This ensures smooth transitions when switching
                  src={getCurrentFeature().image}
                  alt={getCurrentFeature().title}
                  className="w-full h-full transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesShowcase;
