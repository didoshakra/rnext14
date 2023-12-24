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
      //   <fieldset>
      //     <legend>Select a maintenance drone:</legend>

      //     <div>
      //       <input className=" m-2" type="radio" id="huey" name="drone" value="huey" checked />
      //       <label for="huey">Huey</label>
      //     </div>

      //     <div>
      //       <input className=" m-2" type="radio" id="dewey" name="drone" value="dewey" />
      //       <label for="dewey">Dewey</label>
      //     </div>

      //     <div>
      //       <input className=" m-2" type="radio" id="louie" name="drone" value="louie" />
      //       <label for="louie">Louie</label>
      //     </div>

      //   </fieldset>
      <fieldset>
        <legend>Select a maintenance drone:</legend>

        <div>
          <input type="radio" id="huey" name="drone" value="huey" checked />
          <label for="huey">Huey</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">Dewey</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="louie" />
          <label for="louie">Louie</label>
        </div>
      </fieldset>
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
