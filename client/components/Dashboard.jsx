import React from 'react'

import Header from './Header'
import CohortProgress from './CohortProgress'
import DropDownModule from './DropDownModule'
import ProgressModule from './ProgressModule'

export default class Dashboard extends React.Component {
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
