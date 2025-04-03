"use client"
import Image from 'next/image';
import React from 'react';

export const MyFooter = () => {
  return (
    <div className='w-full flex flex-col items-center justify-evenly'>
      <Image src={"logo.svg"} alt='EverBloom logo | Indoor Plants for Modern Living' width={100} height={100}/>
      <h1 className='text-3xl'>EverBloom</h1>
      <p className=''>Bringing nature’s elegance to urban spaces.</p>
      <div className='flex flex-row mt-2 mb-3 gap-2'>
          <Image src={"pinterestLogo.svg"} alt='EverBloom logo | Indoor Plants for Modern Living' width={35} height={35} className=' scale-100 hover:scale-125 transition-transform cursor-pointer'/>
          <Image src={"telegramLogo.svg"} alt='EverBloom logo | Indoor Plants for Modern Living' width={35} height={35} className=' scale-100 hover:scale-125 transition-transform cursor-pointer'/>
          <Image src={"instagramLogo.svg"} alt='EverBloom logo | Indoor Plants for Modern Living' width={35} height={35} className=' scale-100 hover:scale-125 transition-transform cursor-pointer'/>
          <Image src={"tiktokLogo.svg"} alt='EverBloom logo | Indoor Plants for Modern Living' width={35} height={35} className=' scale-100 hover:scale-125 transition-transform cursor-pointer'/>
        </div>
      <div className='w-[90vw] h-[1px] bg-linear-to-r from-accentPrimary/0 via-accentPrimary to-accentPrimary/0'></div>
      <p className='text-sm mt-2'>© 2024 Everbloom. Cultivating green dreams.</p>
      <p className='text-sm mb-2'>Website Design By: <a href="http://m-devs.ir">M-DEVS.IR</a></p>
    </div>
  );
};