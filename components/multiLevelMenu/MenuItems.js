//стрілки-шеврони
"use client"
import { useState, useEffect, useRef } from "react"
import Dropdown from "./Dropdown"
import Link from "next/link"

const MenuItems = ({ idKey, items, depthLevel, setDrawerOpen }) => {
  //   console.log("MenuItems/idKey, items, depthLevel=", key, items, depthLevel);
  const [dropdown, setDropdown] = useState(false)
  const [currentID, setCurrentID] = useState("")
  //   let domId = `${depthLevel}.${idKey}`;
  let domId = `${depthLevel}.${idKey}`

  const styleColor = dropdown && " text-openLevel"

  let ref = useRef()
  useEffect(() => {
    const handler = (event) => {
      //чи клацнули за межами спадного списку
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        // alert("Клік поза елементом");
        setDropdown(false)
      } else {
        // чи клацнули по елементу, який відкрив  спадний список
        if (currentID === event.target.id) {
          setDropdown(false)
        }
      }
    }

    document.addEventListener("click", handler) //"click"- запускається після повного клацання
    // document.addEventListener("mousedown", handler); //"mousedown",(спрацює при натискатті і відпусканні кнопки)
    document.addEventListener("touchstart", handler) // при наведенні на елемент
    return () => {
      // Очистити слухач подій
      document.removeEventListener("click", handler)
      //   document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler)
    }
  }, [dropdown, currentID])

  //   const onMouseEnter = () => {
  //     setDropdown(true)
  //   }

  //   const onMouseLeave = () => {
  //     setDropdown(false)
  //   }

  //   const closeDropdown = () => {
  //     //новий синтаксис if(dropdown) setDropdown(false)
  //     dropdown && setDropdown(false)
  //   }

  const onClick = (e) => {
    setDropdown(true)
    // console.log("MenuItems/onClick/id=", e.currentTarget.id);
    console.log("MenuItems/onClick/id=", e.currentTarget.id);
    setCurrentID(e.currentTarget.id)
  }

  const tagleLink = () => {
    setDrawerOpen(false)
  }

  return (
    <li
      key={domId}
      id={domId}
      className="duration-300 ease-in-out text-base"
      //   className="relative bg-orange-300 text-base text-${depthLevel}"
      //   className="text-${depthLevel} relative text-base"
      ref={ref}
      onClick={onClick}
    >
      {/*Субменю з посилання(рідко буває)*/}
      {
        // Верхнє меню(субменю) без посилання
        items.submenu && depthLevel === 0 ? (
          <>
            <button
              id={domId}
              className="hover:text-itemHover flex no-underline"
              type="button"
              aria-haspopup="menu" //тип інтерактивного спливаючого елемента
              aria-expanded={dropdown ? "true" : "false"} //елемент розгорнутий чи згорнутий
              // onClick={() => setDropdown((prev) => !prev)}
              //   onClick={onClick}
            >
              {items.title}
              {/* {dropdown ? <span> &raquo;</span> : <span> &#8595;</span>} */}
              {/* {dropdown ? <span> &#62;</span> : <span> &#8595;</span>} */}
              <p onClick={onClick}>
                {dropdown ? (
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
              </p>
            </button>
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
              setDrawerOpen={setDrawerOpen}
            />
          </>
        ) : // Субменю без посилання
        items.submenu && depthLevel > 0 ? (
          <>
            <button
              id={domId}
              //   className="  hover:text-itemHover"
              //   className="menu-items-button  hover:text-itemHover"
              className={`${styleColor}  hover:text-itemHover flex text-center `}
              type="button"
              aria-haspopup="menu" //тип інтерактивного спливаючого елемента
              aria-expanded={dropdown ? "true" : "false"} //елемент розгорнутий чи згорнутий
              // onClick={() => setDropdown((prev) => !prev)}
              onClick={onClick}
            >
              {items.title}
              {dropdown ? (
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
              {/* {dropdown ? <span> &#62;</span> : <span> &#8595;</span>} */}
            </button>
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
              setDrawerOpen={setDrawerOpen}
            />
          </>
        ) : (
          <Link
            href={`${items.url}`}
            className="hover:text-itemHover no-underline"
            // onClick={(e) => setDrawerOpen(false)}
            onClick={tagleLink}
          >
            {items.title}
          </Link>
        )
      }
    </li>
  )
}

export default MenuItems
