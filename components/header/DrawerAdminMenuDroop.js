//drawerAdminMenuDroop.js
//Меню в Drawer з Header

"use client"
import { useState} from "react"
// import Link from "next/link"
import MenuItems from "@/components/multiLevelMenu/MenuItems"
import { menuAdmin} from "@/components/multiLevelMenu/dataMultilevelMenu"


const drawerAdminMenuDroop = ({ setDrawerOpen }) => {
  const [drawerAdminMenuDroopOpen, setDrawerAdminMenuDroopOpen] = useState(false)

  const tagleMenu = () => {
    setDrawerAdminMenuDroopOpen(false)
    setDrawerOpen(false)
  }
  //випадаюче меню Налаштувань
  const renderMenu = () => {
    return menuAdmin.map((menu, index) => {
      const depthLevel = 0
      return <MenuItems items={menu} key={index} idKey={index} depthLevel={depthLevel} setDrawerOpen={setDrawerOpen} />
    })
  }

  return (
    <div className="m-0 items-center pb-2 ">
      <button
        className="font-bold  group flex list-none flex-nowrap items-center space-x-1 text-hText hover:bg-drawDropMenuBgHov hover:text-hTextHov dark:text-hText dark:hover:bg-drawDropMenuBgHovD dark:hover:text-hTextHov"
        onClick={() => setDrawerAdminMenuDroopOpen(!drawerAdminMenuDroopOpen)}
        title="меню"
      >
        {/* іконка мобільного меню */}
        <p className="pl-2 text-lg font-medium italic  text-hText dark:text-hTextD ">Меню Адміністратора</p>
        {drawerAdminMenuDroopOpen ? (
          // стрілка вверх
          <svg
            className="h-6 w-6  dark:hover:text-hTextHovD dark:group-hover:text-hTextHovD"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="6 15 12 9 18 15" />
          </svg>
        ) : (
          // стрілка вниз
          <svg
            className="h-6 w-6  dark:hover:text-hTextHovD dark:group-hover:text-hTextHovD"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </button>

      {/* список головного меню */}
      <div className={`${drawerAdminMenuDroopOpen ? "relative" : "hidden"} pl-4 `}>
        <ul>{renderMenu()}</ul>
      </div>
    </div>
  )
}

export default drawerAdminMenuDroop
