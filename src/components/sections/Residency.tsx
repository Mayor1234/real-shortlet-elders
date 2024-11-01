import AnimatedSection from '../shared/AnimateSection';

const Residency = () => {
  return (
    <div>
      <div className="bg-[#fff] my-2">
        <div className="container mx-auto py-20">
          <div className="flex flex-col px-5 justify-between items-center h-full lg:h-[500px] overflow-hidden lg:flex-row lg:px-0 lg:gap-10">
            <div className="flex-1 pb-10 lg:pb-0">
              <AnimatedSection direction={{ initial_x: 0, initial_y: 90 }}>
                <div className="flex flex-col w-full">
                  <p className="text-2xl text-gray-700 leading-none tracking-wide pb-5">
                    Residency <br />
                    Occupancy Brief
                  </p>
                  <div className="mb-8">
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non fuga, cum dolorem ipsam laboriosam quidem dolores hic
                      nulla dolorum expedita? Nobis minima pariatur eveniet
                      earum nemo quaerat facere aliquam blanditiis tempore rem
                      rerum qui quas eligendi consequuntur delectus eaque
                      repellat accusantium, laudantium modi ex. Ab, aliquam.
                      Deserunt ab sit fugit. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Blanditiis commodi magnam
                      impedit pariatur assumenda excepturi porro esse libero
                      perferendis sunt natus dicta suscipit ab culpa nostrum
                      facilis, quia eveniet id.
                    </p>
                  </div>
                  <button className="overflow-hidden px-6 py-3 font-semibold text-darkLight bg-pry self-center rounded-3xl">
                    Talk to our team
                  </button>
                </div>
              </AnimatedSection>
            </div>
            <div className="flex-1">
              <AnimatedSection
                direction={{ initial_x: 0, initial_y: 0, rotate: 360 }}
              >
                <div className="relative text-sm w-80 h-80 mt-10 lg:w-[500px] lg:h-[500px] rounded-full bg-pie-chart lg:mt-0 mx-auto">
                  <div className="absolute top-20 -right-5 lg:right-5 text-light transform -translate-x-1/2 font-bold text-sm">
                    January (26.3%)
                  </div>
                  <div className="absolute bottom-24 lg:bottom-28 -right-12 lg:-right-3 text-light transform -translate-x-1/2  font-bold text-sm">
                    November (21.1%)
                  </div>
                  <div className="absolute top-40 -left-12 lg:-left-0 text-light transform translate-x-1/2 font-bold text-sm">
                    December (56.2%)
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Residency;
