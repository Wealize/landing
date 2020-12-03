import React from 'react'
import { mount } from 'enzyme'

import RoundedCard from './index'
import {
  CardContainer,
  CardImageContainer,
  CardContentContainer,
  CardContent,
  CardTitle,
  CardDescription,
  CardLinkContainer,
  CardLink,
  TagsContainer,
  Tag
} from './styles'
import { RoundedCardProps } from '../../../interfaces/roundedCardProps'

describe('<RoundedCard />', () => {
  const cardProps: RoundedCardProps = {
    imageUrl: '/img/projects/maldita.jpg',
    title: 'Maldita',
    description:
      'Deployment of a WhatsApp Business Chatbot integrated with the Spanish fact-checking platform focused on combating the spread of disinformation in order to expand their service’s reach',
    link: {
      text: 'hola',
      url: 'url',
      color: '#6666ff'
    },
    tags: ['Media', 'Fact-checking', 'Chatbots'],
    hasPrimary: false
  }
  const wrapperWithAllProps = mount(<RoundedCard {...cardProps} />)

  it('wrapper: should render', () => {
    expect(wrapperWithAllProps).toBeDefined()
  })

  it('wrapperWithAllProps: should show correct components content', () => {
    expect(wrapperWithAllProps.find(CardContainer)).toHaveLength(1)
    expect(wrapperWithAllProps.find(CardImageContainer)).toHaveLength(1)
    expect(wrapperWithAllProps.find(CardContentContainer)).toHaveLength(1)
    expect(wrapperWithAllProps.find(CardContent)).toHaveLength(1)
    expect(wrapperWithAllProps.find(CardTitle)).toHaveLength(1)
    expect(wrapperWithAllProps.find(CardTitle).text()).toEqual(cardProps.title)
    expect(wrapperWithAllProps.find(CardDescription)).toHaveLength(1)
    expect(wrapperWithAllProps.find(CardDescription).text()).toEqual(
      cardProps.description
    )
    expect(wrapperWithAllProps.find(CardLinkContainer)).toHaveLength(1)
    expect(wrapperWithAllProps.find(CardLink)).toHaveLength(1)
    expect(wrapperWithAllProps.find(CardLink).text()).toEqual(
      cardProps.link.text
    )
    expect(wrapperWithAllProps.find(TagsContainer)).toHaveLength(1)
    expect(wrapperWithAllProps.find(Tag)).toHaveLength(3)
    expect(wrapperWithAllProps.find(Tag).at(0).text()).toEqual(
      cardProps.tags[0]
    )
    expect(wrapperWithAllProps.find(Tag).at(1).text()).toEqual(
      cardProps.tags[1]
    )
    expect(wrapperWithAllProps.find(Tag).at(2).text()).toEqual(
      cardProps.tags[2]
    )
  })

  it('wrapperWithoutTagsProps: should show correct components content without tags content', () => {
    const cardProps: RoundedCardProps = {
      imageUrl: '/img/projects/maldita.jpg',
      title: 'Maldita',
      description:
        'Deployment of a WhatsApp Business Chatbot integrated with the Spanish fact-checking platform focused on combating the spread of disinformation in order to expand their service’s reach',
      link: {
        text: 'hola',
        url: 'url',
        color: '#6666ff'
      },
      tags: [],
      hasPrimary: false
    }
    const wrapperWithoutTagsProps = mount(<RoundedCard {...cardProps} />)

    expect(wrapperWithoutTagsProps.find(CardContainer)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(CardImageContainer)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(CardContentContainer)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(CardContent)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(CardTitle)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(CardTitle).text()).toEqual(
      cardProps.title
    )
    expect(wrapperWithoutTagsProps.find(CardDescription)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(CardDescription).text()).toEqual(
      cardProps.description
    )
    expect(wrapperWithoutTagsProps.find(CardLinkContainer)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(CardLink)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(CardLink).text()).toEqual(
      cardProps.link.text
    )
    expect(wrapperWithoutTagsProps.find(TagsContainer)).toHaveLength(0)
    expect(wrapperWithoutTagsProps.find(Tag)).toHaveLength(0)
  })

  it('wrapperWithoutLinkProps: should show correct components content without link content', () => {
    const cardProps: RoundedCardProps = {
      imageUrl: '/img/projects/maldita.jpg',
      title: 'Maldita',
      description:
        'Deployment of a WhatsApp Business Chatbot integrated with the Spanish fact-checking platform focused on combating the spread of disinformation in order to expand their service’s reach',
      link: null,
      tags: null,
      hasPrimary: false
    }
    const wrapperWithoutLinkProps = mount(<RoundedCard {...cardProps} />)

    expect(wrapperWithoutLinkProps.find(CardContainer)).toHaveLength(1)
    expect(wrapperWithoutLinkProps.find(CardImageContainer)).toHaveLength(1)
    expect(wrapperWithoutLinkProps.find(CardContentContainer)).toHaveLength(1)
    expect(wrapperWithoutLinkProps.find(CardContent)).toHaveLength(1)
    expect(wrapperWithoutLinkProps.find(CardTitle)).toHaveLength(1)
    expect(wrapperWithoutLinkProps.find(CardTitle).text()).toEqual(
      cardProps.title
    )
    expect(wrapperWithoutLinkProps.find(CardDescription)).toHaveLength(1)
    expect(wrapperWithoutLinkProps.find(CardDescription).text()).toEqual(
      cardProps.description
    )
    expect(wrapperWithoutLinkProps.find(CardLinkContainer)).toHaveLength(0)
    expect(wrapperWithoutLinkProps.find(CardLink)).toHaveLength(0)
    expect(wrapperWithoutLinkProps.find(TagsContainer)).toHaveLength(0)
    expect(wrapperWithoutLinkProps.find(Tag)).toHaveLength(0)
  })
})
