import React, {Component} from 'react'
import {Link} from 'react-router'
import Button from './Button'

export default class HeroSection extends Component {
  constructor() {
    super()
    this.state = {
      searchText: '',
    }
  }

  render() {
    return (
      <div className='main-section-container'>
        <h1 className='title'>Adopt Fund</h1>
        <h3 className='hero-h3'>Savin da bebs one fambam at a time</h3>
        <Link to='/basics'><button className='main-start-family-btn'>Start Family Fund</button></Link>
        <input className='search-family-input' placeholder='Search for a Family' onChange={(e) => this.setState({searchText: e.target.value})} />
        <Link to='/list'><Button className='search-btn' text='Search' handleClick={() => this.props.searchCampaigns(this.state.searchText)} /></Link>
      </div>
    )
  }
}
