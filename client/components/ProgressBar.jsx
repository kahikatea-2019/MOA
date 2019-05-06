import React from 'react'
import { connect } from 'react-redux'

class ProgressBar extends React.Component {
  render (props) {
    return (
      <>
        <p>{props.statuses.map(assessment => {
          return assessment.status_id
        }) }</p>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    statuses: state.studentAssessments
  }
}

export default connect(mapStateToProps)(ProgressBar)
