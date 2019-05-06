import React from 'react'

import Header from './Header'
import ProgressBar from './ProgressBar'
import DropDownModule from './DropDownModule'

export default class Dashboard extends React.Component {
  render () {
    return (
      <React.Fragment>
        <h1><Header /></h1>
        <ProgressBar />
        <DropDownModule />
      </React.Fragment>
    )
  }
}
