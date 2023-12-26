import { useRef, useEffect } from "react"

export default function MenuSeting({ onDropSeting }) {
  return (
      <fieldset>
        <legend>Налаштування таблиці</legend>
        <div
          className="flex m-1 space-x-2 justify-start items-center text-base font-normal text-hText  hover:bg-hBgHov hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD"
          onClick={() => onDropSeting("filter")}
        >
          <input
            type="checkbox"
            id="filter"
            name="filter1"
            //   checked //вибраний
          />
          <label htmlFor="filter">Фільтр</label>
        </div>

        <div
          className="m-1 space-x-2 flex justify-start  items-center text-base font-normal text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD"
          onClick={() => onDropSeting("sumr")}
        >
          <input className="" type="checkbox" id="nrow" name="nrow1" checked />
          <label htmlFor="nrow">Підсукковий рядок </label>
        </div>
      </fieldset>
  )
}
