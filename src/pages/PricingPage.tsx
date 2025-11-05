import { ChevronDown, HelpCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import PricingComponent from '../components/PricingComponent';
import { useScrollAnimations } from '../utils/useScrollAnimations';

const PricingPage = () => {
  useScrollAnimations();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What types of processes can you automate?",
      answer: "We specialize in automating repetitive workflows across operations, marketing, sales, and customer support using AI and custom logic."
    },
    {
      question: "Do I need technical knowledge to use your service?",
      answer: "Not at all. Our team handles the setup, integration, and optimization. You just focus on your goals — we'll automate the rest."
    },
    {
      question: "Can you integrate with our existing tools?",
      answer: "Yes! We support integrations with CRMs, project management tools, communication apps, and more — tailored to your stack."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation typically takes 2-4 weeks depending on complexity. We work closely with your team to ensure smooth deployment and minimal disruption."
    },
    {
      question: "Is your AI secure and compliant?",
      answer: "Absolutely. We follow enterprise-grade security protocols and comply with GDPR, CCPA, and other industry standards to protect your data."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      <PricingComponent />

      {/* FAQ Section */}
      <section 
        className="py-16"
        style={{
          background: 'linear-gradient(to bottom, var(--color-bg-translucent), transparent 20%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about our pricing and plans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Still Have Questions */}
            <div className="animate-on-scroll">
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700/50 rounded-full mb-6">
                    <HelpCircle className="h-8 w-8 text-gray-300" />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Still Have Questions?
                  </h2>
                  <p className="text-gray-400 mb-8">
                    Still have questions? Feel free to get in touch with us today!
                  </p>
                  <button className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200">
                    Ask A Question
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - FAQ Accordions */}
            <div className="space-y-4 animate-on-scroll animate-delay-200">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    <div className={`transform transition-transform duration-500 ease-in-out ${openFaq === index ? 'rotate-180' : 'rotate-0'}`}>
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className={`px-6 pb-5 transition-all duration-500 ease-in-out ${
                      openFaq === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                    }`}>
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;