import React from 'react'
import FamilyCardContainer from '../containers/FamilyCardContainer'

export const displayCards = (familyArray) => {
  let families = null
  if (familyArray) {
    families = familyArray.map(family => {
      return <li key={family.id}><FamilyCardContainer key={family.id} info={family} /></li>
    })
  }
  return families
}
