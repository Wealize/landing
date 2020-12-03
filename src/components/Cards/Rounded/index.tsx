import React from 'react'
import Link from 'next/link'

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
import OpenUrlIcon from '../../icons/OpenUrlIcon'
import { RoundedCardProps } from '../../../interfaces/roundedCardProps'

const RoundedCard = (props: RoundedCardProps) => {
  const { imageUrl, title, description, link, tags, hasPrimary } = props

  const hasLink = () => !!link

  const hasTags = () => {
    if (!tags) return false
    return tags.length > 0
  }

  return (
    <CardContainer hasPrimary={hasPrimary}>
      <CardImageContainer
        imageUrl={imageUrl}
        hasPrimary={hasPrimary}
      ></CardImageContainer>
      <CardContentContainer hasPrimary={hasPrimary}>
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          {hasLink() ? (
            <CardLinkContainer color={link.color}>
              <Link href={link.url} passHref>
                <CardLink color={link.color}>{link.text}</CardLink>
              </Link>
              <OpenUrlIcon color={link.color}></OpenUrlIcon>
            </CardLinkContainer>
          ) : null}
        </CardContent>

        {hasTags() ? (
          <TagsContainer>
            {tags.map((tag: string, index: number) => (
              <Tag hasPrimary={hasPrimary} key={index}>
                {tag}
              </Tag>
            ))}
          </TagsContainer>
        ) : null}
      </CardContentContainer>
    </CardContainer>
  )
}

export default React.memo(RoundedCard)
