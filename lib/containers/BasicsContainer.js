import { connect } from 'react-redux'
import Basics from '../components/Basics'
import { createBasics } from '../actions'

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBasics: () => {
      dispatch(createBasics())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basics)
