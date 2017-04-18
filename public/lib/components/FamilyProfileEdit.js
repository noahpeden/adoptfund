import React, {Component} from 'react'

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

  componentDidMount() {
    this.setState({title: this.props.family.title})
    this.setState({name: this.props.family.name})
    this.setState({location: this.props.family.location})
  }

  render(){
    return(
      <div className='fam-profile-container'>
        <input
          className='fam-title'
          placeholder='Title of Family Fund'
          onChange={(e) => this.setState({title: e.target.value})} />
        />
        <input className='fam-name' />
        <input className='fam-location' />
        <div className='fake-photo'><img className='fam-photo' src={family.image}></img></div>
        <div className='donate-section'>
          <Link className='donate-link' to='/donation'><button className='donate-btn' onClick={() => this.donate()}>Donate</button></Link>
          <p>Raised: ${this.raised()}</p>
          <input type='number' className='fam-cost' />
          <div className='progress-bar-cont' >
            <div className='progress-bar' />
          </div>
        </div>
        <div className='story-section'>
          <h3 className='fam-story-title'>{family.name}'s Story:</h3>
          <textarea className='fam-story' />
        </div>
        <div className='link-section'>
          <input className='fam-links'/>
        </div>
        {this.progress()}
      </div>
    )
  }
}
