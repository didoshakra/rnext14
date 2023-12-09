//pages/api/d_product/select-all.js
import { conn } from "@/config/dbConfig";
import { NextResponse } from "next/server";

export async function GET() {
  //   console.log("app/api/shop/references/d_product/route.js");
  let data = [];
  const query =
    "SELECT d_product.id,d_product.name,category_id,price,brand_id,img,ov_id,skod,uktzed,pdv,akcuz,is_discount,d_category.name AS category,d_brand.name AS brand,d_ov.name AS ov FROM d_product JOIN d_category ON d_category.id = d_product.category_id   JOIN d_brand ON d_brand.id = d_product.brand_id JOIN d_ov ON d_ov.kod = d_product.ov_id  ORDER BY id LIMIT 10";
  //   const query = "select * from d_product ORDER BY id DESC LIMIT 100";
  try {
    const result = await conn.query(query); // conn.query-команда виконнання запиту(.query)
    // console.log("getDataAll/result=", result.rows);
    data = result.rows;
  } catch (error) {
    // console.log("Помилка запиту! 1.query =",query + "  2.Помилка запиту:",error);
    data =
      "DProducts/Помилка запиту! 1.query =" + query + " 2.Помилка:" + error;
    // return NextResponse.json({ error });
  }
  return NextResponse.json({ data });
  //   return await data;

  //   =============
  //   const client = await conn.connect();
  //   let res;

  //   try {
  //     res = await client.sql`SELECT * FROM d_product;`;
  //     console.log("products/router.js/res=", res);
  //   } catch (error) {
  //     return NextResponse.json({ error });
  //   }

  //   return NextResponse.json({ data: res });
}
