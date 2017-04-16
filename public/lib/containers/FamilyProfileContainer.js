import { connect } from 'react-redux'
import FamilyProfile from '../components/FamilyProfile'
import {saveFamily} from '../actions'

const mapStateToProps = state => {
  return {
    selectedFamily: state.family.selected.info,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveFamily: (familyId) => {
      dispatch(saveFamily(familyId))
    }
  }
}

export default connect(mapStateToProps, null)(FamilyProfile)
