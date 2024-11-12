import { ourTeam } from '../constants';
import AnimatedSection from '../shared/AnimateSection';

const MeetOurTeam = () => {
  const handleRedirect = () => {
    window.open('https://wa.me/2347067826403', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-5 lg:py-16 lg:px-0">
      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-fit">
        <div className="flex flex-col w-full lg:w-[25%] pb-10 lg:pb-0">
          <p className="text-3xl text-gray-800 font-medium font-merriweather leading-tight text-center pb-5 lg:text-start lg:text-5xl">
            <span className="">Meet our</span>
            <span className="italic font-merriweather font-normal text-pry pl-2 lg:block lg:pl-0">
              Teams
            </span>
          </p>
          <div className="flex gap-3 self-center lg:self-start">
            <button
              className="overflow-hidden font-merriweather px-6 py-3 font-semibold text-darkLight bg-pry hover:bg-sec transition-all transform duration-500 ease-in-out self-center rounded-3xl"
              onClick={handleRedirect}
            >
              Talk to our team
            </button>
            <button
              className="hidden overflow-hidden text-sm font-merriweather px-6 py-3 font-semibold text-darkLight bg-pry self-center rounded-3xl"
              onClick={handleRedirect}
            >
              Talk to our team
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[75%] lg:h-full">
          <AnimatedSection
            direction={{ initial_x: 0, initial_y: 50, duration: 0.5 }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 lg:gap-x-5 gap-y-10 w-full h-full">
              {ourTeam.map((team, i) => (
                <div
                  className="h-full w-full shadow-md shadow-sec/10 rounded-xl relative group"
                  key={i}
                >
                  <div className="pb-5 relative overflow-hidden transition-transform transform translate-y-0 duration-500 group-hover:-translate-y-2.5">
                    <figure className="h-full w-full">
                      <img
                        src={team.img}
                        alt="john"
                        width={100}
                        height={100}
                        className="w-full object-cover object-center h-72 lg:w-72 lg:h-96 rounded-t-xl"
                      />
                    </figure>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full pb-5 font-merriweather">
                    <p className="capitalize text-base text-gray-800 font-medium  leading-normal">
                      {team.name}
                    </p>
                    <p className="text-gray-400 text-sm font-normal">
                      {team.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
