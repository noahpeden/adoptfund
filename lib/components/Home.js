import React, {Component} from 'react'
import HeroSectionContainer from '../containers/HeroSectionContainer'
import {displayCards} from '../helpers/helpers'

export default class Home extends Component {

  // renderFeatured() {
  //   let featured
  //   if (this.props.family) {
  //     featured = this.props.family.map(family => {
  //       return <li><FamilyCard key={family.id} info={family} /></li>
  //     })
  //   }
  //   return featured
  // }

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
