import React from 'react'
import { connect } from 'react-redux'
import { getAsmtContent } from '../actions/assessmentContent'
import { getAssStatus } from '../actions/assessmentStatus'

import Header from './Header'
import CohortProgress from './CohortProgress'
import DropDownModule from './DropDownModule'
import ProgressModule from './ProgressModule'

class Dashboard extends React.Component {
  componentDidMount () {
    const id = 1 // to be updated
    this.props.dispatch(getAsmtContent())
    this.props.dispatch(getAssStatus(id))
  }

  render () {
    const { content, status } = this.props

    return (
      <React.Fragment>
        <Header />
        <CohortProgress progress={content}/>
        <DropDownModule />
        <ProgressModule />
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
