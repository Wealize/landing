import React from 'react'
import { shallow } from 'enzyme'

import SimpleBigTitleCard from './index'
import { Headline, SubHeadline } from './styles'

describe('<SimpleBigTitleCard />', () => {
  const cardProps = {
    title: 'title test',
    description: 'description test'
  }
  const wrapper = shallow(<SimpleBigTitleCard {...cardProps} />)

  it('should render', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render content correctly', () => {
    expect(wrapper.find(Headline).text()).toEqual(cardProps.title)
    expect(wrapper.find(SubHeadline).text()).toEqual(cardProps.description)
  })
})
