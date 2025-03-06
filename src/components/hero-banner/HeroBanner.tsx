import AnimatedSection from '../shared/AnimateSection';

const HeroBanner = () => {
  const handleRedirect = () => {
    window.open('https://wa.me/2347034578122', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative left-0 -mt-20 z-10 bg-[url('/shortlet-hero.PNG')] h-[85vh] w-screen lg:h-[calc(100vh+80px)] bg-no-repeat bg-cover bg-right bg-blend-overlay bg-neutral-700 px-0">
      <div className="w-full container mx-auto">
        <div className="absolute -z-10 px-5 font-normal h-[calc(85vh+80px)] lg:h-[calc(100vh+80px)] flex justify-center gap-5 flex-col items-start lg:gap-8 lg:px-0">
          <AnimatedSection direction={{ initial_x: 0, initial_y: 50 }}>
            <h1 className="max-w-md font-merriweather text-2xl font-medium uppercase leading-[40px] lg:leading-[60px] text-[#f2f2f2] lg:max-w-[750px] lg:text-4xl lg:text-start pb-10">
              shortlet elders <span className="text-sec font-bold">easter</span>{' '}
              investment scheme -{' '}
              <span className="text-sec font-bold">Egypt </span>
            </h1>
            <p className="max-w-md font-garamond leading-[28px] mb-5 text-[20px] lg:text-[28px] tracking-wide text-[#f1f5f9] lg:text-start lg:max-w-[750px] lg:leading-[35px] lg:px-0">
              Earn 10% profits with Shortlet Elders Easter Special Investment
              Scheme!
            </p>
          </AnimatedSection>
          <div className="flex flex-col items-center justify-center lg:justify-start w-full gap-5 lg:flex-row">
            <button
              className="overflow-hidden font-merriweather font-medium text-lg px-5 py-3 lg:px-6 border border-pry text-darkLight bg-pry hover:bg-sec hover:border-sec transition-all transform duration-300 ease-in-out hover:text-black rounded-sm self-center lg:text-xl lg:font-semibold lg:self-start"
              onClick={handleRedirect}
            >
              Talk to our team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
