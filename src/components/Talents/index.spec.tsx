import React from 'react'
import { shallow } from 'enzyme'

import Talents from './index'
import { Headline, CardsContainer } from './styles'


describe('<Talents />', () => {
  const wrapper = shallow(<Talents />)

  it('should render', () => {
    expect(wrapper).toBeDefined()
  })

  it('render content correctly', () => {
    expect(wrapper.find(Headline).text().length).toBeGreaterThan(0)
    expect(wrapper.find(CardsContainer).length).toEqual(1)
    expect(wrapper.find(CardsContainer).children().length).toBeGreaterThan(0)
  })
})
