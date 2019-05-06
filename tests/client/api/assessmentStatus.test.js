import nock from 'nock'

import * as api from '../../../client/api/assessmentStatus'

test('assessmentStatus returns assessment status', () => {
  const scope = nock('http://localhost:3000')
    .get('/assessments')
    .reply(200)

  api.getAssessmentStatus((err) => {
    expect(err).toBeFalsy()
    scope.done()
  })
})
