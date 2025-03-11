import React from "react";
import SpotlightCard from "../imported/spotlightCard";
import Image from "next/image";
import StarRating from "../imported/starRating";

export const TopCommentsCard = () => {
  return (
    <div>
      <SpotlightCard
        spotlightColor="rgba(76, 175, 80, 1)"
        className="w-[340px] h-[400px] mx-2 p-[1px]"
      >
        <SpotlightCard
          className=" bg-bgSecondary rounded-2xl w-full h-full"
          spotlightColor="rgba(0, 0, 0, 0)"
        >
          <div className="w-full h-full px-4 py-4 flex flex-col justify-between">
            <div>
            <div className="flex flex-row items-center">
              <div className="w-10 h-10 relative">
                <Image
                  src={"/logo.svg"}
                  alt="EverBloom | customer comments"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl ml-4">Sara Ahmadi</h2>
            </div>
            <p className="px-4 mt-4 leading-relaxed text-lg">I bought a ZZ plant a year ago, and it's still as vibrant as day one! The care QR code saved my life. Thank you, Green Haven! 🌱✨</p>
            
            </div>
            <div className="flex flex-row justify-between items-center">
            <StarRating rating={4}/>
            <h2>Niavaran, Tehran</h2>
            </div> 
          </div>
        </SpotlightCard>
      </SpotlightCard>
    </div>
  );
};
