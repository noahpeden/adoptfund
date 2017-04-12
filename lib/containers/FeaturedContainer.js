import { connect } from 'react-redux'
import Featured from '../components/Featured'
import { featuredCampaigns } from '../actions'

const mapStateToProps = state => {
  return {
    family: state.family.featured.featured
  }
}

const mapDispatchToProps = {
  featuredCampaigns,
}

export default connect(mapStateToProps, mapDispatchToProps)(Featured)
