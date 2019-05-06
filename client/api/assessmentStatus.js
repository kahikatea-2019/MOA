import request from 'superagent'

export function getAssessmentStatus () {
  return request.get('/students/:id')
    .then(res => {
      const statuses = res.body
      return statuses
    })
    .catch(err => {
      console.error(err)
    })
}
