import { useRef, useEffect, useState } from "react"


export default function MenuDropSeting({ setIsMenuDropSeting }) {
  //*************Для клацання поза обєктом
  const ref_MenuDropSeting = useRef(null)

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref_MenuDropSeting.current?.contains(event.target)) {
        // alert("Outside Clicked./MenuDropSeting");
        // console.log("Outside Clicked. ");
        // setSetingMenuOpen(false);
        setIsMenuDropSeting(false)
      }
    }

    window.addEventListener("mousedown", handleOutSideClick)

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick)
    }
  }, [ref_MenuDropSeting, setIsMenuDropSeting])
  //
  return (
    <div
      ref={ref_MenuDropSeting}
      className="absolute right-2  z-10 m-0 p-3 text-base font-medium bg-fBg1 dark:bg-fBgD  rounded-lg border border-hBorder dark:border-hBorderD"
    >
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
    </div>
  )
}
