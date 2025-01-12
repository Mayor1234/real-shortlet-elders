import AnimatedSection from '../shared/AnimateSection';
import InvestmentTable from '../shared/InvestmentTable';
import SectionsHeading from '../shared/SectionsHeading';
import investors from '/investors.jpeg';

const Investors = () => {
  const handleRedirect = () => {
    window.open('https://tally.so/r/3X1BbL', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#fff]">
      <div className="container mx-auto py-10 lg:py-14 font-Montserrat">
        <div className="flex flex-col px-5 justify-between h-full overflow-hidden lg:flex-row lg:px-0 lg:gap-16">
          <div className="w-full lg:w-[55%] pb-10 lg:pb-0">
            <AnimatedSection direction={{ initial_x: 0, initial_y: 50 }}>
              <SectionsHeading>INVESTORS</SectionsHeading>
              <h2 className="text-xl text-gray-900 font-garamond font-medium leading-relaxed pb-5 uppercase">
                Unlock 10% Returns On
                <br /> Your Investment
              </h2>
              <div className="mb-8 text-gray-800 leading-relaxed">
                <p className="pb-5">
                  This Valentine, let love and opportunity grow together! Our
                  exclusive{' '}
                  <strong className="font-merriweather">Valentine</strong>{' '}
                  Special Investment Scheme offers an unparalleled chance to
                  earn 10% guaranteed returns on your investment. Join before
                  January 25th. Enjoy even better rewards with 10% returns upon
                  payout.
                </p>
                <div>
                  <p className="text-lg font-Montserrat text-gray-800 font-semibold pb-5">
                    Why Invest with Us?
                  </p>
                  <ul className="list-disc list-outside pb-5 ml-5 flex flex-col gap-3">
                    <li>Disbursement from 1st March to 10th of March 2025.</li>
                    <li>
                      Open to All Investors: Whether you’re a seasoned pro or
                      just starting your investment journey, this scheme is
                      tailored for everyone.
                    </li>
                    <li>
                      Flexible Options: Individuals with savings they’d like to
                      “roll over” can also participate, starting with a minimum
                      investment of ₦100,000 or its equivalent in other
                      currencies.
                    </li>
                  </ul>
                </div>
                <div className="mb-5">
                  <p className="text-2xl font-garamond font-medium leading-tight pb-5 capitalize">
                    Investment Options & Locations
                  </p>
                  <InvestmentTable />
                </div>
                <em className="text-gray-800">
                  We prioritize clarity on your investment interest and capital
                  strength due to the diversity of the locations targeted for
                  scheme execution.
                </em>
              </div>
              <button
                type="button"
                className="overflow-hidden font-merriweather px-6 py-3 font-semibold text-darkLight bg-pry hover:bg-sec transition-all transform duration-500 ease-in-out hover:text-black rounded-3xl"
                onClick={handleRedirect}
              >
                Get Started
              </button>
            </AnimatedSection>
          </div>
          <div className="w-full lg:w-[45%]">
            <AnimatedSection direction={{ initial_x: 0, initial_y: 50 }}>
              <figure>
                <img
                  src={investors}
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
  );
};

export default Investors;
