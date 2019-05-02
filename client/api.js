import request from 'superagent'

export function getAssessments () {
  return request.get('/v1/assessments')
    .then(response => {
      const assessments = response.body
      return assessments
    })
    .catch(() => {
      throw Error('Requires valid /v1/assessments api route')
    })
}
