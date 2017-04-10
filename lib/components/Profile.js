import React, { Component } from 'react'
import { Link } from 'react-router'

class Profile extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className='profile-container'>
        <h2>FAM BAM TITLE GOES HERE</h2>
        <span>Start Date:</span><span>End Date:</span>
        <div className='photo-container'>
          <section>PIX WILL BE HERE SOMEDAY</section>
        </div>
        <div className='story-container'>
          <h3>Family Story</h3>
          <p>FAM BAM STORY GOES HERE</p>
        </div>
        <div className='side-bar-container'>
          <ul className='side-bar'>
            <li><button className='donate-btn'>Donate</button></li>
            <li><h3>$$$</h3><p>Total Donation Received</p></li>
            <ul className='cost-list'>
              <li>expense</li>
              <li>expense</li>
              <li>expense</li>
            </ul>
          </ul>
        </div>
        <div className='link-container'>
          <p>LINKS LINKS LINKS LINKS LINKS</p>
        </div>
      </div>
    )
  }
}

export default Profile
