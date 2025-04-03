import React from "react";
import SpotlightCard from "../imported/spotlightCard";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";

interface product {
  img: string;
  title?: string;
  price?: string;
  lastPrice?: string;
  rate?: string;
}

export const ProductCard: React.FC<product> = ({
  img,
  title,
  price,
  lastPrice,
  rate,
}) => {
  return (
    <div className="w-full sm:w-[300px] h-44 sm:h-[470px] border-[0.5px] border-border rounded-lg flex flex-row sm:flex-col sm:justify-between overflow-hidden">
      <div className="relative h-full sm:h-fit sm:w-full aspect-square">
        <Image
          src={`/plants/productImages/${img}.png`}
          alt={`EverBloom | ${title}`}
          fill
        />
      </div>
      <div className="flex flex-col p-2 justify-between w-full h-[60%]">
        <h2 className="text-xl sm:text-2xl">{title}</h2>
        <div className="flex flex-col gap-1">
          <div className="flex flex-row items-center gap-1">
            <p>{rate}</p>
            <Image
              src={"/star.svg"}
              alt="EverBloom | compare apartment plants by rating"
              width={16}
              height={16}
            />
          </div>
          <div className="flex flex-row gap-1 items-center">
            <p className="line-through">{lastPrice}</p>
            <p className="text-lg text-accentSecondary">{price}</p>
          </div>
          <button className="w-full h-12 bg-accentPrimary rounded-lg">
            <p className="text-txtPrimary">Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};
