//d_brand/action.js //https://github.com/porsager/postgres?tab=readme-ov-file#connection-details

"use server"

import { sql } from "@/config/dbConfig"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

//передаєм параметр formData, а там реструктурезуємо в
export async function addBrand(inData) {
  //   console.log("inData=", inData)
  const data = {
    // name: inData.get("name"),//якщо прийшло formData
    name: inData.name, //якщо прийшов об'єкт з перевірки
  }

  try {
    const brands = await sql`INSERT INTO d_brand (name) VALUES (${data.name}) RETURNING name`

    //    return brands
    // return { message: `Added todo ${data.name}` }
  } catch (e) {
    // return { message: "Failed to create todo" }
  }
  revalidatePath("/shop/references/d_brand") //revalidate-повторно перевірити
  redirect(`/shop/references/d_brand`)
}
