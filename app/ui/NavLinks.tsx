'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Home', href: '/' },
  {
    name: 'Pokedex',
    href: '/pokedex'
  },
  {
    name: 'Objetos',
    href: '/pokedex/items'
  },
]

const NavLinks = () => {

  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={
              `flex h-[48px] grow items-center justify-center
              gap-2 rounded-md  p-3 text-sm font-medium
              hover:bg-red-500 hover:text-white md:flex-none animated duration-200
              md:justify-start md:p-2 md:px-3 ${pathname === link.href ? "bg-sky-100 text-black" : "bg-gray-800 text-white"}`
            }
          >
            <p className='text-md'>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}

export { NavLinks } 