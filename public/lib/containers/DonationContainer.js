import { connect } from 'react-redux'
import Donation from '../components/Donation'
import { sendDonation } from '../actions'

const mapStateToProps = state => {
  return {
    familyId: state.family.donationFamily.familyId,
    user: state.user.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendDonation: (first, last, email, donation, familyId) => {
      dispatch(sendDonation(first, last, email, donation, familyId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Donation)
