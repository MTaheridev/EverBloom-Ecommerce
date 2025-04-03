"use client"
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import { SearchBar } from './searchBar';

export const MobileMenu = () => {

    const [mobileMenuOpen, setMobileMenu] = useState(false);

    const handleMenu = () => {
        setMobileMenu(!mobileMenuOpen);
    }

    useEffect(() => {
        
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [mobileMenuOpen]);
    
    return (
        <div className='block lg:hidden'>
            {
                mobileMenuOpen ?
                <Image className='block lg:hidden' src={"closeMenu.svg"} alt='EverBloom Logo' width={35} height={35} onClick={handleMenu}/> :
                <Image className='block lg:hidden' src={"hamburgerMenu.svg"} alt='EverBloom Logo' width={35} height={35} onClick={handleMenu}/>
            }
            {
                mobileMenuOpen &&
                <div className='absolute top-20 left-0 z-100 w-lvw h-[calc(100vh-80px)] bg-bgPrimary/90 backdrop-blur-xs flex flex-col justify-between items-center pt-4'>
                <SearchBar />
                <div>
                    <div className='w-lvw h-24 flex justify-center items-center border-t-2 border-border text-2xl'>
                        <h3>Shop</h3>
                    </div>
                    <div className='w-lvw h-24 flex justify-center items-center border-t-2 border-border text-2xl'>
                        <h3>Cart</h3>
                    </div>
                    <div className='w-lvw h-24 flex justify-center items-center border-t-2 border-border text-2xl'>
                        <h3>About</h3>
                    </div>
                </div>
            </div>
            }
        </div>
  )
}
