import AnimatedSection from '../shared/AnimateSection';

import SectionsHeading from '../shared/SectionsHeading';
import homeOwner from '/home_owner.jpeg';

const HomeOwners = () => {
  const handleRedirect = () => {
    window.open('https://tally.so/r/wzQZQE', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#fff]">
      <div className="max-w-6xl mx-auto py-10 lg:py-16 font-Montserrat">
        <div className="flex flex-col px-5 justify-between h-full overflow-hidden lg:flex-row lg:px-0 lg:gap-16">
          <div className="w-full lg:w-[55%] pb-10 lg:pb-0">
            <AnimatedSection direction={{ initial_x: 0, initial_y: 50 }}>
              <div className="">
                <SectionsHeading>HOME OWNERS</SectionsHeading>
                <p className="text-xl text-gray-900 font-garamond font-medium leading-tight pb-5 uppercase">
                  EARN WITH YOUR HOME <br />
                  (SHORT TERM REAL ESTATE LEASE)
                </p>
                <div className="mb-8 text-gray-800 leading-loose">
                  <p className="pb-3">
                    With an outright payment for verified and inspected homes,
                    home owners or tenant leased home occupants stand a chance
                    to earn on their homes while they are away from the house.
                    You stand a chance to have your home leased for a month at
                    the rate of N1,000,000 for a month. This could be more or
                    less depending on the condition of your home. This is
                    subject to your apartment review and valuation results based
                    on the following; location, maintenance & expenses,
                    interior, facility amenities, management and so on.
                    <br />
                    <br />
                    We are targeted at acquiring apartments in the following
                    locations in Lagos; Orchid, Chevron, Ikate, Lekki Phase 1,
                    Victoria Island and Ikoyi. With their apartment types
                    ranging from
                  </p>
                  <ul className="list-none ml-5 flex flex-col gap-3">
                    <li className="flex items-center">
                      <span className="mr-3">-</span>
                      Single Rooms in a Shared Apartment
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3">-</span>
                      Studio Apartment
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3">-</span>1 Bedroom Apartment
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3">-</span>2 Bedroom Apartment
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3">-</span>3 Bedroom Apartment
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3">-</span>4 Bedroom Apartment
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3">-</span>5 Bedroom Apartment
                    </li>
                    <li className="flex items-center">
                      <span className="mr-3">-</span>6 Bedroom Villas/Apartments
                    </li>
                  </ul>
                  <p className="pt-3">
                    Apartment Structures vary from self compound fully detached
                    houses, semi-detached, terraced duplexes, bungalows, flats,
                    penthouses & more.
                  </p>
                </div>
                <button
                  type="button"
                  className="overflow-hidden font-merriweather px-6 py-3 font-semibold text-darkLight bg-pry hover:bg-sec transition-all transform duration-500 ease-in-out hover:text-black rounded-3xl"
                  onClick={handleRedirect}
                >
                  Register your home
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
