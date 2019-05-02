import React from 'react'
import {shallow} from 'enzyme'
import Header from '../../../client/components/Header'

test('<Header/>', () => {
    const expected = " "
    const wrapper = shallow(<Header />)
    expect(wrapper.text()).toBe(expected)
})


// test('<Header/>', () => {
//     const expected = 'surname'
//     const wrapper = shallow(<Header />)
//     expect(wrapper.text()).toBe(expected)
// })

// test('<Header/>', () => {
//     const expected = 'cohort'
//     const wrapper = shallow(<Header />)
//     expect(wrapper.text()).toBe(expected)
// })


