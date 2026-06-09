//d_brand/action.js //https://github.com/porsager/postgres?tab=readme-ov-file#connection-details

"use server"

import { sql, conn } from "@/config/dbConfig"
// import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function addBrand(message, formData) {
  //   console.log("message=", message + " formData=", formData)
  //   const data = {name: formData.get("name")}// Без перевірки react-hook-form прямо з <form  action={addBrand}
  const data = formData //З перевіркою react-hook-form через onSubmit (без <form  action={addBrand}....)

  try {
    await sql`INSERT INTO d_brand (name) VALUES (${data.name}) RETURNING name`

    revalidatePath("/shop/references/d_brand") //revalidate-повторно перевірити
    return { message: `Додано: ${data.name}` }
  } catch (e) {
    return { message: "Не вдалося виконити завдання" }
  }
  //redirect(`/shop/references/d_brand`)//перенаправити користувача на інший маршрутви
}

export async function editBrand(message, formData) {
  console.log("message=", message + " formData=", formData)
  //   const data = {name: formData.get("name")}// Без перевірки react-hook-form прямо з <form  action={addBrand}
  const data = formData //З перевіркою react-hook-form через onSubmit (без <form  action={addBrand}....)
const sqlText = `UPDATE d_brand SET name = '${data.name}' WHERE id = (${data.id})`
  console.log("sqlText=", sqlText)
//   `UPDATE d_brand SET name = '${data.name}' WHERE id = (${data.id})`)
  try {
    // await sql`INSERT INTO d_brand (name) VALUES (${data.name}) RETURNING name`
    await sql`UPDATE d_brand SET name = '${data.name}' WHERE id = (${data.id})`
// await sql`UPDATE d_brand SET name = 'Роман' WHERE id = (373)`
    revalidatePath("/shop/references/d_brand") //revalidate-повторно перевірити
    return { message: `Відредагованоано: ${data.name}` }
  } catch (e) {
    return { message: "Не вдалося виконити завдання" }
  }
  //redirect(`/shop/references/d_brand`)//перенаправити користувача на інший маршрутви
}

// *sql**deleteBrand*********************************
export async function deleteBrand(message, formData) {
  const selRows = formData.get("ids") //якщо прийшло formData
  console.log("actoins.js/deleteBrand/message=", message + "selRows=", selRows)
  //   const data = formData

  try {
    // await sql`DELETE FROM d_brand WHERE id IN (${selRows})`
    //  await sql`INSERT INTO d_brand (name) VALUES (${data.name}) RETURNING name`
    await sql`DELETE FROM d_brand WHERE id IN (${selRows}) `
    console.log("actoins.js/deleteBrand/*** try=")
    // let resData = await sql`DELETE FROM d_brand WHERE id IN (${selRows}) RETURNING count`
    revalidatePath("/shop/references/d_brand") //revalidate-повторно перевірити
    return { message: `Видалено: ` }
  } catch (e) {
    return { message: "Не вдалося виконити завдання deleteBrand" }
  }
}

// * pool ** deleteBrandPool *******************************
export async function deleteBrandPool(message, formData, resp) {
  "use server"
  const selRows = formData.get("ids") //якщо прийшло formData
  console.log("actoins.js/deleteBrand/message=", message)
  console.log("actoins.js/deleteBrand/selRows=", selRows)
  const sql = `DELETE FROM d_brand WHERE id IN (${selRows}) `
  try {
    conn.query(sql, (error, result) => {
      if (error) {
        reject(error)
        return { message: `Не вдалося виконити завдання ${error.message}` }
      }
      // revalidatePath("/shop/references/d_brand") //revalidate-повторно перевірити
      return { message: `Видалено записи:${selRows}` }
    })
  } catch (e) {
    console.log("catch/d_Brand/action.js/delete/Помилка запиту до posgreSQL", e.stack)

    return { message: `Не вдалося виконити завдання ${e.message}` }
  }
}
