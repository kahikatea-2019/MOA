import React from 'react'

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

export default ProgressBar
