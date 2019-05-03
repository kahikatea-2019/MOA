import request from 'superagent'

const assessmentStatusUrl = 'http://localhost:3000/api/v1/students/:id'

export function getAssessmentStatus (callback) {
  request
    .get(assessmentStatusUrl)
    .end((err, res) => {
      callback(err, res.body)
    })
}
