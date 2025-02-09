import { useState } from 'react';

type Prop = {
  title: string;
  children: React.ReactElement;
};

const Accordion = ({ title, children }: Prop) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center py-3 w-full cursor-pointer"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span
          className={`${
            accordionOpen && 'text-gray-800'
          } text-lg font-medium text-start pr-5`}
        >
          {title}
        </span>
        <div className="transition-transform transform delay-300 duration-500 ease-in-out">
          {accordionOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden text-gray-800 max-w-4xl mr-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
