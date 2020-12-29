import React from 'react'
import { mount } from 'enzyme'

import SimpleBigTitle from '../Cards/SimpleBigTitle'

import { Title, ContainerCards } from './styles'
import WeDeliver from './index'

describe('<WeDeliver />', () => {
  const wrapper = mount(<WeDeliver />)

  it('should render', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render content correctly', () => {
    expect(wrapper.find(Title).text().length).toBeGreaterThan(0)
    expect(wrapper.find(ContainerCards).length).toEqual(1)
    expect(wrapper.find(SimpleBigTitle).length).toEqual(4)
  })
})
