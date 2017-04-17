import React, { Component } from 'react'

export default class FamilyCard extends Component {
  select(info) {
    this.props.storeSelected(info)
  }

  runDebugger(){
    debugger;
  }

  render() {
    let {title, image, name, story, expiration} = this.props.info
      return (
      <div id='featured' onClick={() => this.select(this.props.info)}>
        <h2>{title}</h2>
        <h3>{name}</h3>
        <h3>{story}</h3>
        <h3>{expiration}</h3>
        <button onClick={() => this.runDebugger()}>Debugger</button>
      </div>
    )
  }
}
