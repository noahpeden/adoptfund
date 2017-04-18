import React, {Component} from 'react'
import {Link} from 'react-router'
import moment from 'moment'

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

  formatDate(date) {
    return moment(date).format('MM/DD/YYYY')
  }

  render() {
    const family = this.props.selectedFamily
    return (
      <div className='fam-profile-container' >
        <div className='fam-details'>
          <h1 className='fam-title'>{family.title}</h1>
          <h2 className='fam-name'>{family.name}</h2>
          <p className='fam-location'>{family.location}</p>
          <img className='fam-photo' src={family.image} />
          <div className='story-section'>
            <h3 className='fam-story-title bb'>{family.name}'s Story</h3>
            <p className='fam-story'>{family.story}</p>
          </div>
        </div>
        <div className='donate-section'>
          <div className='donate-inner'>
            <Link className='donate-link' to='/donation'><button className='donate-btn' onClick={() => this.donate()}>Donate</button></Link>
            <div className='total-raised'>
              ${this.raised()}
              <span className='total-subheader'>raised so far</span>
            </div>
            <div className='progress-bar-cont'>
              <div className='progress-bar' />
            </div>
            <p className='fam-cost'> Total cost: <br />${family.cost}</p>
            <p className='fam-expiration' >Please donate by: <br />{this.formatDate(family.expiration)}</p>
            <div className='link-section'>
            {family.links}
            </div>
          </div>
        </div>
        {this.editButton()}
        {this.progress()}
      </div>
    )
  }
}
