import { RECIEVE_ASSESSMENT_CONTENT } from '../actions/AssessmentContent'

const content = (AssessmentContent = [], action) => {
  switch (action.type) {
    case RECIEVE_ASSESSMENT_CONTENT:
      return action.content
    default:
      return AssessmentContent
  }
}

export default content
