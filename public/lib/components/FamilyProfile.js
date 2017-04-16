import React, {Component} from 'react'

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
        {console.log(this.props.selectedFamily)}
        <h1>{family.title}</h1>
        <h2>{family.name}</h2>
        <p>{family.location}</p>
        <div className='donate-section'>
          <h3>Donate:</h3>
          <button onClick={() => this.donate()}>Donate</button>
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
