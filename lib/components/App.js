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

  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        {this.props.children}
      </div>
    )
  }
}
