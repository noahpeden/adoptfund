import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = state => {
  return {
    family: state.family.featured.featured
  }
}

export default connect(mapStateToProps, null)(Home)
