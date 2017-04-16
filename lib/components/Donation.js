import React, {Component} from 'react'

export default class FamilyProfile extends Component {
  constructor() {
    super()
    this.state = {
      donation: '',
    }
  }

  render(){
    return(
      <section>
        <input placeholder='donation amount' onChange={(e) => this.setState({donation: e.target.value})}></input>
        <button onClick={() => this.donate()}>Donate</button>
      </section>
    )
  }
}
