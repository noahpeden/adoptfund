import { connect } from 'react-redux'
import Donation from '../components/Donation'
// import { createFamily } from '../actions'

const mapStateToProps = state => {
  return {
    familyId: state.family.donationFamily.familyId
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createFamily: (title, location, name, expiration, story, links, cost) => {
//       dispatch(createFamily(title, location, name, expiration, story, links, cost))
//     }
//   }
// }

export default connect(mapStateToProps, null)(Donation)
