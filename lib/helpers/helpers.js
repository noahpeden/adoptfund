import React from 'react'
import FamilyCardContainer from '../containers/FamilyCardContainer'
import {Link} from 'react-router'

export const displayCards = (familyArray) => {
  let families = null
  if (familyArray) {
    families = familyArray.map(family => {
      return <Link to='/profile' key={family.id}><li><FamilyCardContainer key={family.id} info={family} /></li></Link>
    })
  }
  return families
}
