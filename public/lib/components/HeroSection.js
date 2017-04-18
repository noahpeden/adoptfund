import React, {Component} from 'react'
import {Link, browserHistory} from 'react-router'
import Button from './Button'

export default class HeroSection extends Component {
  constructor() {
    super()
    this.state = {
      searchText: '',
    }
  }

  checkRoute(){
    if(this.props.user){
      browserHistory.push('/basics')
    }else{
      alert('Please log in or create an account')
    }
  }

  render() {
    return (
      <div className='main-section-container'>
        <h1 className='title'>Adopt Fund</h1>
        <h3 className='hero-h3'>Savin da bebs one fambam at a time</h3>
        <Button className='main-start-family-btn' handleClick={() => this.checkRoute()} text='Start Family Fund'/>
        <input className='search-family-input' placeholder='Search for a Family' onChange={(e) => this.setState({searchText: e.target.value})} />
        <Link to='/list'><Button className='search-btn' text='Search' handleClick={() => this.props.searchCampaigns(this.state.searchText)} /></Link>
      </div>
    )
  }
}
