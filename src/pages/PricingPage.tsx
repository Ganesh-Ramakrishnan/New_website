import React, { useState } from 'react';
import { CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';

const PricingPage = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annually'>('monthly');

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      price: { monthly: 29, annually: 24 },
      features: [
        "Up to 1,000 test executions/month",
        "5 team members",
        "Basic reporting",
        "Email support",
        "Web testing only",
        "Standard integrations"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing teams and organizations",
      price: { monthly: 99, annually: 79 },
      features: [
        "Up to 10,000 test executions/month",
        "25 team members",
        "Advanced analytics",
        "Priority support",
        "Web + Mobile testing",
        "Premium integrations",
        "Custom reporting",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      price: { monthly: "Custom", annually: "Custom" },
      features: [
        "Unlimited test executions",
        "Unlimited team members",
        "Enterprise analytics",
        "24/7 dedicated support",
        "All testing types",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantees",
        "Custom training"
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
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your team. Start free, scale as you grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`mr-3 ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annually' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-blue-600 transition-transform ${
                  billingPeriod === 'annually' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${billingPeriod === 'annually' ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            {billingPeriod === 'annually' && (
              <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-blue-600 text-white shadow-xl scale-105 relative'
                    : 'bg-white border border-gray-200 hover:border-blue-200 shadow-sm'
                } transition-all duration-300 hover:shadow-lg`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`${plan.popular ? 'text-blue-100' : 'text-gray-600'} mb-4`}>
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    {typeof plan.price[billingPeriod] === 'number' ? (
                      <div>
                        <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                          ${plan.price[billingPeriod]}
                        </span>
                        <span className={`${plan.popular ? 'text-blue-100' : 'text-gray-600'} text-lg`}>
                          /{billingPeriod === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                    ) : (
                      <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                        {plan.price[billingPeriod]}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 ${plan.popular ? 'text-blue-200' : 'text-green-500'} mr-3 flex-shrink-0 mt-0.5`} />
                      <span className={`${plan.popular ? 'text-blue-50' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center ${
                    plan.popular
                      ? 'bg-white text-blue-600 hover:bg-gray-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our pricing and plans.
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
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
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
            Talk to Sales Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;