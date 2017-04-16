import { connect } from 'react-redux'
import { addUser } from '../actions'
import Register from '../components/Register'

const mapStateToProps = (state) => {
  return { user: state.user }
}

const mapDispatchToProps = {
  addUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
