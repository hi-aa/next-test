'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import useMessageStore from "@/store/snackbarStore"

export default function Navigation() {
  const test = [
    { title: 'home', url: '/' }
    , { title: 'product', url: '/product' }
    , { title: 'magazine', url: '/dynamic/magazine' }
    , { title: 'test', url: '/dynamic/test' }
    , { title: 'ttt', url: '/test' }
    , { title: '404', url: '/ddfdfdf' }
    , { title: 'error', url: '/errorTest' }
  ]
  const pathname = usePathname()

  const { arr: message } = useMessageStore()

  return (
    <nav>
      <ul>
        {test.map((v, i) =>
          <li key={i} className={pathname === v.url ? 'active' : ''}>
            <Link href={`${v.url}`}>{v.title}</Link>
          </li>
        )}
      </ul>
    </nav>
  )

}