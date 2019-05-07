import request from 'superagent'

export default function getAssessmentStatus (id) {
  return request.get(`/status/students/${id}`)
    .then(res => {
      const statuses = res.body
      return statuses
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
