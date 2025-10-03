import { HelpCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import PricingOne from '../components/PricingOne';
import PricingSix from '../components/PricingSix';
import { useScrollAnimations } from '../utils/useScrollAnimations';

const PricingPage = () => {
  useScrollAnimations();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');

  const plans = [
    {
      name: "Essentials",
      description: "Perfect for small teams getting started",
      price: { monthly: 29, annually: 24 },
      features: [
        "ALM features",
        "Release dashboards & intuitive execution reports",
        "Requirement traceability metrics",
        "Auto create manual test case",
        "Code editor",
        "Dedicated support & tool training",
        "Data retention: Lifetime",
        "Scheduler",
        "CI/CD integration",
        "Add-On Modules (Choose as needed):",
        "Web Automation",
        "Scriptless record & playback",
        "Intelligent object recognition engine",
        "Automated reporting & analysis",
        "Cross browser testing",
        "Network API logs for test execution",
        "Web object inspector"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing teams and organizations",
      price: { monthly: 99, annually: 79 },
      features: [
        "Everything in Essentials, plus:",
        "All Web automation features",
        "Mobile Automation",
        "Mobile record & playback",
        "Native app & hybrid app support",
        "Real device & emulator support",
        "Built-in integration with device farms",
        "Desktop Automation",
        "Desktop record & playback",
        "Supports Java, .Net apps",
        "Desktop object inspector",
        "API & DB Automation",
        "API test management",
        "Scriptless API editor",
        "Integrated Postman",
        "Structural DB support (MySQL, Oracle, SQL Server, PostgreSQL, MongoDB, etc.)"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      price: { monthly: "Custom", annually: "Custom" },
      features: [
        "Includes everything in Professional, plus:",
        "SAP Automation",
        "Mainframe Automation",
        "Cloud executions",
        "Third party integrations",
        "Cloud scheduler",
        "Extensive enterprise training",
        "Custom security & compliance",
        "Premium support SLAs",
        "Contact Sales for a tailored enterprise plan"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Start with a 14-day free trial that includes all Professional features. No credit card required to begin."
    },
    {
      question: "Can I change plans at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately for upgrades, or at the next billing cycle for downgrades."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and can arrange wire transfers for Enterprise customers."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any plan. Enterprise customers receive white-glove onboarding at no additional cost."
    },
    {
      question: "What happens if I exceed my test execution limit?",
      answer: "We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase additional executions as needed."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6 animate-on-scroll">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-on-scroll animate-delay-200">
            Choose the perfect plan for your team. Start free, scale as you grow.
          </p>
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12 animate-on-scroll animate-delay-300">
            <span className={`mr-3 ${billingPeriod === 'monthly' ? 'text-white' : 'text-gray-500'}`}> 
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annually' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-purple-600 transition-transform ${
                  billingPeriod === 'annually' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${billingPeriod === 'annually' ? 'text-white' : 'text-gray-500'}`}>
              Annual
            </span>
            {billingPeriod === 'annually' && (
              <span className="ml-2 bg-green-800 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      {/* <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-[#18181b] rounded-xl p-6 shadow-lg border border-gray-800 text-white group`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-8 text-left">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    // Price removed per request; keep label for non-numeric values
                    {typeof plan.price[billingPeriod] !== 'number' && (
                      <span className="text-4xl font-bold text-white">
                        {plan.price[billingPeriod]}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5`} />
                      <span style={{color: '#f3f3f3 !important'}}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-center w-full">
                  <a
                    href={plan.cta === 'Contact Sales' ? '/request-demo' : '/request-demo'}
                    className="bg-white hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-black flex items-center justify-center w-full"
                    style={{ background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' }}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Main Pricing Plans */}
      <div className="animate-on-scroll">
        <PricingOne header={true} ptClass="bg-black" />
      </div>

      {/* Add-Ons Section */}
      <div className="animate-on-scroll">
        <PricingSix header={true} ptClass="bg-white" />
      </div>


      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing and plans.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className={`bg-[#18181b] rounded-xl p-6 shadow-lg border border-gray-800 text-white text-left animate-on-scroll ${index % 3 === 1 ? 'animate-delay-200' : index % 3 === 2 ? 'animate-delay-300' : ''}`}>
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-white mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help you find the perfect plan for your needs.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105" style={{ background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' }}>
            Talk to Sales Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;