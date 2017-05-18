import { connect } from 'react-redux'
import Featured from '../components/Featured'

const mapStateToProps = state => {
  return {
    featured: state.family.featured.featured
  }
}

export default connect(mapStateToProps, null)(Featured)
