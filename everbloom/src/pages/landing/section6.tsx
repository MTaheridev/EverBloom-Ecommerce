"use client"
import { LandingProductCard } from "@/components/products/landingProductCard";
import { TopCommentsCard } from "@/components/products/topCommentsCard";
import React, { useRef, useState, useEffect } from "react";

export const SectionSix: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const body = document.body;

    if (isHovered) {
      body.style.overflow = 'hidden'; 
    } else {
      body.style.overflow = 'auto'; 
    }

    return () => {
      body.style.overflow = 'auto'; 
    };
  }, [isHovered]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      e.preventDefault();
      const scrollAmount = e.deltaY * 2; 


      const newScrollLeft = scrollRef.current.scrollLeft + scrollAmount;
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;


      if (newScrollLeft <= 0 || newScrollLeft >= scrollWidth - clientWidth) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }


      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth', 
      });
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] w-lvw overflow-hidden flex flex-col">
      <div className="flex flex-col justify-between pl-8 pt-4 lg:mt-8 xl:ml-20 h-40 lg:h-24">
        <div className="flex flex-col lg:flex-row">
          <h1 className="text-3xl lg:text-4xl xl:text-4xl mr-2">Our Gratitude</h1>
          <h1 className="text-3xl lg:text-4xl xl:text-4xl">Gallery</h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <p className="text-xl xl:text-2xl mr-1">Celebrating the bonds between</p>
          <p className="text-xl xl:text-2xl">plants and their caregivers.</p>
        </div>
      </div>
      <div className="self-center mt-20">
        <div
          ref={scrollRef}
          className="px-8 xl:px-20 w-lvw flex flex-row justify-evenly overflow-x-auto py-4 scroll-smooth"
          onWheel={handleWheel}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <TopCommentsCard />
          <TopCommentsCard />
          <TopCommentsCard />
          <TopCommentsCard />
          <TopCommentsCard />
          <TopCommentsCard />
        </div>
      </div>
    </div>
  );
};