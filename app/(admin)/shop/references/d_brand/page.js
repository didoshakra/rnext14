//d_brand/page.js
import { sql } from "@/config/dbConfig"
import DBrand from "./DBrand"
import { AddBrand } from "./add-brandForm"

export default async function PBrand() {
  let resData = await sql`SELECT * FROM d_brand ORDER BY id DESC`
  return (
    <main className="mx-auto px-0">
      <DBrand resData={resData} />
    </main>
  )
}
