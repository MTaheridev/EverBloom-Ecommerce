"use client";
import RootLayout from "@/app/layout";
import { ProductCard } from "@/components/products/productCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import { h1 } from "motion/react-client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import RangeSlider from "@/components/imported/rangeSlider";
import DualRangeSlider from "@/components/imported/rangeSlider";

const products = [
  {
    img: "plants (1)",
    title: "Aloe Vera",
    rate: "4.2",
    price: "$34.99",
    lastPrice: "$29.99",
  },
  {
    img: "plants (2)",
    title: "Snake Plant",
    rate: "3.8",
    price: "$44.99",
    lastPrice: "$39.99",
  },
  {
    img: "plants (3)",
    title: "Peace Lily",
    rate: "4.5",
    price: "$54.99",
    lastPrice: "$49.99",
  },
  {
    img: "plants (4)",
    title: "Spider Plant",
    rate: "4.0",
    price: "$24.99",
    lastPrice: "$19.99",
  },
  {
    img: "plants (5)",
    title: "Fiddle Leaf Fig",
    rate: "4.7",
    price: "$74.99",
    lastPrice: "$69.99",
  },
  {
    img: "plants (6)",
    title: "ZZ Plant",
    rate: "3.5",
    price: "$39.99",
    lastPrice: "$34.99",
  },
  {
    img: "plants (7)",
    title: "Pothos",
    rate: "4.3",
    price: "$29.99",
    lastPrice: "$24.99",
  },
  {
    img: "plants (8)",
    title: "Monstera",
    rate: "4.8",
    price: "$64.99",
    lastPrice: "$59.99",
  },
];

const ProductsGridPage = () => {
  const [filtersShown, setFiltersShown] = useState(false);

  const handleFilters = () => {
    setFiltersShown(!filtersShown);
  };
  return (
    <div>
      <div className="w-full h-[calc(100vh-80px)] flex flex-col justify-between items-center">
        <div className="flex flex-row lg:hidden justify-between w-full p-4 z-20">
          <button
            className="w-[39%] h-12 border-1 border-accentSecondary rounded-lg"
            onClick={handleFilters}
          >
            <p className="text-accentSecondary">Filters</p>
          </button>
          <button className="w-[59%] h-12 border-1 border-accentSecondary rounded-lg flex flex-row justify-evenly items-center">
            <div className="flex flex-row">
              <Image
                src={"/sort.svg"}
                alt="Most Expensive Apartment Plants"
                width={20}
                height={20}
              />
              <p>sort by:</p>
            </div>
            <p className="text-accentSecondary">Most Viewed</p>
          </button>
        </div>
        <div className="flex flex-row justify-center w-full h-full overflow-scroll">
          <div className="border border-accentSecondary/20 rounded-xl my-10 ml-10 hidden lg:flex lg:flex-col justify-between p-6">
            <h2 className="text-3xl">Filters</h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-0% via-50% to-100% from-accentPrimary/0 via-accentPrimary to-accentPrimary/0" />
            <div className="flex flex-col gap-4">
              <h2 className="text-xl">Light Needs</h2>
              <div className="flex flex-wrap gap-2">
                <button className="h-12 w-auto px-4 border-1 border-txtSecondary rounded-lg flex flex-row gap-2 justify-evenly items-center">
                  <Icon
                    icon={"solar:moon-linear"}
                    className="text-txtSecondary text-2xl"
                  />
                  <p>Low Light</p>
                </button>
                <button className="h-12 w-auto px-4 border-1 border-txtSecondary rounded-lg flex flex-row gap-2 justify-evenly items-center">
                  <Icon
                    icon={"ph:cloud-sun-light"}
                    className="text-txtSecondary text-2xl"
                  />
                  <p>Medium Light</p>
                </button>
                <button className="h-12 w-auto px-4 border-1 border-txtSecondary rounded-lg flex flex-row gap-2 justify-evenly items-center">
                  <Icon
                    icon={"si:sun-duotone"}
                    className="text-txtSecondary text-2xl"
                  />
                  <p>Bright Light</p>
                </button>
              </div>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-0% via-50% to-100% from-accentPrimary/0 via-accentPrimary to-accentPrimary/0" />
            <div className="">
              <h2 className="text-xl mb-4">Price Range</h2>
              <DualRangeSlider />
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-0% via-50% to-100% from-accentPrimary/0 via-accentPrimary to-accentPrimary/0" />
            <div className="flex flex-col gap-4">
              <h2 className="text-xl">Tags</h2>
              <div className="flex flex-wrap gap-2">
                <button className="h-12 w-auto px-4 border-1 border-txtSecondary rounded-lg flex flex-row gap-2 justify-evenly items-center">
                  <h2 className="text-3xl text-accentSecondary">#</h2>
                  <p>Pet Friendly</p>
                </button>
                <button className="h-12 w-auto px-4 border-1 border-txtSecondary rounded-lg flex flex-row gap-2 justify-evenly items-center">
                  <h2 className="text-3xl text-accentSecondary">#</h2>
                  <p>Air Freshener</p>
                </button>
                <button className="h-12 w-auto px-4 border-1 border-txtSecondary rounded-lg flex flex-row gap-2 justify-evenly items-center">
                  <h2 className="text-3xl text-accentSecondary">#</h2>
                  <p>Easy Care</p>
                </button>
                <button className="h-12 w-auto px-4 border-1 border-txtSecondary rounded-lg flex flex-row gap-2 justify-evenly items-center">
                  <h2 className="text-3xl text-accentSecondary">#</h2>
                  <p>Space Saver</p>
                </button>
              </div>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-0% via-50% to-100% from-accentPrimary/0 via-accentPrimary to-accentPrimary/0" />
            <div className="flex flex-col gap-4">
              <h2 className="text-xl">Pot Color</h2>
              <div className="flex flex-row gap-2">
                <div className="w-12 h-12 bg-black rounded-full"></div>
                <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                <div className="w-12 h-12 bg-yellow-600 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between items-center px-16 mt-10">
              <h3 className="text-2xl">Every plant in Everbloom</h3>
              <button className="h-12 rounded-lg flex flex-row gap-4 justify-evenly items-center">
            <div className="flex flex-row">
              <Image
                src={"/sort.svg"}
                alt="Most Expensive Apartment Plants"
                width={20}
                height={20}
              />
              <p>sort by:</p>
            </div>
            <p className="text-accentSecondary">Most Viewed</p>
          </button>
            </div>
          <div className="w-fit h-full overflow-scroll flex flex-wrap justify-center items-center pt-4 gap-2 px-4 z-0">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                img={product.img}
                title={product.title}
                rate={product.rate}
                price={product.price}
                lastPrice={product.lastPrice}
              />
            ))}
          </div>
          </div>
        </div>

        {filtersShown && (
          <div className="h-full w-full absolute top-0 bg-bgPrimary/90 backdrop-blur-xs flex flex-col justify-end items-center z-10">
            <div className="w-full h-[700px] flex flex-col px-8 gap-4">
              <h2 className="text-3xl">Filters</h2>
              <div className="h-[1px] w-full bg-gradient-to-r from-0% via-50% to-100% from-accentPrimary/0 via-accentPrimary to-accentPrimary/0" />
              <div className="flex flex-col gap-4">
                <h2 className="text-xl">Light Needs</h2>
                <div className="flex flex-wrap gap-2">
                  <button className="h-12 w-auto px-4 border-1 border-txtSecondary rounded-lg flex flex-row gap-2 justify-evenly items-center">
                    <Icon
                      icon={"solar:moon-linear"}
                      className="text-txtSecondary text-2xl"
                    />
                    <p>Low Light</p>
                  </button>
                  <button className="h-12 w-auto px-4 border-1 border-txtSecondary rounded-lg flex flex-row gap-2 justify-evenly items-center">
                    <Icon
                      icon={"ph:cloud-sun-light"}
                      className="text-txtSecondary text-2xl"
                    />
                    <p>Medium Light</p>
                  </button>
                  <button className="h-12 w-auto px-4 border-1 border-txtSecondary rounded-lg flex flex-row gap-2 justify-evenly items-center">
                    <Icon
                      icon={"si:sun-duotone"}
                      className="text-txtSecondary text-2xl"
                    />
                    <p>Bright Light</p>
                  </button>
                </div>
              </div>
              <div className="h-[1px] w-full bg-gradient-to-r from-0% via-50% to-100% from-accentPrimary/0 via-accentPrimary to-accentPrimary/0" />
              <div className="">
                <h2 className="text-xl mb-4">Price Range</h2>
                <DualRangeSlider />
              </div>
              <div className="h-[1px] w-full bg-gradient-to-r from-0% via-50% to-100% from-accentPrimary/0 via-accentPrimary to-accentPrimary/0" />
              <div className="flex flex-col gap-4">
                <h2 className="text-xl">Tags</h2>
                <div className="flex flex-wrap gap-2">
                  <button className="h-12 w-auto px-4 border-1 border-txtSecondary rounded-lg flex flex-row gap-2 justify-evenly items-center">
                    <h2 className="text-3xl text-accentSecondary">#</h2>
                    <p>Pet Friendly</p>
                  </button>
                  <button className="h-12 w-auto px-4 border-1 border-txtSecondary rounded-lg flex flex-row gap-2 justify-evenly items-center">
                    <h2 className="text-3xl text-accentSecondary">#</h2>
                    <p>Air Freshener</p>
                  </button>
                  <button className="h-12 w-auto px-4 border-1 border-txtSecondary rounded-lg flex flex-row gap-2 justify-evenly items-center">
                    <h2 className="text-3xl text-accentSecondary">#</h2>
                    <p>Easy Care</p>
                  </button>
                  <button className="h-12 w-auto px-4 border-1 border-txtSecondary rounded-lg flex flex-row gap-2 justify-evenly items-center">
                    <h2 className="text-3xl text-accentSecondary">#</h2>
                    <p>Space Saver</p>
                  </button>
                </div>
              </div>
              <div className="h-[1px] w-full bg-gradient-to-r from-0% via-50% to-100% from-accentPrimary/0 via-accentPrimary to-accentPrimary/0" />
              <div className="flex flex-col gap-4">
                <h2 className="text-xl">Pot Color</h2>
                <div className="flex flex-row gap-2">
                  <div className="w-12 h-12 bg-black rounded-full"></div>
                  <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                  <div className="w-12 h-12 bg-yellow-600 rounded-full"></div>
                  <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsGridPage;
