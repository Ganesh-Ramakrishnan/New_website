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
      {/* Hero Section */}
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

      {/* Base Plan */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10 shadow-2xl animate-on-scroll">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">Base Platform</h3>
              <p className="text-zinc-400 text-lg">Complete Application Lifecycle Management</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {baseFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-emerald-500/10 rounded-full p-1">
                    <Check className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span className="text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>

            <button onClick={() => setIsModalOpen(true)} className="w-full bg-white text-black font-semibold py-4 rounded-lg hover:bg-zinc-200 transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
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

      {/* Bundle Savings */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-10 text-center animate-on-scroll">
          <h3 className="text-3xl font-bold mb-4">Save with Complete Bundle</h3>
          <p className="text-zinc-300 mb-6 text-lg">
            Get all add-ons with the base platform for a discounted rate
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-2xl text-zinc-500 line-through">$2,495/mo</span>
            <span className="text-5xl font-bold">$2,199/mo</span>
            <span className="bg-emerald-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
              Save $296
            </span>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="bg-emerald-500 text-black font-semibold px-8 py-4 rounded-lg hover:bg-emerald-400 transition-colors duration-200">
            Get Complete Bundle
          </button>
        </div>
      </section>

      {/* FAQ or Contact */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center animate-on-scroll">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Plan?</h3>
          <p className="text-zinc-400 text-lg mb-8">
            Contact our sales team for enterprise pricing and custom solutions
          </p>
          <button onClick={() => setIsModalOpen(true)} className="border border-zinc-700 text-white font-medium px-8 py-4 rounded-lg hover:bg-zinc-900 transition-colors duration-200">
            Contact Sales
          </button>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PricingComponent;
