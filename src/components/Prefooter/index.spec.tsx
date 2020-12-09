import React from 'react'
import { mount } from 'enzyme'

import { Partner } from './styles'
import Prefooter from './index'

describe('<Prefooter />', () => {
  const wrapper = mount(<Prefooter />)

  it('should render', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render the logos correctly', () => {
    expect(wrapper.find(Partner).length).toEqual(10)
  })
})
