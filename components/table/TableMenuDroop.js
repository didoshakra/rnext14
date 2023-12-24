//TableMenuDroop.js
//Саме випадаюче меню мови

import {  useRef, useEffect } from "react"
import TableMenuDroopAction from "./TableMenuDroopAction"
import TableMenuDroopSeting from "./TableMenuDroopSeting"

const TableMenuDroop = ({ setIsTableMenuDroop, setAction }) => {
    console.log("TableMenuDroop.js")

  //*************Для клацання поза обєктом
  const ref_TableMenuDroop = useRef(null)

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref_TableMenuDroop.current?.contains(event.target)) {
        // alert("Outside Clicked.");
        // console.log("Outside Clicked. ");
        // setSetingMenuOpen(false);
        setIsTableMenuDroop(false)
      }
    }

    window.addEventListener("mousedown", handleOutSideClick)

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick)
    }
  }, [ref_TableMenuDroop, setIsTableMenuDroop])

  const onAdd = () => {
    console.log("TableMenuDroop.js/onAdd")
  }
  const MenuSeting = () => {
    return (
      <ul
        className={`m-0 w-[180px] rounded-lg  border border-hBorder bg-hBg p-1 drop-shadow-md dark:border-hBorderD dark:bg-hBgD`}
      >
        <li
          // ref={ref_HeaderThemesDroopMenu}
          className="active:text-hTextAct dark:active:text-hTextAct group flex list-none flex-nowrap items-center space-x-1 p-1 text-hText hover:bg-hBgHov hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD"
          //   onClick={themeMenuToggle}
          //   onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {/* <FontAwesomeIcon icon={themeTypeLight ? faSun : faMoon} /> */}
          <p
            title="Темна/світла"
            // onClick={() =>
            //   setTheme(resolvedTheme === "dark" ? "light" : "dark")
            // }
          >
            <svg
              // group-hover - при наведенні на (group) буде змінюватись */
              className="h-8 w-8  dark:hover:text-hTextHovD dark:group-hover:text-hTextHov"
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
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
            </svg>
          </p>
          <p>Темна/світла</p>
        </li>
        <li className="active:text-hTextAct dark:active:text-hTextAct group flex list-none flex-nowrap items-center space-x-1 p-1 text-hText hover:bg-hBgHov hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD">
          {/* // Від цього об'єкту li відраховуються відступи в випадаючих меню мов  */}
          {/* іконка валів/малювати */}
          <p>
            <svg
              className="h-8 w-8 text-hText group-hover:text-hTextHov dark:text-hTextD dark:group-hover:text-hTextHov"
              // class="h-8 w-8 text-red-500"
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
              <path stroke="none" d="M0 0h24v24H0z" /> <rect x="5" y="3" width="14" height="6" rx="2" />{" "}
              <path d="M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2" />{" "}
              <rect x="10" y="15" width="4" height="6" rx="1" />
            </svg>
          </p>
          <p>Теми</p>
        </li>
      </ul>
    )
  }

  return (
    <div
      ref={ref_TableMenuDroop}
      className="absolute left-2  z-10 m-0 p-0 text-base font-medium bg-fBg dark:bg-fBgD  rounded-lg border border-hBorder dark:border-hBorderD"
    >
      <hr className="h-0.5 min-w-full bg-drawDropHr" />
      <TableMenuDroopAction setIsTableMenuDroop={setIsTableMenuDroop} setAction={setAction} />
      <hr className="h-0.5 min-w-full bg-drawDropHr" />
      <TableMenuDroopSeting setIsTableMenuDroop={setIsTableMenuDroop} />
    </div>
  )
}
export default TableMenuDroop

