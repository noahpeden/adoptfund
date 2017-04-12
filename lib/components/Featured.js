import React from 'react'

const Featured = ({info}) => {
  console.log(info)
  return (
    <div id='featured'>
      <h2>{info.title}</h2>
    </div>
  )
}

export default Featured
