import React from 'react'
import Link from 'next/link'
import { BackgroundImage } from 'react-image-and-background-image-fade'

import OpenUrlIcon from '../../icons/OpenUrlIcon'
import { CardRounded } from '../../../interfaces/Cards/CardRounded'

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

const RoundedCard = (props: CardRounded) => {
  const { imageUrl, title, description, link, tags, hasPrimary } = props

  const hasTags = () => tags && tags.length > 0

  return (
    <Container className="rounded-card" hasPrimary={hasPrimary}>
      <BackgroundContainer>
        <BackgroundImage
          width="100%"
          height="100%"
          src={imageUrl}
          lazyLoad={true}
          style={{
            minWidth: '300px',
            minHeight: '290px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center'
          }}
        ></BackgroundImage>
      </BackgroundContainer>
      <ContentContainer hasPrimary={hasPrimary}>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          {link
            ? (
            <LinkContainer color={link.color}>
              <Link href={link.url} passHref>
                <LinkAnchor
                  color={link.color}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.text}
                >
                  {link.text}
                </LinkAnchor>
              </Link>
              <OpenUrlIcon color={link.color}></OpenUrlIcon>
            </LinkContainer>
              )
            : null}
        </Content>

        {hasTags()
          ? (
          <TagsContainer>
            {tags.map((tag: string, index: number) => (
              <Tag hasPrimary={hasPrimary} key={index}>
                {tag}
              </Tag>
            ))}
          </TagsContainer>
            )
          : null}
      </ContentContainer>
    </Container>
  )
}

export default React.memo(RoundedCard)
