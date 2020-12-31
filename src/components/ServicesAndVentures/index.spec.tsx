import React from 'react'
import { mount } from 'enzyme'


import { Title, SectionTitle, SectionContainer, CardContainer } from './styles'
import ServicesAndVentures from './index'

describe('<ServicesAndVentures />', () => {
  const wrapper = mount(<ServicesAndVentures />)

  it('should render', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render content correctly', () => {
    expect(wrapper.find(Title).text().length).toBeGreaterThan(0)
    expect(wrapper.find(SectionTitle).first().text().length).toBeGreaterThan(0)
    expect(wrapper.find(SectionContainer).length).toEqual(2)
    expect(wrapper.find(CardContainer).length).toBeGreaterThan(0)
  })
})
