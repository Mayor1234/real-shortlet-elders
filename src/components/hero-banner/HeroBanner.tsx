import Header from '../header/Headers';
import AnimatedSection from '../shared/AnimateSection';

const HeroBanner = () => {
  return (
    <div className="mb-2">
      <div className="relative inset-0 z-10 bg-[url('/new_hero.jpg')] h-[80vh] w-screen lg:h-[85vh] bg-no-repeat bg-cover bg-bottom bg-blend-overlay bg-neutral-800">
        <Header />
        <div className="container w-full mx-auto">
          <div className="absolute -z-10  px-5 font-normal flex justify-center gap-8 flex-col h-full items-start lg:px-0">
            <AnimatedSection direction={{ initial_x: 0, initial_y: 50 }}>
              <h2 className="max-w-md text-3xl text-center font-medium uppercase leading-[50px] lg:leading-[70px] text-[#f2f2f2] lg:max-w-[750px] lg:text-6xl lg:text-start pb-10">
                Turn Your Home to Money Investment Schemes
              </h2>
              <p className="max-w-md leading-[24px] text-center mb-5 text-[20px] lg:text-[24px] tracking-wide text-[#f1f5f9] lg:text-start lg:max-w-[750px]">
                Give a Home or Invest to earn 10% of your capital
              </p>
            </AnimatedSection>
            <button className="overflow-hidden px-6 py-3 font-semibold text-darkLight bg-pry rounded-sm self-center lg:self-start">
              Talk to our team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
