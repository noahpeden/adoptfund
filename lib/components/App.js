import React, { Component } from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import Featured from './Featured'
import Login from './Login'
import axios from 'axios'
require('../styles.scss')

export default class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount(){
    axios
    .get('https://adoptfund-api.herokuapp.com/api/v1/family')
    .then((response) => {
      console.log(response);
    })
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
