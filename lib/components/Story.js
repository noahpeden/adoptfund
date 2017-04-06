import React, { Component } from 'react'
import { Link } from 'react-router'


class Story extends Component {
  constructor() {
    super()
    this.state = {
      story: '',
      urls: '',

    }
  }

  render() {
    return (
      <div>
        <h2>Step Two: Story</h2>
        <div className='input-container'>
          <p>Tell us a little about your family story:</p>
          <textarea minLength='100' placeholder='Tell your family story here!'></textarea>
          <p>Feel free to add any personal links you might want to share:</p>
          <input type='url' placeholder='ex: blogs, social media sites, etc'/>
          <p>Upload some photos of your family:</p>
          <input placeholder='this is not the right code 4 this'/>
        </div>
        <div className='buttons-container'>
          <button>back</button>
          <Link to= '/finances'><button>Save & Continue</button></Link>
        </div>
      </div>
    )
  }
}

export default Story
