import React from 'react'
import { mount } from 'enzyme'

import WAnimation from './index'

describe('<WAnimation />', () => {
  const wrapper = mount(<WAnimation />)

  it('wrapper: should render', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render content correctly', () => {
    expect(wrapper.find('video').length).toEqual(1)
    expect(wrapper.find('source').length).toEqual(1)
  })
})
