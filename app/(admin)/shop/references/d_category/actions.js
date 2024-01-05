//d_category
"use server"
import { conn } from "@/config/dbConfig"

import { revalidatePath } from "next/cache"
// import postgres from 'postgres'
import { z } from "zod"


export async function createTodo({ message, formData }) {
  const schema = z.object({
    todo: z.string().min(1),
  })
  const parse = schema.safeParse({
    todo: formData.get("todo"),
  })

  if (!parse.success) {
    return { message: "Failed to create todo" }
  }

  const data = parse.data

  try {
    await sql`
      INSERT INTO todos (text)
      VALUES (${data.todo})
    `

    revalidatePath("/")
    return { message: `Added todo ${data.todo}` }
  } catch (e) {
    return { message: "Failed to create todo" }
  }
//
const query = "select *  from d_brand ORDER BY id DESC"
try {
  const result = await conn.query(query) // conn.query-команда виконнання запиту(.query)
  console.log("getDataAll/result=", result.rows)
  resData = result.rows
} catch (error) {
  data = "DBrand/Помилка запиту! 1.query =" + query + " 2.Помилка:" + error
}


}

export async function deleteTodo({ message, formData }) {
  const schema = z.object({
    id: z.string().min(1),
    todo: z.string().min(1),
  })
  const data = schema.parse({
    id: formData.get("id"),
    todo: formData.get("todo"),
  })

  try {
    await sql`
      DELETE FROM todos
      WHERE id = ${data.id};
    `

    revalidatePath("/")
    return { message: `Deleted todo ${data.todo}` }
  } catch (e) {
    return { message: "Failed to delete todo" }
  }
}
