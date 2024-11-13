import AnimatedSection from '../shared/AnimateSection';
import SectionsHeading from '../shared/SectionsHeading';
import about from '/about.jpeg';

const About = () => {
  return (
    <div className="bg-white container mx-auto py-10 lg:py-16">
      <div className="flex flex-col-reverse px-5 justify-between h-full  overflow-hidden lg:flex-row lg:px-0 lg:gap-16">
        <div className="w-full lg:w-[45%]">
          <AnimatedSection direction={{ initial_x: 0, initial_y: 50 }}>
            <figure>
              <img
                src={about}
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
            <SectionsHeading>About us</SectionsHeading>
            <div className="flex flex-col w-full ">
              <p className="text-2xl text-gray-900 font-garamond font-medium leading-tight pb-5 uppercase">
                About Shortlet Elders
              </p>
              <div className="mb-8 text-gray-800 leading-loose">
                <p className="">
                  Shortlet Elders is a community-based platform designed to
                  connect property agents, hosts, and investors in the
                  short-term rental market. With over 1,000+ “elders” — our
                  trusted agents and hosts — we offer a unique, community-driven
                  marketplace.
                  <br />
                  <br />
                  Our platform enforces strict policies to ensure trust and
                  safety, enabling members to:
                  <ul className="list-disc ml-8 flex flex-col gap-3 text-gray-700">
                    <li>
                      <span className="font-medium pr-1">
                        List and Share Properties:
                      </span>{' '}
                      Agents and hosts can showcase their properties, connect
                      with one another, and build networks to maximize rental
                      potential.
                    </li>
                    <li>
                      <span className="font-medium pr-1">
                        Conduct Secure Transactions:
                      </span>{' '}
                      The platform facilitates safe, seamless transactions for
                      both property owners and short-term renters.
                    </li>
                  </ul>
                  <br />
                  Shortlet Elders is committed to enhancing investment value
                  through community support and collaboration.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default About;
