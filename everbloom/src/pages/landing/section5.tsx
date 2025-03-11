import Image from "next/image";
import React from "react";

export const SectionFive = () => {
  return (
    <div className="lg:h-[calc(100vh-80px)] w-lvw overflow-hidden flex flex-col">
      <div className="flex flex-col justify-between pl-8 pt-4 lg:mt-8 xl:ml-20 h-28 lg:h-24">
        <h1 className="text-3xl lg:text-4xl xl:text-4xl">Care Guides Blog</h1>
        <div className="flex flex-col lg:flex-row">
          <p className="text-xl xl:text-2xl mr-1">
            Video guides, Blogs & cheat sheets
          </p>
          <p className="text-xl xl:text-2xl"> to take care of your plants</p>
        </div>
      </div>
      <div className="landing-section5-grid grow">
        <div className="h-[250px] lg:h-auto lg:row-span-7 lg:col-start-1 rounded-lg relative overflow-hidden">
          <div className=" w-full h-full absolute left-0 top-0 z-0">
            <Image
              src={"/Watering101.png"}
              alt="EverBloom | Plant Care Tutorials"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full h-full flex flex-col justify-between items-start p-4 xl:p-8 absolute left-0 top-0 z-20 bg-gradient-to-b from-0% from-bgPrimary/50 via-50% via-bgPrimary/0 to-100% to-bgPrimary/50">
            <h2 className="text-3xl lg:text-4xl text-txtPrimary z-20">Watering 101</h2>
            <div className="relative w-8 h-8 self-end">
              <Image src={"/readMore.svg"} alt="Read more" fill />
            </div>
          </div>
        </div>
        <div className="h-[250px] lg:h-auto lg:row-span-8 lg:col-start-2 lg:row-start-1 rounded-lg relative overflow-hidden">
          <div className=" w-full h-full absolute left-0 top-0 z-0">
            <Image
              src={"/pruning.png"}
              alt="EverBloom | Plant Care Tutorials"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full h-full flex flex-col justify-between items-start p-4 xl:p-8 absolute left-0 top-0 z-20 bg-gradient-to-b from-0% from-bgPrimary/50 via-50% via-bgPrimary/0 to-100% to-bgPrimary/50">
            <div className="relative w-8 h-8 self-end">
              <Image src={"/readMore.svg"} alt="Read more" fill />
            </div>
            <h2 className="text-3xl lg:text-4xl text-txtPrimary z-20">
              Pruning Like a Pro
            </h2>
          </div>
        </div>
        <div className="h-[250px] lg:h-auto lg:row-span-7 lg:col-start-3 lg:row-start-1  rounded-lg relative overflow-hidden">
          <div className=" w-full h-full absolute left-0 top-0 z-0">
            <Image
              src={"/lighting.png"}
              alt="EverBloom | Plant Care Tutorials"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full h-full flex flex-col justify-between items-start p-4 xl:p-8 absolute left-0 top-0 z-20 bg-gradient-to-b from-0% from-bgPrimary/50 via-50% via-bgPrimary/0 to-100% to-bgPrimary/50">
            <h2 className="text-3xl lg:text-4xl text-txtPrimary z-20">
              Lighting Needs Decoded
            </h2>
            <div className="relative w-8 h-8 self-end">
              <Image src={"/readMore.svg"} alt="Read more" fill />
            </div>
          </div>
        </div>
        <button className="col-span-1 lg:row-start-1 h-14 lg:h-auto bg-accentSecondary rounded-lg">
          <h2 className="text-bgPrimary lg:text-xl xl:text-2xl">Get Custom Care Guides</h2>
        </button>
        <button className="col-span-1 lg:col-start-3 h-14 lg:h-auto border-1 border-accentSecondary rounded-lg">
          <h2 className="text-accentSecondary lg:text-xl xl:text-2xl">Rescue My Plant!</h2>
        </button>
      </div>
    </div>
  );
};
