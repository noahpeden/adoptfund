import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'

export default class NavBar extends Component {
  constructor() {
    super()
  }

  render() {
    // button to featured should stay on same page might need a tag
    let navBackground = 'nav-container '
    if (this.props.location.pathname !== '/') navBackground += 'nav-background'

    return (
      <nav className={navBackground} >
        <Link to='/basics'><button className='start-family-btn'>Start a Family Fund</button></Link>
        <Link to='/about'><button className='about-btn'>How it Works</button></Link>
        <button className='featured-btn' href='#featured'>Featured Families</button>
        <Link to='/'><button className='home-btn'>Home</button></Link>
        {
          (this.props.user != null && Object.keys(this.props.user).length > 1)
            ? <button
                onClick={() => {
                  this.props.signOut()
                  browserHistory.push('/')
                }}
                className='sign-in-btn'
              >
                Sign Out
              </button>
            : <Link to='/login'><button className='sign-in-btn'>Sign In</button></Link>
        }
      </nav>
    )
  }
}
