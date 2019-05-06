import React from 'react'
import { connect } from 'react-redux'
import { recieveAssessmentContent } from '../actions/AssessmentContent'

import Header from './Header'
import CohortProgress from './CohortProgress'
import DropDownModule from './DropDownModule'
import ProgressModule from './ProgressModule'

function Dashboard (props) {
  const { dispatch } = props

  dispatch(recieveAssessmentContent)

  return (
    <React.Fragment>
      <Header />
      <CohortProgress progress={props.progress}/>
      <DropDownModule />
      <ProgressModule />
    </React.Fragment>
  )
}

mapStateToProps = {
  newState: state.newState

}

export default connect(mapStateToProps)(Dashboard)
