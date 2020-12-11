import React from 'react'
import Link from 'next/link'

import {
  Container,
  ImageContainer,
  ContentContainer,
  Content,
  Title,
  Description,
  LinkContainer,
  LinkAnchor,
  TagsContainer,
  Tag
} from './styles'
import OpenUrlIcon from '../../icons/OpenUrlIcon'
import { CardRounded } from '../../../interfaces/CardRounded'

const RoundedCard = (props: CardRounded) => {
  const { imageUrl, title, description, link, tags, hasPrimary } = props

  const hasTags = () => tags && tags.length > 0

  return (
    <Container hasPrimary={hasPrimary}>
      <ImageContainer imageUrl={imageUrl} />
      <ContentContainer hasPrimary={hasPrimary}>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          {link ? (
            <LinkContainer color={link.color}>
              <Link href={link.url} passHref>
                <LinkAnchor color={link.color} target="_blank" rel="noreferrer">
                  {link.text}
                </LinkAnchor>
              </Link>
              <OpenUrlIcon color={link.color}></OpenUrlIcon>
            </LinkContainer>
          ) : null}
        </Content>

        {hasTags() ? (
          <TagsContainer>
            {tags.map((tag: string, index: number) => (
              <Tag hasPrimary={hasPrimary} key={index}>
                {tag}
              </Tag>
            ))}
          </TagsContainer>
        ) : null}
      </ContentContainer>
    </Container>
  )
}

export default React.memo(RoundedCard)
