import contact_footer from '/contact_footer.jpeg';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-col bg-light justify-between h-full lg:h-[500px] overflow-hidden lg:flex-row">
      <div className="w-full lg:w-1/2  py-10 lg:py-0">
        <img
          src={contact_footer}
          alt="invest"
          width={100}
          height={100}
          className="w-full h-[350px] lg:h-[500px]"
        />
      </div>
      <div className="w-full flex justify-center items-center p-10 lg:w-1/2 lg:py-0 lg:px-0">
        <div className="font-Montserrat flex flex-col items-center justify-center px-5 lg:px-0">
          <p className="text-gray-800 text-xl mb-10 font-garamond font-medium ">
            CONTACT US
          </p>
          <div className="">
            <div className="flex gap-5 lg:gap-10 mb-5">
              <p className="w-20 text-gray-800 font-medium">Email:</p>
              <div className="text-gray-700">
                <p className="pb-1">johnottoh@shortletelders.com</p>
                <p>mullyshaven@shortletelders.com</p>
              </div>
            </div>
            <div className="flex gap-5 lg:gap-10 mb-10">
              <p className="w-20 text-gray-800 font-medium">Number:</p>
              <div className="text-gray-700">
                <p className="pb-1">+2347034578122 ( Calls & Whatsapp)</p>
                <p>+2347067826403 (Whatsapp Only)</p>
              </div>
            </div>
            <div className="self-start">
              <p
                onClick={() =>
                  window.open('http://instagram.com/shortletelders')
                }
                className="w-7 h-7 lg:w-8 lg:h-8 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-md flex items-center justify-center"
              >
                <FaInstagram className="text-white cursor-pointer" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
