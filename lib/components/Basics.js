import React, { Component } from 'react'
import { Link } from 'react-router'

class Basics extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      location: '',
      endDate: '',
    }
  }

  render() {
    return (
      <div>
        <h2>Step One: Basics</h2>
        <div className='input-container'>
          <p>Give your Family Fund a title:</p>
          <input
            onChange={e => this.setState({title: e.target.value})} placeholder='Title of Family Fund'
            value={this.state.title}
           />
          <p>Where do you live?</p>
          <input
            onChange={e => this.setState({location:e.target.value})} placeholder='City, State'
            value={this.state.location}
           />
          <p>When will your Family Fund need to end?</p>
          <input
            type='date'
            data-date-inline-picker='true'
            onChange={e => this.setState({endDate: e.target.value})}
            value={this.state.endDate}
           />
        </div>
        <div className='buttons-container'>
          <Link to='/story'>
            <button onClick={() => this.props.createBasics()}>
              Save & Continue
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Basics
