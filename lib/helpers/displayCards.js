import React from 'react'
import FamilyCard from '../components/FamilyCard'

const displayCards = (familyArray) => {
  let families = null
  if (familyArray) {
    families = familyArray.map(family => {
      return <li key={family.id}><FamilyCard key={family.id} info={family} /></li>
    })
  }
  return families
}

export default displayCards
