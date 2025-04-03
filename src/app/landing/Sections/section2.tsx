"use client"
import { LandingProductCard } from "@/app/landing/Cards/landingProductCard";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

export const SectionTwo: React.FC = () => {

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      e.preventDefault();
      const scrollAmount = e.deltaY * 2; 

      const newScrollLeft = scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth', 
      });
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] w-lvw overflow-visible flex flex-col">
      <div className="flex flex-col justify-between pl-8 pt-4 lg:mt-8 xl:ml-20 h-40 lg:h-24">
        <div className="flex flex-col lg:flex-row">
          <h1 className="text-3xl lg:text-4xl xl:text-4xl mr-2">what do we have </h1>
          <h1 className="text-3xl lg:text-4xl xl:text-4xl">to offer?</h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <p className="text-xl xl:text-2xl mr-1">our best products</p>
          <p className="text-xl xl:text-2xl">to make your home glow</p>
        </div>
      </div>
      <div className="self-center mt-8">
        <div
          className="px-8 xl:px-20 w-lvw flex flex-row justify-evenly overflow-x-auto py-4 scroll-smooth"
          ref={scrollRef}
          onWheel={handleWheel}
        >
          <LandingProductCard />
          <LandingProductCard />
          <LandingProductCard />
          <LandingProductCard />
          <LandingProductCard />
          <LandingProductCard />
        </div>
        <div className="hidden xl:flex flex-row justify-between w-full px-20">
          <Image
            src={"/scrollLeft.svg"}
            alt="EverBloom | Apartment Plants"
            width={40}
            height={40}
            className="scale-100 hover:scale-125 transition cursor-pointer"
            onClick={() => {
              if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
              }
            }}
          />
          <Image
            src={"/scrollRight.svg"}
            alt="EverBloom | Apartment Plants"
            width={40}
            height={40}
            className="scale-100 hover:scale-125 transition cursor-pointer"
            onClick={() => {
              if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
              }
            }}
          />
        </div>

      </div>
    </div>
  );
};