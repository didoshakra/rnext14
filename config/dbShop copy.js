//config/psql-db.js
//Підключення до PosgreSQL
//https://medium.com/@dannibla/connecting-nodejs-postgresql-f8967b9f5932
const { Pool } = require("pg");
// const { Pool, Client } = require("pg")
// const connectionString = "postgres://postgres:root@localhost/shop" // Для  PostgresDB
//-------------------------/"postgres://login:password@localhost/nameBD"

export const pool = new Pool({
  host: process.env.PGSQL_HOST,
  port: process.env.PGSQL_PORT,
  database: process.env.PGSQL_DATABASE,
  user: process.env.PGSQL_USER,
  password: process.env.PGSQL_PASSWORD,
});

// export const pgclient = new Client({
//   connectionString: connectionString,
// })

// export const pool = new Pool({
//   connectionString: connectionString,
// })
