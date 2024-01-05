//pages/api/d_product/select-all.js
import { conn } from "@/config/dbConfig";
import { NextResponse } from "next/server";

export async function GET() {
  //   console.log("app/api/shop/references/d_product/route.js");
  let data = [];
  const query =
    // "COALESCE(to_char(date_create, 'MM-DD-YYYY'), '') AS datecreate,"-перетворення date в to_char
    "SELECT d_product.id,d_product.name,category_id,price,brand_id,img,ov_id,skod,uktzed,pdv,akcuz,is_discount,date_create,d_category.name AS category,d_brand.name AS brand,d_ov.name AS ov FROM d_product JOIN d_category ON d_category.id = d_product.category_id   JOIN d_brand ON d_brand.id = d_product.brand_id JOIN d_ov ON d_ov.kod = d_product.ov_id  ORDER BY id "
  //   const query = "select * from d_product ORDER BY id DESC LIMIT 100";
  try {
    const result = await conn.query(query); // conn.query-команда виконнання запиту(.query)
    // console.log("getDataAll/result=", result.rows);
    data = result.rows;
  } catch (error) {
    data =
      "DProducts/Помилка запиту! 1.query =" + query + " 2.Помилка:" + error;
    // return NextResponse.json({ error });
  }
  return NextResponse.json({ data });
  }

// //-- POST
// export async function POST(req, resp) {
//   console.log("***/api/d_product/post/req.body=", req.body)

//   const sql =
//     "insert into  d_product(name,category_id,price,brand_id,img,ov_id,skod,uktzed,pdv,akcuz) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *"
//   const body = req.body //Для feth- не треба перетворення json ->obj
//   const sqlvalues = [
//     body.name,
//     body.category_id,
//     body.price,
//     body.brand_id,
//     body.img,
//     body.ov_id,
//     body.skod,
//     body.uktzed,
//     body.pdv,
//     body.akcuz,
//   ]
// //   console.log("***/api/d_product/post/sqlvalues=", sqlvalues)
//   //--- pool(promise)
//   //   pool.connect().then((client) => {
//   conn.connect().then((client) => {
//     return client
//       .query(sql, sqlvalues) // your query string here
//       .then((result) => {
//         client.release() //звільнення
//         // resp.status(200).json(result.rows[0])
//       }) // your callback here
//       .catch((err) => {
//         client.release() //звільнення
//         console.log(err.stack) // your callback here
//         // resp.status(500).json({ message: err.message })
//       })
//   })
// }
