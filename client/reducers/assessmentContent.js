import {
  REQUEST_ASSESSMENT_CONTENT,
  RECEIVE_ASSESSMENT_CONTENT
} from '../actions/assessmentContent'

const content = (assessmentContent = [], action) => {
  switch (action.type) {
    case REQUEST_ASSESSMENT_CONTENT:
      return assessmentContent

    case RECEIVE_ASSESSMENT_CONTENT:
      return action.content

    default:
      return assessmentContent
  }
}

export default content
