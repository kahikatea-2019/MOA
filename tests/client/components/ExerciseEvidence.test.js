import React from 'react'
import { shallow } from 'enzyme'

import ExerciseEvidence from '../../../client/components/ExerciseEvidence'

test('<ExerciseEvidence />', () => {
  const wrapper = shallow(<ExerciseEvidence />)
  expect(wrapper.find('input').length).toBe(1)
})
