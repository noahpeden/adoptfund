import React, { Component } from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import Featured from './Featured'
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
        </div>
        <div>
          <HeroSection />
        </div>
        <div>
          <Featured />
        </div>
      </div>
    )
  }
}
