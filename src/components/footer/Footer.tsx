import footer from '/shortleelders-logo.png';

const Footer = () => {
  return (
    <div className="flex flex-col bg-light px-5 justify-between h-full lg:h-[500px] overflow-hidden lg:flex-row lg:px-0">
      <div className="flex-1 py-10 lg:py-0">
        <img
          src={footer}
          alt="invest"
          width={100}
          height={100}
          className="w-full h-[350px] lg:h-[500px]"
        />
      </div>
      <div className="flex-1 pb-10 lg:pb-0">
        <div className="flex justify-center items-center w-full h-full">
          <div>
            <p className="text-gray-800 pb-5">
              YOUR FINAL IMPACT STATEMENT GOES HERE. MAKE IT MEMORABLE
            </p>
            <p className="text-700">
              Add your location
              <br />
              123 Anywhere Street.
              <br />
              Any City Street 12345
              <br />
              <br />
              hello@reallygreatesite.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
