import React from 'react'
import Link from 'next/link'

import OpenUrlIcon from '../../icons/OpenUrlIcon'
import { CardRounded } from '../../../interfaces/Cards/CardRounded'
import ImageWithPlaceholder from '../../ImageWithPlaceholder'

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
        <ImageWithPlaceholder
          imageUrl={imageUrl}
          imageAriaLabel={`${title} image`}
          imageTitle={`${title} image`}
          imageQuality={40}
          placeholderType='rect'
          style={{ height: 'initial' }}
        />
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
                  title={`Link for ${title.toLowerCase()} project`}
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
