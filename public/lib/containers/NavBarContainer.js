import { connect } from 'react-redux'
import NavBar from '../components/NavBar'

const mapStateToProps = (state) => {
  return { user: state.user.data }
}

export default connect(mapStateToProps, null)(NavBar)
