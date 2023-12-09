//HomePage.js / Muiv4.5.1
//Добавлено animat
// import  { useContext } from "react"
// import Link from "next/link"
// import { ComponentContext } from "../../context/ComponentContext"

const StHomePage = () => {
  const disabled = false; //Для buton
  //   const { state } = useContext(ComponentContext)
  //   const theme = state.theme

  return (
    // <section className="home-slider-section">
    <section className="relative h-[300px] md:h-[500px]">
      {/* елемент слайдеру */}
      <div
        className="absolute bottom-0 left-0 h-full w-full animate-[slideHome_5s_linear_infinite_alternate]
        items-center justify-center bg-[url('/images/mstan/Stan2-in-1600-720.jpg')] bg-cover bg-center bg-no-repeat text-center"

      >
        <div className="flex h-full w-full flex-col items-center justify-center px-3 text-center align-middle">
          {/* <h1 className="items-center justify-center font-serif text-[30px] font-extrabold leading-normal text-hTextImg md:text-[70px]"> */}
          <h1 className="items-center justify-center font-serif text-[30px] font-extrabold leading-normal text-hTextImg md:text-[70px]">
            Купуйте у нас і у Вас завжди буде хороший настрій
          </h1>
          <h2 className="inline-block font-sans text-[10px] font-bold uppercase tracking-normal text-hTextImg1 md:text-[25px]">
            Колектив магазину
          </h2>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 h-full w-full animate-[slideHome_5s_5s_linear_infinite_alternate] items-center
        justify-center bg-[url('/images/mstan/Stan2-in2-1600-720.jpg')] bg-cover bg-center bg-no-repeat text-center"
      >
        <div className="flex h-full flex-col items-center justify-center px-3 align-middle ">
          <h1 className="h-auto items-center justify-center  font-sans text-[30px] font-extrabold leading-normal text-hTextImg md:text-[70px]">
            Завжди свіжі і якісні продукти для Вас і вашої родини
          </h1>
          <h2 className="inline-block font-sans text-[10px] font-bold uppercase tracking-normal text-hTextImg1 md:text-[25px]">
            Це не тільки реклама
          </h2>
        </div>
      </div>
    </section>
  );
};
export default StHomePage;
