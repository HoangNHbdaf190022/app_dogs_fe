import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
    <nav className="navbar">
        <Link className="underline-ani" to='/'>Home</Link>
        <Link className="underline-ani" to='/dogs'>Dogs</Link>
        <Link className="underline-ani" to='/checkout'>My Cart</Link>
    </nav>
    </>
  )
}

export default NavBar