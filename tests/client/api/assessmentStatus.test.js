import nock from 'nock'
import getAssessmentStatus from '../../../client/api/assessmentStatus'

test('assessmentStatus returns assessment status', () => {
  const scope = nock('http://localhost:3000')
    .get('/students/:id')
    .reply(200)

  getAssessmentStatus((err) => {
    expect(err).toBeFalsy()
    scope.done()
  })
})
