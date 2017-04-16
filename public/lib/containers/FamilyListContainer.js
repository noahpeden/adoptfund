import { connect } from 'react-redux'
import FamilyList from '../components/FamilyList'

const mapStateToProps = state => {
  return {
    searched: state.family.searched.searchedFamily
  }
}

export default connect(mapStateToProps, null)(FamilyList)
