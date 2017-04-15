import React, {Component} from 'react'

export default class FamilyProfile extends Component {
  render(){
    return(
      <div>
        {console.log(this.props.selectedFamily)}
      </div>
    )
  }
}
