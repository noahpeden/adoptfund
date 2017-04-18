import React, { Component } from 'react'

export default class FamilyCard extends Component {
  select(info) {
    this.props.storeSelected(info)
  }

  render() {
    let {title, image, name, cost} = this.props.info
      return (
        <div className='card-container'>
          <div id='featured' onClick={() => this.select(this.props.info)}>
            <div className='feat-text-container'>
              <h2 className='feat-title'>{title}</h2>
              <h3 className='feat-name'>{name}</h3>
            </div>
            <div className='feat-img-container'>
              <img src={image} className='feat-img' />
            </div>
            <p className='feat-cost'>{cost}</p>
          </div>
        </div>
      )
  }
}
