import { connect } from 'react-redux'
import FamilyCard from '../components/FamilyCard'
import { storeSelected } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    storeSelected: (info) => {
      dispatch(storeSelected(info))
    }
  }
}

export default connect(null, mapDispatchToProps)(FamilyCard)
