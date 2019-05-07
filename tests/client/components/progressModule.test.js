import React from 'react'
import { shallow } from 'enzyme'

import ProgressModule from '../../../client/components/ProgressModule'

// Prevent <ProgressModule> from calling the API
ProgressModule.prototype.componentDidMount = () => {}

test('Test Runner is working', () => {
  expect(true).toBeTruthy()
})

test('Testing if Initailising data', () => {
  const wrapper = shallow(<ProgressModule />)
  expect(wrapper.find('h3').text()).toBe('Module progress: 0 %')
})

test('Testing if Data is running and adding correctly', () => {
  // Act --> Arrange --> Assert
  const initailState = {
    moduleComplete: false,
    moduleProgress: 0
  }

  const wrapper = shallow(<ProgressModule />)

  wrapper.setState(initailState)
  wrapper.instance().calculateProgress()

  // Assert
  expect(wrapper.find('h3').text()).toBe('Module progress: 42 %')
})
