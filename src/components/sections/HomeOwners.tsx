import AnimatedSection from '../shared/AnimateSection';
import SectionsHeading from '../shared/SectionsHeading';
import invest1 from '/invest1.jpg';

const HomeOwners = () => {
  return (
    <div className="bg-[#fff]">
      <div className="max-w-5xl mx-auto py-16">
        <div className="flex flex-col px-5 justify-between h-full lg:h-[500px] overflow-hidden lg:flex-row lg:px-0 lg:gap-20">
          <div className="w-full lg:w-[60%] pb-10 lg:pb-0">
            <AnimatedSection direction={{ initial_x: -50, initial_y: 0 }}>
              <div>
                <SectionsHeading>HOME OWNERS</SectionsHeading>
                <p className="text-2xl font-medium leading-none pb-3 uppercase">
                  Earn with your <br />
                  home...
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
                <button className="overflow-hidden px-6 py-3 font-semibold text-darkLight bg-pry rounded-3xl">
                  Register your home
                </button>
              </div>
            </AnimatedSection>
          </div>
          <div className="flex-1">
            <AnimatedSection direction={{ initial_x: 50, initial_y: 0 }}>
              <figure>
                <img
                  src={invest1}
                  alt="invest"
                  width={100}
                  height={100}
                  className="w-full h-[350px] lg:h-[400px] rounded-sm"
                />
              </figure>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOwners;
