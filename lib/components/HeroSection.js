import React from 'react'
import {Link} from 'react-router'

const HeroSection = () => {
  return (
    <div className='main-section-container'>
      <h3>Savin da bebs</h3>
      <Link to='/basics'><button className='main-start-family-btn'>Start Family Fund</button></Link>
      <input className='search-family-input' placeholder='Search for a Family' />
    </div>
  )
}

export default HeroSection