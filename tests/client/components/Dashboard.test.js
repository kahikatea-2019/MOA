import React from 'react'
import {shallow, render} from 'enzyme'
import Dashboard from '../../../client/components/Dashboard'


test('<Dashboard/>' , () => {
 const wrapper = shallow(<Dashboard />)
 expect(wrapper.find('h1').text()).toBe('<Header />')
})