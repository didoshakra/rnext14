//d_client/actoins.js (postgres)//https://github.com/porsager/postgres?tab=readme-ov-file#connection-details
//add-працює, delete-працює тільки вмдалення по 1-му запису а кілька в списку не видаляє

"use server"

import { sql } from "@/config/dbConfig"
import { revalidatePath } from "next/cache"

//передаєм параметр formData, а там реструктурезуємо в
export async function addClient(message, formData) {
  //   console.log("message=", message)
  console.log("formData=", formData)
  const data = formData
  //   для formData // Без перевірки прямо з <form  action={addClient}....
  // const data = {
  //   name: formData.get("name"), //якщо прийшло formData
  //   last_name: formData.get("last_name"), //якщо прийшло formData
  //   email: formData.get("email"), //якщо прийшло formData
  //   skod: formData.get("skod"), //якщо прийшло formData
  //   discount_proc: formData.get("discount_proc"), //якщо прийшло formData
  // }

  try {
    const res =
      await sql`insert into d_client(name,last_name,email,skod,discount_proc) VALUES(${data.name},${data.last_name},${data.email},${data.skod},${data.discount_proc}) RETURNING *`

    revalidatePath("/shop/references/d_client") //revalidate-повторно перевірити
    // redirect(`/shop/references/d_client`)
    return { message: `Доданоно: ${data.name} ${data.last_name} ... ` }
  } catch (e) {
    return { message: "Не вдалося виконити завдання" }
  }
}

//передаєм параметр formData, а там реструктурезуємо в
export async function deleteClient(message, formData) {
  const selRows = formData.get("ids") //якщо прийшло formData
  console.log("actoins.js/deleteClient/selRows+++=", selRows)
  //   const data = formData

  try {
    // await sql`DELETE FROM d_client WHERE id IN (${selRows}) RETURNING count`
    await sql`DELETE FROM d_client WHERE id IN (${selRows})`
    // await sql`DELETE FROM d_client WHERE id = (${selRows})`

    revalidatePath("/shop/references/d_client") //revalidate-повторно перевірити
    return { message: `Видалено: ` }
  } catch (e) {
    return { message: "Не вдалося виконити завдання" }
  }
}
