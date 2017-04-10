import React, { Component } from 'react'
import NavBar from './NavBar'
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
        {this.props.children}
      </div>
    )
  }
}
