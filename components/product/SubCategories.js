"use server";
import SubCategory from "./SubCategory";
import { getAllSubCategories } from "@/app/(shop)/product/data/dataCategories";

export default async function SubCategories() {
  const mSubCategories = await getAllSubCategories();
  // console.log("Categories.js/Categories=", Categories)
  return (
    // <div className="block w-full overflow-hidden bg-neutral-300  pl-10">
    <div className="block w-full overflow-hidden pl-10 text-slate-700">
      {mSubCategories.map((item) => (
        <SubCategory key={item.id} item={item} />
      ))}
    </div>
  );
}
