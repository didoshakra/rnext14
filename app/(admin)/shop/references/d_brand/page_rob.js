//d_brand/page.js
// "use client"
// import { useState } from "react"
import { revalidatePath } from "next/cache"
import { sql } from "@/config/dbConfig"
import RTable from "@/components/table/RTable"
// import { AddBrand } from "./add-brand"


export default async function DBrand() {
  // export defaut function DBrand() {
  //   const [isAddForm, setIsAddForm] = useState(false) //РОбоча таьлиця

  let resData = await sql`SELECT * FROM d_brand ORDER BY id DESC`

  // Колонки, що показуються
  const columns = [
    {
      label: "ID",
      accessor: "id",
      sortable: false,
    },
    {
      label: "Назва",
      accessor: "name",
      sortable: true,
      filtered: true,
    },
  ]

  //   console.log("d_product/page/resData", resData);
  return (
    <main className=" block mx-auto px-0 xl:px-2">
      {/* {loading ? (
        <div>Отримання даних з бази даних...</div>
      ) : ( */}
      <>
        {/* <AddBrand
          onSuccess={async () => {
            "use server"
            revalidatePath("/shop/references/d_brand")
          }}
        />{" "} */}
        {/* <ul>
          {resData.map((todo) => (
            <li key={todo.id}>
              {todo.id} : {" "}
              {todo.name}
            </li>
          ))}
        </ul> */}
        {/* <AddForm /> */}
        {/* <AddFormBrand /> */}
        <RTable
          initialData={resData}
          initialСolumns={columns}
          p_title={"DBrands"}
          p_selected={true} //Вибрати всі+ інвормація про к-сть вибраних рядків
          p_fonts={true} //чи треба зміні фонтів(величина шрифтів)(true/false)
          p_filtered={true} //чи треба Фільтр по всіх полях-не обов'язково(true/false)
          p_sumRow={true} //Підсумковий рядок(true/false)
          p_searchAllRows={true} //чи треба пошук по всіх полях-не обов'язково(true/false)
        />
      </>
      {/* )} */}
    </main>
  )
}
