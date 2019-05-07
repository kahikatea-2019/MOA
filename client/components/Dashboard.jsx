import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import { getAssessments } from '../api/assessmentContent'
import { getAssessmentStatus } from '../api/assessmentStatus'

import Header from './Header'
import CohortProgress from './CohortProgress'
import DropDownModule from './DropDownModule'
import ProgressModuleList from './ProgressModuleList'

class Dashboard extends React.Component {
  componentDidMount () {
    const id = 1 // to be updated
    this.props.dispatch(getAssessments())
    this.props.dispatch(getAssessmentStatus(id))
  }

  render () {
    const { content, status } = this.props

    return (
      <React.Fragment>
        <Header />
        <CohortProgress progress={content}/>
        <Link to ='/' style={{ color: 'white' }}><Button variant="info" >Logout</Button></Link>
        <DropDownModule assessments={content} studentAssessments={status}/>
        <ProgressModuleList assessments={content} studentAssessments={status}/>
      </React.Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    content: state.content,
    status: state.status
  }
}

export default connect(mapStateToProps)(Dashboard)
