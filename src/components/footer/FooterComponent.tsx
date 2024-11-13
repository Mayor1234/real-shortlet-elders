import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative inset-0 z-10 bg-[url('/contact_footer.jpeg')] h-[85vh] w-screen lg:h-[500px] bg-no-repeat bg-cover bg-center">
      <div className="absolute z-10 inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto relative inset-0 z-20 px-5 h-full font-normal text-white p-10 flex justify-between gap-5 items-center lg:gap-8 lg:px-0 leading-loose">
        <div className="w-full text-white rounded-lg flex flex-col items-center justify-between lg:gap-0 lg:flex-row">
          <div className="overflow-hidden pb-10 flex flex-col justify-center lg:justify-start w-full lg:w-[50%] lg:pb-0 lg:border-r-2 lg:border-pry/30">
            <p className="text-2xl mb-10 font-garamond tracking-wide font-medium text-center lg:text-start lg:text-3xl ">
              CONTACT US
            </p>
            <div className="flex w-full gap-5 lg:gap-10 mb-5">
              <p className="w-20 lg:w-28 text-lg lg:text-2xl font-medium">
                Email:
              </p>
              <div className="text-base lg:text-xl max-w-sm lg:max-w-2xl">
                <p className="pb-1">johnottoh@shortletelders.com</p>
                <p>mullyshaven@shortletelders.com</p>
              </div>
            </div>
            <div className="flex w-full gap-5 lg:gap-10 mb-5">
              <p className="w-20 lg:w-28 text-lg lg:text-2xl font-medium">
                Number:
              </p>
              <div className="text-base lg:text-xl max-w-sm lg:max-w-2xl">
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
          <div className="w-full px-0 lg:w-[50%] lg:px-10 self-start">
            <div className="flex flex-col gap-5 justify-between lg:flex-row w-full">
              <div className="leading-loose w-full">
                <h2 className="font-semibold text-xl pb-2  lg:pb-3 lg:text-2xl font-garamond">
                  Company
                </h2>
                <Link to={'/faq'}>
                  <p className="cursor-pointer capitalize text-pry hover:underline">
                    FAQs
                  </p>
                </Link>
              </div>
              <div className="leading-loose w-full">
                <h2 className="font-semibold text-xl pb-2 lg:pb-3 lg:text-2xl font-garamond">
                  Legal
                </h2>
                <Link to={'/privacy-policy'}>
                  <p className="cursor-pointer capitalize text-pry hover:underline">
                    Privacy Policy
                  </p>
                </Link>
              </div>
              <div className="leading-loose w-full">
                <h2 className="font-semibold text-xl pb-2 lg:pb-3 lg:text-2xl font-garamond">
                  Explore
                </h2>
                <Link to={'/why-choose-us'}>
                  <p className="cursor-pointer capitalize text-pry hover:underline">
                    Why Shortlet Elders
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
