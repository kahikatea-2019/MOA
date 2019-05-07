import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../../client/components/Header'

test('<Header/>', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper.find('h1').text()).toBe('ete')
})

test('<Header/>', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper.find('h2').text()).toBe('surname')
})

test('<Header/>', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper.find('h3').text()).toBe('cohort')
})
