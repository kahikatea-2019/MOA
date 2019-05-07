import React from 'react'
import { connect } from 'react-redux'
import { getAsmtContent } from '../actions/assessmentContent'

import Header from './Header'
import CohortProgress from './CohortProgress'
import DropDownModule from './DropDownModule'
import ProgressModule from './ProgressModule'

class Dashboard extends React.Component {
  componentDidMount () {
    this.props.dispatch(getAsmtContent())
  }

  render () {
    const { dispatch, content } = this.props

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
    content: state.content
  }
}

export default connect(mapStateToProps)(Dashboard)
