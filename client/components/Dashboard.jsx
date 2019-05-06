import React from 'react'

import Header from './Header'
import CohortProgress from './CohortProgress'
import DropDownModule from './DropDownModule'
import ProgressModules from './ProgressModules'

export default class Dashboard extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <CohortProgress />
        <DropDownModule />
        <ProgressModules />
      </React.Fragment>
    )
  }
}
