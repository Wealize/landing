import React from 'react'
import { mount } from 'enzyme'

import {
  Container,
  Background,
  Button,
  Headline,
  Slogan,
  SubHeadline
} from './styles'
import HomeSpecial from './index'

describe('<HomeSpecial />', () => {
  const wrapper = mount(<HomeSpecial />)

  it('wrapper: should render', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render content correctly', () => {
    expect(wrapper.find(Container)).toHaveLength(1)
    expect(wrapper.find(Background)).toHaveLength(1)
    expect(wrapper.find(Button)).toHaveLength(1)
    expect(wrapper.find(Slogan)).toHaveLength(1)
    expect(wrapper.find(Headline)).toHaveLength(1)
    expect(wrapper.find(SubHeadline)).toHaveLength(1)
    expect(wrapper.find(Headline).text().length).toBeGreaterThan(0)
    expect(wrapper.find(SubHeadline).text().length).toBeGreaterThan(0)
  })
})
