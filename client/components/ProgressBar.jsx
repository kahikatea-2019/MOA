import React from 'react'
// import { statement } from '@babel/template'

class ProgressBar extends React.Component {
 state = {
   statuses: [
     { id: 1, student_id: 1, assessment_id: 1, status_id: 4, evidence: 'evidence', date_modified: Date.now() },
     { id: 2, student_id: 1, assessment_id: 2, status_id: 3, evidence: 'evidence', date_modified: Date.now() },
     { id: 3, student_id: 1, assessment_id: 3, status_id: 2, evidence: 'evidence', date_modified: Date.now() },
     { id: 4, student_id: 1, assessment_id: 4, status_id: 1, evidence: 'evidence', date_modified: Date.now() }
   ]
 }

    statusArr = this.state.statuses.map(assessment => {
      return assessment.status_id
    })

    render () {
      return (
      <>
      <p>{this.statusArr}</p>
      </>
      )
    }
}

export default ProgressBar
