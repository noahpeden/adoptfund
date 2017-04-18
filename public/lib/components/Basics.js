import React, { Component } from 'react'
import { Link } from 'react-router'

class Basics extends Component {
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

  render() {
    const { title, location, name, expiration, story, links, cost } = this.state
    return (
      <div>
        <h2 className='basics-h2'>Create Your Family Profile</h2>
        <hr />
        <div className='input-container'>
          <p className='profile-text'>Give your Family Fund a title:</p>
          <input
            className='title-input'
            placeholder='Title of Family Fund'
            onChange={(e) => this.setState({title: e.target.value})} />
          <p className='profile-text'>What is your Family's name?</p>
          <input
            className='name-input'
            placeholder='Family Name'
            onChange={(e) => this.setState({name: e.target.value})} />
          <p className='profile-text'>Where do you live?</p>
          <input
            className='location-input'
            placeholder='City, State'
            onChange={(e) => this.setState({location: e.target.value})} />
          <p className='profile-text'>Tell your story:</p>
          <textarea
            className='story-input'
            minLength='100'
            placeholder='Tell your family story here!'
            onChange={(e) => this.setState({story: e.target.value})} />
          <p className='profile-text'>Feel free to add any personal links you might want to share:</p>
          <input
            className='links-input'
            type='url'
            placeholder='blogs, social media, etc'
            onChange={(e) => this.setState({links: e.target.value})} />
          <p className='profile-text'>What is the total amount for your adoption?</p>
          <input
            className='cost-input'
            placeholder='What is the total Cost'
            onChange={(e) => this.setState({cost: e.target.value})} />
        </div>
        <div className='buttons-container'>
          <button onClick={() => this.props.createFamily(title, location, name, expiration, story, links, cost, this.props.userId)}>Create</button>
        </div>
      </div>
    )
  }
}

export default Basics
