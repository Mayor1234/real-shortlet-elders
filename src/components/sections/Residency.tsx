import AnimatedSection from '../shared/AnimateSection';

const Residency = () => {
  const handleRedirect = () => {
    window.open('https://wa.me/2347067826403', '_blank', 'noopener,noreferrer');
  };
  return (
    <div>
      <div className="bg-[#fff]">
        <div className="container mx-auto py-10 lg:py-16 ">
          <div className="flex flex-col px-5 justify-between items-center h-full lg:h-[500px] overflow-hidden lg:flex-row lg:px-0 lg:gap-10">
            <div className="flex-1 pb-10 lg:pb-0">
              <AnimatedSection direction={{ initial_x: 0, initial_y: 50 }}>
                <div className="flex flex-col w-full">
                  <p className="text-2xl font-garamond font-medium leading-tight text-gray-700 tracking-wide pb-5">
                    Residency <br />
                    Occupancy Brief
                  </p>
                  <div className="mb-8">
                    <p className="text-gray-600">
                      With a high request for homes in the month of December, we
                      intend to leave no stone unturned to cater to as much
                      temporary tenants as possible. This means increased
                      occupancy rates equals increased inflow using a volume
                      calculation metric.
                      <br />
                      <br />
                      With minimal time to market upon the development of the
                      scheme, we would be investing heavily to generate returns
                      upon access to a market of over 1,000+ agents with mass
                      market outreach.
                      <br />
                      <br />
                      The success of this scheme is based on the request of more
                      family filled home placement apartments, scarcity of
                      affordable apartments in the month of december for
                      families to make the most of with breaking the bank and
                      the demand for space.
                    </p>
                  </div>
                  <button
                    className="overflow-hidden font-merriweather px-6 py-3 font-semibold text-darkLight bg-pry self-center rounded-3xl"
                    onClick={handleRedirect}
                  >
                    Talk to our team
                  </button>
                </div>
              </AnimatedSection>
            </div>
            <div className="flex-1">
              <AnimatedSection
                direction={{ initial_x: 0, initial_y: 0, rotate: 360 }}
              >
                <div className="relative text-sm w-80 h-80 mt-10 lg:w-[500px] lg:h-[500px] rounded-full bg-pie-chart lg:mt-0 mx-auto">
                  <div className="absolute top-20 -right-5 lg:right-5 text-light transform -translate-x-1/2 font-bold text-sm">
                    January (26.3%)
                  </div>
                  <div className="absolute bottom-24 lg:bottom-28 -right-12 lg:-right-3 text-light transform -translate-x-1/2  font-bold text-sm">
                    November (21.1%)
                  </div>
                  <div className="absolute top-40 -left-12 lg:-left-0 text-light transform translate-x-1/2 font-bold text-sm">
                    December (56.2%)
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
