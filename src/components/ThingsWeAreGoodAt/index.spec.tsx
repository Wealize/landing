import React from 'react'
import { mount } from 'enzyme'

import { Title, FirstCard, SecondCard, ThirdCard } from './styles'
import ThingsWeAreGoodAt from './index'

describe('<ThingsWeAreGoodAt />', () => {
  const wrapper = mount(<ThingsWeAreGoodAt />)

  it('should render', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render content correctly', () => {
    expect(wrapper.find(Title).text().length).toBeGreaterThan(0)
    expect(wrapper.find(FirstCard).length).toEqual(1)
    expect(wrapper.find(SecondCard).length).toEqual(1)
    expect(wrapper.find(ThirdCard).length).toEqual(1)
  })
})
