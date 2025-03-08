import React from "react";

export const SectionThree = () => {
  return (
    <div className="w-lvw overflow-hidden flex flex-col">
      <div className="flex flex-col justify-between pl-8 pt-4 lg:mt-8 xl:ml-20 h-28 lg:h-24">
        <h1 className="text-3xl lg:text-4xl xl:text-4xl">Why EverBloom?</h1>
        <div className="flex flex-col lg:flex-row">
          <p className="text-xl xl:text-2xl mr-1">what makes our services</p>
          <p className="text-xl xl:text-2xl">special?</p>
        </div>
      </div>
      <div className="landing-section3-grid">
        <div className="bg-accentSecondary col-span-2 row-span-2">1</div>
        <div className="bg-accentSecondary">1</div>
        <div className="bg-accentSecondary">1</div>
        <div className="bg-accentSecondary col-span-2">1</div>
      </div>
    </div>
  );
};
