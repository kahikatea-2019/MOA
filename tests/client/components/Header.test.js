import React from 'react'
import {shallow} from 'enzyme'
import Header from '../../../client/components/Header'

test('<Header/>', () => {
    const expected = 'NameSurnameHarakeke2019'
    const wrapper = shallow(<Header />)
    expect(wrapper.text()).toBe(expected)
})

