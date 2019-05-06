import request from 'superagent'

export function getAssessments () {
  return request.get('/assessments')
    .then(res => {
      const assessments = res.body
      return assessments
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
