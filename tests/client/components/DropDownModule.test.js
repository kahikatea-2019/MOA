import React from 'react'
import { shallow } from 'enzyme'

import DropDownModule from '../../../client/components/DropDownModule'

test('<DropDownModule/>', () => {
  const wrapper = shallow(<DropDownModule />)
  expect(wrapper.find('h3').text()).toBe('Module Exercises')
})
