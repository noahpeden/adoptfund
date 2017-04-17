import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import { signOut } from '../actions'

const mapStateToProps = (state) => {
  return { user: state.user.data }
}

const mapDispatchToProps = {
  signOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
