"use client"
import { useActionState, useEffect } from "react"
// import { useFormState } from "react-dom" //Для повідомлення клієнту про перевірку полів на сервері
// import { useFormStatus } from "react-dom" //для визначення стану очікування Form
import { styleInputMaterial, styleLabelMaterial } from "@/styles/tw_styles"
import { deleteBrand, deleteBrandPool } from "./actions"
// import { useForm } from "react-hook-form"

const buttonStyle =
  "leading-6 m-1 px-2 text-center   rounded-md  bg-gradient-to-r from-red-400 to-red-700 text-white drop-shadow-md hover:from-red-300 hover:to-red-600  shadow-[-2px_-2px_13px_rgb(255,255,255,0.6),2px_2px_3px_rgba(0,0,0,0.6)] active:shadow-[2px_2px_3px_rgb(255,255,255,0.6),-2px_-2px_3px_rgba(0,0,0,0.6)]"

export function FormDeleteBrand({ setIsFormDelete, deleteData }) {
  const initialState = {
    message: `Вибрані записи : ${deleteData}`, //Ініціюєм повідомлення яке отримаємо з сервера як state?.message
  }
  const [state, formAction, pending] = useActionState(deleteBrandPool, initialState)
  return (
    //Затемнення екрану
    <div className="bg-eclipseBg absolute inset-0 z-20 mx-2 max-w-full">
      <form
        action={formAction} //без перевірки react-hook-form /на виході formDate
        className="absolute left-auto bottom-20 z-10  rounded-xl border border-fBorder bg-fBg1 dark:border-fBorderD dark:bg-fBg1D md:left-10  p-2  mx-auto"
      >
        <div className="flex justify-between mb-2">
          {/* Обновити  */}
          <button
            type="button"
            className="mx-1 h-7 w-7 relative  flex justify-center items-center dark:text-hTextD rounded-3xl align-middle border border-tabThBorder dark:border-tabThBorderD font-bold  text-hText   hover:bg-hBgHov dark:hover:bg-hBgHovD"
            onClick={() => reset()}
            title="Обновити"
          >
            <svg
              className="h-5 w-5 text-iconT dark:text-iconTD"
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
              <path stroke="none" d="M0 0h24v24H0z" /> <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />{" "}
              <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
            </svg>
          </button>
          {/* submit */}
          <button
            className={`${buttonStyle}`}
            type="submit"
            disabled={pending} //Якщо запит в очікуванні, то кнопка відключена
          >
            <p>{pending ? "Loading..." : "Видалити1"}</p>
          </button>
          {/* Вийти */}
          <button
            type="button"
            className="mx-1 h-7 w-7 relative  flex justify-center items-center dark:text-hTextD rounded-3xl align-middle border border-tabThBorder dark:border-tabThBorderD font-bold  text-hText   hover:bg-hBgHov dark:hover:bg-hBgHovD"
            onClick={() => setIsFormDelete(false)}
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
          {/* Тіло форми */}
          <input type="hidden" name="ids" value={deleteData} />
          <p className="text-infoMsg text-xs font-bold">{state?.message}</p>
        </div>
      </form>
    </div>
  )
}
