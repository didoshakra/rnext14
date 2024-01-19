//d_brand/page.js
import { sql } from "@/config/dbConfig"
import DClient from "./DClient"

export default async function PClient() {
  let resData = await sql`SELECT * FROM d_client ORDER BY id DESC`
  return (
    <main className="mx-auto px-0">
      <DClient resData={resData} />
    </main>
  )
}
