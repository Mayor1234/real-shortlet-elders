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
                  This <strong className="font-merriweather"> Easter</strong>,
                  whether you want to sail down the Nile on a felucca, explore
                  ancient temples, browse the museums of Cairo, or go trekking
                  in Sinai, let exploration and opportunity grow together! Our
                  unique <strong className="font-merriweather"> Easter </strong>{' '}
                  Special Investment Scheme offers an exceptional chance to earn
                  10% guaranteed returns on your investment. Early investors who
                  join before March 15th can enjoy even better rewards from 13%
                  and 15% for investment above 10m upon payout.
                </p>
                <div>
                  <p className="text-lg font-Montserrat text-gray-800 font-semibold pb-5">
                    Why Invest with Us?
                  </p>
                  <ul className="list-disc list-outside pb-5 ml-5 flex flex-col gap-3">
                    <li>Disbursement: From 1st May to 10th of May 2025.</li>
                    <li>
                      Open to All Investors: Whether you’re a seasoned pro or
                      just starting your investment journey, this scheme is
                      tailored for everyone.
                    </li>
                    <li>
                      Flexible Options: Individuals with savings they’d like to
                      “roll over” can also participate, starting with a minimum
                      investment of ₦500,000 or its equivalent in other
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
                <p className="mb-5">
                  Investors can choose from a variety of vibrant and historic
                  locations, ensuring that their capital is employed in areas
                  with strong growth potential and rich cultural heritage.
                  <br />
                  <br />
                  Whether you’re drawn to the coastal elegance of Soma Bay, the
                  historic grandeur of Giza, the serene beauty of Aswan and
                  Luxor, the modern luxury of Madinaty, or the bustling city
                  life of Cairo, there is an investment option tailored for
                  you—allowing you to grow your wealth while enjoying an
                  unforgettable Easter experience.
                </p>

                <em className="text-gray-800">
                  📍 Exclusive Travel Date: April 18th - 24th, 2025 <br />
                  💰 Payout Period: May 1st - 10th, 2025
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
