//d_brand/action.js //https://github.com/porsager/postgres?tab=readme-ov-file#connection-details

"use server"

import { sql } from "@/config/dbConfig"
// import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

//передаєм параметр formData, а там реструктурезуємо в
export async function addBrand(message, formData) {
  //   console.log("message=", message)
  //   console.log("formData=", formData)
  const data = formData //З перевіркою через onSubmit (без <form  action={addClient}....)
  //   для formData // Без перевірки прямо з <form  action={addClient}....
  //     const data = {
  //       name: formData.get("name"), //якщо прийшло з formData
  //     }

  try {
    await sql`INSERT INTO d_brand (name) VALUES (${data.name}) RETURNING name`

    revalidatePath("/shop/references/d_brand") //revalidate-повторно перевірити
    return { message: `Доданоно: ${data.name}` }
  } catch (e) {
    return { message: "Не вдалося виконити завдання" }
  }
  //   redirect(`/shop/references/d_brand`)
}
