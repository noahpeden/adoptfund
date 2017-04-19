import React, { Component } from 'react'
import NavBarContainer from '../containers/NavBarContainer'
import HeroSection from './HeroSection'
import FamilyCard from './FamilyCard'
import Login from './Login'

require('./../styles/homeStyles')
require('./../styles/profileStyles')
require('./../styles/loginStyles')
require('./../styles/registerStyles')
require('./../styles/familyStyles')
require('./../styles/donateStyles')
require('./../styles/aboutStyles')
require('./../styles/searched')

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
        <NavBarContainer location={this.props.location} />
        {this.props.children}
      </div>
    )
  }
}
