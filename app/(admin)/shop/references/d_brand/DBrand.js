//d_brand/page.js

"use client"
import { useState } from "react"
import RTable from "@/components/table/RTable"
import { FormAddBrand } from "./FormAddBrand"
import { FormDeleteBrand } from "./FormDeleteBrand"

export default function DBrand({ resData }) {
  const [isFormAdd, setIsFormAdd] = useState(false) //Форма додавання запису
  const [isFormEdit, setIsFormEdit] = useState(false) //Форма коригування запису
  const [isFormDelete, setIsFormDelete] = useState(false) //Форма вилучення записів
  const [deleteData, setDeleteData] = useState([]) //Масив id записів для вилучення(1,5,8)
  const [editData, setEditData] = useState({}) //Об'єкт даних рядка для коригування

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
        setDeleteData={setDeleteData}
        setEditData={setEditData}
        setIsFormAdd={setIsFormAdd}
        setIsFormEdit={setIsFormEdit}
        setIsFormDelete={setIsFormDelete}
      />
      {isFormAdd && <FormAddBrand setIsFormAdd={setIsFormAdd} isFormEdit={isFormEdit} toFormData={editData} />}
      {isFormDelete && <FormDeleteBrand deleteData={deleteData} setIsFormDelete={setIsFormDelete} />}
    </main>
  )
}
