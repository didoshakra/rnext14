"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SubCategories from "@/components/product/SubCategories";

export default function Category({ item }) {
  const [subdirId, setSubdirId] = useState(1);
  // console.log("************Product.js/P/roduct=", Product)
  const handleSubdirId = () => {
    console.log("Category.js/handleSubdirId", subdirId);
    if (subdirId === item.id) setSubdirId(0);
    else setSubdirId(0);
  };
  return (
    // <div className="group mb-1  grid grid-cols-[24px_1fr] items-start gap-2 bg-slate-300 pb-1">
    <button
      onClick={handleSubdirId}
      //   className=" group mb-1  grid grid-cols-[24px_1fr] items-start gap-2 pb-1"
      className=" mb-1 grid grid-cols-[24px_1fr] items-start gap-2 overflow-hidden pb-1"
    >
      <div className="max-w-6 h-6 ">
        {/* <ItemImage item={item} width={24} height={24} /> */}
        <Image src={item.image} alt="icon" width={24} height={24} />
      </div>
      {/* <span className="  text-sm text-[#3e77aa] group-hover:text-red-500 group-hover:underline group-hover:decoration-1"> */}
      <div className=" text-left text-sm text-[#3e77aa] hover:text-red-500 hover:underline hover:decoration-1">
        {item.title}{" "}
        <span className=" items-start text-xs font-normal text-[#a6a5a5]">
          ({item.goods_quantity})
        </span>
        {/* {item.id === subdirId && <SubCategories />} */}
      </div>
    </button>
    // {/* </div> */}
  );
}
