import { connect } from 'react-redux'
import App from '../components/App'
import { featuredCampaigns } from '../actions'

const mapStateToProps = state => {
  return {
    family: state.family.featured
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    featuredCampaigns: () => {
      dispatch(featuredCampaigns())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
