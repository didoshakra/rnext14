//pages/api/d_product/select-all.js
import { conn } from "@/config/dbConfig";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await conn.connect();
  let res;

  try {
    res = await client.sql`SELECT * FROM d_product;`;
    console.log("api/products/router.js/res=", res);
  } catch (error) {
    return NextResponse.json({ error });
  }

  return NextResponse.json({ data: res });
}


