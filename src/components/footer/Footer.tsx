import footer from '/footer_img.png';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex flex-col bg-light justify-between h-full lg:h-[500px] overflow-hidden lg:flex-row lg:px-0">
      <div className="flex-1 py-10 lg:py-0">
        <img
          src={footer}
          alt="invest"
          width={100}
          height={100}
          className="w-full h-[350px] lg:h-[500px]"
        />
      </div>
      <div className="flex-1 px-5 pb-10 lg:pb-0">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="pb-10">
            <p className="text-gray-800 pb-5">
              YOUR FINAL IMPACT STATEMENT GOES HERE. MAKE IT MEMORABLE
            </p>
            <p className="text-700 pb-10">
              Add your location
              <br />
              123 Anywhere Street.
              <br />
              Any City Street 12345
              <br />
              <br />
              hello@reallygreatesite.com
            </p>
            <div className="flex justify-start gap-10">
              <span>
                <FaInstagram className="w-6 h-6 text-gray-500 cursor-pointer" />
              </span>
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
