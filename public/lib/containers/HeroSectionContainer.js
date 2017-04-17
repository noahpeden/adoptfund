import { connect } from 'react-redux'
import HeroSection from '../components/HeroSection'
import { searchCampaigns } from '../actions'

const mapStateToProps = state => {
  return {
    user: state.user.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchCampaigns: (text) => {
      dispatch(searchCampaigns(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection)
