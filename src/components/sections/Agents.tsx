import AnimatedSection from '../shared/AnimateSection';
import SectionsHeading from '../shared/SectionsHeading';
import agents from '/agents.jpeg';

const Agents = () => {
  const handleRedirect = () => {
    window.open('https://tally.so/r/3EbLRo', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#fff]">
      <div className="container mx-auto py-10 lg:py-14">
        <div className="flex flex-col-reverse px-5 justify-between h-full  overflow-hidden lg:flex-row lg:px-0 lg:gap-16">
          <div className="w-full lg:w-[45%]">
            <AnimatedSection direction={{ initial_x: 0, initial_y: 50 }}>
              <figure>
                <img
                  src={agents}
                  alt="invest"
                  width={100}
                  height={100}
                  className="w-full h-[250px] lg:h-[360px] rounded-xl"
                />
              </figure>
            </AnimatedSection>
          </div>
          <div className="w-full lg:w-[55%] pb-10 lg:pb-0 ">
            <AnimatedSection direction={{ initial_x: 0, initial_y: 70 }}>
              <SectionsHeading>Agent Referrals</SectionsHeading>
              <div className="flex flex-col w-full ">
                <p className="text-xl text-gray-900 font-garamond font-medium leading-relaxed pb-5 uppercase">
                  Earn commissions
                </p>
                <div className="mb-8 text-gray-800 leading-relaxed">
                  <p className="">
                    Whether you’re an agent or not, you can earn 1% to 5%
                    commission by referring investors or homeowners to the
                    scheme. Expand your income stream with additional perks
                    tailored to agents.
                    <br />
                    <br />
                    Simply reach out to your network or market the scheme to
                    maximize your referral earnings.
                  </p>
                </div>
                <button
                  type="button"
                  className="overflow-hidden font-merriweather px-6 py-3 font-semibold text-darkLight bg-pry hover:bg-sec transition-all transform duration-500 ease-in-out hover:text-black self-end rounded-3xl"
                  onClick={handleRedirect}
                >
                  Join as an Agent
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
