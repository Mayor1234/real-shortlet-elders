import PageBanner from '../components/hero-banner/PageBanner';
import Accordion from '../components/shared/Accordion';
import AnimatedSection from '../components/shared/AnimateSection';

const Faqs = () => {
  return (
    <div>
      <PageBanner title={'Frequently Asked Questions'} />
      <div className="container mx-auto py-10 lg:py-20 font-Montserrat px-5 lg:px-0">
        <div className="flex justify-center flex-col-reverse lg:justify-between  lg:flex-row w-full">
          <div className="w-full lg:w-[25%] flex justify-center items-center flex-col lg:justify-start lg:items-start">
            <p className="text-4xl font-medium font-garamond mb-5">
              <span>Got more </span>
              <span className="inline-block lg:block">questions?</span>
            </p>
            <button
              type="button"
              className="font-merriweather border border-sec bg-sec text-dark font-medium py-3 px-6 rounded-3xl flex items-center justify-center gap-2 w-fit"
            >
              <span>Find answers here</span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="translate-x-3 3s linear infinite animate-translate-x-loop"
              >
                <path
                  d="M9.1497 0.80204C9.26529 3.95101 13.2299 6.51557 16.1451 8.0308L16.1447 9.43036C13.2285 10.7142 9.37889 13.1647 9.37789 16.1971L7.27855 16.1978C7.16304 12.8156 10.6627 10.4818 13.1122 9.66462L0.049716 9.43565L0.0504065 7.33631L13.1129 7.56528C10.5473 6.86634 6.93261 4.18504 7.05036 0.80273L9.1497 0.80204Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <div className="w-full lg:w-[75%]">
            <h2 className="text-2xl text-gray-800 mb-10 tracking-wide font-semibold lg:text-xl">
              Before Investing in the Shortlet Elders Easter Investment Scheme,
              here are key questions you may want to consider:
            </h2>
            <div className="w-full h-full mb-5 lg:overflow-y-auto lg:mb-0">
              <AnimatedSection
                direction={{ initial_x: -50, initial_y: 0, duration: 0.5 }}
              >
                <Accordion
                  title={'What is the structure of the investment scheme?'}
                >
                  <p className="w-full  leading-relaxed pb-4 pt-2">
                    The structure of the{' '}
                    <b>Shortlet Elders Easter Investment Scheme</b> is designed
                    to generate returns through short-term rental income. By
                    leveraging properties listed on our platform for short-term
                    stays, the scheme capitalizes on high-demand periods,
                    particularly during the Easter holiday season, when rental
                    rates are typically higher. Investors invest funds, which
                    are used to manage and promote these properties for
                    short-term rentals, aiming to maximize occupancy and
                    revenue. <br />
                    <br />
                    Through this structure, returns are generated from rental
                    income, with profits distributed back to investors at the
                    end of the investment term. The scheme is structured to
                    optimize returns by focusing on strategic rental management,
                    high-occupancy periods, and effective marketing.
                  </p>
                </Accordion>
              </AnimatedSection>

              <AnimatedSection
                direction={{ initial_x: -50, initial_y: 0, duration: 0.6 }}
              >
                <Accordion
                  title={
                    'How does the scheme generate returns? Are they from rental income, property appreciation, or another revenue source?'
                  }
                >
                  <p className="w-full  leading-relaxed pb-4 pt-2">
                    The <b>Shortlet Elders Easter Investment Scheme</b>{' '}
                    generates returns primarily from <b>rental income</b>. The
                    focus remains on optimizing short-term rental profits to
                    deliver returns to investors by the end of Easter.
                  </p>
                </Accordion>
              </AnimatedSection>
              <AnimatedSection
                direction={{ initial_x: -50, initial_y: 0, duration: 0.7 }}
              >
                <Accordion title={'What is the investment term and duration?'}>
                  <p className="w-full  leading-relaxed pb-4 pt-2">
                    The <b>investment term and duration</b> for the{' '}
                    <b>Shortlet Elders Easter Investment Scheme</b> is
                    short-term, focused specifically on the holiday rental
                    season. Investors are expected to participate before{' '}
                    <b>March 31st</b> to target a{' '}
                    <b>10% return by the end of April</b>.
                  </p>
                </Accordion>
              </AnimatedSection>
              <AnimatedSection
                direction={{ initial_x: -50, initial_y: 0, duration: 0.7 }}
              >
                <Accordion
                  title={
                    'How are returns calculated and distributed? With a goal to earn 10% by the end of April when investing before March 31st, what happens if the scheme doesn’t meet this target? Is there an option to withdraw early or reinvest?'
                  }
                >
                  <p className="w-full  leading-relaxed pb-4 pt-2">
                    If the <b>Shortlet Elders Easter Investment Scheme</b> does
                    not meet the 10% target return by the end of April, there
                    may be options available to investors based on the scheme’s
                    terms and conditions.
                  </p>
                </Accordion>
              </AnimatedSection>
              <AnimatedSection
                direction={{ initial_x: -50, initial_y: 0, duration: 0.8 }}
              >
                <Accordion title={'What are the associated risks?'}>
                  <p className="w-full  leading-relaxed pb-4 pt-2">
                    The <b>Shortlet Elders Easter Investment Scheme</b> carries
                    certain risks that investors should consider just like in
                    every businesses:
                    <br />
                    Short-term rental income can fluctuate based on market
                    demand, economic conditions, and travel trends and the
                    scheme’s returns rely heavily on achieving high occupancy
                    during the Easter period. If occupancy falls short due to
                    lower demand, competition, or other factors, rental income
                    could be lower than expected. And could expect of investors
                    to give us more time to processed their pay out. And such
                    unforeseen market conditions could also result in payment
                    through batches adoption should the market stall. Also note
                    that in cases like stall market, payment shall be processed
                    within 90days.
                    <br />
                    <br />
                    Maintenance, repairs, or other operational costs could
                    arise, potentially reducing net returns. Seasonal factors,
                    such as increased wear and tear during high-demand periods,
                    can also lead to higher expenses.
                  </p>
                </Accordion>
              </AnimatedSection>
              <AnimatedSection
                direction={{ initial_x: -50, initial_y: 0, duration: 0.8 }}
              >
                <Accordion
                  title={'How are returns calculated and distributed?'}
                >
                  <p className="w-full  leading-relaxed pb-4 pt-2">
                    Returns for the Shortlet Elders Easter Investment Scheme are
                    calculated based on the net rental income generated from
                    short-term stays during the investment period, specifically
                    in Easter. After accounting for operational expenses such as
                    property management, maintenance, and marketing costs, the
                    remaining profits are allocated to investors.
                  </p>
                </Accordion>
              </AnimatedSection>
              <AnimatedSection
                direction={{ initial_x: -50, initial_y: 0, duration: 0.9 }}
              >
                <Accordion
                  title={
                    'Is the 10% return a guaranteed amount or an estimated target? When and how will returns be distributed to investors?'
                  }
                >
                  <p className="w-full leading-relaxed pb-4 pt-2">
                    The <b>10% return</b> for the{' '}
                    <b>Shortlet Elders Easter Investment Scheme</b> is a
                    guaranteed amount. While the scheme is structured to achieve
                    this target through high-demand short-term rentals, returns
                    can vary depending on factors such as occupancy rates,
                    market conditions, and unexpected costs.
                    <br />
                    <br />
                    Returns will be distributed to investors{' '}
                    <b>at the end of April</b>, once the rental income has been
                    fully accounted for and any necessary deductions (such as
                    management fees or operational costs) have been made. The
                    exact timing and method of distribution will be specified in
                    the investment agreement, ensuring transparency and clarity
                    for all investors.
                  </p>
                </Accordion>
              </AnimatedSection>
              <AnimatedSection
                direction={{ initial_x: -50, initial_y: 0, duration: 0.9 }}
              >
                <Accordion
                  title={
                    'What security or guarantees are in place for investors?'
                  }
                >
                  <p className="w-full leading-relaxed pb-4 pt-2">
                    The <b>Shortlet Elders Easter Investment Scheme</b> offers
                    several safeguards to provide security to investors also
                    Clear terms and conditions outlined in the investment
                    agreement provide transparency, helping to ensure that both
                    parties (investors and the scheme managers) understand their
                    roles, responsibilities, and the risks involved.
                    <br />
                    <br />
                    The scheme may involve multiple properties across different
                    locations, reducing the impact of poor performance in any
                    single property on overall returns.
                    <br />
                    <br />
                    <b>Experienced Management:</b> The scheme is managed by a
                    team of professionals with expertise in short-term rentals ,
                    property management and a shortlet community go about 1000+
                    members , helping to ensure that the properties are
                    optimally marketed and maintained to maximize returns.
                    <br />
                    <br />
                    While these measures help mitigate risks, it’s important to
                    note that no investment is without risk, and the returns are
                    dependent on market conditions, occupancy rates, and other
                    factors.
                  </p>
                </Accordion>
              </AnimatedSection>
              <AnimatedSection
                direction={{ initial_x: 0, initial_y: 50, duration: 0.9 }}
              >
                <div className="text-gray-900 text-lg mt-10 font-Montserrat leading-normal tracking-wide">
                  <p>
                    If you have more questions or need detailed answers
                    regarding the Shortlet Elders Easter Investment Scheme,
                    please send us a DM.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
