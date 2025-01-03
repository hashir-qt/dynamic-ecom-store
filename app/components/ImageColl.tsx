'use client';

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

interface AppProps {
    images: any;
}

export default function ImageColl({images}: AppProps ) {
    const [bigImage, setBigImage] = useState(images[0]);
    const handleSmallImageClick = (image:any) => {
        setBigImage(image);
    };
  
return (
    <div className="grid  gap-4 lg:grid-cols-4">
        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
          {images.map((images: any, idx:any) => (
            <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
                <Image 
                src={urlFor(images).url()} 
                width={200}
                height={200}
                alt="product"
                className="h-full w-full object-cover object-center"
                onClick={() => handleSmallImageClick(images)}
                 />
                
            
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-3">
            <Image
            src={urlFor(bigImage).url()}
            alt="fullproduct"
            width={400}
            height={400}
            className="w-full h-full object-cover object-center"
            />
            <span className="absolute right-0 top-0 rounded-b-lg bg-red-500 px-3 font-semibold py-1.5 text-sm uppercase tracking-wider text-white">
           upto 50% off
        </span>
        </div>

    </div>
)
}