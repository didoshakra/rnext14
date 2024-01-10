//https://codereviewvideos.com/nextjs-14-crud-forms-example/#Postgres_Database_Connectivity_From_NextJS

"use client"
// import { useFormState } from "react-dom"//Для повідомлення клієнту про перевірку полів на сервері
import { useFormStatus } from "react-dom" //для визначення стану очікування Form
import { addBrand } from "./actions"
import React from "react"

function SubmitButton() {
  //   const { pending } = useFormStatus() //
  //const { pending, data, method, action } = useFormStatus()//для визначення стану очікування
  // pending- в очікуванні
  const status = useFormStatus()

  return (
    //aria-disabled-атрибут вимкнено
    <button
      className="leading-6 m-1 px-2 text-center   rounded-md  bg-gradient-to-r from-red-400 to-red-700 text-white drop-shadow-md hover:from-red-300 hover:to-red-600  shadow-[-2px_-2px_13px_rgb(255,255,255,0.6),2px_2px_3px_rgba(0,0,0,0.6)] active:shadow-[2px_2px_3px_rgb(255,255,255,0.6),-2px_-2px_3px_rgba(0,0,0,0.6)]"
      type="submit"
      disabled={status.pending}
    >
      {/* <button type="submit" disabled={pending}> */}
      {/* Add1 */}
      {status.pending && <p>Ваша форма очікує на розгляд...</p>}
      {!status.pending && <p>Надіслати/надіслано</p>}
    </button>
  )
}

export function AddBrand() {
  //-- Вихід з форми
  const onCancel = () => {
    //якщо не довідник
    router.push("/") //перехід на сторінку
    // if (!isDovidnuk) router.push("/") //перехід на сторінку
    // // if (!isDovidnuk) router.back() //повернутись
    // else setDovActive("")
  }
  return (
    <div className="bg-bodyeclipseBg absolute inset-0 z-20 mx-2 max-w-full">
      <form
        className="absolute left-0 bottom-1 z-10  rounded-xl border border-fBorder bg-fBg1 dark:border-fBorderD dark:bg-fBg1D md:left-auto  p-2  mx-auto"
        action={addBrand}
      >
        <div className="flex justify-between mb-2">
          <button
            className="mx-1 h-7 w-7 relative  flex justify-center items-center dark:text-hTextD rounded-3xl align-middle border border-tabThBorder dark:border-tabThBorderD font-bold  text-hText   hover:bg-hBgHov dark:hover:bg-hBgHovD"
            // onClick={() => fAction("toExell")}
            title="Обновити"
          >
            {/* Обновити */}
            <svg
              className="h-5 w-5 text-iconT dark:text-iconTD"
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
              <path stroke="none" d="M0 0h24v24H0z" /> <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />{" "}
              <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
            </svg>
          </button>
          {/*  */}
          <SubmitButton />

          {/*відмова(помножити)  */}
          <button
            className="mx-1 h-7 w-7 relative  flex justify-center items-center dark:text-hTextD rounded-3xl align-middle border border-tabThBorder dark:border-tabThBorderD font-bold  text-hText   hover:bg-hBgHov dark:hover:bg-hBgHovD"
            onClick={onCancel}
            title="Вийти"
          >
            <svg
              className="h-5 w-5 text-iconT dark:text-iconTD"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <line x1="18" y1="6" x2="6" y2="18" /> <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="flex flex-wrap">
          {/* <h1 className="text-xl mb-2 text-center">Бренд / марка товару</h1> */}
          <label>Name:</label>
          <input
            name="name"
            type="text"
            required
            className=" block w-full  items-center rounded border border-fBorder bg-fInputBg p-1  align-middle leading-tight  text-fText dark:border-fBorderD dark:bg-fInputBgD dark:text-fTextD"
          />
          {/* <SubmitButton /> */}
          {/* <button type="submit">Додати запис</button> */}
        </div>
      </form>
    </div>
  )
}
