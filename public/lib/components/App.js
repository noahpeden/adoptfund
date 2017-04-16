import React, { Component } from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import FamilyCard from './FamilyCard'
import Login from './Login'

require('./../styles/homeStyles')
require('./../styles/profileStyles')
require('./../styles/loginStyles')

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
        {this.props.children}
      </div>
    )
  }
}
