import React, {Component} from 'react'
import {displayCards} from '../helpers/helpers'

export default class FamilyList extends Component {

  render() {
    return (
      <div className='searched-container'>
        {displayCards(this.props.searched)}
      </div>
    )
  }
}
