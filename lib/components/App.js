import React, { Component } from 'react'
import Header from './Header'
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
        <Header />
      </div>
    )
  }
}
