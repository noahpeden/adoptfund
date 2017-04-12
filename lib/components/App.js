import React, { Component } from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import Featured from './Featured'
import Login from './Login'
require('../styles/styles')

export default class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    this.props.featuredCampaigns()
  }

  render() {
    return (
      <div>
        <NavBar location={this.props.location} />
        {console.log('family', this.props.family)}
        {this.props.children}
      </div>
    )
  }
}
