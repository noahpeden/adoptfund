import React, {Component} from 'react'

export default class Donation extends Component {
  constructor() {
    super()
    this.state = {
      //change first and last to this.props.first/this.props.last so it auto fills
      first: '',
      last: '',
      email: '',
      donation: '',
    }
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
      <section>
        {console.log(this.props.familyId)}
        <input placeholder='First Name' onChange={(e) => this.setState({first: e.target.value})}></input>
        <input placeholder='Last Name' onChange={(e) => this.setState({last: e.target.value})}></input>
        <input placeholder='Email' onChange={(e) => this.setState({email: e.target.value})}></input>
        <input placeholder='Donation Amount' onChange={(e) => this.setState({donation: e.target.value})}></input>
        <button onClick={() => this.donate()}>Donate</button>
      </section>
    )
  }
}
