import { combineReducers } from 'redux'
import content from './assessmentContent'
import status from './assessmentStatus'

export default combineReducers({
  content,
  status
})
