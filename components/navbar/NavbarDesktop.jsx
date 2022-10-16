import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const NavbarDesktop = () => {
  return (
    <nav className="mt-3  lg:flex justify-between items-center hidden">
      <Link href="/" >
        <div className="hover:opacity-80 duration-300 cursor-pointer">
        <Image
          src="/header/elecciones-2022.png"
          width={254}
          height={61}
          loading="lazy"
          alt="elecciones-2022"
        />
        </div>
        
      </Link>
      <ul className="flex gap-3 text-sm font-bold">
        <li className="hover:text-gray-600 duration-300">
          <Link href="/" passHref>
            Inicio
          </Link>
        </li>
        <li className="hover:text-gray-600 duration-300">
          <Link href="/" passHref>
            Elecciones 2022
          </Link>
        </li>
        <li className="hover:text-gray-600 duration-300">
          <Link href="/" passHref>
            Encuestas
          </Link>
        </li>
        <li className="hover:text-gray-600 duration-300">
          <Link href="/" passHref>
            Miembros de mesa
          </Link>
        </li>
        <li className="hover:text-gray-600 duration-300">
          <Link href="/" passHref>
            Local de votación
          </Link>
        </li>
        <li className="hover:text-gray-600 duration-300">
          <Link href="/graficos" passHref>
            Gráficos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavbarDesktop
