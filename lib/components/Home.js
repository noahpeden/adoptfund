import React, {Component} from 'react'
import HeroSectionContainer from '../containers/HeroSectionContainer'
import Featured from './Featured'

export default class Home extends Component {

  renderFeatured() {
    let featured
    console.log(this.props.family)
    if (this.props.family) {
      featured = this.props.family.map(family => {
        return <li><Featured key={family.id} info={family} /></li>
      })
    }
    return featured
  }

  render() {
    return (
      <section>
        <div className='img-container'>
          <div className='img-layer'>
            <HeroSectionContainer />
            <ul>
              {this.renderFeatured()}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
