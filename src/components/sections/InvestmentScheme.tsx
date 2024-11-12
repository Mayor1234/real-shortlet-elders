import { Link } from 'react-scroll';
import AnimatedSection from '../shared/AnimateSection';

const InvestmentScheme = () => {
  return (
    <div className="relative font-Montserrat top-0 z-10 bg-[url('/investment_banner.jpeg')] h-[1850px] w-screen lg:h-screen bg-no-repeat bg-cover bg-center bg-blend-overlay bg-neutral-700 overflow-hidden">
      <div className="container mx-auto">
        <div className="absolute inset-0 -z-10 px-5 font-normal flex items-center w-full  gap-10 justify-center h-full lg:px-0 leading-relaxed">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection
              direction={{ initial_x: 0, initial_y: 50, duration: 0.5 }}
            >
              <div className="text-pry text-center mb-14">
                <h2 className="text-2xl font-merriweather font-medium tracking-wide pb-5 lg:py-0">
                  Choose your Real Estate Investment Scheme Option
                </h2>
                <p className="text-sec font-garamond text-2xl font-bold ">
                  Investments are created for revenue generation… Create your
                  path to wealth
                </p>
              </div>
            </AnimatedSection>
            <div className="flex flex-col justify-between leading-relaxed w-full h-full px-5 gap-16 lg:gap-8 lg:flex-row lg:px-0">
              <div className="flex-1">
                <AnimatedSection
                  direction={{ initial_x: 0, initial_y: 50, duration: 0.7 }}
                >
                  <div className="relative py-12 px-8 bg-darkLight text-light h-auto rounded-md flex flex-col lg:h-96">
                    <h2 className="text-pry font-merriweather text-lg text-center font-medium pb-4">
                      HOME OWNER
                    </h2>
                    <p className="text-sec font-garamond text-lg font-bold text-center pb-5">
                      Are you a landlord or tenant-leased home owner?
                    </p>
                    <p className="text-center pb-5">
                      Use your absence to make money for your home. Earn as much
                      as 1million Naira this december by “swapping” your home
                      for cash.
                    </p>
                    <Link
                      to="home-owner"
                      smooth={true}
                      duration={800}
                      className="self-center absolute -bottom-6"
                    >
                      <button
                        type="button"
                        className="overflow-hidden font-merriweather w-40 px-6 py-3 font-semibold text-darkLight bg-pry hover:bg-sec hover:text-black rounded-3xl"
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
              <div className="flex-1">
                <AnimatedSection
                  direction={{ initial_x: 0, initial_y: 50, duration: 0.9 }}
                >
                  <div className="relative py-12 px-8 bg-darkLight  text-light h-auto rounded-md flex flex-col lg:h-96">
                    <h2 className="text-pry font-merriweather text-lg text-center font-medium pb-4">
                      AGENT
                    </h2>
                    <p className="text-sec font-garamond text-lg font-bold text-center pb-5">
                      Expand your revenue with referral commissions
                    </p>
                    <p className="text-center pb-5">
                      You don’t need to be an official real estate agent to earn
                      commissions on referrals. Refer a friend, home owner, or
                      financial investor to the scheme and earn be between 1% to
                      5% on your referrals.
                    </p>
                    <Link
                      to="agent"
                      smooth={true}
                      duration={800}
                      className="self-center absolute -bottom-6"
                    >
                      <button
                        type="button"
                        className="overflow-hidden font-merriweather  w-40 px-6 py-3 font-semibold text-darkLight bg-pry hover:bg-sec hover:text-black rounded-3xl"
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
              <div className="flex-1">
                <AnimatedSection direction={{ initial_x: 0, initial_y: 50 }}>
                  <div className="relative py-12 px-8 bg-darkLight h-auto text-light rounded-md flex flex-col lg:h-96">
                    <h2 className="text-pry font-merriweather text-lg text-center font-medium pb-4">
                      INVESTOR
                    </h2>
                    <p className="text-sec font-garamond text-lg font-bold text-center pb-5">
                      Earn between 10% - 15% (early birds) on your capital
                      investment
                    </p>
                    <p className="text-center pb-5">
                      With investing as low as N100,000 Naira or its currency
                      equivalent, earn a top up with our short-term investment
                      scheme for this december.
                    </p>
                    <Link
                      to="investor"
                      spy={true}
                      smooth={true}
                      duration={800}
                      className="self-center absolute -bottom-6"
                    >
                      <button
                        type="button"
                        className="overflow-hidden font-merriweather w-40 px-6 py-3 font-semibold text-darkLight bg-pry hover:bg-sec hover:text-black rounded-3xl"
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentScheme;
