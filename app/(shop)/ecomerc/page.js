import Product from "@/app/(shop)/product/Product";
import { getAllProducts } from "@/app/(shop)/product/data/data";

export const metadata = {
  title: "Продукти",
  description: "Продукти харчування",
};

export default async function Home() {
  const products = await getAllProducts();
  return (
    <section className="flex flex-col space-y-3 px-2 pb-5 pt-5 text-center text-hText">
      <h1 className=" text-4xl font-bold">Пропозиції дня</h1>
      <h2 className=" text-2xl italic ">Тільки якісні продукти</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
