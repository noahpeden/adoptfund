import { connect } from 'react-redux'
import FamilyProfile from '../components/FamilyProfile'
import {saveFamily, grabDonations} from '../actions'

const mapStateToProps = state => {
  return {
    selectedFamily: state.family.selected.info,
    user: state.user.data,
    donations: state.family.donations.donations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveFamily: (familyId) => {
      dispatch(saveFamily(familyId))
    },
    grabDonations: (familyId) => {
      dispatch(grabDonations(familyId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FamilyProfile)
