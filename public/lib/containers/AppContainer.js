import { connect } from 'react-redux'
import App from '../components/App'
import { featuredCampaigns } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    featuredCampaigns: () => {
      dispatch(featuredCampaigns())
    }
  }
}

export default connect(null, mapDispatchToProps)(App)
