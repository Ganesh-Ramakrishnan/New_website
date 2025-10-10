import { CheckCircle } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

import { pricingData } from "../utils/data.ts";

interface PricingSixProps {
  header?: boolean;
  ptClass?: string;
}

const PricingSix: React.FC<PricingSixProps> = ({ header, ptClass }) => {
  return (
    <section className={`py-16 relative z-10 ${ptClass ? ptClass : ""}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative rounded-lg p-4 sm:p-6 lg:p-8 border-gray-800 mb-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        {header && (
          <div className="text-center mb-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Add-Ons</h2>
              <p className="text-xl text-gray-600">
                Customize Your Plan with Our Add-Ons
              </p>
            </div>
          </div>
        )}
        
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pricingData.map((pricing, i) => (
            <div key={i + 1} className="relative">
              <div
                className={`comprehensive_card_main position-relative bg-white/80 feature-gradient-bg liener_bg relative rounded-lg p-4 sm:p-6 border-gray-800 mb-6 h-full border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  pricing.bgColor === 'bg-gray-50'
                    ? 'bg-[#18181b]'
                    : pricing.bgColor === 'bg-blue-50'
                    ? 'bg-[#1e293b]'
                    : 'bg-[#1f2937]'
                }`}
                style={{ boxShadow: 'rgba(0, 0, 0, 0.18) 0px 8px 40px' }}
              >
                
                <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-gray-400 border border-gray-600 rounded-full">
                  ADD-ON
                </div>
                
                <div className="mb-6">
                  <h3 className={`text-lg sm:text-2xl font-bold`}>
                    {pricing.title}
                  </h3>
                </div>
                
                <div className="mb-8">
                  <ul className="space-y-2 text-sm sm:text-base">
                    {pricing.listItem.map((list, i) => (
                      <li key={i + 1} className="flex items-start text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{list.li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Link
                    to="/request-demo"
                    className="w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 bg-blue-600 hover:bg-blue-700"
                    style={{ background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' }}
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Background decorative shape */}
                {pricing.shape && (
                  <div className={`absolute -z-10 opacity-10 ${
                    pricing.shape === 'top-right' ? 'top-4 right-4' :
                    pricing.shape === 'bottom-left' ? 'bottom-4 left-4' :
                    'top-4 right-4'
                  }`}>
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-400 to-gray-600"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSix;
