import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import ProgressBar from './ProgressBar'
import DropDownModule from './DropDownModule'
import ProgressModule from './ProgressModule'

class Dashboard extends React.Component {
  render () {
    
    return (
      <React.Fragment>
        <Header />
        <ProgressBar />
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
