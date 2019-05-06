import { combineReducers } from 'redux'
import content from '../reducers/assessmentContent'
import status from '../reducers/assessmentStatus'

export default combineReducers({
  content,
  status
})
