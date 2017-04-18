import React, {Component} from 'react'
import {Link} from 'react-router'

export default class FamilyProfile extends Component {
  constructor() {
    super()
    this.state = {
      donation: '',
    }
  }

  componentWillMount() {
    this.props.grabDonations(this.props.selectedFamily.id)
  }

  donate() {
    this.props.saveFamily(this.props.selectedFamily.id)
  }

  raised() {
    let total = 0
    if (this.props.donations) {
      this.props.donations.donations.forEach(donation => {
        total += donation.donationAmount
      })
    }
    return total
  }

  progress() {
    const percentage = (this.raised() / this.props.selectedFamily.cost) * 100
    if (document.querySelector('.progress-bar')) {
      document.querySelector('.progress-bar').style.width = percentage + '%'
    }
  }

  editButton() {
    let btn = ''
    if (this.props.user) {
      if (this.props.user.id === this.props.selectedFamily.userId) {
        btn = <Link to='/profileEdit'><button className='edit-btn'>Edit</button></Link>
      }
    }
    return btn
  }

  render() {
    const family = this.props.selectedFamily
    return (
      <div className='fam-profile-container' >
        <h1 className='fam-title'>{family.title}</h1>
        <h2 className='fam-name'>{family.name}</h2>
        <p className='fam-location'>{family.location}</p>
        <div className='fake-photo'><img className='fam-photo' src={family.image}></img></div>
        <div className='donate-section'>
          <Link className='donate-link' to='/donation'><button className='donate-btn' onClick={() => this.donate()}>Donate</button></Link>
          // probably needs styling
          <p>Raised: ${this.raised()}</p>
          <p className='fam-cost'>{family.cost}</p>
          // I can style these
          <div className='progress-bar-cont' >
            <div className='progress-bar' />
          </div>
          <p className='fam-expiration' >{family.expiration}</p>
        </div>
        <div className='story-section'>
          <h3 className='fam-story-title'>{family.name}'s Story:</h3>
          <p className='fam-story'>{family.story}sdjfa;ldskjfa;lkjdsfl;aksjdf;alksdjfa;ldksjf;lasdkjf;aldskjf;lasdkjf;lasdkfjlasdkfj;lakdjf;alsdkjf;aldkjfa;lsdkjf;aldskjf;aldskjf</p>
        </div>
        <div className='link-section'>
          {family.links}
        </div>
        {this.editButton()}
        {this.progress()}
      </div>
    )
  }
}
