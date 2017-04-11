import React, { Component } from 'react'
import { Link } from 'react-router'

class Expenses extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h2>Step Three: Expenses</h2>
        <form>

          <select className='expense-dropdown' name='Expenses'>
            <option value=''>Select a Catagory</option>
            <option value='application-fee'>Application Fee</option>
            <option value='home-visit'>Home Visit</option>
            <option value='travel'>Travel</option>
            <option value='medical'>Medical</option>
            <option value='background-docs'>Background Check / Documents </option>
          </select>
          <input className='expense-input' type='text' placeholder='Enter an amount' />

          <select className='expense-dropdown' name='Expenses'>
            <option value=''>Select a Catagory</option>
            <option value='application-fee'>Application Fee</option>
            <option value='home-visit'>Home Visit</option>
            <option value='travel'>Travel</option>
            <option value='medical'>Medical</option>
            <option value='background-docs'>Background Check / Documents </option>
          </select>
          <input className='expense-input' type='text' placeholder='Enter an amount' />

          <select className='expense-dropdown' name='Expenses'>
            <option value=''>Select a Catagory</option>
            <option value='application-fee'>Application Fee</option>
            <option value='home-visit'>Home Visit</option>
            <option value='travel'>Travel</option>
            <option value='medical'>Medical</option>
            <option value='background-docs'>Background Check / Documents </option>
          </select>
          <input className='expense-input' type='text' placeholder='Enter an amount' />
          
        </form>
      </div>
    )
  }
}

export default Expenses
