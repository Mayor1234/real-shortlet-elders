import AnimatedSection from '../shared/AnimateSection';
import SectionsHeading from '../shared/SectionsHeading';
import invest2 from '/invest2.jpeg';

const Agents = () => {
  return (
    <div className="bg-[#fff] my-2">
      <div className="container mx-auto py-16">
        <div className="flex flex-col-reverse px-5 justify-between h-full lg:h-[500px] overflow-hidden lg:flex-row lg:px-0 lg:gap-10">
          <div className="flex-1">
            <AnimatedSection direction={{ initial_x: 0, initial_y: 70 }}>
              <figure>
                <img
                  src={invest2}
                  alt="invest"
                  width={100}
                  height={100}
                  className="w-full h-[350px] lg:h-[500px] rounded-md"
                />
              </figure>
            </AnimatedSection>
          </div>
          <div className="flex-1 pb-10 lg:pb-0">
            <AnimatedSection direction={{ initial_x: 0, initial_y: 90 }}>
              <SectionsHeading>AGENT</SectionsHeading>
              <p className="text-xl font-medium tracking-wide pb-3 uppercase">
                Earn commissions...
              </p>
              <div className="mb-8">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  fuga, cum dolorem ipsam laboriosam quidem dolores hic nulla
                  dolorum expedita? Nobis minima pariatur eveniet earum nemo
                  quaerat facere aliquam blanditiis tempore rem rerum qui quas
                  eligendi consequuntur delectus eaque repellat accusantium,
                  laudantium modi ex. Ab, aliquam. Deserunt ab sit fugit.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis commodi magnam impedit pariatur assumenda excepturi
                  porro esse libero perferendis sunt natus dicta suscipit ab
                  culpa nostrum facilis, quia eveniet id.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  et est magni reprehenderit, repellat error. Quibusdam
                  laboriosam corrupti necessitatibus quaerat porro minus facere,
                  rem nostrum dolores possimus quos sint repellat!
                </p>
              </div>
              <button className="overflow-hidden px-6 py-3 font-semibold text-darkLight bg-pry rounded-3xl">
                Register your referal
              </button>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
