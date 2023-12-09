//Підключення до PosgreSQL//https://www.simplenextjs.com/posts/next-postgresql

import { Pool } from "pg";

// Де буде запущена прога: yarn dev -p 3000
// export const dbHost = "http://localhost:3001"
// export const dbHost = "127.0.0.1"
// export const dbHost = "https://ramag.vercel.app"

export let conn;
if (!conn) {
  conn = new Pool({
    user: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASSWORD,
    host: process.env.PGSQL_HOST,
    port: process.env.PGSQL_PORT,
    database: process.env.PGSQL_DATABASE,
  });
}

// export {conn,dbHost};