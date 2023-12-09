import Link from "next/link"

export default function AboutLayout({ children }) {
  return (
    <nav className="container m-auto">
      <ul className="flex pl-2 gap-3 font-bold underline text-cyan-600  bg-fuchsia-300">
        <li className="hover:text-red-600">
          <Link href="/examples/grid">grid </Link>
        </li>
        <li className="hover:text-red-600">
          <Link href="/examples/flex">Flex</Link>
        </li>
      </ul>
      <main className="container mb-40 mx-auto bg-fuchsia-100">{children}</main>
    </nav>
  )
}
