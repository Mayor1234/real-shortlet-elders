import { Link } from 'react-scroll';
import AnimatedSection from '../shared/AnimateSection';

const InvestmentScheme = () => {
  return (
    <div className="relative top-0 z-10 bg-[url('/Investment.jpg')] h-[1500px] w-screen lg:h-[85vh] bg-no-repeat bg-cover bg-bottom bg-blend-overlay bg-neutral-800 mb-2">
      <div className="container mx-auto">
        <div className="absolute inset-0 -z-10 px-5 font-normal flex items-center w-full gap-10 justify-center h-full lg:px-0">
          <div className="container mx-auto">
            <AnimatedSection direction={{ initial_x: 0, initial_y: 50 }}>
              <div className="text-pry text-center mb-14">
                <h2 className="text-2xl font-medium leading-relaxed tracking-wide">
                  INVESTMENT SCHEME OPTIONS
                </h2>
                <p className="text-sec text-lg">
                  Give a Home or Invest to earn 10% of your capital
                </p>
              </div>
            </AnimatedSection>
            <div className="flex flex-col justify-between px-5 gap-16 lg:gap-8 lg:flex-row w-full lg:px-0">
              <AnimatedSection direction={{ initial_x: -90, initial_y: 0 }}>
                <div className="py-12 px-8 bg-darkLight text-light rounded-md flex flex-col">
                  <h2 className="text-pry text-lg text-center font-medium pb-4">
                    HOME OWNER
                  </h2>
                  <p className="text-sec text-center pb-5">
                    Your Sub Header goes here
                  </p>
                  <p className="text-center pb-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quae iure, necessitatibus ullam numquam nesciunt aliqua
                    Facere magnam incidunt nemo itaque reprehenderit totam
                    beatae id expedita ut?
                  </p>
                  <button className="overflow-hidden w-40 px-6 py-3 font-semibold text-darkLight bg-pry rounded-3xl self-center -mb-16">
                    <Link to="home-owner" smooth={true} duration={800}>
                      Read More
                    </Link>
                  </button>
                </div>
              </AnimatedSection>
              <AnimatedSection direction={{ initial_x: 0, initial_y: 90 }}>
                <div className="py-12 px-8 bg-darkLight text-light rounded-md flex flex-col">
                  <h2 className="text-pry text-lg text-center font-medium pb-4">
                    AGENT
                  </h2>
                  <p className="text-sec text-center pb-5">
                    Your Sub Header goes here
                  </p>
                  <p className="text-center pb-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quae iure, necessitatibus ullam numquam nesciunt aliquam
                    Facere magnam incidunt nemo itaque reprehenderit totam
                    beatae id expedita ut?
                  </p>
                  <button className="overflow-hidden w-40 px-6 py-3 font-semibold text-darkLight bg-pry rounded-3xl self-center -mb-16">
                    <Link to="agent" smooth={true} duration={800}>
                      Read More
                    </Link>
                  </button>
                </div>
              </AnimatedSection>
              <AnimatedSection direction={{ initial_x: 90, initial_y: 0 }}>
                <div className="py-12 px-8 bg-darkLight text-light rounded-md flex flex-col">
                  <h2 className="text-pry text-lg text-center font-medium pb-4">
                    INVESTOR
                  </h2>
                  <p className="text-sec text-center pb-5">
                    Your Sub Header goes here
                  </p>
                  <p className="text-center pb-5">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quae iure, necessitatibus ullam numquam nesciunt aliquam
                    Facere magnam incidunt nemo itaque reprehenderit totam
                    beatae id expedita ut?
                  </p>
                  <button className="overflow-hidden w-40 px-6 py-3 font-semibold text-darkLight bg-pry rounded-3xl  self-center -mb-16">
                    <Link to="investor" spy={true} smooth={true} duration={800}>
                      Read More
                    </Link>
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentScheme;
