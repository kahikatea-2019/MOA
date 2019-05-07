import React from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'
import CohortProgress from './CohortProgress'
import DropDownModule from './DropDownModule'
import ProgressModule from './ProgressModule'

export default class Dashboard extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <button ><Link to ='/'>Logout</Link></button>
        <CohortProgress />
        <DropDownModule />
        <ProgressModule />
      </React.Fragment>
    )
  }
}
