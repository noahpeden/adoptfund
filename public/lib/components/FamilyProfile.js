import React, {Component} from 'react'
import {Link} from 'react-router'

export default class FamilyProfile extends Component {
  constructor() {
    super()
    this.state = {
      donation: '',
    }
  }

  donate() {
    this.props.saveFamily(this.props.selectedFamily.id)
  }

  render() {
    const family = this.props.selectedFamily
    return(
      <div>
        {
          this.props.user === this.props.selectedFamily.userId ?
          <button className='edit-btn'>Edit</button> :
          ''
        }
        <h1>{family.title}</h1>
        <h2>{family.name}</h2>
        <p>{family.location}</p>
        <div className='donate-section'>
          <h3>Donate:</h3>
          <Link to='/donation'><button onClick={() => this.donate()}>Donate</button></Link>
          <p>{family.cost}</p>
          <p>{family.expiration}</p>
        </div>
        <div className='story-section'>
          <h3>Story</h3>
          <p>{family.story}</p>
        </div>
        <div className='link-section'>
          {family.links}
        </div>
      </div>
    )
  }
}
