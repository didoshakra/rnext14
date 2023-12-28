"use client"
import { useEffect, useState } from "react"
import RTable from "@/components/table/RTable"

export default function Products() {
  const [resData, setResData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async (res) => {
    await fetch("/api/shop/references/d_product")
      .then((res) => res.json())
      .then((data) => {
        setResData(data.data)
        // console.log("d_product/page/data.data.rows", data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  // Колонки, що показуються
  const columns = [
    {
      label: "nR",
      accessor: "_nrow",
      //   sortable: false,
      sum: "mean",
      minWith: "15px",
      with: "20px",
    },
    {
      label: "Ціна",
      accessor: "price",
      type: "number",
      sortable: true,
      filtered: true,
      sum: "sum",
    },
    {
      label: "Назва товару",
      accessor: "name",
      sortable: true,
      filtered: true,
    },
    {
      label: "Од.вим.",
      accessor: "ov",
      align: "center", //Вирівнювання
    },
    {
      label: "ШтрихКод",
      accessor: "skod",
      sortable: true,
      filtered: true,
      //   type: "string",
      //   align: "center",
      sum: "min", //середнє арифметичне
    },
    {
      label: "Категорія",
      accessor: "category",
      sortable: true,
      filtered: true,
      minWith: "150px",
      with: "200px",
    },
    {
      label: "ПДВ",
      accessor: "pdv",
      sortable: true,
      filtered: true,
      type: "number",
    },
    {
      label: "УКТЗЕД",
      accessor: "akcuz",
      sortable: true,
      filtered: true,
      type: "number",
    },
    {
      label: "Знижка",
      accessor: "is_discount",
      sortable: true,
      filtered: true,
      type: "boolean",
    },
    {
      label: "Бренд",
      accessor: "brand",
      sortable: true,
      filtered: true,
    },
    {
      label: "Дата ств.",
      accessor: "datecreate",
      sortable: true,
      filtered: true,
      type: "date",
    },
    {
      label: "Дата ств.",
      accessor: "date_create",
      sortable: true,
      filtered: true,
      type: "date",
    },
    {
      label: "Імідж",
      accessor: "img",
      type: "img",
    },
  ]

  //  const columns = [
  //   {
  //     key: "name",
  //     label: "NAME",
  //   },
  //   {
  //     key: "role",
  //     label: "ROLE",
  //   },
  //   {
  //     key: "age",
  //     label: "AGE",
  //   },
  // ];

  //   const rows = [
  //     {
  //       key: "1",
  //       firstName: "Tony",
  //       lastName: "Reichert",
  //       role: "Developer",
  //       age: "35",
  //     },
  //     {
  //       key: "2",
  //       firstName: "Zoey",
  //       lastName: "Lang",
  //       role: "Designer",
  //       age: "22",
  //     },
  //     {
  //       key: "3",
  //       firstName: "Jane",
  //       lastName: "Fisher",
  //       role: "CEO",
  //       age: "29",
  //     },
  //     {
  //       key: "4",
  //       firstName: "William",
  //       lastName: "Howard",
  //       role: "Designer",
  //       age: "27",
  //     },
  //   ]

  //   console.log("d_product/page/resData", resData);
  return (
    // <main className="h-screen items-center justify-center">
    // <main className="max-h-full items-center justify-center">
    // <main className="mx-auto px-0 xl:px-8">
    <main className="mx-auto px-0 xl:px-2">
      {loading ? (
        <div>Отримання даних з бази даних...</div>
      ) : (
        <>
          <RTable
            initialData={resData}
            initialСolumns={columns}
            title={"DProducts"}
            p_selected={true} //Вибрати всі+ інвормація про к-сть вибраних рядків
            p_fonts={true} //чи треба зміні фонтів(величина шрифтів)(true/false)
            p_filtered={true} //чи треба Фільтр по всіх полях-не обов'язково(true/false)
            p_sumRow={true} //Підсумковий рядок(true/false)
            p_searchAllRows={true} //чи треба пошук по всіх полях-не обов'язково(true/false)
          />
        </>
      )}
    </main>
  )
}
