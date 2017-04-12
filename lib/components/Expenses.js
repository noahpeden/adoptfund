import React, { Component } from 'react'
import { Link } from 'react-router'
import Button from './Button'

export default class Expenses extends Component {
  constructor() {
    super()
    this.state = {
      expense1: '',
      expense2: '',
      expense3: '',
    }
  }

  render() {
    return (
      <div>
        <h2>Step Three: Expenses</h2>
        <form onSubmit={(e) => {
          e.preventDefault()
          // this.props.storeExpenses(this.state.expense1, this.state.expense2, this.state.expense3)
        }}>
          <input type="text" name="myText" value="Norway"
            selectBoxOptions="Canada;Denmark;Finland;Germany;Mexico"> </input>

          <select className='expense-dropdown' name='Expenses' onChange={(e) => this.setState({[e.target.value]: ''})}>
            <option value=''>Select a Catagory</option>
            <option value='application-fee'>Application Fee</option>
            <option value='home-visit'>Home Visit</option>
            <option value='travel'>Travel</option>
            <option value='medical'>Medical</option>
            <option value='background-docs'>Background Check / Documents </option>
          </select>
          <input className='expense-input' type='number' placeholder='Enter an amount' onChange={(e) => this.setState({[e.target.value]: e.target.value})} />

          <select className='expense-dropdown' name='Expenses' onChange={(e) => this.setState({expense2: e.target.value})}>
            <option value=''>Select a Catagory</option>
            <option value='application-fee'>Application Fee</option>
            <option value='home-visit'>Home Visit</option>
            <option value='travel'>Travel</option>
            <option value='medical'>Medical</option>
            <option value='background-docs'>Background Check / Documents </option>
          </select>
          <input className='expense-input' type='text' placeholder='Enter an amount' />

          <select className='expense-dropdown' name='Expenses' onChange={(e) => this.setState({expense3: e.target.value})}>
            <option value=''>Select a Catagory</option>
            <option value='application-fee'>Application Fee</option>
            <option value='home-visit'>Home Visit</option>
            <option value='travel'>Travel</option>
            <option value='medical'>Medical</option>
            <option value='background-docs'>Background Check / Documents </option>
          </select>
          <input className='expense-input' type='text' placeholder='Enter an amount' />
          <Link><Button /></Link>
        </form>
      </div>
    )
  }
}
