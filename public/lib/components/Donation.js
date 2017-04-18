import React, {Component} from 'react'

export default class Donation extends Component {
  constructor() {
    super()
    this.state = {
      // change first and last to this.props.first/this.props.last so it auto fills
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
      <section className='donate-section'>
        {console.log('user', this.props.user)}
        <input placeholder='First Name' value={this.state.first} onChange={(e) => this.setState({first: e.target.value})}></input>
        <input placeholder='Last Name' value={this.state.last} onChange={(e) => this.setState({last: e.target.value})}></input>
        <input placeholder='Email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}></input>
        <input placeholder='Donation Amount' onChange={(e) => this.setState({donation: e.target.value})}></input>
        <button onClick={() => this.donate()}>Donate</button>
      </section>
    )
  }
}
