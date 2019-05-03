// const request = require('supertest')

// const server = require('../../../client/components/Register')

// test('test harness is setup correctly', () => {
//   expect(true).toBe(true)
// })

// test('/ register return a status of 200', () => {
//   request(server)
//     .get('/register')
//     .expect(200)
//     .end((err, res) => {
//       expect(err).toBeNull()
//     })
// })

import React from 'react'
import { shallow } from 'enzyme'

import Register from '../../../client/components/Register'

test('<Register />', () => {
  const wrapper = shallow(<Register />)
  expect(wrapper.find('input').length).toBe(4)
})
