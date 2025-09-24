import React from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import Circle from "../common/Circle";
import { pricingDataPolupar } from "../utils/data.ts";

interface PricingSixProps {
  header?: boolean;
  ptClass?: string;
}

const PricingSix: React.FC<PricingSixProps> = ({ header, ptClass }) => {
  return (
    <section
      className={`py-16 relative z-10 ${ptClass ? ptClass : ""}`}
    >
  <div className="max-w-full mx-auto" style={{ marginLeft: '50px', marginRight: '50px' }}>
        {header && (
          <div>
            <div className="flex justify-center mb-12">
              <div className="lg:w-1/2 md:w-5/6">
                <div className="text-center">
                  <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
                  <p className="text-lg text-gray-600">
                    Select the perfect plan for your testing needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
  <div className="flex flex-wrap sm:flex-nowrap gap-2">
          {pricingDataPolupar.map((pricing, i) => (
            <div key={i + 1} className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/3 ${pricing.containerClassName?.replace('col-lg-4', 'md:w-1/3 lg:w-1/3').replace('col-md-6', 'md:w-1/2').replace('col-md-12', 'md:w-full')}`}>
              <div
                className={`relative rounded-lg p-6 mb-6 h-full ${
                  pricing.bgColor === "bg-dark" 
                    ? "bg-gray-900 text-white" 
                    : "bg-white"
                } ${
                  pricing.border?.includes('border') 
                    ? "border border-gray-200" 
                    : ""
                } shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                {pricing.popular && (
                  <div className="absolute -top-3 right-6 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className={`text-xl font-semibold mb-2 ${
                    pricing.bgColor === "bg-dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {pricing.title}
                  </h3>
                  <div className={`text-4xl font-bold mb-4 ${
                    pricing.bgColor === "bg-dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {pricing.price}
                    <span className="text-lg font-normal">{pricing.time}</span>
                  </div>

                  <button
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 mb-6 ${
                      pricing.btnColor === "btn-primary"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : pricing.btnColor === "btn-outline-primary"
                        ? "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                        : pricing.btnColor === "btn-outline-warning"
                        ? "border border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white"
                        : "bg-gray-600 text-white hover:bg-gray-700"
                    }`}
                    onClick={() => window.location.href = "/request-demo"}
                  >
                    {pricing.btnText}
                  </button>
                </div>

                <div className="pricing-info">
                  <p className={`font-bold mb-4 ${
                    pricing.bgColor === "bg-dark" ? "text-white" : "text-gray-900"
                  }`}>
                    FEATURES
                  </p>
                  
                  {!pricing.addOn ? (
                    <ul className="space-y-3">
                      {pricing.listItem.map((list, i) => (
                        <li
                          key={i + 1}
                          className={`flex items-start ${
                            pricing.bgColor === "bg-dark" ? "text-white" : "text-gray-600"
                          }`}
                        >
                          <Circle textColor="text-green-500" />
                          <span className="ml-3">{list.li}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <ul className="space-y-3">
                          {pricing.listItem.map((list, i) => (
                            <li
                              key={i + 1}
                              className={`flex items-start ${
                                pricing.bgColor === "bg-dark" ? "text-white" : "text-gray-600"
                              }`}
                            >
                              <Circle textColor="text-green-500" />
                              <span className="ml-3">{list.li}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        {pricing.addOn && typeof pricing.addOn === 'object' && (
                          <>
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-3">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="text-2xl font-bold text-gray-900">
                                  {pricing.addOn.price}
                                </h4>
                                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium">
                                  ADD-ON
                                </span>
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                {pricing.addOn.title}
                              </h3>
                              <ul className="space-y-2">
                                {pricing.addOn.listItem.map((list: { li: string }, i: number) => (
                                  <li key={i + 1} className="text-gray-600 text-sm">
                                    • {list.li}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="flex items-center gap-2 text-gray-600">
                              <span className="text-sm">More Add-Ons</span>
                              <FiArrowDownCircle className="text-lg" />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSix;
