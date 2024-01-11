//Кожне поле описується в масиві, а все решта 1раз
//2-а варіанти стилю(простий бордюр і materialUI) // https://flowbite.com/docs/components/forms/

"use client"
// import { useFormState } from "react-dom"//Для повідомлення клієнту про перевірку полів на сервері
import { useFormStatus } from "react-dom" //для визначення стану очікування Form
import { addBrand } from "./actions"
import React from "react"

const fields = [
  { name: "name", label: "Бренд:", placeholder: "Введіть назву бренду" },
  //   { name: "fullName", label: "Full Name", placeholder: "Enter Full name" },
  //   { name: "username", placeholder: "Enter Username" },
  /** We can ue zod to validate that our value is of type email */
  //   { name: "email", label: "Почта", placeholder: "Enter email", type: "email" },
  //   { name: "password", placeholder: "Enter password", type: "password" },
]

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

export function AddBrand({ setIsAddForm }) {
  //-- Вихід з форми
  const onCancel = () => {
    //якщо не довідник
    router.push("/") //перехід на сторінку
    // if (!isDovidnuk) router.push("/") //перехід на сторінку
    // // if (!isDovidnuk) router.back() //повернутись
    // else setDovActive("")
  }

  return (
    //Затемнення екрану
    <div className="bg-eclipseBg absolute inset-0 z-20 mx-2 max-w-full">
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
            type="button"
            className="mx-1 h-7 w-7 relative  flex justify-center items-center dark:text-hTextD rounded-3xl align-middle border border-tabThBorder dark:border-tabThBorderD font-bold  text-hText   hover:bg-hBgHov dark:hover:bg-hBgHovD"
            onClick={() => setIsAddForm(false)}
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
          {fields.map(({ name, placeholder, type, label }) => (
            <div className="grid" key={name}>
              {/* В1-простий бардюр */}
              <label
                htmlFor={name}
                //В1-простий бардюр
                className="text-sm"
              >
                {label ?? name}
              </label>
              <input
                id={name}
                name={name}
                placeholder={placeholder}
                type={type ?? "text"}
                required
                className=" block  items-center rounded border border-fBorder bg-fInputBg p-1  align-middle leading-tight  text-fText dark:border-fBorderD dark:bg-fInputBgD dark:text-fTextD"
              />
              {/* В2-типу materialUI */}
              {/* <div class="relative z-0 w-full mb-5 px-1 group">
                <input
                  id={name}
                  name={name}
                  placeholder=" "
                  type={type ?? "text"}
                  required
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label
                  for="name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {name}
                </label>
              </div> */}
              {/*  */}
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}
