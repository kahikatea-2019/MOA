import React from 'react'

import Header from './Header'
import ProgressBar from './ProgressBar'
import DropDownModule from './DropDownModule'
import ProgressModules from './ProgressModules'

export default class Dashboard extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <ProgressBar />
        <DropDownModule />
        <ProgressModules />
      </React.Fragment>
    )
  }
}
