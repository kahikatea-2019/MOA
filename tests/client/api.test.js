import nock from 'nock'

import * as api from '../../client/api'

test('getAssessments returns assessment data', () => {
  const scope = nock('http://localhost:3000')
    .get('/assessments')
    .reply(200)

  api.getAssessments((err) => {
    expect(err).toBeFalsy()
    scope.done()
  })
})
