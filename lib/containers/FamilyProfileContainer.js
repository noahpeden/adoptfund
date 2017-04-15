import { connect } from 'react-redux'
import FamilyProfile from '../components/FamilyProfile'

const mapStateToProps = state => {
  return {
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     featuredCampaigns: () => {
//       dispatch(featuredCampaigns())
//     }
//   }
// }

export default connect(mapStateToProps, null)(FamilyProfile)
