//ThemesMenuDroop.js
//Саме випадаюче меню вибору палітри тем

import { useRef, useEffect } from "react"
import { changeTheme } from "@/utils/helper"

const ThemesMenuDroop = ({
  setSetingMenuOpen, //0-рівень
  setThemesMenuOpen, //1-рівень
  setSetingThemesMenuOpen, //2-рівень
}) => {
  // console.log(
  //   "ThemesMenuDroop/document.querySelector(html)?.=",
  //   document.querySelector("html".data-theme)
  // );

  //   //*************Для клацання поза обєктом
  const ref_ThemesMenuDroop = useRef(null)

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref_ThemesMenuDroop.current?.contains(event.target)) {
        // alert("Outside Clicked.");
        // console.log("Outside Clicked. ");
        // setSetingMenuOpen(false);
        setSetingThemesMenuOpen(false)
        setThemesMenuOpen(false)
      }
    }

    window.addEventListener("mousedown", handleOutSideClick)

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick)
    }
  }, [ref_ThemesMenuDroop, setSetingThemesMenuOpen, setThemesMenuOpen])

//   const togleTheme = (neme) => {
//     console.log("ThemesMenuDroop.js/togleTheme/neme=", neme)
//     changeTheme(neme)
//     setSetingThemesMenuOpen(false)
//     setThemesMenuOpen(false)
//     if (setSetingMenuOpen) setSetingMenuOpen(false)
//   }
  const togleThemeDefault = (e) => {
    changeTheme("")
    setSetingThemesMenuOpen(false)
    setThemesMenuOpen(false)
    if (setSetingMenuOpen) setSetingMenuOpen(false)
  }
  const togleTheme1 = (e) => {
    changeTheme("theme1")
    setSetingThemesMenuOpen(false)
    setThemesMenuOpen(false)
    if (setSetingMenuOpen) setSetingMenuOpen(false)
  }
  const togleTheme2 = (e) => {
    changeTheme("theme2")
    setSetingThemesMenuOpen(false)
    setThemesMenuOpen(false)
    if (setSetingMenuOpen) setSetingMenuOpen(false)
  }
  const togleTheme3 = (e) => {
    changeTheme("theme3")
    setSetingThemesMenuOpen(false)
    setThemesMenuOpen(false)
    if (setSetingMenuOpen) setSetingMenuOpen(false)
  }
  const togleTheme4 = (e) => {
    changeTheme("theme4")
    setSetingThemesMenuOpen(false)
    setThemesMenuOpen(false)
    if (setSetingMenuOpen) setSetingMenuOpen(false)
  }

//   const themes = [
//     { name: "", bg: "#f3dc8c" },
//     { name: "Тема1", bg: "#f4e0e9" },
//     { name: "Тема2", bg: "#e2e0f4" },
//     { name: "Тема3", bg: "#f3dc8c" },
//     { name: "Тема4", bg: "#e2e0f4" },
//   ]

  //випадаюче меню Налаштувань
  const renderMenu = () => {
    return themes.map((item, index) => {
      return (
        <button
          key={index}
          className="w-full bg-themeDefBg  py-1 text-base text-hText hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHov"
          onClick={(e) => togleTheme(item.name)}
        >
          {item.name}
        </button>
      )
    })
  }
  return (
    <div ref={ref_ThemesMenuDroop} className="absolute right-0 z-10 m-0 p-0">
      <div className="grid place-items-center rounded-lg border border-hBorder bg-hBg drop-shadow-md dark:border-hBorderD dark:bg-hBgD">
        <div>
          {/* <ul>{renderMenu()}</ul> */}
          <button
            className="w-full bg-themeDefBg  py-1 text-base text-hText hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHov"
            onClick={togleThemeDefault}
          >
            Основна
          </button>
          <button
            className="w-full bg-theme1Bg  py-1 text-base text-hText hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHov"
            onClick={togleTheme1}
          >
            Тема 1
          </button>
          <button
            className="text-typography w-full bg-theme2Bg  py-1 text-hText hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHov"
            onClick={togleTheme2}
          >
            Тема 2
          </button>
          <button
            className="w-full bg-theme3Bg  py-1 text-base text-hText hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHov"
            onClick={togleTheme3}
          >
            Тема 3
          </button>
          <button
            className="w-full bg-theme4Bg  py-1 text-base text-hText hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHov"
            onClick={togleTheme4}
          >
            Тема 4
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThemesMenuDroop
