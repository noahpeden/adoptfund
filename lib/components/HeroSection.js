import React from 'react'
import {Link} from 'react-router'

const HeroSection = () => {
  return (
    <div className='main-section-container'>
      <h1 className='title'>Adopt Fund</h1>
      <h3 className='hero-h3'>Savin da bebs one fambam at a time</h3>
      <Link to='/basics'><button className='main-start-family-btn'>Start Family Fund</button></Link>
      <input className='search-family-input' placeholder='Search for a Family' />
    </div>
  )
}

export default HeroSection
