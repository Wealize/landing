import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ReactPlaceholder from 'react-placeholder'

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
        <ReactPlaceholder
          type='rect'
          showLoadingAnimation={true}
          firstLaunchOnly={true}
          ready={false}
          style={{ marginRight: '0', position: 'absolute' }}
          // eslint-disable-next-line react/no-children-prop
          children={null}
        />
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          quality={40}
          aria-label={`${title} image`}
          title={title} />
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
