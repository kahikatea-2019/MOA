import React from 'react'
import { statement } from '@babel/template'

class ProgressBar extends React.Component {
  constructor () {
    super()
    this.state =
      [
        {
          'id': 1,
          'module_id': 1,
          'title': '1. Use Git and terminal commands to manage a code base',
          'description': 'desc',
          'link': 'link',
          'week_day': 'weekday',
          'student_id': 1,
          'assessment_id': 1,
          'status_id': 2,
          'evidence': 'evidence',
          'date_modified': '2019-02-24 22:55:20'
        },
        {
          'id': 1,
          'module_id': 1,
          'title': '1. Use Git and terminal commands to manage a code base',
          'description': 'desc',
          'link': 'link',
          'week_day': 'weekday',
          'student_id': 1,
          'assessment_id': 2,
          'status_id': 3,
          'evidence': 'evidence',
          'date_modified': '2019-02-24 22:55:20'
        },
        {
          'id': 1,
          'module_id': 1,
          'title': '1. Use Git and terminal commands to manage a code base',
          'description': 'desc',
          'link': 'link',
          'week_day': 'weekday',
          'student_id': 1,
          'assessment_id': 3,
          'status_id': 4,
          'evidence': 'evidence',
          'date_modified': '2019-02-24 22:55:20'
        },
        {
          'id': 1,
          'module_id': 1,
          'title': '1. Use Git and terminal commands to manage a code base',
          'description': 'desc',
          'link': 'link',
          'week_day': 'weekday',
          'student_id': 1,
          'assessment_id': 4,
          'status_id': 1,
          'evidence': 'evidence',
          'date_modified': '2019-02-24 22:55:20'
        }
      ]
  }

  statusArr = this.state.map(assessment => {
    return assessment.status_id
  })

  render () {
    return (
    <>
    <div className= 'progressBar'>
      <p>hi hi hi</p>
    </div>
    </>

    )
  }
}

export default ProgressBar
