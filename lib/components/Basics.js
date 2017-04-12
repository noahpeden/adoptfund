import React, { Component } from 'react'
import { Link } from 'react-router'

class Basics extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      location: '',
      name: '',
      endDate: '',
    }
  }

  render() {
    return (
      <div>
        <h2 className='basics-h2'>Step One: Basics</h2>
        <div className='input-container'>
          <p>Give your Family Fund a title:</p>
          <input className='title-input' placeholder='Title of Family Fund' />
          <p>What is your Family's name?:</p>
          <input className='name-input' placeholder='Family Name' />
          <p>Where do you live?</p>
          <input className='city-input' placeholder='Your City' />
          <input className='state-input' placeholder='Your State' />
          <p>When will your Family Fund need to end?</p>
          <input className='date-input' type='date' data-date-inline-picker='true' />
        </div>
        <div className='buttons-container'>
          <Link to='/story'><button>Save & Continue</button></Link>
        </div>
      </div>
    )
  }
}

export default Basics
