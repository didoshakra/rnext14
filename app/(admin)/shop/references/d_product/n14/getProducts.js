import { conn } from "@/config/dbConfig"
export const getAllProducts = async () => {
  let data = []
  const query =
    "SELECT d_product.id,d_product.name,category_id,price,brand_id,img,ov_id,skod,uktzed,pdv,akcuz,is_discount,date_create,d_category.name AS category,d_brand.name AS brand,d_ov.name AS ov FROM d_product JOIN d_category ON d_category.id = d_product.category_id   JOIN d_brand ON d_brand.id = d_product.brand_id JOIN d_ov ON d_ov.kod = d_product.ov_id  ORDER BY id "

  const response = await conn.query(query) // conn.query-команда виконнання запиту(.query)
  data = response.rows

  if (!response.ok) throw new Error("Unable to fetch posts.")

  return response.json({ data })
}

// export const getPostById = async (id) => {
//   const response = await fetch(`http://localhost:3300/posts/${id}`, { headers: { "Content-type": "application/json" } })

//   if (!response.ok) throw new Error("Unable to fetch post.")

//   return response.json()
// }

// export const getPostsBySearch = async (search: string) => {
//   const response = await fetch(`/api/posts?q=${search}`)

//   if (!response.ok) throw new Error("Unable to fetch posts.")

//   return response.json()
// }
