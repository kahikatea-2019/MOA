import request from 'superagent'

export default function getAssessmentStatus () {
  return request.get('/students/:id')
    .then(res => {
      const statuses = res.body
      return statuses
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
