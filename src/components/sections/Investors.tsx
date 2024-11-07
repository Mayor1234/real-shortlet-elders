import AnimatedSection from '../shared/AnimateSection';
import InvestmentTable from '../shared/InvestmentTable';
import SectionsHeading from '../shared/SectionsHeading';
import investors from '/investors.jpeg';

const Investors = () => {
  const handleRedirect = () => {
    window.open('https://tally.so/r/w8pGXY', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#fff]">
      <div className="container mx-auto py-10 lg:py-16 ">
        <div className="flex flex-col px-5 justify-between h-full overflow-hidden lg:flex-row lg:px-0 lg:gap-16">
          <div className="w-full lg:w-[55%] pb-10 lg:pb-0">
            <AnimatedSection direction={{ initial_x: 0, initial_y: 50 }}>
              <SectionsHeading>INVESTORS</SectionsHeading>
              <p className="text-2xl text-gray-900 font-garamond font-medium leading-tight pb-5 uppercase">
                Earn returns on your <br /> investment ....
              </p>
              <div className="mb-8 text-gray-800 leading-loose">
                <p className="pb-5">
                  Investment is not limited to pro investors, entry level
                  investors or individuals with savings, they would like to{' '}
                  <strong>“Roll Over”</strong> can participate in the investment
                  scheme and earn a minimum of 10% on their investment capital
                  during the duration of the active investment period.
                  <br />
                  We require clarity on your investment interest and capital
                  strength due to the diversity of the locations targeted for
                  the execution of the scheme. Our minimum investment capital of
                  N100,000 (One Hundred Thousand Naira) or its equivalent in any
                  other currency.
                  <br />
                  <br />
                  ** Early Birds earn 15% returns upon payout. Valid till
                  November 15th, 2024
                </p>
                <div>
                  <p className="text-2xl font-garamond font-medium leading-tight pb-5 capitalize">
                    Investment Options
                  </p>
                  <InvestmentTable />
                </div>
              </div>
              <button
                type="button"
                className="overflow-hidden font-merriweather px-6 py-3 font-semibold text-darkLight bg-pry rounded-3xl"
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
                  className="w-full h-[250px] lg:h-[400px] rounded-md"
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
