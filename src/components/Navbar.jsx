import React from 'react'
import Logo from '../assets/wb_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-between mx-4">
        <a href="/"><img className='my-auto w-16 md:w-24 hover:scale-105 duration-200' src={Logo} alt="logo" /></a>
        <div className="text-lg md:text-xl flex my-auto gap-4">
            <p className="font-bold hover:scale-105 duration-200"><a href="/products">Products</a></p>
            <p className="font-bold hover:scale-105 duration-200"><a href="/info">Info</a></p>
        </div>
        <div className="flex gap-4 my-auto text-2xl md:text-3xl">
        <a className='hover:scale-105 duration-200' href="https://www.paypal.com/cgi-bin/webscr?cmd=_cart&business=G8L6ZMR2Q8PGY&display=1"><FontAwesomeIcon icon={faShoppingCart} /></a>
        </div>
        </nav>
    </div>
  )
}

export default Navbar 