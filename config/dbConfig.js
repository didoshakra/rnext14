// dbConfig.js

// postgres(npm) / Нове(легке)//https://github.com/porsager/postgres?tab=readme-ov-file#connection
// export let sql = postgres(process.env.DATABASE_URL, { ssl: 'allow',})- коли з середовищо Windows..
// параметри не з оточення середовища а з .env.local проекту
import postgres from "postgres"

export let sql = postgres({
  host: process.env.PGSQL_HOST, // Postgres ip address[s] or domain name[s]
  port: 5432, // Postgres server port[s]
  database: process.env.PGSQL_DATABASE, // Name of database to connect to
  username: process.env.PGSQL_USER, // Username of database user
  password: process.env.PGSQL_PASSWORD, // Password of database user
})

//  pg(npm) //Старе/Підключення до PosgreSQL//https://www.simplenextjs.com/posts/next-postgresql
// import { Pool } from "pg"
// export let conn
// if (!conn) {
//   conn = new Pool({
//     user: process.env.PGSQL_USER,
//     password: process.env.PGSQL_PASSWORD,
//     host: process.env.PGSQL_HOST,
//     port: process.env.PGSQL_PORT,
//     database: process.env.PGSQL_DATABASE,
//     ssl: "allow", //дозволяють/Secure Sockets Layer — рівень захищених сокетів- криптографічний протокол, який забезпечує встановлення безпечного з'єднання між клієнтом і сервером
//   })
// }
