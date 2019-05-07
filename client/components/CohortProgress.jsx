import React from 'react'
import { ProgressBar as BootStrapProgressBar } from 'react-bootstrap'

export default class ProgressBar extends React.Component {
  state = {
    statuses: getInitialData()
  }

  getCompletedPercentage = () => {
    const completed = this.state.statuses.filter(item =>
      item.status_id === 4
    )
    return (completed.length / this.state.statuses.length) * 100
  }

  getAwaitingReviewPercentage = () => {
    const awaitingReview = this.state.statuses.filter(item =>
      item.status_id === 3
    )
    return (awaitingReview.length / this.state.statuses.length) * 100
  }

  getInProgressPercentage = () => {
    const inProgress = this.state.statuses.filter(item =>
      item.status_id === 2
    )
    return (inProgress.length / this.state.statuses.length) * 100
  }

  render () {
    return (
      <>
        <h3>Cohort Assessment Progress</h3>
        <BootStrapProgressBar>
          <BootStrapProgressBar
            striped
            variant="success"
            now={this.getCompletedPercentage()}
            key={4} />
          <BootStrapProgressBar
            variant="warning"
            now={this.getAwaitingReviewPercentage()}
            key={3} />
          <BootStrapProgressBar
            striped
            variant="danger"
            now={this.getInProgressPercentage()}
            key={2} />
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
