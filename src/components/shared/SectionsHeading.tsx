import React from 'react';

interface SectionProps {
  children: React.ReactNode;
}

const SectionsHeading: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className="w-full pb-5">
      <h2 className="text-lg text-pry leading-normal tracking-wide font-semibold">
        {children}
      </h2>
    </div>
  );
};

export default SectionsHeading;