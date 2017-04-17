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
          </div>
        </div>
              <ul className='featured-container'>
            {displayCards(this.props.family)}
          </ul>
      </section>
    )
  }
}
