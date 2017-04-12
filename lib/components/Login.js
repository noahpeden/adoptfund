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
      <div className='login-container'>
        <form onSubmit={(e) => {
          e.preventDefault()
          fetchLogin(email, password)
          this.setState({ email: '', password: '' })
        }}>
          <p className='login-text'>Email:</p>
          <input className='email' placeholder='email' id='email' onChange={this.updateInput} value={email} />
          <input placeholder='password' id='password' onChange={this.updateInput} value={password} />
          <Button className='loginBtn' text='login' />
        </form>
          <Link to='/register'><button className='register'>Don't have an account?</button></Link>
      </div>
    )
  }
}
