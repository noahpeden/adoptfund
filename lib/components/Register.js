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

  render(){
    const { addUser } = this.props
    const { newUserFirstName, newUserLastName, newUserEmail, newUserPassword, newUserName } = this.state
    return(
      <div className='register-container'>
        <form onSubmit={(e) => {
          e.preventDefault()
          addUser(newUserFirstName, newUserLastName, newUserEmail, newUserPassword)
          this.setState({ newUserFirstName: '', newUserLastName: '', newUserEmail: '', newUserPassword: '' })
        }}>
          <input className='name-input' placeholder='New User First Name' onChange={this.updateInput} value={newUserFirstName} id="newUserFirstName" />
          <input className='name-input' placeholder='New User Last Name' onChange={this.updateInput} value={newUserLastName} id="newUserLastName" />
          <input className='email-input' placeholder='New User Email' onChange={this.updateInput} value={newUserEmail} id="newUserEmail"/>
          <input className='password-input' placeholder='New User Password' onChange={this.updateInput} value={newUserPassword} id="newUserPassword" />
            <Button className='new-user-btn' text='Add New User' />
        </form>
      </div>
    )
  }
}
