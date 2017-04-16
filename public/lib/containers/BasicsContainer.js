import { connect } from 'react-redux'
import Basics from '../components/Basics'
import { createFamily } from '../actions'

// const mapStateToProps = state => {
//   return {
//     family: state.family.featured.featured
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    createFamily: (title, location, name, expiration, story, links, cost) => {
      dispatch(createFamily(title, location, name, expiration, story, links, cost))
    }
  }
}

export default connect(null, mapDispatchToProps)(Basics)
