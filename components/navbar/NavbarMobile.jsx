import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const NavbarMobile = () => {
  return (
    <nav className="mt-3  flex justify-between items-center lg:hidden">
      <div className="flex flex-col gap-1 cursor-pointer ">
        <div className="w-5 h-[3px] bg-[#383939]"></div>
        <div className="w-5 h-[3px] bg-[#383939]"></div>
        <div className="w-5 h-[3px] bg-[#383939]"></div>
      </div>
      <Link href="/" >
        <div className="hover:opacity-80 duration-300">
        <Image
          src="/header/elecciones-2022.png"
          width={208}
          height={50}
          loading="lazy"
          alt="elecciones-2022"
        />
        </div>
        
      </Link>
    </nav>
  )
}

export default NavbarMobile
