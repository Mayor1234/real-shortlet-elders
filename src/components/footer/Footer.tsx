import contact_footer from '/contact_footer.jpeg';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-col bg-light justify-between h-full lg:h-[500px] overflow-hidden lg:flex-row lg:px-0">
      <div className="w-full lg:w-1/2  py-10 lg:py-0">
        <img
          src={contact_footer}
          alt="invest"
          width={100}
          height={100}
          className="w-full h-[350px] lg:h-[500px]"
        />
      </div>
      <div className="w-full flex justify-center items-center py-10 lg:w-1/2 px-5 lg:py-0 lg:px-0">
        <div className="font-Montserrat flex flex-col items-center justify-center">
          <p className="text-gray-800 text-xl pb-10 font-garamond font-medium ">
            CONTACT US
          </p>
          <div className="mb-10">
            <div className="flex gap-10 mb-5">
              <p className="w-20 text-gray-800 font-medium">Email:</p>
              <div className="text-gray-700">
                <p className="pb-1">johnottoh@shortletelders.com</p>
                <p>mullyshaven@shortletelders.com</p>
              </div>
            </div>
            <div className="flex gap-10">
              <p className="w-20 text-gray-800 font-medium">Number:</p>
              <div className="text-gray-700">
                <p className="pb-1">+2347034578122 ( Calls & Whatsapp)</p>
                <p>+2347067826403 (Whatsapp Only)</p>
              </div>
            </div>
          </div>
          <div className="self-start">
            <p
              onClick={() => window.open('http://instagram.com/shortletelders')}
            >
              <FaInstagram className="w-7 h-7 text-gray-500 cursor-pointer" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
