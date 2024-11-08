import AnimatedSection from '../shared/AnimateSection';
import SectionsHeading from '../shared/SectionsHeading';
import agents from '/agents.jpeg';

const Agents = () => {
  const handleRedirect = () => {
    window.open('https://tally.so/r/3EbLRo', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#fff]">
      <div className="max-w-6xl mx-auto py-10 lg:py-16 ">
        <div className="flex flex-col-reverse px-5 justify-between h-full  overflow-hidden lg:flex-row lg:px-0 lg:gap-16">
          <div className="w-full lg:w-[45%]">
            <AnimatedSection direction={{ initial_x: 0, initial_y: 50 }}>
              <figure>
                <img
                  src={agents}
                  alt="invest"
                  width={100}
                  height={100}
                  className="w-full h-[250px] lg:h-[400px] rounded-md"
                />
              </figure>
            </AnimatedSection>
          </div>
          <div className="w-full lg:w-[55%] pb-10 lg:pb-0 ">
            <AnimatedSection direction={{ initial_x: 0, initial_y: 70 }}>
              <SectionsHeading>Agent Referrals</SectionsHeading>
              <div className="flex flex-col w-full ">
                <p className="text-2xl text-gray-900 font-garamond font-medium leading-tight pb-5 uppercase">
                  Earn <br /> commissions ....
                </p>
                <div className="mb-8 text-gray-800 leading-loose">
                  <p className="">
                    Earn by knowing someone who would be interested in the
                    scheme. As an agent or non-agent, you get to earn as low as
                    1% and as high as 5% by just referring the scheme to an
                    investor or a homeowner. You earn additional income on other
                    perks communicated to you specifically as an agent. We
                    require you to reach out to your network of people or market
                    the scheme to acquire both homeowners and investors. This
                    would facilitate your commission earnings among other
                    benefits.
                  </p>
                </div>
                <button
                  type="button"
                  className="overflow-hidden font-merriweather px-6 py-3 font-semibold text-darkLight bg-pry self-end rounded-3xl"
                  onClick={handleRedirect}
                >
                  Agent Referrals
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
