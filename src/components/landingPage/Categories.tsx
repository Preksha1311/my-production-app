"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";


export function DirectionAwareHoverDemo() {
  const dataXL = ["Glassware", "Table Lamps", "Chandelier"];
  const dataSM = [ "/products/glassware"
  , "/products/tableLamps", "/products/chandeliers"];
const imageUrl = ["https://res.cloudinary.com/dja68ij3b/image/upload/v1716287708/our-websitr/qerisclcvkj34pezcdyj.jpg",
  "https://res.cloudinary.com/dja68ij3b/image/upload/v1716287643/our-websitr/a74cuhewri28uveg24u0.jpg", "https://res.cloudinary.com/dja68ij3b/image/upload/v1716287560/our-websitr/xpng12f7vch9t9kddhde.jpg"]
return (

  <div className="h-auto box-sizing:border-box relative w-full flex flex-wrap items-center justify-center p-4">
    {imageUrl.map((imageUrl, index) => (
      <DirectionAwareHover key={index} imageUrl={imageUrl} className=
        // " mx-10 min-w-60 my-10 "
        //  "my-10 md:w-32 md:h-60 lg:w-80  lg:h-80 mx-10 md:flex md:shrink-0"
        "w-60 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-60 sm:h-80 md:h-70 lg:h-[18rem] xl:h-[20rem] mx-10 my-10"
      >
        {/* Your DirectionAwareHover component's content */}
        {/* {dataXL.map((dataXL,index)=>(
          <p key={index} dataXL= {dataXL} className="font-bold text-xl" />
        ))}
       {dataSM.map((dataSM,index)=>(

        <p key={index} dataSM = {dataSM} className="font-normal text-sm"/>
       ))} */}
           <p className="font-bold text-xl">{dataXL[index]}</p>
                <Link href={dataSM[index]}  className="font-normal text-sm">
                 Explore
                </Link>
      </DirectionAwareHover>
    ))}
  </div>
);
}

// sm:h-80 md:h-70 lg:h-[18rem] xl:h-[20rem]
