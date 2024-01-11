//d_brand/page.js

"use client"
import { useState } from "react"
import RTable from "@/components/table/RTable"
import { AddBrandForm } from "./add-brandForm"
import UserForm from "./UserForm"

export default function DBrand({ resData }) {
  const [isAddForm, setIsAddForm] = useState(false) //РОбоча таьлиця

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
      <RTable
        initialData={resData}
        initialСolumns={columns}
        p_title={"DBrands"}
        p_selected={true} //Вибрати всі+ інвормація про к-сть вибраних рядків
        p_fonts={true} //чи треба зміні фонтів(величина шрифтів)(true/false)
        p_filtered={true} //чи треба Фільтр по всіх полях-не обов'язково(true/false)
        p_sumRow={true} //Підсумковий рядок(true/false)
        p_searchAllRows={true} //чи треба пошук по всіх полях-не обов'язково(true/false)
        //
        setIsAddForm={setIsAddForm}
      />
      {isAddForm && <AddBrandForm setIsAddForm={setIsAddForm} />}
    </main>
  )
}
