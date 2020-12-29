import React from 'react'
import { mount } from 'enzyme'

import { CardRounded } from '../../../interfaces/Cards/CardRounded'

import RoundedCard from './index'
import {
  Container,
  BackgroundContainer,
  ContentContainer,
  Content,
  Title,
  Description,
  LinkContainer,
  LinkAnchor,
  TagsContainer,
  Tag
} from './styles'

describe('<RoundedCard />', () => {
  const cardProps: CardRounded = {
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
    expect(wrapperWithAllProps.find(Container)).toHaveLength(1)
    expect(wrapperWithAllProps.find(BackgroundContainer)).toHaveLength(1)
    expect(wrapperWithAllProps.find(ContentContainer)).toHaveLength(1)
    expect(wrapperWithAllProps.find(Content)).toHaveLength(1)
    expect(wrapperWithAllProps.find(Title)).toHaveLength(1)
    expect(wrapperWithAllProps.find(Title).text()).toEqual(cardProps.title)
    expect(wrapperWithAllProps.find(Description)).toHaveLength(1)
    expect(wrapperWithAllProps.find(Description).text()).toEqual(
      cardProps.description
    )
    expect(wrapperWithAllProps.find(LinkContainer)).toHaveLength(1)
    expect(wrapperWithAllProps.find(LinkAnchor)).toHaveLength(1)
    expect(wrapperWithAllProps.find(LinkAnchor).text()).toEqual(
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
    const cardProps: CardRounded = {
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

    expect(wrapperWithoutTagsProps.find(Container)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(BackgroundContainer)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(ContentContainer)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(Content)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(Title)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(Title).text()).toEqual(cardProps.title)
    expect(wrapperWithoutTagsProps.find(Description)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(Description).text()).toEqual(
      cardProps.description
    )
    expect(wrapperWithoutTagsProps.find(LinkContainer)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(LinkAnchor)).toHaveLength(1)
    expect(wrapperWithoutTagsProps.find(LinkAnchor).text()).toEqual(
      cardProps.link.text
    )
    expect(wrapperWithoutTagsProps.find(TagsContainer)).toHaveLength(0)
    expect(wrapperWithoutTagsProps.find(Tag)).toHaveLength(0)
  })

  it('wrapperWithoutLinkProps: should show correct components content without link content', () => {
    const cardProps: CardRounded = {
      imageUrl: '/img/projects/maldita.jpg',
      title: 'Maldita',
      description:
        'Deployment of a WhatsApp Business Chatbot integrated with the Spanish fact-checking platform focused on combating the spread of disinformation in order to expand their service’s reach',
      link: null,
      tags: null,
      hasPrimary: false
    }
    const wrapperWithoutLinkProps = mount(<RoundedCard {...cardProps} />)

    expect(wrapperWithoutLinkProps.find(Container)).toHaveLength(1)
    expect(wrapperWithoutLinkProps.find(BackgroundContainer)).toHaveLength(1)
    expect(wrapperWithoutLinkProps.find(ContentContainer)).toHaveLength(1)
    expect(wrapperWithoutLinkProps.find(Content)).toHaveLength(1)
    expect(wrapperWithoutLinkProps.find(Title)).toHaveLength(1)
    expect(wrapperWithoutLinkProps.find(Title).text()).toEqual(cardProps.title)
    expect(wrapperWithoutLinkProps.find(Description)).toHaveLength(1)
    expect(wrapperWithoutLinkProps.find(Description).text()).toEqual(
      cardProps.description
    )
    expect(wrapperWithoutLinkProps.find(LinkContainer)).toHaveLength(0)
    expect(wrapperWithoutLinkProps.find(LinkAnchor)).toHaveLength(0)
    expect(wrapperWithoutLinkProps.find(TagsContainer)).toHaveLength(0)
    expect(wrapperWithoutLinkProps.find(Tag)).toHaveLength(0)
  })
})
