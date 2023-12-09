// Для визначення і візуалізації одного продукту
import ItemImage from "@/components/_images/ItemImage";
import { notFound } from "next/navigation";
import { getProductById } from "@/app/(shop)/product/data/data";
//Фотки мають бути w254*h266

// export function generateMetadata({ params }) {
//   const id = params.name;
//   return {
//     title: product.title,
//   };
// }

export default async function ProductPage({ params }) {
  try {
    const id = params.id;
    const product = await getProductById(id);
    // const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    // const product = await res.json()

    return (
      <div className="mx-auto mt-2 flex max-w-xl flex-col items-center  gap-2 px-2 pb-10 md:flex-row md:justify-center">
        {/* <div className="relative  flex-1 "> */}
        <ItemImage item={product} width={500} height={400} />

        {/* <ItemImage item={product} fill /> */}
        {/* </div> */}

        <div className="divide-y ">
          <div className="space-y-2 pb-4">
            <h1 className="text-center text-2xl font-bold md:text-4xl">
              {product.title}
            </h1>
            <h2 className="text-center text-xl font-bold text-gray-500 md:text-3xl">
              ${product.price}
            </h2>
          </div>

          <div className="pt-8">
            <p className="text-xs md:text-sm">{product.description}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
