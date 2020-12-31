import React from 'react'
import { mount } from 'enzyme'

import { Partner } from './styles'
import Partners from './index'

describe('<Partners />', () => {
  const wrapper = mount(<Partners />)

  it('should render', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the logos correctly', () => {
    expect(wrapper.find(Partner).length).toEqual(10)
  })
})
