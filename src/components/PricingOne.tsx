import React from "react";
// pricing add-ons data
import { pricingData } from "../utils/data.ts";

type PricingItem = {
  title: string;
  price: string;
  time: string;
  bgColor?: string;
  textColor?: string;
  btnColor?: string;
  shape?: string | null;
  listItem: { li: string }[];
};

const PricingOne: React.FC<{ header?: boolean; ptClass?: string }> = ({ header, ptClass }) => {
  return (
    <section
      className={`pricing-section position-relative z-2 ${ptClass ? ptClass : ""
        }`}
    >
      <div className="container mx-auto px-4 lg:w-[90%]">
        {header && (
          <div>
            {/* <div className="row justify-content-center mb-5">
              <div className="col-lg-3">
                <div className="media d-flex align-items-center py-2 p-sm-2">
                  <div className="icon-box mb-0 bg-primary-soft rounded-circle d-block me-3">
                    <span className="fal text-primary text-center">
                      <BsCreditCard />
                    </span>
                  </div>
                  <div className="media-body fw-medium h6 mb-0">
                    No credit card required
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="media d-flex align-items-center py-2 p-sm-2">
                  <div className="icon-box mb-0 bg-success-soft rounded-circle d-block me-3">
                    <span className="fal text-success">
                      <BsCalendar2Check />
                    </span>
                  </div>
                  <div className="media-body fw-medium h6 mb-0">
                    Get 30 day free trial
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="media d-flex align-items-center py-2 p-sm-2">
                  <div className="icon-box mb-0 bg-danger-soft rounded-circle d-block me-3">
                    <span className="fal text-danger">
                      <BsCalendarX />
                    </span>
                  </div>
                  <div className="media-body fw-medium h6 mb-0">
                    Cancel anytime
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {/* Left large panel (use first pricing entry) */}
          {pricingData && pricingData.length > 0 && (
            <div className="col-span-1 lg:col-span-7 mb-4 lg:mb-0">
              {(() => {
                const main = pricingData[0] as PricingItem;
                return (
                  <div className={`position-relative rounded-md bg-white border border-grayTwo p-6 h-100 liener_bg`}>
                    <div className="flex items-start justify-between flex-wrap">
                      <div>
                        <p className={`text-sm text-red-700 font-semibold mb-2`}>Essentials</p>
                        <button className="btn btn-outline-primary border text-red-600 px-6 py-2 rounded" style={{ background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' }}>Contact Sales</button>
                      </div>
                    </div>

                    <hr className="my-6 border-dashed" />

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      <div className="col-span-1 md:col-span-7">
                        <h5 className="text-sm font-semibold mb-4">FEATURES</h5>
                        <ul className="pricing-feature-list mb-0 space-y-3 text-gray-500">
                          {main.listItem.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-2 h-2 rounded-full bg-green-400 mt-2" />
                              <span>{item.li}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-span-1 md:col-span-5 flex justify-center">
                        {/* inset add-on card (moves below on small screens) */}
                        <div className="w-full max-w-sm border rounded-md p-6 bg-white shadow-md liener_bg">
                          <div className="mb-4">
                            <span className="add-on btn btn-outline-primary border-gray text-gray px-3 py-1 mb-3 rounded-3 inline-block">ADD-ON</span>
                            <h4 className="text-xl font-semibold text-red-700 mt-2">{main.title}</h4>
                          </div>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            {main.listItem.map((li, k) => (
                              <li key={k}>{li.li}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })()}
            </div>
          )}

          {/* Right slim dark panel (use last pricing entry) */}
          {pricingData && pricingData.length > 1 && (
            <div className="col-span-1 lg:col-span-3">
              {(() => {
                const right = pricingData[pricingData.length - 1] as PricingItem;
                return (
                  <div className={`position-relative single-pricing-wrap rounded-md bg-gray-900 text-white p-6 h-full`}>
                    <p className={`text-sm text-gray-300 mb-2`}>Enterprise</p>

                    <button className="bg-red-700 px-6 py-3 rounded mb-2" style={{ background: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' }}>Request Quote</button>

                    <hr className="my-4 border-dashed border-gray-700" />

                    <h5 className="text-sm font-semibold mb-4 text-gray-300">FEATURES</h5>
                    <ul className="pricing-feature-list mb-0 space-y-3 text-gray-300">
                      {right.listItem.slice(0, 8).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-green-400 mt-2" />
                          <span>{item.li}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingOne;
