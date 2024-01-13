export const metadata = {
  title: "Grid CSS",
  description: "Grid CSS",
}

export default function Grid() {
  return (
    <>
      <h1 className="text-4xl font-bold text-hText dark:text-hTextD text-center  bg-fuchsia-200">Grid CSS</h1>
      <a
        href="https://refine.dev/blog/tailwind-grid/#introduction"
        className="text-sm font-bold underline hover:text-red-600 text-sky-600 flex justify-center align-center"
      >
        How to Use Tailwind CSS Grid
      </a>
      <section className="h-full w-full mt-2 py-2 ">
        <h1 className=" mt-2 text-xl text-red-600 font-bold text-center">
          grid-cols / Formatting Context
          <span className="text-lime-700"> (Column Numbers/Grid Gap/Responsive Column)</span>
        </h1>
        <h1 className="mb-3 text-sm  font-bold  text-center">
          container m-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3
        </h1>
        <div className="container m-auto text-white grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {/* <div className="tile bg-teal-500"> */}
          <div className="text-center bg-teal-500">ONE</div>
          <div className="text-center bg-amber-500">TWO</div>
          <div className="text-center bg-yellow-500">THREE</div>
          <div className="text-center bg-lime-600">FOUR</div>
          <div className="text-center bg-green-600">FIVE</div>
          <div className="text-center bg-emerald-500">SIX</div>
          <div className="text-center bg-lime-700">SEVEN</div>
          <div className="text-center bg-purple-500">EIGHT</div>
          <div className="text-center bg-pink-500">NINE</div>
        </div>
      </section>
      <section className="h-full w-full mt-2 py-2 ">
        <h1 className=" mt-2 text-xl text-red-600 font-bold text-center">
          grid-cols / Окремі коміроки - розмір і розміщення(placement)
          <span className="text-lime-700"> (проміжок-span-/start--end-)</span>
        </h1>
        <h1 className="mb-3 text-sm  font-bold  text-center">
          Загальний:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3
        </h1>
        <div className="container m-auto text-white grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {/* <div className="tile bg-teal-500"> */}
          <div className="text-center bg-teal-500 col-span-2 md:col-span-4 lg:col-span-8">
            +++ (на весь екран) (ONE)
            <span className="text-orange-100"> col-span-2 md:col-span-4 lg:col-span-8</span>
          </div>
          {/* <div className="text-center bg-teal-500 col-span-full">--- ONE (на весь екран) "col-span-full ??? сирий"</div>
          <div className="text-center bg-teal-500 col-start-1 col-end-4 md:col-start-1 md:col-end-4 lg:col-start-1 lg:col-end-9">
            --- ONE (на весь екран) "col-start-1 col-end-4 md:col-start-1 md:col-end-6 lg:col-start-1 lg:col-end-9"
          </div> */}
          <div className="text-center bg-amber-500 col-span-1 md:col-span-2 lg:col-span-3">
            <h1>col-span-1 md:col-span-3 lg:col-span-5 (TWO)</h1>
          </div>
          <div className="text-center bg-yellow-500 col-span-2 md:col-span-3 lg:col-span-5">
            <h1> col-span-2 lg:col-span-4 lg:col-span-5 (THREE)</h1>
          </div>
          <div className="text-center bg-lime-600 lg:col-start-4 lg:col-span-2">
            lg:col-start-4 lg:col-span-2 (FOUR)
          </div>
          <div className="text-center bg-green-600">FIVE</div>
          <div className="text-center bg-emerald-500">SIX</div>
          <div className="text-center bg-lime-700">SEVEN</div>
          <div className="text-center bg-purple-500">EIGHT</div>
          <div className="text-center bg-pink-500">NINE</div>
        </div>
      </section>
      {/*  */}
      <section className="h-full w-full mt-2 py-2 ">
        <h1 className=" mt-2 text-xl text-red-600 font-bold text-center">
          grid-rows / Точніший контроль над сіткою
          {/* <span className="text-lime-700"> (проміжок-span-/start--end-)</span> */}
        </h1>
        <h1 className="mb-3 text-sm  font-bold  text-center">
          Загальний:grid grid-cols-2 grid-rows-5 md:grid-cols-4 lg:grid-cols-8 gap-3
        </h1>
        <div className="container m-auto text-white grid grid-cols-2 grid-rows-5 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {/* <div className="tile bg-teal-500"> */}
          <div className="text-center bg-teal-500 col-span-2 md:col-span-4 lg:col-span-8">
            +++ (на весь екран) (ONE)
            <span className="text-orange-100"> col-span-2 md:col-span-4 lg:col-span-8</span>
          </div>

          <div className="tile bg-amber-500 row-start-2 row-end-5 col-span-1 md:col-span-2 lg:col-span-3">
            <h1>row-start-2 row-end-5 col-span-1 md:col-span-2 lg:col-span-3 (TWO)</h1>
          </div>
          <div className="tile bg-yellow-500 row-start-4 row-end-5 md:row-start-2 md:row-end-3 col-span-2 md:col-span-3 lg:col-span-5">
            <h1> row-start-4 row-end-5 md:row-start-2 md:row-end-3 col-span-2 md:col-span-3 lg:col-span-5 (THREE)</h1>
          </div>
          <div className="text-center bg-lime-600 lg:col-start-4 lg:col-span-2">
            lg:col-start-4 lg:col-span-2 (FOUR)
          </div>
          <div className="text-center bg-green-600">FIVE</div>
          <div className="text-center bg-emerald-500">SIX</div>
          <div className="text-center bg-lime-700">SEVEN</div>
          <div className="text-center bg-purple-500">EIGHT</div>
          <div className="text-center bg-pink-500 row-start-5 col-span-full">row-start-5 md:col-span-full (NINE)</div>
        </div>
      </section>
    </>
  )
}
