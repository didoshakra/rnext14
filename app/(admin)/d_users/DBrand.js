//d_brand/page.js

"use client"
import { useState } from "react"
import RTable from "@/components/table/RTable"
import { AddUsersForm } from "./add-usersForm"

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
      label: "Ім'я",
      accessor: "name",
      sortable: true,
      filtered: true,
    },
    {
      label: "Прізвище",
      accessor: "last_name",
      sortable: true,
      filtered: true,
    },
    {
      label: "Пароль",
      accessor: "password",
      sortable: true,
      filtered: true,
    },
    {
      label: "Профіль",
      accessor: "profile",
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
        p_title={"DUsers"}
        p_selected={true} //Вибрати всі+ інвормація про к-сть вибраних рядків
        p_fonts={true} //чи треба зміні фонтів(величина шрифтів)(true/false)
        p_filtered={true} //чи треба Фільтр по всіх полях-не обов'язково(true/false)
        p_sumRow={true} //Підсумковий рядок(true/false)
        p_searchAllRows={true} //чи треба пошук по всіх полях-не обов'язково(true/false)
        //
        setIsAddForm={setIsAddForm}
      />
      {isAddForm && <AddUsersForm setIsAddForm={setIsAddForm} />}
    </main>
  )
}
