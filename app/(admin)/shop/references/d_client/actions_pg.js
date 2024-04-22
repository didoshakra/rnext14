//d_client/actoins.js (pg)
//add-працює, delete-працює тільки вмдалення по 1-му запису а кілька в списку не видаляє

"use server"

import { conn } from "@/config/dbConfig"
import { revalidatePath } from "next/cache"

//передаєм параметр formData, а там реструктурезуємо в
export async function addClient(message, formData) {
  //   console.log("message=", message)
  //   console.log("action_pg/formData=", formData)
  const data1 = formData
  console.log("action_pg/data1=", data1)
  //   для formData // Без перевірки прямо з <form  action={addClient}....
  // const data = {
  //   name: formData.get("name"), //якщо прийшло formData
  //   last_name: formData.get("last_name"), //якщо прийшло formData
  //   email: formData.get("email"), //якщо прийшло formData
  //   skod: formData.get("skod"), //якщо прийшло formData
  //   discount_proc: formData.get("discount_proc"), //якщо прийшло formData
  // }
  // const name = formData["name"] //якщо прийшло formData
  //  const  last_name= formData["last_name"] //якщо прийшло formData
  //  const   email= formData.email //якщо прийшло formData
  const skod = formData.skod //якщо прийшло formData
  const discount_proc = formData.discount_proc //якщо прийшло formData
  //   }
  //
  //(postgresg)
  //   await sql`insert into d_client(name,last_name,email,skod,discount_proc) VALUES(${data.name},${data.last_name},${data.email},${data.skod},${data.discount_proc}) RETURNING *`

  //   const sql = `insert into d_client(name,last_name,email,skod,discount_proc) VALUES(${data.name},${data.last_name},${data.email},${data.skod},${data.discount_proc}) RETURNING *`
  // const sql = "insert into d_client(skod) VALUES(${data.skod}) RETURNING *"
  // const sql = "insert into d_client(skod) VALUES(${skod}) RETURNING *"
  // onst sql =
  //   const skod = "22222"
  //   const discount_proc = "15"
    const name1 = "11111"
  //   const sql = `insert into d_client(skod,discount_proc) VALUES(${skod},${discount_proc}) RETURNING *`
  const sql = `insert into d_client(skod,discount_proc,name) VALUES(${data1.skod},${data1.discount_proc},${data1.name}) RETURNING *`
  //(pg)
  //   try {
  conn.query(sql, (err, result) => {
    if (err) {
      console.log("**** d_client/action.js/insert/err/Помилка запиту до posgreSQL", err.stack)
      let error = {
        stack: err.stack,
        message: "Помилка запиту до БД posgreSQL",
      }
      return "Помилка виконання запиту до БД", error
    } else {
      //   console.log(`try1/Доданоно: ${result.name} ${result.last_name} ...`)
      console.log(`**** try1/Доданоно:  ...`)
      // revalidatePath("/shop/references/d_client") //revalidate-повторно перевірити
      // return { message: `Доданоно: ${result.name} ${result.last_name} ... ` }
      return { message: `+++Доданоно:  ` }
    }
  })
  //
  console.log(`*** try2/Доданоно1: `)
  revalidatePath("/shop/references/d_client") //revalidate-повторно перевірити
  // return { message: `Доданоно: ${data.name} ${data.last_name} ... ` }
  //   } catch (e) {
  //     console.log(`catch2/Не вдалося виконити завдання`)
  //     return { message: "Не вдалося виконити завдання" }
  //   }
}




//**************************************************** */
export async function deleteClient(message, formData, resp) {
  const selRows = formData.get("ids") //якщо прийшло formData
  //   console.log("actoins.js/deleteClient/message=", message)
  //   console.log("actoins.js/deleteClient/selRows=", selRows)
  const sql = `DELETE FROM d_client WHERE id IN (${selRows}) `
  //   //   try {
  let rMess = "111"
  //   conn.query(sql, (err, result) => {
  //     if (err) {
  //       return { message: `rMess  Помилка виконання запиту до БД, ${err.stack}` }
  //       console.log("d_client/action.js/delete/Помилка запиту до posgreSQL", err.stack)
  //       //   return "Помилка виконання запиту до БД", error
  //     } else {
  //       rMess = "222"
  //       console.log("try1/d_client/action.js/delete/Помилка запиту до posgreSQL", rMess)
  //       revalidatePath("/shop/references/d_client") //revalidate-повторно перевірити
  //       //   masageRes = `Видалено: ${result.rowCount} записів.`
  //       return { message: ` rMess Видалено: записів.` }
  //     }
  //   })
  // console.log(`try2/d_client/action.js/delete/Помилка запиту до posgreSQL`)
  // revalidatePath("/shop/references/d_client") //revalidate-повторно перевірити
  //   } catch (e) {
  //     console.log("catch/d_client/action.js/delete/Помилка запиту до posgreSQL", e.stack)
  //     revalidatePath("/shop/references/d_client") //revalidate-повторно перевірити
  //     return { message: `Не вдалося виконити завдання ${e.message}` }
  //   }
  //   masageRes = `Видалено:  записів.`
  //   revalidatePath("/shop/references/d_client") //revalidate-повторно перевірити
  //   console.log("try3/d_client/action.js/delete/res=", res1)
  //   revalidatePath("/shop/references/d_client") //revalidate-повторно перевірити
  //   return { message: rMess}

  //   new Promise(function (resolve, reject) {
  conn.query(sql, (error, result) => {
    // pool.query("DELETE FROM merchants WHERE id = $1", [id], (error, results) => {
    if (error) {
      reject(error)
      return { message: `Не вдалося виконити завдання ${e.message}` }
    }
    resolve(`Merchant deleted with ID: ${id}`)
    return { message: ` rMess Видалено: записів.` }
  })
  return { message: rMess }
  //   })
  return { message: rMess }
}
