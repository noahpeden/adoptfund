import { connect } from 'react-redux'
import FamilyProfileEdit from '../components/FamilyProfileEdit'
import { sendFamilyChanges } from '../actions'

const mapStateToProps = state => {
  return {
    selectedFamily: state.family.selected.info,
    user: state.user.data,
    donations: state.donations.donations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendFamilyChanges: (title, name, location, cost, story, links, familyId) => {
      dispatch(sendFamilyChanges(title, name, location, cost, story, links, familyId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FamilyProfileEdit)
