import React from 'react'
import {Link} from 'react-router'

const NavBar = () => {
    // button to featured should stay on same page might need a tag
  return (
    <nav className='nav-container'>
      <h1 className='title'>Adopt Fund</h1>
      <Link to='/basics'><button className='start-family-btn'>Start a Family Fund</button></Link>
      <Link to='/about'><button className='about-btn'>How it Works</button></Link>
      <button className='featured-btn' href='#featured'>Featured Families</button>
      <button className='sign-in-btn'>Sign In, Fool.</button>
    </nav>
  )
}

export default NavBar
