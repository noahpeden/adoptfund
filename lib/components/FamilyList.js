import React, {Component} from 'react'
import FamilyCard from './FamilyCard'
import displayCards from '../helpers/displayCards'

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
