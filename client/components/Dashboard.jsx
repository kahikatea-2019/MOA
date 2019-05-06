import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import CohortProgress from './CohortProgress'
import DropDownModule from './DropDownModule'
import ProgressModule from './ProgressModule'

class Dashboard extends React.Component {
  render () {
    
    return (
      <React.Fragment>
        <Header />
        <CohortProgress />
        <DropDownModule />
        <ProgressModule />
      </React.Fragment>
    )
  }
}

mapStateToProps = {
  newState: state.newState

}

export default connect(mapStateToProps)(Dashboard)
