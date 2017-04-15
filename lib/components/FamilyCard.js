import React, { Component } from 'react'

export default class FamilyCard extends Component {
  select(info){
    this.props.storeSelected(info)
  }

  render(){
    return (
      <div id='featured' onClick={() => this.select(this.props.info)}>
        <h2>{this.props.info.title}</h2>
      </div>
    )
  }
}
