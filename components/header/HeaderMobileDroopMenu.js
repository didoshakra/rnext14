//HeaderSetingDroop.js
//Мобіле-Шестерня(іконка)
//*********************************************************************************** */
//Щоб відключити всі *Open=(false), треба відключити при клацанні поза обєктом function useOutsideAlerter(ref)
// і відключення у всіх onClick(*togle) в самомк об'єкті.
//********************************************************************************** */

"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { headMenu } from "./dataMenu";

const HeaderMobileDroopMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  //*************Для клацання поза обєктом
  const ref_HeaderMobileDroopMenu = useRef(null);
  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref_HeaderMobileDroopMenu.current?.contains(event.target)) {
        // alert("Outside Clicked.");
        // console.log("Outside Clicked. ");
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref_HeaderMobileDroopMenu]);
  //випадаюче меню Налаштувань
  const renderMenu = () => {
    return headMenu.map((item, index) => {
      return (
        <li
          className="flex list-none flex-nowrap  items-center p-1 text-sm font-normal text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:text-hText dark:hover:bg-hBgHov dark:hover:text-hTextHov"
          key={index}
          onClick={() => setMobileMenuOpen(false)}
        >
          <Link href={`${item.link}`}>{item.a}</Link>
        </li>
      );
    });
  };

  return (
    <div
      ref={ref_HeaderMobileDroopMenu}
      className="relative m-0 items-center p-0  md:hidden"
    >
      <button
        className="flex items-center justify-center rounded-full pl-1 transition-colors hover:bg-hBgHov dark:hover:bg-hBgHov"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        title="меню"
      >
        {/* іконка мобільного меню */}
        <svg
          className="h-8 w-8  hover:text-hTextHov text-hText dark:text-hText dark:hover:text-hTextHov"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <line x1="8" y1="6" x2="21" y2="6" />{" "}
          <line x1="8" y1="12" x2="21" y2="12" />{" "}
          <line x1="8" y1="18" x2="21" y2="18" />{" "}
          <line x1="3" y1="6" x2="3.01" y2="6" />{" "}
          <line x1="3" y1="12" x2="3.01" y2="12" />{" "}
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      </button>

      {/* список головного меню */}
      <div
        // ref={ref_HeaderMobileDroopMenu}
        className={`${
          mobileMenuOpen ? "absolute" : "hidden"
        } right-0 z-10 m-0 p-0`}
      >
        <ul
          //   ref={ref_HeaderMobileDroopMenu}
          className=" rounded-lg border border-menuBorder  bg-hBg p-1 drop-shadow-md dark:border-menuBorder dark:bg-hBgD"
        >
          {renderMenu()}
        </ul>
      </div>
    </div>
  );
};

export default HeaderMobileDroopMenu;
