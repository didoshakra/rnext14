//TableMenuDroopSeting.js
//Меню в Drawer з Header

"use client"
import { useState } from "react"

const TableMenuDroopSeting = ({ setIsTableMenuDroop }) => {
  const [tableMenuDroopSeting, setTableMenuDroopSeting] = useState(false)

  const onAction = (action) => {
    setIsTableMenuDroop(false)
  }

  //випадаюче меню
  const renderMenu = () => {
    return (
      <>
        {/*Фільтр множинний */}
        <div
          className="m-1 space-x-2 flex list-none flex-nowrap  items-center text-base font-normal text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD"
          title="Додати"
          onClick={() => onAction("add")}
        >
          {/* Додати */}
          <svg
            className="h-6 w-6  hover:text-hTextHov text-hText dark:text-hTextD dark:hover:text-hTextHovD"
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
            <path stroke="none" d="M0 0h24v24H0z" /> <line x1="12" y1="5" x2="12" y2="19" />{" "}
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>

          <p> Фільтр множинний</p>
        </div>

        {/* Підсумковий рядок */}
        <div
          className="m-1 space-x-2 flex list-none flex-nowrap  items-center text-base font-normal text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD"
          title="Редагувати"
          onClick={() => onAction("edit")}
        >
          {/* Підсумковий рядок */}
          <svg
            className="h-6 w-6  hover:text-hTextHov text-hText dark:text-hTextD dark:hover:text-hTextHovD"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" /> <line x1="16" y1="5" x2="19" y2="8" />
          </svg>
          <p>Підсумковий рядок</p>
        </div>
      </>
    )
  }

  // ************************************************************************************
  return (
    <div className="m-0 items-center">
      <div
        className="w-fullroup flex list-none flex-nowrap items-center space-x-1 text-hText  hover:bg-hBgHov  hover:text-hTextHov dark:text-hTextD dark:hover:bg-hBgHovD dark:hover:text-hTextHovD"
        onClick={() => setTableMenuDroopSeting(!tableMenuDroopSeting)}
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
