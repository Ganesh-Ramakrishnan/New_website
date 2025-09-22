import { BarChart3, Cpu, GitBranch, Users, Zap } from 'lucide-react';
import React, { useState } from 'react';

const featureCategories = [
  {
    icon: <Users className="w-7 h-7 text-white" />,
    title: 'Smarter Control',
    subtitle: 'One sign-in for all roles',
    color: 'from-blue-600 to-cyan-600',
    features: [
      'Custom team & project layouts with flexible field configuration',
      'Organize by product lines and business units for scalability',
      'Advanced role-based access control with granular permissions',
      'Multi-tenant architecture for enterprise security',
    ],
    bg: 'from-blue-600/10 to-cyan-600/10',
  },
  {
    icon: <Cpu className="w-7 h-7 text-white" />,
    title: 'AI Assistance',
    subtitle: 'AI-generated acceptance criteria',
    color: 'from-purple-600 to-indigo-600',
    features: [
      'End-to-end self-healing with intelligent flakiness detection',
      'AI assistant for smart test case generation and suggestions',
      'Automated test optimization and performance enhancement',
      'Machine learning-powered failure analysis and resolution',
    ],
    bg: 'from-purple-600/10 to-indigo-600/10',
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-white" />,
    title: 'Dynamic Test Data',
    subtitle: 'Auto-generate data',
    color: 'from-green-600 to-emerald-600',
    features: [
      'Parameterize manual and automated tests with dynamic variables',
      'Create reusable functions and components across projects',
      'Smart data generation with realistic test datasets',
      'Advanced data masking for security and compliance',
    ],
    bg: 'from-green-600/10 to-emerald-600/10',
  },
  {
    icon: <GitBranch className="w-7 h-7 text-white" />,
    title: 'Virtualization & Integrations',
    subtitle: 'DevOps integration',
    color: 'from-cyan-600 to-blue-600',
    features: [
      'Connect to Jenkins, Azure, GitLab, Jira',
      'Advanced service virtualization capabilities',
      'API mocking and simulation tools',
      'Real-time integration monitoring',
    ],
    bg: 'from-cyan-600/10 to-blue-600/10',
  },
  {
    icon: <Zap className="w-7 h-7 text-white" />,
    title: 'Modern Execution',
    subtitle: 'Resume failed runs from any step',
    color: 'from-orange-600 to-red-600',
    features: [
      'Unified manual and automation test suites in one platform',
      'Effortless scheduling with remote execution capabilities',
      'Automatic step-wise screenshots and detailed logging',
      'Parallel execution with intelligent load balancing',
    ],
    bg: 'from-orange-600/10 to-red-600/10',
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-white" />,
    title: 'Powerful Reporting',
    subtitle: 'Drag-and-drop requirements',
    color: 'from-indigo-600 to-purple-600',
    features: [
      'Role-based dashboards with fully customizable reports',
      'Detailed step-level logs and custom notification systems',
      'Real-time analytics with predictive insights and trends',
      'Executive summaries and automated compliance reporting',
    ],
    bg: 'from-indigo-600/10 to-purple-600/10',
  },
];


const getCardsVisible = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 640) {
      return 1;
    } else if (window.innerWidth < 1024) {
      return 2;
    }
  }
  return 3;
};
const FeatureCategorySlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsVisible, setCardsVisible] = useState(getCardsVisible());
  const totalCards = featureCategories.length;

  React.useEffect(() => {
    const handleResize = () => {
      setCardsVisible(getCardsVisible());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextCard = () => {
    if (currentIndex < totalCards - cardsVisible) setCurrentIndex(currentIndex + 1);
  };
  const prevCard = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="relative">
      {/* Overlay gradients to hide card edges */}
  <div className="hidden sm:block pointer-events-none absolute top-0 left-0 h-full w-12 z-20" style={{background: 'linear-gradient(to left, rgb(8 9 10) 90%, transparent)' }}></div>
  <div className="hidden sm:block pointer-events-none absolute top-0 right-0 h-full w-12 z-20" style={{background: 'linear-gradient(to left, rgb(8 9 10) 90%, transparent)' }}></div>
      {/* Overlay arrows */}
      <div className="overflow-hidden px-2 sm:px-8" style={{maxWidth: '1200px', margin: '0 auto'}}>
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / cardsVisible)}%)`, width: '100%' }}
        >
          {featureCategories.map((card, idx) => (
            <div
              key={idx}
              className={`px-2 sm:px-3 min-w-full sm:min-w-[50%] md:min-w-[33.3333%] max-w-full sm:max-w-[50%] md:max-w-[33.3333%]`}
              style={{ boxSizing: 'border-box' }}
            >
              <div className="group relative">
                <div className={`absolute inset-0 ${card.bg} rounded-2xl transform group-hover:scale-105 transition-transform duration-300`}></div>
                <div className="min-h-365 relative backdrop-blur-sm border border-gray-200/50 rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col feature-gradient-bg liener_bg">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg`}>
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-bold text-gray-900">{card.title}</h3>
                      <p className="font-medium text-xs sm:text-sm light_grey">{card.subtitle}</p>
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3 flex-grow">
                    {card.features.map((feature, i) => (
                      <div key={i} className="flex items-start group/item">
                        <div className={`w-2 h-2 rounded-full mr-2 sm:mr-3 mt-2 group-hover/item:scale-125 transition-transform duration-200 ${card.color.split(' ')[0]}`}></div>
                        <span className="text-gray-700 text-xs sm:text-sm leading-relaxed light_grey">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dots navigation */}
      <div className="flex justify-center items-center space-x-6 mt-6">
        <button
          onClick={prevCard}
          disabled={currentIndex === 0}
          className={`bg-gray-700 hover:bg-gray-500 text-white rounded-full p-2 shadow-lg transition-all duration-200 flex items-center justify-center ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={nextCard}
          disabled={currentIndex >= totalCards - cardsVisible}
          className={`bg-gray-700 hover:bg-gray-500 text-white rounded-full p-2 shadow-lg transition-all duration-200 flex items-center justify-center ${currentIndex >= totalCards - cardsVisible ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

export default FeatureCategorySlider;
