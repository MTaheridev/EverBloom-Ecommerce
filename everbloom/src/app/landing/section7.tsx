import { BeginnerKitCard } from "@/components/products/beginnerKitCard";
import React from "react";

export const SectionSeven = () => {
  return (
    <div className="h-auto w-lvw overflow-hidden flex flex-col">
      <div className="flex flex-col justify-between pl-8 pt-4 lg:mt-8 xl:ml-20 h-28 lg:h-24">
        <h1 className="text-3xl lg:text-4xl xl:text-4xl">
          Beginner Plant Kits
        </h1>
        <div className="flex flex-col lg:flex-row">
          <p className="text-xl xl:text-2xl mr-1">Curated bundles for your</p>
          <p className="text-xl xl:text-2xl">specific needs.</p>
        </div>
      </div>
      <div className="landing-section7-grid grow">
        <BeginnerKitCard imageSrc="/EasyCareKit.png" title="Easy Care" desc="Perfect for busy plant parents with little time." similarPlants={["Snake Plant", "ZZ Plant", "Pothos"]} price="$39.99" isFullWidth/>
        <BeginnerKitCard imageSrc="/EasyCareKit.png" title="Easy Care" desc="Perfect for busy plant parents with little time." similarPlants={["Snake Plant", "ZZ Plant", "Pothos"]} price="$39.99"/>
        <BeginnerKitCard imageSrc="/EasyCareKit.png" title="Easy Care" desc="Perfect for busy plant parents with little time." similarPlants={["Snake Plant", "ZZ Plant", "Pothos"]} price="$39.99"/>
        <BeginnerKitCard imageSrc="/EasyCareKit.png" title="Easy Care" desc="Perfect for busy plant parents with little time." similarPlants={["Snake Plant", "ZZ Plant", "Pothos"]} price="$39.99" isFullWidth/>
      </div>
    </div>
  );
};
