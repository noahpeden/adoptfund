import React, {Component} from 'react'
import FamilyCard from '../containers/FamilyCardContainer'
import {displayCards} from '../helpers/helpers'

export default class FamilyList extends Component {
  // renderFamilies(){
  //   let searched
  //   if (this.props.searched) {
  //     searched = this.props.searched.map(family => {
  //       return <li><FamilyCard key={family.id} info={family} /></li>
  //     })
  //   }
  //   return featured
  // }

  render(){
    return(
      <div>
        {displayCards(this.props.searched)}
      </div>
    )
  }
}
