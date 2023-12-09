//HeaderSetingDroop.js
//Мобіле-Шестерня(іконка)
//*********************************************************************************** */
//Щоб відключити всі *Open=(false), треба відключити при клацанні поза обєктом function useOutsideAlerter(ref)
// і відключення у всіх onClick(*togle) в самомк об'єкті.
//********************************************************************************** */

"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import UserMenuDroop from "./UserMenuDroop";
import HeaderThemesDroopMenu from "./HeaderThemesDroopMenu";
import avatar from "@/public/avatar/2.jpg";

const HeaderSetingDroopMenu = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [profile, setprofile] = useState("admin");

  const [setingMenuOpen, setSetingMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  //   const [themesDroopMenuOpen, setThemesDroopMenuOpen] = useState(false);
//   console.log("sHeaderSetingDroopMenu/setingMenuOpen=", setingMenuOpen);

  //   console.log("profile=", profile);
  const userMenuOpenToggle = () => {
    setUserMenuOpen(!userMenuOpen);
    let newUser = "admin";
    if (profile === "admin") {
      newUser = "user";
    }
    setprofile(newUser);
    // console.log("userSwitcher.js/newUser=", newUser)
    console.log("profile=", profile);
    // dispatch({ type: "PROFILE", payload: newUser }); //Змінюємо state.user
  };

  //*************Для клацання поза обєктом
  const ref_HeaderSetingDroopMenu = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref_HeaderSetingDroopMenu.current?.contains(event.target)) {
        // alert("Outside Clicked.");
        // console.log("Outside Clicked. ");
        // setSetingMenuOpen(false);
        setUserMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref_HeaderSetingDroopMenu]);

  //випадаюче меню Налаштувань
  const setingMenuToggle = () => {
    setSetingMenuOpen(!setingMenuOpen);
    setUserMenuOpen(false); //Закриваєм меню
    // console.log("setingMenuToggle/setingMenuOpen=", setingMenuOpen);
  };
//   //Зміна в newTheme Context
//   const themeMenuToggle = () => {
//     setTheme(resolvedTheme === "dark" ? "light" : "dark");
//     setUserMenuOpen(false);
//     setSetingMenuOpen(false);
//   };

  return (
    <div
      ref={ref_HeaderSetingDroopMenu}
      className="relative m-0 items-center p-0 md:hidden"
    >
      <button
        className="flex items-center justify-center rounded-full p-1 transition-colors hover:bg-hBgHov dark:hover:bg-hBgHov"
        onClick={setingMenuToggle}
      >
        {/* іконка seting*/}
        <svg
          className="h-8 w-8  text-hText hover:text-hTextHov dark:text-hText dark:hover:text-hTextHov"
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
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{" "}
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>

      {/* Випадаюче меню Seting */}
      <div
        className={`${
          setingMenuOpen ? "absolute" : "hidden"
        } right-0 z-10 m-0 p-0`}
      >
        <ul
          className={`m-0 w-[150px] rounded-lg  border border-hBorder bg-hBg p-1 text-base font-medium drop-shadow-md dark:border-hBorderD dark:bg-hBgD`}
        >
          <li className="dark:text-hTex flex w-full list-none  items-center text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:hover:bg-hBgHov dark:hover:text-hTextHov">
            <HeaderThemesDroopMenu setSetingMenuOpen={setSetingMenuOpen} />
          </li>
          <li
            className="dark:text-hTex flex w-full list-none items-center space-x-2  px-2 text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:hover:bg-hBgHov dark:hover:text-hTextHov"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          >
            {/* // Від цього об'єкту li відраховуються відступи в випадаючих меню мов  */}
            <p>
              {profile === "admin" ? (
                <Image
                  src={avatar}
                  alt={"avatar"}
                  width={32}
                  height={32}
                  className="rounded-full border"
                />
              ) : (
                <svg
                  className="h-8 w-8  text-hText hover:text-hTextHov dark:text-hTextD dark:hover:text-hTextHovD"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              )}
            </p>
            <p>Профіль</p>
          </li>
          {/* Випадаюче меню User */}
          {userMenuOpen && (
            <UserMenuDroop
              setSetingMenuOpen={setSetingMenuOpen}
              userMenuOpen={userMenuOpen}
              setUserMenuOpen={setUserMenuOpen}
            />
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeaderSetingDroopMenu;
