//About.js
// import ItemImage from "@/components/_images/ItemImage"
import Image from "next/image"

const pageAboutMe_text1 = `"Станіславський" - мережа невеличких продуктових магазинів,
    павільйонів і кіосків сімейного типу у м.Калуші. Перший наш магазин
    відкрився у 2002 році який започаткував мережу "Станіславський", що тепер налічує
    7 торгових точок.
    З тих пір ми дбаємо про якість бренду "Станіславський", надаючи нашим покупцям
    високу якість обслуговування та даруючи їм відчуття сімейного затишку та
    повного задоволення. Ми завжди дбаємо про те, щоб наш покупець
    залишав наші магазини тільки в хорошому настрої і з позитивними
    емоціями. Ну і звичайно ж, з повними сумками якісних продуктів"`

const pageAboutMe_text2 = `Щоро запрошуємо відвідати наші торгові точки. Ви не пошкодуєте!!!`

export const item = {
  title: "магазин Станіславський",
  image: "/images/mstan/shops/Ctan2-500-375.jpg",
}

const About = () => {
  //   console.log("About/item= ", item)
  return (
    <section className="flex flex-col space-y-3 px-2 pb-5 pt-5 text-center text-hText">
      <h2 className=" text-4xl italic font-bold">Про нас</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex justify-center relative h-60 md:h-96 flex-1">
          {/* <ItemImage item={item} width={500} height={370} /> */}
          {/* <ItemImage item={item} fill /> */}
          {/* //Заповнює весь контейнер */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="w-full h-auto" //Заповнює весь контейнер або
            // style={{ objectFit: "cover" }} //Заповнює весь контейнер
          />
        </div>
        {/* //leading-6: висота лінії
          tracking-wide: інтервал між літерами. */}
        <div className=" text-left">
          <p className="text-2xl leading-8 tracking-wide font-medium">{pageAboutMe_text1}</p>
          <p className="text-xl pt-4 font-bold leading-6 tracking-wide">{pageAboutMe_text2}</p>
        </div>
      </div>
    </section>
  )
}

export default About
