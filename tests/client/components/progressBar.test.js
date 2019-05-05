import React from 'react'
import { shallow } from 'enzyme'

import ProgressBar from '../../../client/components/ProgressBar'

// Prevent <ProgressBar> from calling the API
ProgressBar.prototype.componentDidMount = () => {}

test('test runner is working', () => {
  expect(true).toBeTruthy()
})

test('<ProgressBar />', () => {
  const wrapper = shallow(<ProgressBar />)
  expect(wrapper.find('p').text()).toBe('4321')
})
