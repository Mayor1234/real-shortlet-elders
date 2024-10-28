import AnimatedSection from '../shared/AnimateSection';
import SectionsHeading from '../shared/SectionsHeading';
import invest2 from '/invest2.jpeg';

const Agents = () => {
  return (
    <div className="bg-[#fff] my-2">
      <div className="max-w-5xl mx-auto py-16">
        <div className="flex flex-col-reverse px-5 justify-between h-full lg:h-[500px] overflow-hidden lg:flex-row lg:px-0 lg:gap-20">
          <div className="w-full lg:w-[40%]">
            <AnimatedSection direction={{ initial_x: 0, initial_y: 70 }}>
              <figure>
                <img
                  src={invest2}
                  alt="invest"
                  width={100}
                  height={100}
                  className="w-full h-[350px] lg:h-[400px] rounded-md"
                />
              </figure>
            </AnimatedSection>
          </div>
          <div className="w-full lg:w-[60%] pb-10 lg:pb-0">
            <AnimatedSection direction={{ initial_x: 0, initial_y: 90 }}>
              <SectionsHeading>AGENT</SectionsHeading>
              <div className="flex flex-col w-full">
                <p className="text-2xl font-semibold leading-none pb-5 uppercase">
                  Earn <br /> commissions ....
                </p>
                <div className="mb-8">
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    fuga, cum dolorem ipsam laboriosam quidem dolores hic nulla
                    dolorum expedita? Nobis minima pariatur eveniet earum nemo
                    quaerat facere aliquam blanditiis tempore rem rerum qui quas
                    eligendi consequuntur delectus eaque repellat accusantium,
                    laudantium modi ex. Ab, aliquam. Deserunt ab sit fugit.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis commodi magnam impedit pariatur assumenda
                    excepturi porro esse libero perferendis sunt natus dicta
                    suscipit ab culpa nostrum facilis, quia eveniet id.
                  </p>
                </div>
                <button className="overflow-hidden px-6 py-3 font-semibold text-darkLight bg-pry self-end rounded-3xl">
                  Register your referal
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
