import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative inset-0 z-10 bg-[url('/contact_footer.jpeg')] h-[50vh] w-screen lg:h-[600px] bg-no-repeat bg-cover bg-center">
      <div className="absolute z-10 inset-0 bg-black opacity-60"></div>
      <div className="max-w-6xl mx-auto relative inset-0 z-20 px-5 h-full font-normal text-white p-10 flex justify-center gap-5 flex-col items-center lg:gap-8 lg:px-0 leading-loose">
        <div className="w-fit max-w-3xl text-white rounded-lg p-8 flex flex-col space-x-4 items-center justify-center">
          <p className="text-3xl mb-10 font-garamond tracking-wide font-medium ">
            CONTACT US
          </p>
          <div className="overflow-hidden flex flex-col w-full">
            <div className="flex w-full gap-5 lg:gap-10 mb-5">
              <p className="w-20 lg:w-28 text-base lg:text-2xl font-medium">
                Email:
              </p>
              <div className="text-sm lg:text-xl max-w-sm lg:max-w-2xl">
                <p className="pb-1">johnottoh@shortletelders.com</p>
                <p>mullyshaven@shortletelders.com</p>
              </div>
            </div>
            <div className="flex w-full gap-5 lg:gap-10 mb-5">
              <p className="w-20 lg:w-28 text-base lg:text-2xl font-medium">
                Number:
              </p>
              <div className="text-sm lg:text-xl max-w-sm lg:max-w-2xl">
                <p className="pb-1">+2347034578122 ( Calls & Whatsapp)</p>
                <p>+2347067826403 (Whatsapp Only)</p>
              </div>
            </div>
            <div className="self-center">
              <p
                onClick={() =>
                  window.open('http://instagram.com/shortletelders')
                }
                className="w-7 h-7 lg:w-8 lg:h-8 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-md flex items-center justify-center cursor-pointer"
              >
                <FaInstagram className="text-white" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
