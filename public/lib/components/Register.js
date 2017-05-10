import React, {Component} from 'react'
import Button from './Button'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newUserFirstName: '',
      newUserLastName: '',
      newUserEmail: '',
      newUserPassword: '',
    }
    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  render() {
    const { addUser } = this.props
    const { newUserFirstName, newUserLastName, newUserEmail, newUserPassword, newUserName } = this.state
    return (
      <div>
        <h2 className='register-title'>Sign up for AdoptFund:</h2>
        <div className='register-container'>
          <form onSubmit={(e) => {
            e.preventDefault()
            addUser(newUserFirstName, newUserLastName, newUserEmail, newUserPassword)
            this.setState({ newUserFirstName: '', newUserLastName: '', newUserEmail: '', newUserPassword: '' })
          }}>
            <div className='input-cont'>
              <input placeholder='First Name' onChange={this.updateInput} value={newUserFirstName} id='newUserFirstName' />
              <input placeholder='Last Name' onChange={this.updateInput} value={newUserLastName} id='newUserLastName' />
              <input placeholder='Email' onChange={this.updateInput} value={newUserEmail} id='newUserEmail' />
              <input placeholder='Password' onChange={this.updateInput} value={newUserPassword} id='newUserPassword' />
            </div>
            <Button className='new-user-btn' text='Sign up!' />
          </form>
        </div>
      </div>
    )
  }
}
