"use client";
import Link from "next/link";

export default function SubCategory({ item }) {
  // console.log("************Product.js/P/roduct=", Product)
  return (
    // <div className="group mb-1  grid grid-cols-[24px_1fr] items-start gap-2 bg-slate-300 pb-1">
    <Link
      href={`/`}
      //   href={`/product/${item.id}`}
      className=" mb-1  pb-1"
    >
      {/* <div></div> */}
      <span className="text-sm text-[#3e77aa] hover:text-red-500 hover:underline hover:decoration-1">
        {item.title}{" "}
        <span className="text-xs font-normal text-[#a6a5a5]">
          ({item.goods_quantity})
        </span>
      </span>
    </Link>
    // {/* </div> */}
  );
}
