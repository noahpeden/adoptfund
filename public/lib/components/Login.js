import React, { Component } from 'react'
import Button from './Button'
import {Link} from 'react-router'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  render() {
    const { fetchLogin } = this.props
    const { email, password } = this.state
    return (
      <div>
        <h1 className='logo'>Adopt Fund</h1>
        <h2 className='login-title'>Welcome</h2>
        <div className='login-container'>
          <form onSubmit={(e) => {
            e.preventDefault()
            fetchLogin(email, password)
            this.setState({ email: '', password: '' })
          }}>
            <div className='input-cont'>
              <input className='email' placeholder='email' id='email' onChange={this.updateInput} value={email} />
              <input type='password' className='password' placeholder='password' id='password' onChange={this.updateInput} value={password} />
            </div>
            <Button className='log-in-btn' text='login' />
          </form>
          <Link className='register-link' to='/register'><button className='register'>Don't have an account?</button></Link>
        </div>
      </div>
    )
  }
}
