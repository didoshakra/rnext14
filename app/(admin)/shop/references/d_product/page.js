import { sql } from "@/config/dbConfig"
import RTable from "@/components/table/RTable"

export default async function DProducts() {
  // "COALESCE(to_char(date_create, 'MM-DD-YYYY'), '') AS datecreate,"-перетворення date в to_char
  // LIMIT 100"
  let resData =
    await sql`SELECT d_product.id,d_product.name,category_id,price,brand_id,img,ov_id,skod,uktzed,pdv,akcuz,is_discount,date_create,COALESCE(to_char(date_create, 'YYYY-MM-DD'), '') AS datecreate,d_category.name AS category,d_brand.name AS brand,d_ov.name AS ov FROM d_product JOIN d_category ON d_category.id = d_product.category_id   JOIN d_brand ON d_brand.id = d_product.brand_id JOIN d_ov ON d_ov.kod = d_product.ov_id  ORDER BY id`

  //   let resData = []
  //   const query =
  //     // "COALESCE(to_char(date_create, 'MM-DD-YYYY'), '') AS datecreate,"-перетворення date в to_char
  //     "SELECT d_product.id,d_product.name,category_id,price,brand_id,img,ov_id,skod,uktzed,pdv,akcuz,is_discount,date_create,COALESCE(to_char(date_create, 'YYYY-MM-DD'), '') AS datecreate,d_category.name AS category,d_brand.name AS brand,d_ov.name AS ov FROM d_product JOIN d_category ON d_category.id = d_product.category_id   JOIN d_brand ON d_brand.id = d_product.brand_id JOIN d_ov ON d_ov.kod = d_product.ov_id  ORDER BY id LIMIT 20"
  //   //   const query = "select * from d_product ORDER BY id DESC LIMIT 100";

  //   try {
  //     const result = await conn.query(query) // conn.query-команда виконнання запиту(.query)
  //     console.log("getDataAll/result=", result.rows)
  //     resData = result.rows
  //   } catch (error) {
  //     data = "DProducts/Помилка запиту! 1.query =" + query + " 2.Помилка:" + error
  //   }

  // Колонки, що показуються
  const columns = [
    // {
    //   label: "nR",
    //   accessor: "_nrow",
    //   //   sortable: false,
    //   sum: "mean",
    //   with: "20px",
    // },
    {
      label: "Назва товару",
      accessor: "name",
      sortable: true,
      filtered: true,
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
      sum: "mean",
    },
    {
      label: "УКТЗЕД",
      accessor: "akcuz",
      sortable: true,
      filtered: true,
      type: "number",
      sum: "max",
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
      label: "Дата(str)",
      accessor: "datecreate",
      sortable: true,
      filtered: true,
      type: "date",
      sum: "min",
    },
    // {
    //   label: "Дата",
    //   accessor: "date_create",
    //   sortable: true,
    //   filtered: true,
    //   type: "date",
    //   sum: "min",
    // },
    {
      label: "Імідж",
      accessor: "img",
      type: "img",
    },
  ]

  //   console.log("d_product/page/resData", resData);
  return (
    // <main className="h-screen items-center justify-center">
    // <main className="max-h-full items-center justify-center">
    // <main className="mx-auto px-0 xl:px-8">
    <main className="mx-auto px-0 xl:px-2">
      {/* {loading ? (
        <div>Отримання даних з бази даних...</div>
      ) : ( */}
      <>
        {/* <AddForm /> */}
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
      {/* )} */}
    </main>
  )
}
