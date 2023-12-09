//pages/api/d_product/select-all.js
import { conn } from "@/config/dbConfig";
import { NextResponse } from "next/server";

export async function GET() {
//   const sql =
//     "SELECT d_product.id,d_product.name,category_id,price,brand_id,img,ov_id,skod,uktzed,pdv,akcuz,is_discount,d_category.name AS category,d_brand.name AS brand,d_ov.name AS ov FROM d_product JOIN d_category ON d_category.id = d_product.category_id JOIN d_brand ON d_brand.id = d_product.brand_id JOIN d_ov ON d_ov.kod = d_product.ov_id  ORDER BY id DESC";

  const client = await conn.connect();
  let res;

  try {
    // res = await client.sql`SELECT * FROM Pets;`;
    res =
      await client.sql`SELECT d_product.id,d_product.name,category_id,price,brand_id,img,ov_id,skod,uktzed,pdv,akcuz,is_discount,d_category.name AS category,d_brand.name AS brand,d_ov.name AS ov FROM d_product JOIN d_category ON d_category.id = d_product.category_id JOIN d_brand ON d_brand.id = d_product.brand_id JOIN d_ov ON d_ov.kod = d_product.ov_id  ORDER BY id DESC;`;
  } catch (error) {
    return NextResponse.json({ error });
  }

  return NextResponse.json({ data: res });
}

// export function GET(req, resp, done) {
//   const sql =
//     "SELECT d_product.id,d_product.name,category_id,price,brand_id,img,ov_id,skod,uktzed,pdv,akcuz,is_discount,d_category.name AS category,d_brand.name AS brand,d_ov.name AS ov FROM d_product JOIN d_category ON d_category.id = d_product.category_id JOIN d_brand ON d_brand.id = d_product.brand_id JOIN d_ov ON d_ov.kod = d_product.ov_id  ORDER BY id DESC";

//   //--- pool(promise)
//   conn.connect().then((client) => {
//     return client
//       .query(sql) // your query string here
//       .then((result) => {
//         client.release(); //звільнення
//         resp.status(200).json(result.rows);
//       }) // your callback here
//       .catch((err) => {
//         client.release(); //звільнення
//         console.log(err.stack); // your callback here
//         resp.status(500).json({ message: err.message });
//       });
//   });

  //--- pool(notPromise)(працює)
  //   pool.connect((err, client, done) => {
  //     if (err) throw err //видає опис помилки підключення
  //     client.query(sql, (err, result) => {
  //       done() // call `done()` to release the client back to the pool
  //       if (err) {
  //         console.log("error running query", err)
  //       } else {
  //         resp.status(200).json(result.rows)
  //       }
  //     })
  //   })
// }
