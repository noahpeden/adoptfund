import React, {Component} from 'react'

export default class Donation extends Component {
  constructor() {
    super()
    this.state = {
      first: '',
      last: '',
      email: '',
      donation: '',
    }
  }

  componentDidMount() {
    this.setState({first: this.props.user.firstName})
    this.setState({last: this.props.user.lastName})
    this.setState({email: this.props.user.email})
  }

  donate() {
    this.props.sendDonation(
      this.state.first,
      this.state.last,
      this.state.email,
      this.state.donation,
      this.props.familyId
    )
  }

  render() {
    return (
      <section >
        <p className='donate-title'>Thank you for your donation!</p>
        <div className='donate-container'>
          {console.log('user', this.props.user)}
          <input className='donate-name' placeholder='First Name' value={this.state.first} onChange={(e) => this.setState({first: e.target.value})} />
          <input className='donate-name' placeholder='Last Name' value={this.state.last} onChange={(e) => this.setState({last: e.target.value})} />
          <input className='donate-email' placeholder='Email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
          <input className='donate-amount' placeholder='Donation Amount' onChange={(e) => this.setState({donation: e.target.value})} />
          <button className='donate-money-btn' onClick={() => this.donate()}>Donate</button>
          </div>
        </section>
    )
  }
}
