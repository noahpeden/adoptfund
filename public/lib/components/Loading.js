import React, {Component} from 'react'

export default class Loading extends Component{
  onComponentDidMount() {
    console.log('bla')
  }

  render() {
    return(
      <div className='loading-cont'>
        <div className='dot' id='dot1'></div>
        <div className='dot' id='dot2'></div>
        <div className='dot' id='dot3'></div>
        <div className='dot' id='dot4'></div>
      </div>
    )
  }
}
