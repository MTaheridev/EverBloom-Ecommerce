import React from "react";
import SpotlightCard from "../../../components/imported/spotlightCard";
import Image from "next/image";

export const LandingProductCard = () => {
  return (
    <div>
      <SpotlightCard spotlightColor="rgba(76, 175, 80, 1)" className="w-[340px] h-[550px] mx-2 p-[1px]">
        <SpotlightCard
          className=" bg-bgSecondary rounded-2xl w-full h-full"
          spotlightColor="rgba(0, 0, 0, 0)"
        >
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-[45%] object-contain relative">
            <Image src={"/plants/landing-section2-plant.png"} alt="EverBloom | Snake Plant" fill quality={100}/>
            </div>
            <div className="px-8 py-4 flex flex-col justify-between grow">
            <h2 className="text-3xl">Snake Plant</h2>
            <ul className="mt-4 text-txtSecondary font-text">
              <li>Low Light Tolerant</li>
              <li>Air Purifying</li>
              <li>Pet-Safe</li>
              <li>Medium Sized</li>
            </ul>
            <p className="text-accentSecondary text-xl">$ 24.99</p>
            <div className="w-full flex flex-row">
              <button className="h-12 grow text-accentSecondary border-2 border-accentPrimary rounded-lg">
              Quick View
              </button>
              <button className="relative size-12 ml-2 bg-accentPrimary rounded-lg">
                <Image src={"cart.svg"} alt="EverBloom | Shopping Cart" fill className="p-1"/>
              </button>
            </div>
            </div>
          </div>
        </SpotlightCard>
      </SpotlightCard>
    </div>
  );
};
