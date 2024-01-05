import postgres from "postgres"
//d_category
import { sql } from "@/config/dbConfig"

// import { AddForm } from './add-form'
// import { DeleteForm } from './delete-form'

export default async function DCategory() {
  let resData = await sql`SELECT * FROM d_category ORDER BY id DESC`

  return (
    <main>
      <h1 className="sr-only">Todos</h1>
      {/* <AddForm /> */}
      <ul>
        {resData.map((todo) => (
          <li key={todo.id}>
            {todo.name}
            {/* <DeleteForm id={todo.id} todo={todo.text} /> */}
          </li>
        ))}
      </ul>
    </main>
  )
}
