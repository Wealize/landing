import React from 'react'
import { mount } from 'enzyme'

import TalentCard from './index'
import { Headline, Subheadline, SocialNetworksContainer } from './styles'
describe('<TalentCard />', () => {
  const cardProps = {
    imageUrl: '/img/talents/placeholder1.jpg',
    name: 'Jhon',
    description: 'test description',
    socialNetworks: [
      {
        name: 'Linkedin',
        url: 'https://linkedin.com'
      }
    ]
  }
  const wrapper = mount(<TalentCard {...cardProps} />)

  it('should render', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render content correctly', () => {
    expect(wrapper.find('img').length).toEqual(1)
    expect(wrapper.find(Headline).text()).toEqual(cardProps.name)
    expect(wrapper.find(Subheadline).text()).toEqual(cardProps.description)
    expect(wrapper.find(SocialNetworksContainer).children().length).toEqual(1)
  })
})
