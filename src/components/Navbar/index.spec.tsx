// eslint-disable-next-line
import React from 'react'
import { mount } from 'enzyme'

import NavBar from './index'

describe('<NavBar />', () => {
  const wrapper = mount(<NavBar />)

  it('wrapper: should render', () => {
    expect(wrapper).toBeDefined()
  })
})
