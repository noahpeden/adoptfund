import React, { Component } from 'react'
import NavBar from './NavBar'
require('../styles.scss')

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
        <div>
          <NavBar />
        </div>
        {console.log("family", this.props.family)}
        {this.props.children}
      </div>
    )
  }
}
