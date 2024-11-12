const PageBanner = ({ title }: { title: string }) => {
  return (
    <div className="relative left-0 -mt-20 z-10 bg-[url('/hero_banner.jpeg')] h-[30vh] w-screen lg:h-[calc(30vh+80px)] bg-no-repeat bg-cover bg-right bg-blend-overlay bg-neutral-800 px-0">
      <div className="absolute px-5 font-normal h-full lg:h-[calc(40vh+80px)] flex justify-center gap-5 flex-col items-center w-full lg:gap-8 lg:px-0">
        <h2 className="text-white text-3xl lg:text-5xl font-garamond tracking-wide">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default PageBanner;
