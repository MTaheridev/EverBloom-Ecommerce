import Image from "next/image";
import React from "react";

export const SectionOne = () => {
  return (
    <div className="h-[calc(100vh-80px)] w-lvw relative overflow-hidden flex flex-col">
      <div className="z-10 flex flex-col justify-between pl-8 pt-8 lg:mt-12 xl:ml-20 h-96 xl:h-[500px] ">
        <div className="h-44 xl:h-[230px] flex flex-col justify-between">
        <div>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl mb-6">Simplicity,</h1>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl">Rooted in Nature</h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <p className="text-xl xl:text-3xl mr-1">Breathe cleaner air with our</p>
          <p className="text-xl xl:text-3xl">low-maintenance plants.</p>
        </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <button className="w-48 xl:w-64 h-12 rounded-lg bg-accentSecondary mr-3">
            <h2 className="text-xl font-bold text-bgPrimary">Shop Now</h2>
          </button>
          <button className="w-48 h-12">
            <h3 className="text-lg text-accentSecondary">Learn Care Tips</h3>
          </button>
        </div>
      </div>
      <div className="absolute z-0 bottom-0 right-[-185] sm:right-0 xl:right-20 w-[600px] h-[600px] lg:w-[700px] lg:h-[700px] xl:w-[calc(100vh-80px)] xl:h-[calc(100vh-80px)]">
        <Image
        className="object-contain"
          fill
          quality={100}
          src={"/plants/landing-section1-plant.png"}
          alt="EverBloom | Plants for your home"
        />
      </div>
    </div>
  );
};