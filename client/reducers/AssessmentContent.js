import {
  RECIEVE_ASSESSMENT_CONTENT
} from '../actions/assessmentContent'

const content = (assessmentContent = [], action) => {
  switch (action.type) {
    case RECIEVE_ASSESSMENT_CONTENT:
      return action.content
    default:
      return assessmentContent
  }
}

export default content
