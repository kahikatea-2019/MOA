import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import Header from './Header'
import CohortProgress from './CohortProgress'
import DropDownModule from './DropDownModule'
import ProgressModules from './ProgressModuleList'

export default class Dashboard extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <Link to ='/' style={{ color: 'white' }}><Button variant="info" >Logout</Button></Link>
        <CohortProgress />
        <DropDownModule />
        <ProgressModules />
      </React.Fragment>
    )
  }
}
