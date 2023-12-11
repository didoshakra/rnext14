//Ecomerc
import Link from "next/link";
import ItemImage from "@/components/_images/ItemImage";

export default function Product({ product }) {
  //   console.log("************Product.js/product=", product)
  return (
    <Link
      //   href={`/(shop)/product/${product.id}`}
      href={`/product/${product.id}`}
      className="group flex h-96 flex-col rounded border-2  border-hBorder  bg-white transition-transform duration-200 ease-out hover:scale-105"
      //   className="group flex h-96 flex-col rounded border p-5 transition-transform duration-200 ease-out hover:scale-105"
    >
      <div className="relative max-h-72 flex-1">
        <ItemImage item={product} width={350} height={280} />
        {/* <ItemImage item={product} fill /> */}
      </div>

      <div className="mb-1 mt-4 px-2 flex items-center justify-between font-semibold">
        <p className="w-44 truncate">{product.title}</p>
        <p>${product.price}**</p>
      </div>

      <p className="line-clamp-2 px-4 text-xs italic text-hTexr">{product.description}</p>
    </Link>
  )
}
