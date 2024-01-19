//DClient.js

"use client"
import { useState } from "react"
import RTable from "@/components/table/RTable"
import { AddClientForm } from "./form_addClient"
import handler from "@/app/api/shop/references/d_client/delete"
import { deleteClient } from "./actions_pg"

export default function DClient({ resData }) {
  const [isAddForm, setIsAddForm] = useState(false) //Форма додавання запису
  const [updateData, setUpdateData] = useState([]) //Рядки з БД для(видалення/коигування)

  //--- Вилучення записів(запит)
  const fDelete = async (rows) => {
    // console.log("+++++f2-flex-table-psql.js/App/onDelete/rowDelete/rows=", rows);
    const url = "/api/shop/references/d_client/delete" //працює
    const options = {
      method: "DELETE",
      body: JSON.stringify(rows), //Для запитів до серверів використовувати формат JSON
      //headers: { //не треба header
    }
    const response = await fetch(url, options)
    //  const response = await fetch(handler, options)
    if (response.ok) {
      // якщо HTTP-статус в диапазоне 200-299
      const resDelete = await response.json() //повертає тіло відповіді json
      alert(`Вилучено ${resDelete} записів`)
      // console.log(`psql-...-fetch.js/Вилучено ${resDelete} записів`);
    } else {
      const err = await response.json() //повертає тіло відповіді json
      alert(`Помилка вилучення записів! ${err.message} / ${err.stack}`)
      // console.log(`+++psql-...-fetch.js/DELETE/ ${err.message} / ${err.stack} `);
    }
  }

  //   function fDelete(selRows) {
  //     let message = "До запиту"
  //     // console.log("DClient.js/fDelete/selRows=", selRows)
  //     console.log("DClient.js/fDelete/message=", message)
  //     const resp = deleteClient(selRows)
  //     console.log("DClient.js/fDelete/resSql=", resp)
  //     console.log("DClient.js/fDelete/message=", message)
  //     //  alert(`Вилучено ${resp} записів`)
  //     // deleteClient(selRows)
  //     // const temp = selRows.map((row) => {
  //     //   deleteClient(row)
  //     // })
  //     alert(message)
  //   }

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
      label: "email",
      accessor: "email",
      sortable: true,
      filtered: true,
    },
    {
      label: "ШКод",
      accessor: "skod",
      sortable: true,
      filtered: true,
    },
    {
      label: "Знижка(%)",
      accessor: "discount_proc",
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
        p_title={"DClient"}
        p_selected={true} //Вибрати всі+ інвормація про к-сть вибраних рядків
        p_fonts={true} //чи треба зміні фонтів(величина шрифтів)(true/false)
        p_filtered={true} //чи треба Фільтр по всіх полях-не обов'язково(true/false)
        p_sumRow={true} //Підсумковий рядок(true/false)
        p_searchAllRows={true} //чи треба пошук по всіх полях-не обов'язково(true/false)
        //
        setIsAddForm={setIsAddForm}
        fDelete={fDelete}
        // setUpdateData={setUpdateData}
      />
      {isAddForm && <AddClientForm setIsAddForm={setIsAddForm} />}
    </main>
  )
}
