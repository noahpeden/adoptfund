import React, {Component} from 'react'
import {Link} from 'react-router'

export default class FamilyProfileEdit extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      name: '',
      location: '',
      cost: '',
      story: '',
      links: '',
      expiration: '',
    }
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

  componentDidMount() {
    this.setState({title: this.props.selectedFamily.title})
    this.setState({name: this.props.selectedFamily.name})
    this.setState({location: this.props.selectedFamily.location})
    this.setState({cost: this.props.selectedFamily.cost})
    this.setState({story: this.props.selectedFamily.story})
    this.setState({links: this.props.selectedFamily.links})
  }

  render() {
    return (
      <div className='fam-profile-container'>
        <input
          className='fam-title'
          placeholder='Title of Family Fund'
          value={this.state.title}
          onChange={(e) => this.setState({title: e.target.value})}
        />
        <input
          className='fam-name'
          placeholder='Family Name'
          value={this.state.name}
          onChange={(e) => this.setState({name: e.target.value})}
        />
        <input
          className='fam-location'
          placeholder='City, State'
          value={this.state.location}
          onChange={(e) => this.setState({location: e.target.value})}
        />
        <div className='fake-photo'><img className='fam-photo' src={this.props.selectedFamily.image}></img></div>
        <div className='donate-section'>
          <Link className='donate-link' to='/donation'><button className='donate-btn' onClick={() => this.donate()}>Donate</button></Link>
          <p>Raised: ${this.raised()}</p>
          <input
            type='number'
            className='fam-cost'
            placeholder='What is the total Cost'
            value={this.state.cost}
            onChange={(e) => this.setState({cost: e.target.value})}
          />
          <div className='progress-bar-cont' >
            <div className='progress-bar' />
          </div>
        </div>
        <div className='story-section'>
          <h3 className='fam-story-title'>{this.state.name}'s Story:</h3>
          <textarea
            className='fam-story'
            minLength='100'
            placeholder='Tell your family story here!'
            value={this.state.story}
            onChange={(e) => this.setState({story: e.target.value})}
          />
        </div>
        <div className='link-section'>
          <input
            className='fam-links'
            placeholder='blogs, social media, etc'
            value={this.state.links}
            onChange={(e) => this.setState({links: e.target.value})}
          />
        </div>
        {this.progress()}
      </div>
    )
  }
}
