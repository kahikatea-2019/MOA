import React from 'react'
import { shallow } from 'enzyme'

import ProgressModule from '../../../client/components/ProgressModule'

// Prevent <ProgressModule> from calling the API
ProgressModule.prototype.componentDidMount = () => {}

test('Test Runner is working', () => {
  expect(true).toBeTruthy()
})

test('<ProgressModule> has className of progressCircle', () => {
  const wrapper = shallow(<ProgressModule />)
  const progressCircle = wrapper.find('.progressCircle')
  expect(progressCircle.length).toBe(1)
})
