//d_client/actoins.js //https://github.com/porsager/postgres?tab=readme-ov-file#connection-details

"use server"

import { sql } from "@/config/dbConfig"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

//передаєм параметр formData, а там реструктурезуємо в
export async function addClient(formData) {
  console.log("formData=", formData)
  const data = formData
  // для formData // Без перевірки прямо з <form  action={addClient}....
  //   const data = {
  //     //     name: inData.name, //якщо прийшов об'єкт з перевірки
  //     name: formData.get("name"), //якщо прийшло formData
  //     last_name: formData.get("last_name"), //якщо прийшло formData
  //     email: formData.get("email"), //якщо прийшло formData
  //     skod: formData.get("skod"), //якщо прийшло formData
  //     discount_proc: formData.get("discount_proc"), //якщо прийшло formData
  //   }

  try {
    const res =
      await sql`insert into d_client(name,last_name,email,skod,discount_proc) VALUES(${data.name},${data.last_name},${data.email},${data.skod},${data.discount_proc}) RETURNING *`

    revalidatePath("/shop/references/d_client") //revalidate-повторно перевірити
    // redirect(`/shop/references/d_client`)
    return { message: `Доданоно: ${data.id}` }
  } catch (e) {
    return { message: "Не вдалося виконити завдання" }
  }
}
//передаєм параметр formData, а там реструктурезуємо в
export async function deleteClient(formData) {
  console.log("actoins.js/deleteClient/formData=", formData)
  const data = formData

  try {
    // const res = await sql`DELETE FROM d_client WHERE id IN (${data.id})`
    await sql`DELETE FROM d_client WHERE id = ${data.id}`

    revalidatePath("/shop/references/d_client") //revalidate-повторно перевірити
    return { message: `Видалено: ${data.id}` }
  } catch (e) {
    return { message: "Не вдалося виконити завдання" }
  }
}
