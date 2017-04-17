import React, {Component} from 'react'
import {Link} from 'react-router'

export default class FamilyProfile extends Component {
  constructor() {
    super()
    this.state = {
      donation: '',
    }
  }

  componentDidMount() {
    this.props.grabDonations(this.props.selectedFamily.id)
  }

  donate() {
    this.props.saveFamily(this.props.selectedFamily.id)
  }

  render() {
    const family = this.props.selectedFamily
    return (
      <div className='fam-profile-container' >
        {console.log('donations:', this.props.donations)}
        {
          this.props.user === this.props.selectedFamily.userId
          ? <button className='edit-btn'>Edit</button>
          : ''
        }
        <h1 className='fam-title'>{family.title}</h1>
        <h2 className='fam-name'>{family.name}</h2>
        <p className='fam-location'>{family.location}</p>
        <div className='fake-photo'><img className='fam-photo' src={family.image}></img></div>
        <div className='donate-section'>
          <Link className='donate-link' to='/donation'><button className='donate-btn' onClick={() => this.donate()}>Donate</button></Link>
          <p className='fam-cost'>{family.cost}</p>
          <p className='fam-expiration' >{family.expiration}</p>
        </div>
        <div className='story-section'>
          <h3 className='fam-story-title'>{family.name}'s Story:</h3>
          <p className='fam-story'>{family.story}sdjfa;ldskjfa;lkjdsfl;aksjdf;alksdjfa;ldksjf;lasdkjf;aldskjf;lasdkjf;lasdkfjlasdkfj;lakdjf;alsdkjf;aldkjfa;lsdkjf;aldskjf;aldskjf</p>
        </div>
        <div className='link-section'>
          {family.links}
        </div>
      </div>
    )
  }
}
