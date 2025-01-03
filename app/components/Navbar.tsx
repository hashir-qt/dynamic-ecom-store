"use client";

import { Button } from '@/components/ui/button';
import {  ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from "next/navigation";
import React from 'react'
import { useShoppingCart } from 'use-shopping-cart';

const links = [
    {name: 'Home', href: '/'},
    {name: 'Men', href: '/Men'},
    {name: 'Women', href: '/Women'},
    {name: 'Kids', href: '/Kids'},
];

const Navbar = () => {
    const pathname = usePathname();
    const {handleCartClick} = useShoppingCart();
  return (
    <div>
      <header className='mb-8 border-b'>
      <div className="flex items-center justify-between mx-auto max-w-2xl py-5 px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Urban<span className="text-primary">Stitch</span>
          </h1>
        </Link>

        <div className='hidden gap-12 lg:flex '>
        {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className=''>
            <Button 
            variant='link' 
            onClick={() => handleCartClick()}
            className="flex flex-col text-primary underline-offset-4 hover:underline  sm:py-4 md:py-4 ">
                
                <ShoppingCartIcon className='size-[10px] '/>
                <span className="hidden text-xs font-semibold text-primary sm:block">Cart</span>
               
            </Button>

        </div>

        </div>

      </header>
    </div>
  )
}

export default Navbar
