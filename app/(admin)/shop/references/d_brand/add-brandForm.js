//Кожне поле описується в масиві, а все решта 1раз
//2-а варіанти стилю(простий бордюр і materialUI) // https://flowbite.com/docs/components/forms/

"use client"
// import { useFormState } from "react-dom"//Для повідомлення клієнту про перевірку полів на сервері
import { useFormStatus } from "react-dom" //для визначення стану очікування Form
import { addBrand } from "./actions"
import { useForm } from "react-hook-form"

function SubmitButton() {
  const status = useFormStatus()
  return (
    <button
      className="leading-6 m-1 px-2 text-center   rounded-md  bg-gradient-to-r from-red-400 to-red-700 text-white drop-shadow-md hover:from-red-300 hover:to-red-600  shadow-[-2px_-2px_13px_rgb(255,255,255,0.6),2px_2px_3px_rgba(0,0,0,0.6)] active:shadow-[2px_2px_3px_rgb(255,255,255,0.6),-2px_-2px_3px_rgba(0,0,0,0.6)]"
      type="submit"
      disabled={status.pending} //Якщо запит в очікуванні, то кнопка відключена
    >
      {status.pending && <p>Ваша форма очікує на розгляд...</p>}
      {!status.pending && <p>Надіслати/надіслано</p>}
    </button>
  )
}

export function AddBrandForm({ setIsAddForm, toFormData = { name: "rr" } }) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues: toFormData })

  const onSubmit = (data) => {
    addBrand(data)
  }

  return (
    //Затемнення екрану
    <div className="bg-eclipseBg absolute inset-0 z-20 mx-2 max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute left-0 bottom-1 z-10  rounded-xl border border-fBorder bg-fBg1 dark:border-fBorderD dark:bg-fBg1D md:left-auto  p-2  mx-auto"
        // action={addBrand}
      >
        <div className="flex justify-between mb-2">
          <button
            type="button"
            className="mx-1 h-7 w-7 relative  flex justify-center items-center dark:text-hTextD rounded-3xl align-middle border border-tabThBorder dark:border-tabThBorderD font-bold  text-hText   hover:bg-hBgHov dark:hover:bg-hBgHovD"
            onClick={() => reset()}
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
          <div className="grid">
            <label className="text-sm">Бренд / марка товару</label>
            <input
              className=" block  items-center rounded border border-fBorder bg-fInputBg p-1  align-middle leading-tight  text-fText dark:border-fBorderD dark:bg-fInputBgD dark:text-fTextD"
              {...register("name", { minLength: 3, maxLength: 30 })}
              required
            />
            <p className="text-errorMsg font-bold">{errors.name?.type === "maxLength" && "Назва >30симв."}</p>
            <p className="text-errorMsg font-bold">{errors.name?.type === "minLength" && "Назва <3симв."}</p>
          </div>
        </div>
      </form>
    </div>
  )
}
