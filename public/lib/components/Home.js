import React, {Component} from 'react'
import HeroSectionContainer from '../containers/HeroSectionContainer'
import Loading from './Loading'
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
        <p className='featured-fam-title'>Featured Families</p>
        <ul className='featured-container'>
          {displayCards(this.props.family) ? displayCards(this.props.family) : <Loading />}
        </ul>
      </section>
    )
  }
}
