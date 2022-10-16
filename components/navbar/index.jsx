import React from 'react'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

const Navbar = () => {
  return (
    <>
      {/* Nabvar version desktop */}
      <NavbarDesktop />
      {/* Nabvar version mobile */}
      <NavbarMobile />
    </>
  )
}

export default Navbar
