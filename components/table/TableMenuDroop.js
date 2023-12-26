//TableMenuDroop.js
//Саме випадаюче меню мови

"use client"
import { useRef, useEffect, useState } from "react"
import TableMenuDroopAction from "./TableMenuDroopAction"
import TableMenuDroopSeting from "./TableMenuDroopSeting"

const TableMenuDroop = ({ setIsTableMenuDroop, setAction, setPSeting, pSeting, tableFontSize, setTableFontSize }) => {
  console.log("TableMenuDroop.js")

  //*************Для клацання поза обєктом
  const ref_TableMenuDroop = useRef(null)

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref_TableMenuDroop.current?.contains(event.target)) {
        // alert("Outside Clicked./TableMenuDroop");
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
  //

  const onAdd = () => {
    console.log("TableMenuDroop.js/onAdd")
  }
  const closeDroop = () => {
    setTableMenuDroopSeting(false)
    setTableMenuDroopAction(false)
  }

  return (
    <div
      ref={ref_TableMenuDroop}
      className="absolute left-1 z-10 m-0 p-3 text-base font-medium bg-fBg1 dark:bg-fBgD  rounded-lg border border-hBorder dark:border-hBorderD"
    >
      <TableMenuDroopAction setIsTableMenuDroop={setIsTableMenuDroop} setAction={setAction} />
      <hr className="h-0.5 min-w-full bg-drawDropHr" />
      <TableMenuDroopSeting
        pSeting={pSeting}
        setPSeting={setPSeting}
        tableFontSize={tableFontSize}
        setTableFontSize={setTableFontSize}
      />
    </div>
  )
}
export default TableMenuDroop
