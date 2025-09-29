
const OurOffice = () => {
  return (
    <section className="office-address-section ptb-120">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading text-center">
              <h4 className="h5 text-primary">Our Office</h4>
              <h2>Located Around the World</h2>
              {/* <p>
                Dynamically technically sound technologies with parallel task
                convergence quality vectors through excellent relationships.
              </p> */}
            </div>
          </div>
        </div>

  {/* 4 office cards using responsive Tailwind flex */}
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto lg:w-[90%]">
          {/* Card 1 */}
          <div className="w-full">
            <div
              className="rounded-md border d-block office-address overflow-hidden z-2 bg-cover bg-center h-48 sm:h-56 liener_bg"
              style={{ backgroundImage: "url('/office-img-1.png')" }}
            >
              <div className="office-content text-center p-4 h-full flex flex-col items-center justify-center">
                <span className="office-overlay"></span>
                <div className="office-info p-3 rounded-md">
                  <h5 className="font-semibold">Bengaluru, India</h5>
                  <address className="not-italic text-sm text-gray-700">
                    Head Office:
                    <br />
                    BCIT, Block 1, Ground Floor Bhartiya City, RK Hegde Nagar,
                    Bangalore.
                    <br />
                    <br />
                    +91 9019407023 (Mon - Fri)
                    <br />
                    info@simplify3x.com
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full">
            <div
              className="rounded-md border d-block office-address overflow-hidden z-2 bg-cover bg-center h-48 sm:h-56 liener_bg"
              style={{ backgroundImage: "url('/office-img-1.png')" }}
            >
              <div className="office-content text-center p-4 h-full flex flex-col items-center justify-center">
                <span className="office-overlay"></span>
                <div className="office-info p-3 rounded-md">
                  <h5 className="font-semibold">Bengaluru, India</h5>
                  <address className="not-italic text-sm text-gray-700">
                    406, 2nd & 3rd Floor 1st Block, 7th Main Hennur Road,
                    Banaswadi Bengaluru, Karnataka, India (560043)
                    <br />
                    <br />
                    +91 80 411 16728 (Mon - Fri)
                    <br />
                    info@simplify3x.com
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full">
            <div
              className="rounded-md border d-block office-address overflow-hidden z-2 bg-cover bg-center h-48 sm:h-56 liener_bg"
              style={{ backgroundImage: "url('/office-img-2.png')" }}
            >
              <div className="office-content text-center p-4 h-full flex flex-col items-center justify-center">
                <span className="office-overlay"></span>
                <div className="office-info p-3 rounded-md">
                  <h5 className="font-semibold">Orlando, Florida, USA</h5>
                  <address className="not-italic text-sm text-gray-700">
                    1317, Edgewater Dr 897, Orlando Florida (32804)
                    <br />
                    <br />
                    +1 (678) 954-3946 (Mon - Fri)
                    <br />
                    info@simplify3x.com
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full">
            <div
              className="rounded-md border d-block office-address overflow-hidden z-2 bg-cover bg-center h-48 sm:h-56 liener_bg"
              style={{ backgroundImage: "url('/office-img-3.png')" }}
            >
              <div className="office-content text-center p-4 h-full flex flex-col items-center justify-center">
                <span className="office-overlay"></span>
                <div className="office-info p-3 rounded-md">
                  <h5 className="font-semibold">Kuala Lumpur, Malaysia</h5>
                  <address className="not-italic text-sm text-gray-700">
                    466, Unit 6, Level 4, SetiaWalk Mall (Block K) SetiaWalk,
                    Persiaran Wawasan Pusat Bandar Puchong (47160)
                    <br />
                    <br />
                    +603 8602 2095 (Mon - Fri)
                    <br />
                    info@simplify3x.com
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOffice;
