import React, {Component} from 'react'
import HeroSection from './HeroSection'
import Featured from './Featured'

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className='img-container'>
          <div className='img-layer'>
            <HeroSection />
            <Featured />
          </div>
        </div>
      </section>
    )
  }
}
