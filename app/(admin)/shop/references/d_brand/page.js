//d_brand
import { sql } from "@/config/dbConfig"
import RTable from "@/components/table/RTable"

export default async function DBrand() {
  let resData = await sql`SELECT * FROM d_brand ORDER BY id DESC`

//   let resData = []
//   const query = "select *  from d_brand ORDER BY id DESC"
//   try {
//     const result = await conn.query(query) // conn.query-команда виконнання запиту(.query)
//     console.log("getDataAll/result=", result.rows)
//     resData = result.rows
//   } catch (error) {
//     data = "DBrand/Помилка запиту! 1.query =" + query + " 2.Помилка:" + error
//   }

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
    <main className="mx-auto px-0 xl:px-2">
      {/* {loading ? (
        <div>Отримання даних з бази даних...</div>
      ) : ( */}
      <>
        {/* <AddForm /> */}
        <RTable
          initialData={resData}
          initialСolumns={columns}
          title={"DBrands"}
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
