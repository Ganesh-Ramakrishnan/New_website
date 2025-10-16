import {
  Cloud,
  Diamond,
  Layers,
  Users
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details: {
    subtitle: string;
    mainDescription: string;
    features: string[];
  };
}

const DataAnalyticsShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const features: Feature[] = [
    {
      id: 'release-requirement-management',
      title: 'Release & Requirement Management',
      description: 'Transform your data infrastructure with modern cloud analytics solutions that scale with your business needs.',
      icon: <Cloud className="h-6 w-6 text-white" />,
      details: {
        subtitle: 'Plan smarter, release faster.',
        mainDescription: 'Manage requirements, analyze impacts, and streamline releases with full visibility from change to delivery.',
        features: [
          'RTM (Requirements Traceability Matrix): Ensure end-to-end traceability between requirements and test cases.',
          'Impact Analysis: Instantly identify test cases affected by any change in requirements.',
          'Service Virtualization: Simulate unavailable APIs or services to enable uninterrupted testing.',
          'CI/CD Integration: Integrate seamlessly with Jenkins, Azure DevOps, and other CI/CD tools for continuous testing.'
        ]
      }
    },
    {
      id: 'test-management',
      title: 'Test Management',
      description: 'Accelerate your data science initiatives with powerful tools and automated workflows.',
      icon: <Layers className="h-6 w-6 text-white" />,
      details: {
        subtitle: 'Organize, automate, and control with ease.',
        mainDescription: 'Simplify the way you design, manage, and govern test assets through intuitive, code-free automation.',
        features: [
          'Scriptless Automation: Build automated tests without coding using a visual, drag-and-drop interface.',
          'Workflow Builder: Customize and control your testing workflows to suit your QA process.',
          'Hybrid Test Cases: Combine manual and automated steps in one flexible test case.',
          'Admin Control: Manage user roles, access, and configurations from one secure platform.'
        ]
      }
    },
    {
      id: 'test-execution',
      title: 'Test Execution',
      description: 'Adaptable solutions that work across multiple platforms and use cases for maximum flexibility.',
      icon: <Diamond className="h-6 w-6 text-white" />,
      details: {
        subtitle: 'Accelerate testing and gain real-time insights.',
        mainDescription: 'Run tests faster, schedule effortlessly, and monitor execution performance through powerful dashboards.',
        features: [
          'Parallel / Cloud Execution: Execute tests across multiple devices or environments simultaneously.',
          'Scheduler: Automate and plan test runs at specific intervals or release cycles.',
          'Dashboard / Business Reports: Track coverage, progress, and results with real-time analytics.',
          'Code Editor: Edit and fine-tune automation scripts directly within the platform.'
        ]
      }
    },
    {
      id: 'defect-management',
      title: 'Defect Management',
      description: 'Comprehensive customer analytics to understand and improve every touchpoint in the customer journey.',
      icon: <Users className="h-6 w-6 text-white" />,
      details: {
        subtitle: 'Detect faster, log smarter, resolve quicker.',
        mainDescription: 'Simplify bug tracking and resolution through auto-logging and intelligent defect insights.',
        features: [
          'Bug Genesis: Capture detailed defects automatically from failed executions with logs and screenshots.',
          'Auto Defect Logging: Automatically create and sync bugs with integrated tools like Jira for seamless defect management.'
        ]
      }
    }
  ];

  const currentFeature = features[activeFeature];

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 3000); // Change every 3 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, features.length]);

  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Why Choose SimplifyQA?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Streamline your entire development lifecycle with our comprehensive, AI-powered platform designed for modern teams who demand quality, speed, and reliability.
          </p>
        </div> */}
        <div className="border border-gray-600 rounded-xl bg-gray-800">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left Section - Feature Showcase (45%) */}
            <div 
              className="w-full lg:w-[45%]" 
              style={{ padding: '0px 50px', background: 'rgb(24, 24, 27)', borderRadius: '12px 0 0 12px' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex flex-col md:flex-row gap-1 h-full">
                {/* Column 1 - First 2 cards */}
                <div className="flex-1" style={{ gap: '10px', position: 'relative', top: '-50px' }}>
                  {features.slice(0, 2).map((feature, index) => (
                    <div
                      key={feature.id}
                      onClick={() => setActiveFeature(index)}
                      className="flex flex-col cursor-pointer transition-all duration-300 hover:scale-105"
                      style={{
                        border: activeFeature === index ? '2px solid #3B82F6' : '1px solid rgba(75, 75, 75, 0.36)',
                        background: activeFeature === index ? 'rgb(30, 30, 35)' : 'rgb(24, 24, 27)',
                        padding: '10px',
                        marginTop: '5px',
                        borderRadius: '5px',
                        boxShadow: activeFeature === index ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'none'
                      }}
                    >
                        {/* Feature Icon */}
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                            {feature.icon}
                          </div>
                        </div>

                      {/* Feature Title */}
                      <h3 className="text-lg font-bold mb-3" style={{ color: '#4A5568' }}>
                        {feature.title}
                      </h3>

                      {/* Feature Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                        {feature.id === 'release-requirement-management' ? 'Manage requirements, analyze impacts, and streamline releases with full visibility from change to delivery.' : 
                         feature.id === 'test-management' ? 'Simplify the way you design, manage, and govern test assets through intuitive, code-free automation.' : 
                         feature.id === 'test-execution' ? 'Run tests faster, schedule effortlessly, and monitor execution performance through powerful dashboards.' :
                         feature.id === 'defect-management' ? 'Simplify bug tracking and resolution through auto-logging and intelligent defect insights.' :
                         'I\'m a paragraph. Click here to add your own text and edit me. Let your users get to know you.'}
                      </p>

                      {/* Bottom Line */}
                      <div className="pt-4 border-t border-gray-600"></div>
                    </div>
                  ))}
                </div>

                {/* Column 2 - Last 2 cards */}
                <div className="flex-1" style={{ gap: '10px', position: 'relative', bottom: '-100px' }}>
                  {features.slice(2, 4).map((feature, index) => (
                    <div
                      key={feature.id}
                      onClick={() => setActiveFeature(index + 2)}
                      className="flex flex-col cursor-pointer transition-all duration-300 hover:scale-105"
                      style={{
                        border: activeFeature === (index + 2) ? '2px solid #3B82F6' : '1px solid rgba(75, 75, 75, 0.36)',
                        background: activeFeature === (index + 2) ? 'rgb(30, 30, 35)' : 'rgb(24, 24, 27)',
                        padding: '10px',
                        marginTop: '5px',
                        borderRadius: '5px',
                        boxShadow: activeFeature === (index + 2) ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'none'
                      }}
                    >
                        {/* Feature Icon */}
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                            {feature.icon}
                          </div>
                        </div>

                      {/* Feature Title */}
                      <h3 className="text-lg font-bold mb-3" style={{ color: '#4A5568' }}>
                        {feature.title}
                      </h3>

                      {/* Feature Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                        {feature.id === 'release-requirement-management' ? 'Manage requirements, analyze impacts, and streamline releases with full visibility from change to delivery.' : 
                         feature.id === 'test-management' ? 'Simplify the way you design, manage, and govern test assets through intuitive, code-free automation.' : 
                         feature.id === 'test-execution' ? 'Run tests faster, schedule effortlessly, and monitor execution performance through powerful dashboards.' :
                         feature.id === 'defect-management' ? 'Simplify bug tracking and resolution through auto-logging and intelligent defect insights.' :
                         'I\'m a paragraph. Click here to add your own text and edit me. Let your users get to know you.'}
                      </p>

                      {/* Bottom Line */}
                      <div className="pt-4 border-t border-gray-600"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Dynamic Content (55%) */}
            <div className="w-full lg:w-[55%] relative flex flex-col border-l border-gray-600 overflow-hidden" style={{
              backgroundImage: 'url(/assets/bg_main.avif)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '0 12px 12px 0'
            }}>
              {/* Background Overlay for readability */}
              <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>
              <div className="relative z-10 p-8 flex flex-col justify-center h-full">
                <div className="mb-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                    {currentFeature.title}
                  </h2>
                  <p className="text-xl text-blue-300 font-semibold mb-4">
                    {currentFeature.details.subtitle}
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    {currentFeature.details.mainDescription}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {currentFeature.details.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalyticsShowcase;
