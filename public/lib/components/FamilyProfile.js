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
        btn = <Link to='/edit'><button className='edit-btn'>Edit</button></Link>
      }
    }
    return btn
  }

  render() {
    const family = this.props.selectedFamily
    return (
      <div>
        <h1>{family.title}</h1>
        <h2>{family.name}</h2>
        <p>{family.location}</p>
        <div className='donate-section'>
          <h3>Donate:</h3>
          <Link to='/donation'><button onClick={() => this.donate()}>Donate</button></Link>
          <p>Raised: ${this.raised()}</p>
          <p>Goal: ${family.cost}</p>
          <div className='progress-bar-cont' >
          <div className='progress-bar' />
          </div>
          <p>{family.expiration}</p>
        </div>
        <div className='story-section'>
          <h3>Story</h3>
          <p>{family.story}</p>
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
