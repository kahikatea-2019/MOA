import React from 'react'
import {shallow} from 'enzyme'
import Login from '../../../client/components/Login'

test('test harness is set up correctly', () => {
  expect(true).toBe(true)
})

test('<Login/> has 2 inputs', () => {
  const wrapper = shallow(<Login />)
  expect(wrapper.find('input').length).toBe(2)
})

test('<Login/> has 2 p', () => {
  const wrapper = shallow(<Login />)
  expect(wrapper.find('p').length).toBe(2)
})
