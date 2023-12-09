export const metadata = {
  title: "Taillwqind CSS",
  description: "TaillwqindCSS",
}

export default function TaillwqindCSS() {
  return (
    // <section className="flex flex-col space-y-8 pb-4  ">
    <>
      <h1 className="text-headMenuText bg-fuchsia-200 text-center text-4xl  font-bold">
        Taillwqind CSS
      </h1>
      <a
        href=" https://itproger.com/ua/news/izuchenie-tailwind-css-za-chas-razrabotka-proekta-s-nulya"
        className="align-center flex justify-center text-sm font-bold text-sky-600 underline hover:text-red-600"
      >
        Taillwqind CSS
      </a>
      <p className="mx-auto w-full pt-6 sm:w-[450px] ">
        {/* Функція theme намагається знайти значення, яке ви шукаєте, з повністю
        об’єднаного об’єкта теми, тому може посилатися на ваші власні
        налаштування, а також на значення теми за замовчуванням. Він також
        працює рекурсивно, так як long оскільки в кінці ланцюжка є статичне
        значення, воно зможе визначити значення, яке ви шукаєте. */}
      </p>
      <section className="mb-2 h-full w-full">
        <h1 className=" mt-2 text-center text-xl font-bold text-red-600">
          flex
        </h1>
        <h1 className="mb-3 text-center  text-sm  font-bold">
          flex justify-center pt-big space-x-0 md:space-x-10 flex-col
          md:flex-row space-y-5 md:space-y-0
        </h1>
        <div className="pt-big flex  flex-col justify-center space-x-0 space-y-5 md:flex-row md:space-x-10 md:space-y-0">
          <div className="flex justify-center rounded-full bg-red-500 px-4 py-2 hover:bg-red-700">
            Button1
          </div>
          <div className="flex justify-center rounded-full bg-red-500 px-4 py-2 hover:bg-red-700">
            Button2
          </div>
          <div className="flex justify-center rounded-full bg-red-500 px-4 py-2 hover:bg-red-700">
            Button3
          </div>
          <div className="flex justify-center rounded-full bg-red-500 px-4 py-2 hover:bg-red-700">
            Button4
          </div>
          <div className="flex justify-center rounded-full bg-red-500 px-4 py-2 hover:bg-red-700">
            Button5
          </div>
        </div>
      </section>
      {/*  */}
      <section className="mb-2 h-full w-full">
        <h1 className=" mt-2 text-center text-xl font-bold text-red-600">
          grid
        </h1>
        <h1 className="mb-3 text-center  text-sm  font-bold">
          grid grid-cols-4 gap-4
        </h1>
        <div className="py-big container mx-auto grid grid-cols-4 gap-4 px-4">
          <div className="h-[100px] w-1/2 bg-purple-500"></div>
          <div className="h-[100px] w-3/5 bg-purple-500"></div>
          <div className="h-[100px] w-1/6 bg-purple-500"></div>
          {/* <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 w-full h-[100px]"></div> */}
          <div className="h-[100px] w-full bg-gradient-to-r from-purple-400 via-green-500 to-red-500"></div>
        </div>
      </section>
      {/*  */}
      {/*https://refine.dev/blog/tailwind-grid/#grid-gap */}
      <section className="mb-2 h-full w-full">
        <h1 className=" mt-2 text-center text-xl font-bold text-red-600">
          grid
        </h1>
        <h1 className="mb-3 text-center  text-sm  font-bold">
          grid grid-cols-3 gap-4
        </h1>
        <div className="container mx-auto grid grid-cols-3 gap-4">
          {/* <div cclassName="tile bg-teal-500"> */}
          <div className=" bg-teal-500">
            {/* <h1 cclassName="tile-marker">ONE</h1> */}
            <h1>ONE</h1>
          </div>
          <div className=" bg-amber-500">
            <h1>TWO</h1>
          </div>
          <div className=" bg-yellow-500">
            <h1>THREE</h1>
          </div>
          <div className=" bg-lime-600">
            <h1>FOUR</h1>
          </div>
          <div className=" bg-green-600">
            <h1>FIVE</h1>
          </div>
          <div cclassName=" bg-emerald-500">
            <h1>SIX</h1>
          </div>
          <div cclassName="bg-teal-500">
            <h1>SEVEN</h1>
          </div>
          <div cclassName=" bg-purple-500">
            <h1>EIGHT</h1>
          </div>
          <div cclassName=" bg-pink-500">
            <h1>NINE</h1>
          </div>
        </div>
      </section>
    </>
    // </main>
  );
}
