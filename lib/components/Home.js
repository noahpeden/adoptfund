import React, {Component} from 'react'
import HeroSectionContainer from '../containers/HeroSectionContainer'
import {displayCards} from '../helpers/helpers'

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className='img-container'>
          <div className='img-layer'>
            <HeroSectionContainer />
            <ul>
              {displayCards(this.props.family)}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
