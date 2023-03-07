import { useState } from 'react'
import menuIcon from '../img/menu.svg'
import closeIcon from '../img/close.svg'
import { Link } from 'react-router-dom'
import { AiFillHome, AiFillBook, AiFillFund, AiFillContacts } from 'react-icons/ai'

const Nav = () => {
  const [navbar, setNavbar] = useState(false)
  const [navColorChange, setNavColorChange] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY > 200) {
      setNavColorChange(true)
    }
    else {
      setNavColorChange(false)
    }
  }
  window.addEventListener('scroll', changeNavbarColor);
  
  return (
    <nav className={`${navColorChange ? 'bg-[#1d2040] sticky top-0 z-10' : ''}`}>
      <div className='flex md:hidden justify-between items-center p-8'>
        {/* Logo */}
        <a href="/"><h1 className="logo">Port<span className='text-red-500'>Folio</span></h1></a>

        {/* Mobile Navbar */}
        <div onClick={() => setNavbar(!navbar)} className='md:hidden'>
        {!navbar ? <img src={menuIcon} alt="mobile-menu" className='w-8 hover:cursor-pointer' /> : <img src={closeIcon} alt="close-icon" className='w-8 hover:cursor-pointer' />}
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div className={!navbar ? 'hidden' : 'flex justify-center text-2xl pb-8 border-b-2 mx-4'}>
        <ul className='nav-links space-y-4'>
          {/* Scroll */}
          <li><a className='flex items-center gap-2' onClick={() => setNavbar(!navbar)} href='/#pradžia'><AiFillHome />Pradžia</a></li>
          <li><a className='flex items-center gap-2' onClick={() => setNavbar(!navbar)} href='/#projektai'><AiFillBook />Projektai</a></li>
          <li><a className='flex items-center gap-2' onClick={() => setNavbar(!navbar)} href='/#apie-mane'><AiFillFund />Apie</a></li>
          <li><a className='flex items-center gap-2' onClick={() => setNavbar(!navbar)} href='/#susisiekti'><AiFillContacts />Susisiekti</a></li>
        </ul>
      </div>

      {/* Desktop Navbar */}
      <div className='hidden md:flex justify-between items-center text-2xl p-8 mx-10'>
        {/* Logo */}
        <a href="/"><h1 className="logo">Port<span className='text-red-500'>Folio</span></h1></a>

        <ul className='hidden md:flex gap-8 nav-links'>
          {/* Scroll */}
          <li><a href='/#pradžia'>Pradžia</a></li>
          <li><a href='/#projektai'>Projektai</a></li>
          <li><a href='/#apie-mane'>Apie</a></li>
          <li><a href='/#susisiekti'>Susisiekti</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
