import { useState } from 'react';

const JoinCommunity = () => {
  const [agentEnter, setAgentEnter] = useState(false);
  const [InvestorEnter, setInvestorEnter] = useState(false);
  return (
    <div className="container mx-auto py-10 px-5 lg:py-16 lg:px-0">
      <div className="relative bg-[url('/comm.jpeg')] bg-blend-overlay bg-neutral-700 bg-top h-[900px] lg:bg-cover lg:bg-center lg:h-[600px] w-full p-10 rounded-3xl">
        <div className="relative text-white z-30 py-5 lg:py-0">
          <div className="mb-20 lg:mb-10">
            <h2 className="mb-10 font-garamond text-2xl lg:text-3xl">
              Join our community of 1,000+ Shortlet Elders!
            </h2>
            <p className="max-w-sm leading-relaxed font-Montserrat">
              Be a part of the fast growing community designed for
              “Elders”—experienced agents and hosts—to share properties,
              network, and connect with like-minded professionals and unlock new
              pathways for success in the property market. As an Elder, you’ll
              be part of a trusted community where you can collaborate, grow
              your connections, and access exclusive investment opportunities.
              <br />
              <br />
              Discover the benefits of joining a community that values
              experience and expertise in the property market.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-full lg:items-start lg:justify-start lg:flex-row gap-5">
            <button
              type="button"
              className="font-merriweather border border-pry text-pry py-3 px-6 rounded-3xl flex  items-center justify-center gap-2 w-52"
              onClick={() =>
                window.open(
                  'https://chat.whatsapp.com/L5fyXJNTeGG5rfikAMalGN',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              onMouseEnter={() => setAgentEnter(true)}
              onMouseLeave={() => setAgentEnter(false)}
            >
              <span>Join as agent</span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform transform duration-300 ease-in translate-x-0 ${
                  agentEnter && 'translate-x-3'
                }`}
              >
                <path
                  d="M9.1497 0.80204C9.26529 3.95101 13.2299 6.51557 16.1451 8.0308L16.1447 9.43036C13.2285 10.7142 9.37889 13.1647 9.37789 16.1971L7.27855 16.1978C7.16304 12.8156 10.6627 10.4818 13.1122 9.66462L0.049716 9.43565L0.0504065 7.33631L13.1129 7.56528C10.5473 6.86634 6.93261 4.18504 7.05036 0.80273L9.1497 0.80204Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="font-merriweather border border-sec bg-sec text-dark font-medium py-3 px-6 rounded-3xl flex items-center justify-center gap-2 w-52"
              onClick={() =>
                window.open(
                  'https://chat.whatsapp.com/Ekaggyxj1IE3mAvJ6QiO8i',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              onMouseEnter={() => setInvestorEnter(true)}
              onMouseLeave={() => setInvestorEnter(false)}
            >
              <span>Join as investor</span>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform transform duration-300 ease-in translate-x-0 ${
                  InvestorEnter && 'translate-x-3'
                }`}
              >
                <path
                  d="M9.1497 0.80204C9.26529 3.95101 13.2299 6.51557 16.1451 8.0308L16.1447 9.43036C13.2285 10.7142 9.37889 13.1647 9.37789 16.1971L7.27855 16.1978C7.16304 12.8156 10.6627 10.4818 13.1122 9.66462L0.049716 9.43565L0.0504065 7.33631L13.1129 7.56528C10.5473 6.86634 6.93261 4.18504 7.05036 0.80273L9.1497 0.80204Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
