import React from 'react'
import { ProgressBar as BootStrapProgressBar } from 'react-bootstrap'

export default class ProgressBar extends React.Component {
  state = {
    statuses: getInitialData()
  }

  complete = this.state.statuses.filter(item =>
    item.status_id === 4
  )

  awaitingReview = this.state.statuses.filter(item =>
    item.status_id === 3
  )

  inProgress = this.state.statuses.filter(item =>
    item.status_id === 2
  )

  render () {
    return (
      <>
        <h3>Cohort Assessment Progress</h3>
        <BootStrapProgressBar>
          <BootStrapProgressBar striped variant="success" now={(this.complete.length / this.state.statuses.length) * 100} key={4} />
          <BootStrapProgressBar variant="warning" now={(this.awaitingReview.length / this.state.statuses.length) * 100} key={3} />
          <BootStrapProgressBar striped variant="danger" now={(this.inProgress.length / this.state.statuses.length) * 100} key={2} />
        </BootStrapProgressBar>
      </>
    )
  }
}

function getInitialData () {
  return [
    { id: 1, student_id: 1, assessment_id: 1, status_id: 4, evidence: 'evidence', date_modified: Date.now() },
    { id: 2, student_id: 1, assessment_id: 2, status_id: 3, evidence: 'evidence', date_modified: Date.now() },
    { id: 3, student_id: 1, assessment_id: 3, status_id: 4, evidence: 'evidence', date_modified: Date.now() },
    { id: 4, student_id: 1, assessment_id: 4, status_id: 1, evidence: 'evidence', date_modified: Date.now() }
  ]
}
