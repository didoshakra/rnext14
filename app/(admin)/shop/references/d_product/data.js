// export async function getAllProducts() {
//   const promise = new Promise((res) => setTimeout(() => res(PRODUCTS), 1500));
//   return await promise;
// }

import { conn } from "@/config/dbConfig"
import { NextResponse } from "next/server"

export async function getProducts() {
  //   console.log("app/api/shop/references/d_product/route.js");
  let data = []
  const query =
    // "COALESCE(to_char(date_create, 'MM-DD-YYYY'), '') AS datecreate,"-перетворення date в to_char
    "SELECT d_product.id,d_product.name,category_id,price,brand_id,img,ov_id,skod,uktzed,pdv,akcuz,is_discount,date_create,d_category.name AS category,d_brand.name AS brand,d_ov.name AS ov FROM d_product JOIN d_category ON d_category.id = d_product.category_id   JOIN d_brand ON d_brand.id = d_product.brand_id JOIN d_ov ON d_ov.kod = d_product.ov_id  ORDER BY id "
  //   const query = "select * from d_product ORDER BY id DESC LIMIT 100";
  try {
    const result = await conn.query(query) // conn.query-команда виконнання запиту(.query)
    // console.log("getDataAll/result=", result.rows);
    data = result.rows
  } catch (error) {
    data = "DProducts/Помилка запиту! 1.query =" + query + " 2.Помилка:" + error
    // return NextResponse.json({ error });
  }
  return NextResponse.json({ data })
}