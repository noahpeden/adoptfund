import React, { Component } from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import Featured from './Featured'
import Login from './Login'
require('../styles.scss')

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
          <Login />
        </div>
        {this.props.children}
        {/* <div>
          <HeroSection />
        </div>
        <div>
          <Featured />
        </div> */}
      </div>
    )
  }
}
