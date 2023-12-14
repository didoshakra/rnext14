//Під шаблон ProductVegefoogs
import { getAllProducts } from "@/app/(shop)/product/data/data"
import Link from "next/link"
import ItemImage from "@/components/_images/ItemImage"

//***  На dark не треба переключати коліри тексту !!!   */
export const shops = [
  {
    id: 1,
    title: `магазин "Станіславський"`,
    image: "/images/mstan/shops/Ctan2-500-375.jpg",
    address: "вул.Тмхого,2",
  },
  {
    id: 2,
    title: `павільйон "Продукти"`,
    image: "/images/mstan/shops/m66-500-375.jpg",
    address: "вул.Б.Хмельницькогоо,66",
  },
  {
    id: 3,
    title: `магазин "Продукти"`,
    image: "/images/mstan/shops/Pushk-500-375.jpg",
    address: "вул.Пушкіна,2",
  },
  {
    id: 4,
    title: `магазин "Дворик"`,
    image: "/images/mstan/shops/Dvoruk-500-375.jpg",
    address: "вул.Л.Українки,2",
  },
  {
    id: 5,
    title: `магазин "Тютюн"`,
    image: "/images/mstan/shops/Tytyn-500-375.jpg",
    address: "вул.Дзвонарська,2",
  },
  {
    id: 6,
    title: `павільйон "5*5"`,
    image: "/images/mstan/shops/m55-500-375.jpg",
    address: "вул.Винниченка,2",
  },
  {
    id: 7,
    title: `магазин "Станіславський"`,
    image: "/images/mstan/shops/mStan-500-355.jpg",
    address: "вул.С.Бандери,2",
  },
]

function OurShop({ item }) {
  //   console.log("************Product.js/P/item=", item);
  return (
    <div className=" border-hBorder group flex h-96 flex-col rounded  border-2  bg-white transition-transform duration-200 ease-out hover:scale-105">
      <div className="m-2 relative max-h-72 flex-1 ">
        <h3 className="text-center font-serif font-normal uppercase">{item.title}</h3>
        <div className="flex m-2 max-h-96 flex-1 w-full items-center justify-center">
          {/* <ItemImage item={item} width={350} height={280} /> */}
          <ItemImage item={item} fill />
        </div>
      </div>
      {/*line-clamp-2: Для затиску тексту до певної кількості рядків. */}
      <p className="pt-3 line-clamp-2 px-4 text-base italic text-hTexr">Адреса: {item.address}</p>
    </div>
  )
}

export default function OurShops() {
  return (
    <section className="flex flex-col space-y-3 px-1 md:px-4 pb-5 pt-5 text-center text-hText">
      <h2 className="text-4xl italic font-bold ">Наші магазини</h2>
      <div className="grid grid-cols-1 gap-6  md:grid-cols-3">
        {shops.map((item) => (
          <OurShop key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
