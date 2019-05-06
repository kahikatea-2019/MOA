import React from 'react'
import { shallow } from 'enzyme'
import CohortProgress from '../../../client/components/CohortProgress'

CohortProgress.prototype.componentDidMount = () => {}
test('test runner is working', () => {
  expect(true).toBeTruthy()
})

test('<CohortProgress />', () => {
  const wrapper = shallow(<CohortProgress />)
  expect(wrapper.find('h3').text()).toBe('Cohort Assessment Progress')
})
