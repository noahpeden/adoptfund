import React, { Component } from 'react'

export default class Featured extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    this.props.featuredCampaigns()
  }

  render() {
    return (
      <div id='featured'>
        <ul className='featured-list'>
          <li> {console.log(this.props.family)}</li>
          <li>family profile</li>
          <li>family profile</li>
          <li>family profile</li>
          <li>family profile</li>
          <li>family profile</li>
        </ul>
      </div>
    )
  }
}

// export default Featured
