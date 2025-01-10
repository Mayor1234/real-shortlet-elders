import AnimatedSection from '../shared/AnimateSection';

const Residency = () => {
  return (
    <div>
      <div className="bg-[#fff]">
        <div className="container mx-auto py-10 lg:py-14 ">
          <div className="flex flex-col px-5 justify-between items-center h-full lg:h-auto overflow-hidden lg:flex-row lg:px-0 lg:gap-10">
            <div className="flex-1 pb-10 lg:pb-0">
              <AnimatedSection
                direction={{ initial_x: 0, initial_y: 50, duration: 0.7 }}
              >
                <div className="flex flex-col w-full">
                  <h2 className="text-xl font-garamond font-medium leading-relaxed text-gray-900 tracking-wide pb-5 uppercase">
                    Residency <br />
                    Occupancy Brief
                  </h2>
                  <div className="mb-8">
                    <p className="text-gray-800 leading-relaxed pb-5">
                      With the increased demand for affordable, family-friendly
                      housing in December, this scheme ensures high occupancy
                      rates. Leveraging a network of 1,000+ agents and market
                      outreach, we aim to generate consistent returns by meeting
                      the growing demand for temporary housing.
                    </p>
                    <div>
                      <p className="text-lg font-Montserrat text-gray-800 font-semibold pb-5">
                        Why Choose the Valentine Special Investment Scheme?
                      </p>
                      <ul className="list-disc list-outside pb-5 ml-5 flex flex-col gap-3">
                        <li>
                          High ROI: Earn a minimum of 10% returns on your
                          investment capital.
                        </li>
                        <li>
                          Transparency: Clear terms, transparent processes, and
                          guaranteed payouts.
                        </li>
                        <li>
                          Opportunity for All: Suitable for professional and
                          entry-level investors alike.
                        </li>
                      </ul>
                    </div>
                    <em>
                      Let love and opportunity thrive this Valentine season!
                    </em>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <div className="flex-1">
              <AnimatedSection
                direction={{ initial_x: 0, initial_y: 0, rotate: 360 }}
              >
                <div className="relative text-sm w-80 h-80 mt-10 lg:w-[400px] lg:h-[400px] rounded-full bg-pie-chart lg:mt-0 mx-auto">
                  <div className="absolute bottom-28 lg:bottom-40 right-10 lg:right-20 text-light transform -translate-x-1/4 font-bold text-sm">
                    January (80%)
                  </div>
                  <div className="absolute top-20 lg:top-24 -left-5 lg:left-2 text-light transform translate-x-1/2 font-bold text-sm">
                    February (20%)
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Residency;
