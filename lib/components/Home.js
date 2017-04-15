import React, {Component} from 'react'
import HeroSectionContainer from '../containers/HeroSectionContainer'
import FamilyCard from './FamilyCard'
import displayCards from '../helpers/displayCards'

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
