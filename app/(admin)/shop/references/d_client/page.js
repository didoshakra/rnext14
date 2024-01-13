//d_brand/page.js
import { sql } from "@/config/dbConfig"
import DKlient from "./DClient"

export default async function PKLient() {
  let resData = await sql`SELECT * FROM d_client ORDER BY id DESC`
  return (
    <main className="mx-auto px-0">
      <DKlient resData={resData} />
    </main>
  )
}
