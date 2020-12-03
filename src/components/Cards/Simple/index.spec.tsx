import React from 'react'
import { mount } from 'enzyme'

import SimpleCard from './index'

describe('<SimpleCard />', () => {
  const cardProps = {
    text:
      'We are a digital product studio with the upper hand in blockchain, conversational agents, cognitives services, mobile apps and web development'
  }
  const wrapper = mount(<SimpleCard {...cardProps} />)

  it('wrapper: should render', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render h3 text content correctly', () => {
    expect(wrapper.find('h3').text()).toEqual(cardProps.text)
  })
})
