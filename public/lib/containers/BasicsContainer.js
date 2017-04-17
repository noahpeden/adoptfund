import { connect } from 'react-redux'
import Basics from '../components/Basics'
import { createFamily } from '../actions'

const mapStateToProps = state => {
  return {
    userId: state.user.data.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createFamily: (title, location, name, expiration, story, links, cost, userId) => {
      dispatch(createFamily(title, location, name, expiration, story, links, cost, userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basics)
