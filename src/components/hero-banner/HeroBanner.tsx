import Header from '../header/Headers';
import AnimatedSection from '../shared/AnimateSection';

const HeroBanner = () => {
  return (
    <div className="relative inset-0 z-10 bg-[url('/hero_banner.jpeg')] h-[80vh] w-screen lg:h-[90vh] bg-no-repeat bg-cover bg-right bg-blend-overlay bg-neutral-700 px-0">
      <Header />
      <div className="container w-full mx-auto">
        <div className="absolute -z-10 px-5 font-normal flex justify-center gap-8 flex-col h-full items-start lg:px-0">
          <AnimatedSection direction={{ initial_x: 0, initial_y: 50 }}>
            <h2 className="max-w-md font-merriweather text-3xl text-center font-medium uppercase leading-[50px] lg:leading-[60px] text-[#f2f2f2] lg:max-w-[750px] lg:text-5xl lg:text-start pb-10">
              Make Your Home Rain Investments This December
            </h2>
            <p className="max-w-md font-garamond leading-[28px] text-center mb-5 text-[20px] lg:text-[28px] tracking-wide text-[#f1f5f9] lg:text-start lg:max-w-[750px]">
              With a one time home lease payment & 10% - 15% ROI on your capital
              investments … This december is bound to be a financial bliss..
            </p>
          </AnimatedSection>
          <button className="overflow-hidden font-merriweather font-medium text-lg px-6 py-3 text-darkLight bg-pry rounded-sm self-center lg:text-xl lg:font-semibold lg:self-start">
            Talk to our team
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
