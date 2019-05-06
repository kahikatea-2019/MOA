import React from 'react'

import Header from './Header'
import CohortProgress from './CohortProgress'
import DropDownModule from './DropDownModule'
import ProgressModule from './ProgressModule'
import { getAssessments } from '../api/assessmentContent'

export default class Dashboard extends React.Component {
  componentDidMount () {
    getAssessments()
  }
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
