//Кожне поле описується в масиві, а все решта 1раз
//2-а варіанти стилю(простий бордюр і materialUI) // https://flowbite.com/docs/components/forms/

"use client"
// import { useFormState } from "react-dom"//Для повідомлення клієнту про перевірку полів на сервері
import { useFormStatus } from "react-dom" //для визначення стану очікування Form
import { styleInputBoot, styleInputMaterial, styleLabelMaterial } from "@/styles/tw_styles"
import { addClient } from "./actions"
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

export function AddClientForm({
  setIsAddForm,
  toFormData = { name: "", last_name: "", email: "", skod: "", discount_proc: "" },
}) {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ defaultValues: toFormData })

  const onSubmit = (data) => {
    console.log("add-clientForm.js/onSubmit/data=", data)
    addClient(data)
  }

  return (
    //Затемнення екрану
    <div className="bg-eclipseBg absolute inset-0 z-20 mx-2 max-w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute left-0 bottom-1 z-10  rounded-xl border border-fBorder bg-fBg1 dark:border-fBorderD dark:bg-fBg1D md:left-auto  p-2  mx-auto"
        // action={addClient}
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

        {/* Тіло форми */}
        <div className="flex flex-wrap">
          {/* В1-типу bootstrap */}
          {/* <div className="grid mx-1">
            <label className="text-sm">Назва бренду товару</label>
            <input
              className={`${styleInputBoot}`}
              {...register("name", { minLength: 3, maxLength: 30 })}
              required
              placeholder="Введіть назву бренду"
            />
            <p className="text-errorMsg font-bold">{errors.name?.type === "maxLength" && "Назва >30симв."}</p>
            <p className="text-errorMsg font-bold">{errors.name?.type === "minLength" && "Назва <3симв."}</p>
          </div> */}
          {/* В2-типу materialUI */}
          <div className="relative grid z-0  my-2 mx-1 group">
            <input
              className={`${styleInputMaterial}`}
              {...register("name", { minLength: 3, maxLength: 30 })}
              placeholder=" " //Повинно бути, бо тоні lable їде вверх
              required
            />
            <label
              htmlFor="name"
              className={`${styleLabelMaterial}`}
              //   className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ім'я:
            </label>
            <p className="text-errorMsg font-bold">{errors.name?.type === "maxLength" && "Ім'я >30симв."}</p>
            <p className="text-errorMsg font-bold">{errors.name?.type === "minLength" && "Ім'я <3симв."}</p>
          </div>

          {/* В2-типу materialUI */}
          <div className="mx-1 relative z-0  my-2 group">
            <input
              className={`${styleInputMaterial}`}
              {...register("last_name", { minLength: 3, maxLength: 30 })}
              placeholder=" "
              required
            />
            <label
              htmlFor="last_name"
              className={`${styleLabelMaterial}`}
            >
              Прізвище:
            </label>
            <p className="text-errorMsg font-bold">{errors.name?.type === "maxLength" && "Прізвище >30симв."}</p>
            <p className="text-errorMsg font-bold">{errors.name?.type === "minLength" && "Прізвище <3симв."}</p>
          </div>
          {/*  */}

          {/* В2-типу materialUI */}
          <div className="mx-1 relative z-0  my-2 group">
            <input
              className={`${styleInputMaterial}`}
              type="email"
              required
              {...register("email", {
                pattern: {
                  value: /^(.+)@(.+)\.(.+)$/,
                  //   //   value: /\S+@\S+\.\S+/,
                },
              })}
              placeholder=" "
            />

            <label
              htmlFor="email"
              className={`${styleLabelMaterial}`}
            >
              email:
            </label>
            <p className="text-errorMsg font-bold">{errors.email?.type === "pattern" && "Не формат email"}</p>
          </div>

          {/* В2-типу materialUI */}
          <div className="mx-1 relative z-0  my-2 group">
            <input className={`${styleInputMaterial}`} {...register("skod", { maxLength: 14 })} placeholder=" " />
            <label
              htmlFor="skod"
              className={`${styleLabelMaterial}`}
            >
              ШКод:
            </label>
            <p className="text-errorMsg font-bold">{errors.name?.type === "maxLength" && "Назва >14симв."}</p>
          </div>

          {/* В2-типу materialUI */}
          <div className="mx-1 relative z-0  my-2 group">
            <input
              className={`${styleInputMaterial}`}
              type="text"
              {...register("discount_proc", {
                pattern: {
                  value: /^\d*\.?\d{0,2}$/g, //(.) 2-а знаки після коми\ Не виводить повідомлення
                },
                max: 100,
              })}
              placeholder=" "
            />
            <label
              htmlFor="discount_proc"
              className={`${styleLabelMaterial}`}
            >
              Знижка(%):
            </label>
            <p className="text-errorMsg font-bold">{errors.discount_proc?.type === "pattern" && "Не: .XX"}</p>
            <p className="text-errorMsg font-bold">{errors.discount_proc?.type === "max" && "до 100"}</p>
          </div>
          {/*  */}
        </div>
      </form>
    </div>
  )
}
