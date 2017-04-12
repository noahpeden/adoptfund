import { connect } from 'react-redux'
import Featured from '../components/Featured'
import { featuredCampaigns } from '../actions'

// const mapStateToProps = state => {
//   return {
//     family: state.family.featured.featured
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    featuredCampaigns: () => {
      dispatch(featuredCampaigns())
    }
  }
}

export default connect(null, mapDispatchToProps)(Featured)
