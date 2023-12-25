//TableMenuDroop.js
//Саме випадаюче меню мови

"use client"
import { useRef, useEffect, useState } from "react"
import TableMenuDroopAction from "./TableMenuDroopAction"
import TableMenuDroopSeting from "./TableMenuDroopSeting"

const TableMenuDroop = ({ setIsTableMenuDroop, setAction, onDropSeting }) => {
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
      className="absolute right-1 z-10 m-0 p-3 text-base font-medium bg-fBg1 dark:bg-fBgD  rounded-lg border border-hBorder dark:border-hBorderD"
    >
      <TableMenuDroopAction setIsTableMenuDroop={setIsTableMenuDroop} setAction={setAction} />
      {/* <hr className="h-0.5 min-w-full bg-drawDropHr" /> */}
      <TableMenuDroopSeting onDropSeting={onDropSeting} />
    </div>
  )
}
export default TableMenuDroop
