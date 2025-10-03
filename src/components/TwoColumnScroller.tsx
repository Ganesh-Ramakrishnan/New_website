import React, { useEffect, useRef, useState } from "react";

type Topic = { id: string; title: string; tagline: string; content: string };

const sampleTopics: Topic[] = [
  { 
    id: "t1", 
    title: "Intelligent User Story Creation", 
    tagline: "Intelligent User Story Creation",
    content: "Intelligent User Story Creation - Transform raw requirements into well-structured user stories with advanced AI algorithms, streamlining agile project management and reducing backlog grooming time. Intelligent User Story Creation - Transform raw requirements into well-structured user stories with advanced AI algorithms, streamlining agile project management and reducing backlog grooming time. Intelligent User Story Creation - Transform raw requirements into well-structured user stories with advanced AI algorithms, streamlining agile project management and reducing backlog grooming time."
  },
  { 
    id: "t2", 
    title: "Streamlined Manual Test Case Authoring", 
    tagline: "Streamlined Manual Test Case Authoring",
    content: "Streamlined Manual Test Case Authoring - Leverage AI to automate the creation of manual test cases that align with functional specifications, improving test coverage and enabling faster QA cycles. Streamlined Manual Test Case Authoring - Leverage AI to automate the creation of manual test cases that align with functional specifications, improving test coverage and enabling faster QA cycles. Streamlined Manual Test Case Authoring - Leverage AI to automate the creation of manual test cases that align with functional specifications, improving test coverage and enabling faster QA cycles."
  },
  { 
    id: "t3", 
    title: "Adaptive Self-Healing Automation", 
    tagline: "Adaptive Self-Healing Automation",
    content: "Adaptive Self-Healing Automation - Utilize AI to detect and correct test failures dynamically without manual intervention, reducing false positives and improving test resilience across CI/CD pipelines. Adaptive Self-Healing Automation - Utilize AI to detect and correct test failures dynamically without manual intervention, reducing false positives and improving test resilience across CI/CD pipelines. Adaptive Self-Healing Automation - Utilize AI to detect and correct test failures dynamically without manual intervention, reducing false positives and improving test resilience across CI/CD pipelines."
  },
  { 
    id: "t4", 
    title: "AI-Powered Co-Pilot for Test Code", 
    tagline: "AI-Powered Co-Pilot for Test Code",
    content: "AI-Powered Co-Pilot for Test Code - Boost test automation efficiency with real-time AI assistance that understands programming context to help write, debug, and optimize test code faster. AI-Powered Co-Pilot for Test Code - Boost test automation efficiency with real-time AI assistance that understands programming context to help write, debug, and optimize test code faster. AI-Powered Co-Pilot for Test Code - Boost test automation efficiency with real-time AI assistance that understands programming context to help write, debug, and optimize test code faster."
  },
  { 
    id: "t5", 
    title: "Intelligent Test Data Creation", 
    tagline: "Intelligent Test Data Creation",
    content: "Intelligent Test Data Creation - Automate the creation of diverse test data sets, including boundary and edge cases, to maximize test coverage and reliability with GDPR and HIPAA compliance. Intelligent Test Data Creation - Automate the creation of diverse test data sets, including boundary and edge cases, to maximize test coverage and reliability with GDPR and HIPAA compliance. Intelligent Test Data Creation - Automate the creation of diverse test data sets, including boundary and edge cases, to maximize test coverage and reliability with GDPR and HIPAA compliance."
  },
  { 
    id: "t6", 
    title: "AI-Optimized Regression Testing", 
    tagline: "AI-Optimized Regression Testing",
    content: "AI-Optimized Regression Testing - Employ AI-powered analytics to identify critical regression tests aligned with recent code changes, business risk, and historical defect trends for faster delivery. AI-Optimized Regression Testing - Employ AI-powered analytics to identify critical regression tests aligned with recent code changes, business risk, and historical defect trends for faster delivery. AI-Optimized Regression Testing - Employ AI-powered analytics to identify critical regression tests aligned with recent code changes, business risk, and historical defect trends for faster delivery."
  },
  { 
    id: "t7", 
    title: "Conversational AI Assistant", 
    tagline: "Conversational AI Assistant",
    content: "Conversational AI Assistant - Integrate a conversational AI assistant that understands testers' and developers' queries in natural language, delivering contextual help on test execution and bug reporting. Conversational AI Assistant - Integrate a conversational AI assistant that understands testers' and developers' queries in natural language, delivering contextual help on test execution and bug reporting. Conversational AI Assistant - Integrate a conversational AI assistant that understands testers' and developers' queries in natural language, delivering contextual help on test execution and bug reporting."
  },
];

const TwoColumnScroller: React.FC<{ topics?: Topic[] }> = ({ topics = sampleTopics }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const [panelHeight, setPanelHeight] = useState(600);
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);

  // Dynamic headings for each section
  const sectionHeadings = [
    "AI for Faster Test Creation",
    "Streamlined Manual Testing",
    "Adaptive Self-Healing Technology", 
    "AI-Powered Code Assistant",
    "Intelligent Test Data Management",
    "Smart Regression Testing",
    "Conversational QA Assistant"
  ];

  useEffect(() => {
    const update = () => setPanelHeight(Math.max(window.innerHeight - 120, 320));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Removed intersection observer to prevent conflicts with manual scrolling
  // The activeIndex is now managed purely by scroll events and button clicks

  // Scroll behavior removed - navigation only through button clicks

  const goTo = (i: number) => {
    if (!rightRef.current || isScrolling.current || i === activeIndex) return;
    isScrolling.current = true;
    setActiveIndex(i);
    rightRef.current.scrollTo({ top: i * panelHeight, behavior: "smooth" });
    
    // Reset scrolling flag after animation
    setTimeout(() => {
      isScrolling.current = false;
    }, 600);
  };

  const goToPrevious = () => {
    if (activeIndex > 0) {
      goTo(activeIndex - 1);
    }
  };

  const goToNext = () => {
    if (activeIndex < topics.length - 1) {
      goTo(activeIndex + 1);
    }
  };

  return (
    <section ref={containerRef} className="w-full bg-white py-10">
      <div className="container mx-auto">
        <div 
          className="flex flex-col md:flex-row gap-6 items-start"
          style={{ 
            padding: "20px 0"
          }}
        >
          <div className="w-full md:w-[40%]">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {sectionHeadings[activeIndex]}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A comprehensive suite of features designed to streamline operations for your business.
              </p>

              {/* Arrow Navigation */}
              <div className="flex justify-center items-center space-x-8 mb-8">
                <button
                  onClick={goToPrevious}
                  disabled={activeIndex === 0}
                  className={`bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 flex items-center justify-center ${
                    activeIndex === 0 ? 'opacity-50 cursor-not-allowed bg-gray-400' : 'hover:shadow-xl hover:scale-105'
                  }`}
                  aria-label="Previous"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="text-center">
                  <span className="text-lg text-gray-700 font-semibold">
                    {activeIndex + 1} of {topics.length}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Click arrows to navigate</p>
                </div>
                
                <button
                  onClick={goToNext}
                  disabled={activeIndex === topics.length - 1}
                  className={`bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 flex items-center justify-center ${
                    activeIndex === topics.length - 1 ? 'opacity-50 cursor-not-allowed bg-gray-400' : 'hover:shadow-xl hover:scale-105'
                  }`}
                  aria-label="Next"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                {topics.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => goTo(i)}
                    className={`flex items-center gap-3 p-3 rounded-lg border text-left transition-all duration-200 ${
                      i === activeIndex 
                        ? "bg-purple-50 border-purple-200 shadow-sm" 
                        : "bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      i === activeIndex ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-500"
                    }`}>
                      📋
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{t.title}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-[60%]">
            <div
              ref={rightRef}
              style={{ 
                height: panelHeight, 
                overflowY: "auto", 
                scrollBehavior: "auto", 
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none", /* Firefox */
                msOverflowStyle: "none" /* IE and Edge */
              }}
              className="w-full border rounded-xl shadow-sm bg-white [&::-webkit-scrollbar]:hidden"
            >
              {topics.map((t, i) => (
                <div key={t.id} data-panel-index={i} style={{ minHeight: panelHeight }} className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="w-full mb-6">
                      <img 
                        src={`https://picsum.photos/seed/${i}/800/500`} 
                        alt={t.title} 
                        className="rounded-xl w-full h-64 object-cover shadow-lg" 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">{t.title}</h3>
                      <h4 className="text-xl font-semibold text-purple-600 mb-4">{t.tagline}</h4>
                      <p className="text-lg text-gray-600 leading-relaxed">{t.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumnScroller;
