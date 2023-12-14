//Veg
"use client";

import Image from "next/image";
import { useState } from "react";

export default function ItemImag({ item, fill, width, height }) {
  const [loading, setLoading] = useState(true);
    // console.log("ItemImag/item= ", item)


  return (
    <>
      {/* <div className="hover:scale-105 transition-transform ease-out duration-200 object-cover"> */}
      {fill ? (
        <Image
          src={item.image}
          alt={item.title}
          fill
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
          }}`}
          //   Заповнює весь контейнер
          style={{
            objectFit: "cover",
          }}
          onLoad={() => setLoading(false)}
          //   onLoad={(e) => console.log("ProductImag/onLoad/naturalWidth1=", e.target.naturalWidth)}
        />
      ) : (
        <Image
          src={item.image}
          alt={item.title}
          width={width}
          height={height}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
          }}`}
          onLoad={() => setLoading(false)}
          //   onLoad={(e) => console.log("ProductImag/onLoad/naturalWidth2=", e.target.naturalWidth)}
        />
      )}
      {/* </div> */}
    </>
  )
}
