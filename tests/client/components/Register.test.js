import React from 'react'
import { shallow } from 'enzyme'

import Register from '../../../client/components/Register'

test('<Register />', () => {
  const wrapper = shallow(<Register />)
  expect(wrapper.find('input').length).toBe(4)
})
