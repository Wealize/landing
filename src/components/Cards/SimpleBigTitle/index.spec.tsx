import React from 'react'
import { mount } from 'enzyme'

import SimpleBigTitleCard from './index'
import { Headline, SubHeadline } from './styles'

describe('<SimpleCard />', () => {
  const cardProps = {
    title: 'title test',
    description: 'description test'
  }
  const wrapper = mount(<SimpleBigTitleCard {...cardProps} />)

  it('should render', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render content correctly', () => {
    expect(wrapper.find(Headline).text()).toEqual(cardProps.title)
    expect(wrapper.find(SubHeadline).text()).toEqual(cardProps.description)
  })
})
