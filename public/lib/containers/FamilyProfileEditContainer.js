import { connect } from 'react-redux'
import FamilyProfileEdit from '../components/FamilyProfileEdit'

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

export default connect(mapStateToProps, null)(FamilyProfileEdit)
