import React from 'react'
import {Link} from 'react-router'

const NavBar = () => {
  return (
    <nav className='nav-container'>
      <button className='start-family-btn'>Start a Family Fund</button>
      <Link to='/about'><button className='about-btn'>How it Works</button></Link>
      <button className='featured-btn'>Featured Families</button>
      <button className='sign-in-btn'>Sign In, Fool.</button>
    </nav>
  )
}

export default NavBar
