import { Check } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimations } from '../utils/useScrollAnimations';
import ContactFormModal from './ContactFormModal';

const PricingComponent = () => {
  useScrollAnimations();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const baseFeatures = [
    'Test Case Management',
    'Requirements Traceability',
    'Defect Tracking',
    'Test Planning & Execution',
    'Real-time Collaboration',
    'Custom Workflows',
    'Reports & Analytics',
    'Integrations (Jira, Azure DevOps)',
  ];

  const addons = [
    {
      name: 'Web Testing',
      description: 'Cross-browser automation and visual regression testing',
      price: '$299',
      features: [
        'Selenium & Playwright Support',
        'Visual Regression Testing',
        'Cross-Browser Testing',
        'Responsive Design Testing',
        'Performance Monitoring',
      ],
    },
    {
      name: 'API & Database',
      description: 'Complete API testing and database validation suite',
      price: '$349',
      features: [
        'REST & GraphQL Testing',
        'API Test Automation',
        'Database Validation',
        'Data-Driven Testing',
        'Schema Verification',
      ],
    },
    {
      name: 'Desktop Testing',
      description: 'Native desktop application testing capabilities',
      price: '$399',
      features: [
        'Windows/Mac/Linux Support',
        'Native App Automation',
        'UI Element Recognition',
        'Desktop Performance Testing',
        'Screenshot Capture',
      ],
    },
    {
      name: 'Mobile Testing',
      description: 'iOS and Android testing on real devices and simulators',
      price: '$449',
      features: [
        'iOS & Android Support',
        'Real Device Cloud',
        'Emulator/Simulator Testing',
        'Touch Gesture Testing',
        'Mobile Performance Testing',
      ],
    },
  ];

  return (
    <div className="min-h-screen text-white">
      {/* New ALM Package Section */}


      <section className="max-w-7xl mx-auto px-6 py-16 pt-32">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent animate-on-scroll">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-zinc-400 animate-on-scroll animate-delay-200">
            Start with comprehensive ALM capabilities, then expand with powerful testing add-ons as you grow
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6">
        {/* Main ALM Package Box */}
        <div 
          className="p-12 shadow-2xl animate-on-scroll relative fade-in-up"
          style={{
            width: 'calc(100% - 180px)',
            borderRadius: '35px',
            border: '1px solid rgba(75, 75, 75, 0.36)',
            background: '#18181B'
          }}
        >
          <div className="flex gap-12" style={{ width: 'calc(100% - 180px)' }}>
            {/* Left Section - ALM Package */}
            <div style={{ flex: '2' }}>
              <div className="mb-6">
                <div className="inline-block bg-gray-700 text-white px-3 py-1 rounded-full text-xs font-medium mb-4">
                  REQUIRED BASE PACKAGE
                </div>
                <h3 className="text-4xl font-bold text-white mb-4">ALM Package</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Complete Application Lifecycle Management capabilities - Test Management, Execution, Requirements, Defect Tracking, Traceability & Analytics
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-800 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">Requirements Management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-800 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">Test Planning & Execution</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-800 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">Requirements Traceability Matrix</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-800 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">Custom Workflows & Automation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-800 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">Integrations (Jira, Azure DevOps, Git)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-800 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">Audit Trails & Compliance</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-800 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">Test Case Management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-800 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">Defect Tracking & Management</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-800 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">Real-time Collaboration</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-800 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">Advanced Reports & Analytics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-800 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">Role-based Access Control</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-gray-800 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">Document Management</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)} 
                className="bg-gray-600 hover:bg-gray-500 text-white font-semibold px-12 py-3 rounded-lg transition-colors duration-200"
              >
                Get Started
              </button>
            </div>

            {/* Right Section - Capability Cards */}
            <div 
              className="space-y-4"
              style={{
                position: 'absolute',
                right: '-125px',
                top: '50px',
                width: '300px',
                borderRadius: '25px',
                border: '1px solid rgb(68, 68, 68)',
                background: 'rgb(54 54 54 / 45%)',
                backdropFilter: 'blur(2px)',
                padding: '10px'
              }}
            >
                {/* Card 1 - Web Automation */}
                <div 
                  className="p-4 cursor-pointer"
                  style={{
                    borderRadius: '15px',
                    border: '0.5px solid rgba(18, 185, 129, 0.2)',
                    background: 'rgb(24, 24, 27)'
                  }}
                  onClick={() => {
                    const element = document.getElementById('powerful-addons');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <h4 className="text-xl font-bold text-white mb-3">Web Automation</h4>
                  <p className="text-gray-300 text-sm">Cross-browser automation and visual regression testing</p>
                </div>
                
                {/* Card 2 - API & Database */}
                <div 
                  className="p-4 cursor-pointer"
                  style={{
                    borderRadius: '15px',
                    border: '0.5px solid rgba(18, 185, 129, 0.2)',
                    background: 'rgb(24, 24, 27)',
                    marginTop: '10px'
                  }}
                  onClick={() => {
                    const element = document.getElementById('powerful-addons');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <h4 className="text-xl font-bold text-white mb-3">API & Database</h4>
                  <p className="text-gray-300 text-sm">Complete API testing and database validation suite</p>
                </div>
                
                {/* Card 3 - Desktop Testing */}
                <div 
                  className="p-4 cursor-pointer"
                  style={{
                    borderRadius: '15px',
                    border: '0.5px solid rgba(18, 185, 129, 0.2)',
                    background: 'rgb(24, 24, 27)',
                    marginTop: '10px'
                  }}
                  onClick={() => {
                    const element = document.getElementById('powerful-addons');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <h4 className="text-xl font-bold text-white mb-3">Desktop Testing</h4>
                  <p className="text-gray-300 text-sm">Native desktop application testing capabilities</p>
                </div>
                
                {/* Card 4 - Mobile Testing */}
                <div 
                  className="p-4 cursor-pointer"
                  style={{
                    borderRadius: '15px',
                    border: '0.5px solid rgba(18, 185, 129, 0.2)',
                    background: 'rgb(24, 24, 27)',
                    marginTop: '10px'
                  }}
                  onClick={() => {
                    const element = document.getElementById('powerful-addons');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <h4 className="text-xl font-bold text-white mb-3">Mobile Testing</h4>
                  <p className="text-gray-300 text-sm">iOS and Android testing on real devices and simulators</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}


      {/* Add-ons Section */}
      <section id="powerful-addons" className="max-w-7xl mx-auto px-6 pt-20 pb-20">
        <div className="text-center mb-16 animate-on-scroll">
          <h3 className="text-4xl font-bold mb-4">Powerful Add-Ons</h3>
          <p className="text-xl text-zinc-400">Extend your testing capabilities with specialized modules</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addons.map((addon, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-900/50 flex flex-col animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <h4 className="text-2xl font-bold mb-2">{addon.name}</h4>
                <p className="text-zinc-400 text-sm mb-4">{addon.description}</p>
              </div>

              <div className="flex-1 space-y-3">
                {addon.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <div className="mt-1 bg-zinc-800 rounded-full p-0.5">
                      <Check className="w-3 h-3 text-zinc-400" />
                    </div>
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PricingComponent;
