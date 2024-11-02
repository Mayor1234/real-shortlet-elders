import contact_footer from '/contact_footer.jpeg';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-col bg-light justify-between h-full lg:h-[500px] overflow-hidden lg:flex-row lg:px-0">
      <div className="flex-1 py-10 lg:py-0">
        <img
          src={contact_footer}
          alt="invest"
          width={100}
          height={100}
          className="w-full h-[350px] lg:h-[500px]"
        />
      </div>
      <div className="flex-1 px-5 lg:px-0">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="font-Montserrat">
            <p className="text-gray-800 text-xl pb-10 font-garamond font-medium ">
              CONTACT US
            </p>
            <div className="mb-10">
              <div className="flex gap-10 mb-5">
                <p className="w-20">Email:</p>
                <div className="text-gray-700">
                  <p className="pb-1">johnottoh@shortletelders.com</p>
                  <p>mullyshaven@shortletelders.com</p>
                </div>
              </div>
              <div className="flex gap-10">
                <p className="w-20 text-gray-800">Number:</p>
                <div className="text-gray-700">
                  <p className="pb-1">+2347034578122 ( Calls & Whatsapp)</p>
                  <p>+2347067826403 (Whatsapp Only)</p>
                </div>
              </div>
            </div>
            <div className="flex justify-start gap-10">
              <p
                onClick={() =>
                  window.open('http://instagram.com/shortletelders')
                }
              >
                <FaInstagram className="w-6 h-6 text-gray-500 cursor-pointer" />
              </p>
              <span>
                <FaLinkedin className="w-6 h-6 text-gray-500 cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
