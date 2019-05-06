const request = require('supertest')

jest.mock('../../../server/db/status', () => ({
  getUserStatus: (userId) => Promise.resolve([{
    id: 1,
    student_id: 1,
    assessment_id: 1,
    status_id: 4,
    evidence: 'evidence',
    date_modified: Date.now()
  },
  {
    id: 2,
    student_id: 1,
    assessment_id: 2,
    status_id: 3,
    evidence: 'evidence',
    date_modified: Date.now()},
  {id: 3, student_id: 1, assessment_id: 3, status_id: 2, evidence: 'evidence', date_modified: Date.now()},
  {id: 4, student_id: 1, assessment_id: 4, status_id: 1, evidence: 'evidence', date_modified: Date.now()}])
}))

const server = require('../../../server/server')

test('GET /status/students/:id returns the status of the student', () => {
  const studentId = 1
  return request(server)
    .get(`/status/students/${studentId}`)
    .expect(200)
    .then(res => {
      const {
        id, student_id, assessment_id, status_id, evidence
      } = res.body[0]
      expect(id).toBe(1)
      expect(student_id).toBe(studentId)
      expect(assessment_id).toBe(1)
      expect(status_id).toBe(4)
      expect(evidence).toBe('evidence')
      expect(res.body.length).toBe(4)
    })
})
