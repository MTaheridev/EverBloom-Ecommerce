import Image from 'next/image'
import React from 'react'

export const SearchBar = () => {
  return (
    <div className='w-[90vw] lg:w-full h-12 border-2 border-border rounded-full flex flex-row justify-between items-center px-6'>
        <h3 className='text-txtSecondary'>Search for a leaf...</h3>
        <Image src={"search.svg"} alt='search for a plant' width={28} height={28}/>
    </div>
  )
}
