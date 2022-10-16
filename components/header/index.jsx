import Image from 'next/image'
import React from 'react'
import Navbar from '../navbar'

const Header = () => {
  return (
    <header className="max-w-[1350px] mx-auto px-5">
      <div className="text-gray-600 font-normal text-sm bg-white  flex items-center py-2">
        Regresar a
        <a
          href="https://larepublica.pe/"
          target="_black"
          className="hover:opacity-80 flex items-start duration-300">
          <div className="mt-1 ml-2 ">
            <Image src="/header/logo-lr-red.svg" width={90} height={14} />
          </div>
          <div className="mt-[2px] ml-2">
            <Image src="/header/back-button.svg" width={13} height={14} />
          </div>
        </a>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
