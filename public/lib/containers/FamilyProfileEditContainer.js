import { connect } from 'react-redux'
import FamilyProfileEdit from '../components/FamilyProfileEdit'

const mapStateToProps = state => {
  return {
    selectedFamily: state.family.selected.info,
    user: state.user.data,
    donations: state.donations.donations
  }
}

export default connect(mapStateToProps, null)(FamilyProfileEdit)
