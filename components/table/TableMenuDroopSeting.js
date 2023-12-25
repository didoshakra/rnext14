//TableMenuDroopSeting.js
//Меню в Drawer з Header

"use client"
import { useRef, useEffect, useState } from "react"

const TableMenuDroopSeting = ({ onDropSeting }) => {
  const [tableMenuDroopSeting, setTableMenuDroopSeting] = useState(false)

  //*************Для клацання поза обєктом
  const ref_TableMenuDroopSeting = useRef(null)

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref_TableMenuDroopSeting.current?.contains(event.target)) {
        // alert("Outside Clicked.");
        // console.log("Outside Clicked. ");
        // setSetingMenuOpen(false);
        setTableMenuDroopSeting(false)
      }
    }

    window.addEventListener("mousedown", handleOutSideClick)

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick)
    }
  }, [ref_TableMenuDroopSeting, setTableMenuDroopSeting])
  //

  const onArrow = () => {
    setTableMenuDroopSeting(!tableMenuDroopSeting)
    // setIsTableMenuDroop(false)
    // setTableMenuDroopAction(false)
  }

  //випадаюче меню
  const renderMenu = () => {
    return (
      <>
        {/*  */}
        <fieldset>
          <legend>Choose your monster's features:</legend>
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
            <label htmlFor="filter">Фільтер</label>
          </div>

          <div
            className="m-1 space-x-2 flex justify-start  items-center text-base font-normal text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD"
            onClick={() => onDropSeting("sumr")}
          >
            <input className="" type="checkbox" id="nrow" name="nrow1" checked />
            <label htmlFor="nrow">Підсукковий рядок </label>
          </div>
        </fieldset>
      </>
    )
  }

  // ************************************************************************************
  return (
    <div ref={ref_TableMenuDroopSeting} className="m-0 items-center">
      <div
        className="my-2 w-full flex list-none flex-nowrap items-center space-x-1 text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD"
        // onClick={() => setTableMenuDroopSeting(!tableMenuDroopSeting)}
        onClick={() => onArrow()}
        title="меню"
      >
        {/* іконка мобільного меню */}
        <p className="pl-2 text-lg font-medium italic  text-hText">Seting / Налаштування </p>
        {tableMenuDroopSeting ? (
          // стрілка вверх
          <svg
            className="h-6 w-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="6 15 12 9 18 15" />
          </svg>
        ) : (
          // стрілка вниз
          <svg
            className="h-6 w-6 "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </div>

      <div className={`${tableMenuDroopSeting ? "relative" : "hidden"}  text-base font-normal px-2`}>
        <div>{renderMenu()}</div>
      </div>
    </div>
  )
}

export default TableMenuDroopSeting
