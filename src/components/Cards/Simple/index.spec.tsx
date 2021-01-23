import React from 'react'
import { mount } from 'enzyme'

import SimpleCard from './index'

describe('<SimpleCard />', () => {
  const cardProps = {
    children:
      'We are a digital product studio with the upper hand in blockchain, conversational agents, cognitive services, mobile apps and web development'
  }
  const wrapper = mount(<SimpleCard {...cardProps} />)

  it('wrapper: should render', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render h3 text content correctly', () => {
    expect(wrapper.find('h3').text()).toEqual(cardProps.children)
  })
})
