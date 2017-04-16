import { connect } from 'react-redux'
import HeroSection from '../components/HeroSection'
import { searchCampaigns } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    searchCampaigns: (text) => {
      dispatch(searchCampaigns(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(HeroSection)
