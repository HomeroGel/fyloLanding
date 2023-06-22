// eslint-disable-next-line no-unused-vars
import React from 'react'
import Logo from '../images/logo.svg'
import '../styles/NavBar.css'


const NavBar = () => {
  return (
    <div className='flex justify-between items-center m-14'>
        <div><img className='logo' src={Logo} alt="logo" /></div>
        <nav className='text-white'>
            <a className='p-8' href="">Features</a>
            <a className='p-8' href="">Team</a>
            <a className='p-8' href="">Sign In</a>
        </nav>
    </div>
  )
}

export default NavBar