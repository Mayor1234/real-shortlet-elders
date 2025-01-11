import AnimatedSection from '../shared/AnimateSection';

import SectionsHeading from '../shared/SectionsHeading';
import homeOwner from '/home_owner.jpeg';

const HomeOwners = () => {
  const handleRedirect = () => {
    window.open('https://tally.so/r/mVv9ya', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#fff]">
      <div className="container mx-auto py-10 lg:py-14 font-Montserrat">
        <div className="flex flex-col px-5 justify-between h-full overflow-hidden lg:flex-row lg:px-0 lg:gap-16">
          <div className="w-full lg:w-[55%] pb-10 lg:pb-0">
            <AnimatedSection direction={{ initial_x: 0, initial_y: 50 }}>
              <div className="">
                <SectionsHeading>HOME OWNERS</SectionsHeading>
                <h2 className="text-xl text-gray-900 font-garamond font-medium leading-relaxed pb-5 uppercase">
                  EARN WITH YOUR HOME <br />
                  (SHORT TERM REAL ESTATE LEASE)
                </h2>
                <div className="mb-8 text-gray-800 leading-relaxed">
                  <p className="pb-3">
                    Are you a homeowner or a tenant with a verified and
                    inspected property? Turn your home into an income-generating
                    asset with our Short Term Real Estate Lease Program.
                  </p>
                  <ul className="list-disc list-outside ml-5 flex flex-col gap-3 pb-5">
                    <li className="">
                      Earn ₦1,000,000/month or more, depending on your home’s
                      location, condition, and amenities.
                    </li>
                    <li className="">
                      Suitable for various apartment types, including single
                      rooms, studio apartments, duplexes, and villas.
                    </li>
                  </ul>
                  <em className="pt-3">
                    <strong className="font-Montserrat">
                      Targeted Locations:
                    </strong>{' '}
                    Orchid, Chevron, Ikate, Lekki Phase 1, Victoria Island, and
                    Ikoyi.
                  </em>
                </div>
                <button
                  type="button"
                  className="overflow-hidden font-merriweather px-6 py-3 font-semibold text-darkLight bg-pry hover:bg-sec transition-all transform duration-500 ease-in-out hover:text-black rounded-3xl"
                  onClick={handleRedirect}
                >
                  Register Your Home
                </button>
              </div>
            </AnimatedSection>
          </div>
          <div className="w-full lg:w-[45%]">
            <div className="w-full">
              <AnimatedSection direction={{ initial_x: 0, initial_y: 70 }}>
                <figure>
                  <img
                    src={homeOwner}
                    alt="invest"
                    width={100}
                    height={100}
                    className="w-full h-[250px] lg:h-[360px] rounded-xl"
                  />
                </figure>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOwners;
