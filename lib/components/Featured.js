import React, { Component } from 'react'

const Featured = ({ info }) => {
  return (
    <div id='featured' key={info.id}>
      <h2>{info.title}</h2>
    </div>
  )
}

export default Featured
