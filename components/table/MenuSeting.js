import { useRef, useEffect } from "react"

export default function MenuSeting({ pSeting, setPSeting }) {
  const onChange = () => {
    console.log("MenuSeting.js/onChange/")
    setPSeting({ ...pSeting, ["pSumRow"]: !pSeting.pSumRow })
  }

  return (
    <fieldset>
      <legend className="font-semibold">Опції інтерфейсу таблиці</legend>
      {/* Фонт/шрифт */}
      <div className="m-1 space-x-2 flex justify-start items-center text-base font-normal text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD">
        <input
          className=""
          type="checkbox"
          id="font"
          name="font1"
          onChange={() => setPSeting({ ...pSeting, ["pFonts"]: !pSeting.pFonts })}
          checked={pSeting.pFonts ? true : false}
        />
        <label htmlFor="font">Фонт/Шрифти</label>
      </div>

      {/* Фільтр */}
      <div className="m-1 space-x-2 flex justify-start  items-center text-base font-normal text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD">
        <input
          className=""
          type="checkbox"
          id="filter"
          name="filter1"
          onChange={() => setPSeting({ ...pSeting, ["pFiltered"]: !pSeting.pFiltered })}
          checked={pSeting.pFiltered ? true : false}
        />
        <label htmlFor="filter">Фільтр</label>
      </div>

      {/* Підсукковий рядок */}
      <div className="m-1 space-x-2 flex justify-start  items-center text-base font-normal text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD">
        <input
          className=""
          type="checkbox"
          id="nrow"
          name="nrow1"
          onChange={() => setPSeting({ ...pSeting, ["pSumRow"]: !pSeting.pSumRow })}
          checked={pSeting.pSumRow ? true : false}
        />
        <label htmlFor="nrow">Підсукковий рядок </label>
      </div>

      {/*Швидкий пошук */}
      <div className="m-1 space-x-2 flex justify-start  items-center text-base font-normal text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD">
        <input
          className=""
          type="checkbox"
          id="search"
          name="search1"
          onChange={() => setPSeting({ ...pSeting, ["pSearchAllRows"]: !pSeting.pSearchAllRows })}
          checked={pSeting.pSearchAllRows ? true : false}
        />
        <label htmlFor="search">Швидкий пошук</label>
      </div>
    </fieldset>
  )
}
